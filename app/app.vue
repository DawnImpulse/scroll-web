<template>
    <UApp>
        <NuxtPage />
    </UApp>
</template>

<script setup lang="ts">
import PocketBase from "pocketbase";

const route = useRoute();
const config = useRuntimeConfig();
const pb = new PocketBase(config.public.backend);

if (!route.path.includes("/app/auth") && route.path.includes("/app")) {
    if (!pb.authStore.isValid) navigateTo("/app/auth/login");
}
</script>
