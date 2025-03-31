<script setup lang="ts">
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from "firebase/auth";

const toast = useToast();
const auth = useFirebaseAuth();

// ----- variables -----
const layout = ref(0);
const loadingLogin = ref(false);

// ----- auth state -----
let user = await getCurrentUser();
let verified = user?.emailVerified || false;
if (user) {
    if (verified) await navigateTo("/app");
    else layout.value = 1;
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
        const userCredential = await createUserWithEmailAndPassword(
            auth!!,
            email,
            await sha256(pin.join("")),
        );
        const user = userCredential.user;

        // set variables on success
        loadingLogin.value = false;
        layout.value = 1;

        // send verification
        await sendVerificationEmail(user);
    } catch (error) {
        toast.add({
            title: "Something went wrong !!",
            description:
                "Registration or verification failed. Please try again",
        });
        loadingLogin.value = false;
    }
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
                    @login=""
                />

                <AuthVerify @resend="sendVerificationEmail(user)" v-else />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
