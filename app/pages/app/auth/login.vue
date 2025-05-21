<script setup lang="ts">
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "firebase/auth";

const toast = useToast();
const auth = useFirebaseAuth();
const key = useCookie("key");

// ----- variables -----
const layout = ref(0);
const loadingLogin = ref(false);

// ----- auth state -----
let user = await getCurrentUser();
let verified = user?.emailVerified || false;
if (user) {
    if (verified) await navigateTo("/app");
    else {
        layout.value = 1;
        checkVerification();
    }
}

/**
 * send user verification email
 * @param user
 */
async function sendVerificationEmail(user: any) {
    try {
        // send verification email
        await sendEmailVerification(user);
        toast.add({
            title: "Thank you for joining us",
            description:
                "Kindly verify your email once before continuing; check your inbox :)",
        });
    } catch (error) {
        toast.add({
            title: "Something went wrong",
            description: "Error sending verification email: " + error,
        });
    }
}

/**
 * register user & verify
 * @param email
 * @param pin
 */
async function registerAndVerify(email: string, pin: string[]) {
    try {
        loadingLogin.value = true; // set loading button on login component

        // create user
        const hashed = await sha256(pin.join(""));
        const userCredential = await createUserWithEmailAndPassword(
            auth!!,
            email,
            hashed,
        );
        key.value = hashed; // set cookie value
        const user = userCredential.user;

        // set variables on success
        loadingLogin.value = false;
        layout.value = 1;

        // send verification
        await sendVerificationEmail(user);
        await checkVerification();
    } catch (error) {
        toast.add({
            title: "Something went wrong !!",
            description:
                "Registration or verification failed. Please try again",
            color: "error",
        });
        loadingLogin.value = false;
    }
}

/**
 * login user
 * @param email
 * @param pin
 */
async function login(email: string, pin: string[]) {
    try {
        loadingLogin.value = true; // set loading button on login component

        // login user
        const hashed = await sha256(pin.join(""));
        await signInWithEmailAndPassword(auth!!, email, hashed);
        key.value = hashed; // set cookie value

        toast.add({
            title: "Welcome Back :)",
        });

        // set variables on success
        loadingLogin.value = false;
        navigateTo("/app");
    } catch (error: any) {
        toast.add({
            title: "Login Failed !! Please try again",
            description: error.toString(),
            color: "error",
        });
        loadingLogin.value = false;
    }
}

/**
 * check if user is verified
 */
async function checkVerification() {
    async function check() {
        // check if logged in
        if (auth?.currentUser) {
            try {
                // reload user
                await auth.currentUser.reload();
                // check verification
                if (auth.currentUser.emailVerified) {
                    // clear interval & navigate
                    clearInterval(interval);
                    await navigateTo("/app");
                }
            } catch (error) {
                console.error("Error reloading user details:", error);
            }
        } else console.warn("No user is currently signed in.");
    }

    function hello() {
        location.reload();
    }

    const interval = setInterval(hello, 4000);
}
</script>

<template>
    <div
        class="w-screen h-screen flex justify-center items-center bg-gray-400 bg-[url(@/assets/images/login-bg.jpg)]"
    >
        <div class="flex flex-col justify-center">
            <div
                class="rounded-2xl px-10 py-8 flex flex-col shadow-2xl bg-white"
            >
                <AuthLogin
                    v-if="layout === 0"
                    :loading="loadingLogin"
                    @register="registerAndVerify"
                    @login="login"
                />

                <AuthVerify @resend="sendVerificationEmail(user)" v-else />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
