<script setup lang="ts">
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

defineProps(["loading", "empty"]);
</script>

<template>
    <div class="flex-col">
        <div class="mt-12 self-center" v-if="loading">
            Loading... Please Wait
        </div>
        <div class="mt-12 self-center" v-else-if="empty">
            Add a new contact by clicking button on right side
        </div>
        <DotLottieVue
            v-if="loading || empty"
            class="lg:size-96 self-center"
            autoplay
            loop
            src="/lottie/loading.lottie"
        />
    </div>
</template>

<style scoped></style>
