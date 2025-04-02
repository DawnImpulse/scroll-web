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
            <LayoutAppEmptyScreen
                v-if="loading || empty"
                class="self-center"
                :loading="loading"
                :empty="empty"
            />
        </div>
    </div>
</template>

<style scoped></style>
