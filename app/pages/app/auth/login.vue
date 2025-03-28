<script setup lang="ts">
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from "firebase/auth";

const layout = ref(0);
const toast = useToast();

// ----- auth state -----
const auth = useFirebaseAuth();
const user = await getCurrentUser();
if (user) await navigateTo("/app");

/**
 * send user verification email
 * @param user
 */
async function sendVerificationEmail(user: any) {
    try {
        await sendEmailVerification(user);
        console.log("Verification email sent!");
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw error; // Propagate the error for handling
    }
}

/**
 * wait for user verification
 */
async function waitForVerification() {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth!!,
            (currentUser) => {
                if (currentUser && currentUser.emailVerified) {
                    console.log("Email verified!");
                    unsubscribe(); // Stop listening for changes
                    resolve(currentUser); // Resolve with the verified user
                } else if (!currentUser) {
                    unsubscribe(); // Stop listening if user logs out
                    reject(new Error("User logged out before verification"));
                }
            },
            reject,
        ); // Reject on error
    });
}

/**
 * register user & verify
 * @param email
 * @param pin
 */
async function registerAndVerify(email: string, pin: string[]) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth!!,
            email,
            await sha256(pin.join("")),
        );
        const user = userCredential.user;

        await sendVerificationEmail(user);
        alert("Verification email sent. Please check your inbox.");

        const verifiedUser = await waitForVerification();
        alert("Email verified. Proceeding...");

        // Proceed with your application logic after verification
        return verifiedUser; // Return the verified user if needed
    } catch (error) {
        toast.add({
            title: "Something went wrong !!",
            description:
                "Registration or verification failed. Please try again",
        });
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
                    @register="registerAndVerify"
                    @login=""
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
