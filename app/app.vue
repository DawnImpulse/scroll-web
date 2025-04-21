<template>
    <UApp :toaster="toaster">
        <NuxtPage />
    </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Scroll",
    ogTitle: "Scroll",
    description:
        "A simple way to access your contacts when your phone gets lost/stolen/out-of-battery",
    ogDescription:
        "A simple way to access your contacts when your phone gets lost/stolen/out-of-battery",
    ogImage: "https://scroll.codevry.com/meta.png",
    twitterCard: "summary_large_image",
});

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
