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
const user = await getCurrentUser();
const verified = user?.verified || false;
if (user) {
    if (verified) await navigateTo("/app");
    else {
        layout.value = 1;
        sendVerificationEmail(user);
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
        //  listen to auth changes
        await waitForVerification();
    } catch (error) {
        toast.add({
            title: "Something went wrong",
            description: "Error sending verification email: " + error,
        });
    }
}

/**
 * wait for user verification
 */
async function waitForVerification() {
    const unsubscribe = onAuthStateChanged(
        auth!!,
        (currentUser) => {
            // user is verified
            if (currentUser && currentUser.emailVerified) {
                console.log("Email verified!");
                unsubscribe(); // unsubscribe to listener
                toast.add({
                    title: "Thank you verification",
                    description: "You can now enjoy the app uninterrupted :)",
                });
                navigateTo("/app"); // navigate to app
            }
            // in-case user logs out (not happening)
            else if (!currentUser) {
                unsubscribe(); // unsubscribe to listener
                toast.add({
                    title: "User logged out",
                });
                navigateTo("/app/auth/login"); // navigate to login page
            }
        },
        (err) => {
            toast.add({
                title: "Something went wrong",
                description: err.toString(),
            });
        },
    ); // Reject on error
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
        throw error;
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

                <AuthVerify v-else />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
