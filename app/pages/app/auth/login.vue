<script setup lang="ts">
const layout = ref(0);

// ----- auth state -----
const user = await getCurrentUser();
if (user) await navigateTo("/app");
</script>

<template>
    <div
        class="w-screen h-screen flex justify-center items-center bg-gray-400 bg-[url(@/assets/images/login-bg.jpg)]"
    >
        <div class="flex flex-col justify-center">
            <div
                class="rounded-2xl px-10 py-8 flex flex-col shadow-2xl bg-white"
            >
                <AuthLogin v-if="layout === 0" @verifyEmail="" @loggedIn="" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
