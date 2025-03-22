<script setup lang="ts">
const items = [
    {
        text: "is lost",
        color: "bg-blue-600 text-white",
    },
    {
        text: "got no battery",
        color: "bg-rose-600 text-white",
    },
    {
        text: "got stolen",
        color: "bg-green-600 text-white",
    },
    {
        text: "gets locked out",
        color: "bg-purple-600 text-white",
    },
];
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
    <div class="w-full h-full flex flex-col justify-between items-center">
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
                variant="outline"
                color="secondary"
            >
                Github
            </UButton>

            <!--app-->
            <UButton class="ml-8" icon="material-symbols:app-badging">
                Go to App
            </UButton>
        </div>

        <!--text-->
        <div
            class="mb-32 pt-16 pl-32 flex flex-col text-5xl font-bold text-black"
        >
            <div class="">A simple way to access your contacts</div>
            <div class="flex flex-row">
                <div class="mt-6 mr-2">when your phone</div>
                <div v-for="(item, key) in items" class="mt-4">
                    <div
                        v-if="key === visible"
                        :class="`font-bold tracking-wider ${item.color} rounded-xl`"
                    >
                        <div :class="`py-2 px-8 motion-preset-bounce`">
                            {{ item.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div></div>
    </div>
</template>

<style scoped></style>
