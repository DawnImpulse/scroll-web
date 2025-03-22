<script setup lang="ts">
import WebsiteHero from "~/components/website/WebsiteHero.vue";
import WebsiteInfo from "~/components/website/WebsiteInfo.vue";
</script>

<template>
    <div>
        <BgAnimatedCircles class="absolute w-screen h-screen" />

        <div class="absolute w-screen flex justify-center">
            <div class="flex flex-col w-full lg:w-10/12 2xl:w-8/12">
                <WebsiteHero class="h-screen" />
                <WebsiteInfo />
                <WebsiteFooter />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
