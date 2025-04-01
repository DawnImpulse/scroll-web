<script setup lang="ts">
import AppBar from "~/components/navigation/AppBar.vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const loading = ref(false);
const empty = ref(true);
</script>

<template>
    <div class="flex w-screen justify-center">
        <div class="flex flex-col xl:w-8/12">
            <!--appbar-->
            <AppBar />

            <UButton
                icon="material-symbols:add-circle"
                class="mt-16 w-fit self-end px-4 py-2"
                label="Contact"
            />

            <!--loading/empty-->
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
    </div>
</template>

<style scoped></style>
