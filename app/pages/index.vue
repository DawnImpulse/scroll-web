<script setup lang="ts">
import WebsiteHero from "~/components/website/WebsiteHero.vue";
import WebsiteInfo from "~/components/website/WebsiteInfo.vue";
</script>

<template>
    <div>
        <BgAnimated2 class="absolute w-screen blur-xl" />

        <div class="absolute w-screen flex justify-center">
            <div class="flex flex-col lg:w-10/12 2xl:w-8/12">
                <WebsiteHero class="h-screen" />
                <WebsiteInfo />
                <WebsiteFooter class="mt-32 mb-8" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
