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

onMounted(() => {
    // hide element on scroll
    window.addEventListener("scroll", () => {
        const element = document.getElementById("bouncer");
        if (window.scrollY > 100) {
            // Adjust scroll threshold as needed
            element?.classList.add("opacity-0");
            element?.classList.add("pointer-events-none");
        } else {
            element?.classList.remove("opacity-0");
            element?.classList.remove("pointer-events-none");
        }
    });
});
</script>

<template>
    <div class="w-full h-screen flex flex-col justify-between items-center">
        <!--toolbar-->
        <div class="w-full px-4 mt-4 flex flex-row items-center">
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

        <div class="flex-grow" />

        <!--text-->
        <div
            class="mb-32 pt-16 pl-8 lg:pl-32 flex flex-col text-3xl lg:text-5xl font-bold text-black"
        >
            <div class="text-center lg:text-left">
                A simple way to access your contacts
            </div>
            <div class="flex flex-col lg:flex-row items-center">
                <div class="mt-4 lg:mt-6 mr-2 text-center lg:text-left">
                    when your phone
                </div>
                <div v-for="(item, key) in items" class="mt-4 w-fit">
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

        <div class="flex-grow" />
        <div id="bouncer" class="pb-16">
            <Icon
                name="ic:baseline-keyboard-double-arrow-down"
                class="animate-bounce"
                size="30"
            />
        </div>
    </div>
</template>

<style scoped></style>
