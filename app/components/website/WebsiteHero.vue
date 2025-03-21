<script setup lang="ts">
const items = ["is lost", "got no battery", "got stolen", "gets locked out"];
const visible = ref(0);

// Timeout function
const timeout = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

// Run some loop in async function
(async () => {
    // Loop for 4 times
    for (let i = 0; i <= 50000; i++) {
        // Do some stuff
        visible.value = (visible.value + 1) % 4;
        // Wait for timeout 1000 ms
        await timeout(2000);
    }
})();
</script>

<template>
    <div class="w-full h-full flex flex-col justify-between">
        <!--toolbar-->
        <div class="w-full mt-4 flex flex-row items-center">
            <!--title-->
            <div class="flex flex-row items-center">
                <img src="@/assets/icons/logo.svg" class="size-12" alt="" />
            </div>
            <div class="flex-grow" />

            <!--github-->
            <UButton
                class="ml-8"
                icon="mdi:github"
                variant="soft"
                color="neutral"
            >
                Github
            </UButton>

            <!--app-->
            <UButton class="ml-8" icon="material-symbols:app-badging">
                Go to App
            </UButton>
        </div>

        <!--text-->
        <div class="pt-16 pl-32 flex flex-col text-4xl">
            <div>A simple way to access your contacts</div>
            <div class="flex flex-row">
                <div>when your phone</div>
                <div v-for="(item, key) in items" class="ml-1">
                    <div
                        v-if="key === visible"
                        class="font-bold tracking-wider motion-preset-slide-up-lg text-green-700"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>

        <div></div>
    </div>
</template>

<style scoped></style>
