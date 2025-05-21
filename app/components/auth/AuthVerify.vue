<script setup lang="ts">
import { signOut } from "firebase/auth";

const auth = useFirebaseAuth();
const emits = defineEmits(["resend"]);
const disabled = ref(false);
const toast = useToast();

function resend() {
    emits("resend");
    disabled.value = true;
}

function logout() {
    function logout() {
        signOut(auth!!)
            .then(() => {
                toast.add({
                    title: "Successfully logged out",
                });
                navigateTo("/app/auth/login");
            })
            .catch((error: any) => {
                toast.add({
                    title: "Something went wrong",
                    description: error.toString(),
                    color: "error",
                });
            });
    }
}
</script>

<template>
    <!--title-->
    <div class="text-xl tracking-wider text-black">Verification</div>

    <!--description-->
    <div class="text-xs tracking-wider text-gray-400">
        check your inbox for <br />
        verification email & confirm it
    </div>

    <UIcon
        name="mdi:loading"
        class="mt-8 animate-spin self-center text-(--ui-primary)"
        size="48"
    />
    <div class="text-xs self-center text-center">
        Reloading page every 4 seconds<br />
        to check verification
    </div>

    <UButton
        @click="resend"
        class="mt-4 self-center"
        color="secondary"
        :disabled="disabled"
    >
        Send Email Again
    </UButton>

    <UButton
        @click="logout"
        class="mt-4 self-center"
        color="error"
        variant="outline"
    >
        Sign Out
    </UButton>

    <!--logo-->
    <div class="mt-8 flex items-center self-center">
        <img src="@/assets/icons/logo.svg" class="size-6" alt="" />
        <div class="ml-2 text-sm text-neutral-500">
            <b class="text-(--ui-primary)">Scroll</b> by Codevry
        </div>
    </div>
</template>

<style scoped></style>
