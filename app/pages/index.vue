<script setup lang="ts">
import WebsiteHero from "~/components/website/WebsiteHero.vue";
</script>

<template>
    <div>
        <BgAnimatedCircles class="absolute w-screen h-screen" />

        <div class="absolute h-screen w-screen flex justify-center">
            <div class="w-full lg:w-10/12 2xl:w-8/12">
                <WebsiteHero />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
