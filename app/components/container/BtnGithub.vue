<script setup lang="ts">
function github() {
    open("https://github.com/DawnImpulse/scroll-web");
}
</script>

<template>
    <UButton
        class="mr-8"
        icon="mdi:github"
        variant="outline"
        color="neutral"
        @click="github"
    >
        Github
    </UButton>
</template>

<style scoped></style>
