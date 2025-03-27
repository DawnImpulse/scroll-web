<template>
    <UApp :toaster="toaster">
        <NuxtPage />
    </UApp>
</template>

<script setup lang="ts">
const route = useRoute();
const toaster = {
    position: "top-center",
};

// wait for fire auth to be ready
const user = await getCurrentUser();
if (!route.path.includes("/app/auth") && route.path.includes("/app")) {
    if (!user) navigateTo("/app/auth/login");
}
</script>
