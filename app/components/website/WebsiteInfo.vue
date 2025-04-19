<script setup lang="ts">
const data = [
    {
        title: "Web App",
        description:
            "You can simply use it on your favourite browser without installing :)",
        icon: "ph:hand-peace-duotone",
        color: {
            icon: "text-yellow-500",
            border: "border-yellow-500",
            title: "text-yellow-600",
        },
    },
    {
        title: "Free :)",
        description: "This app is completely free with no paid features",
        icon: "ph:hand-peace-duotone",
        color: {
            icon: "text-green-500",
            border: "border-green-500",
            title: "text-green-600",
        },
    },
    {
        title: "Multi Device",
        description:
            "Use this app on mobile, tablet or desktop. It will look amazing",
        icon: "material-symbols:devices-outline",
        color: {
            icon: "text-blue-500",
            border: "border-blue-500",
            title: "text-blue-600",
        },
    },
    {
        title: "Open Source",
        description: "The complete code of the product is available on github",
        icon: "mdi-github",
        color: {
            icon: "text-black-500",
            border: "border-black-500",
            title: "text-black-600",
        },
    },
    {
        title: "Encrypted",
        description: "Complete end-to-end encryption of all your data",
        icon: "material-symbols:lock-open-circle",
        color: {
            icon: "text-red-500",
            border: "border-red-500",
            title: "text-red-600",
        },
    },
    {
        title: "Super Easy",
        description: "Add only the contacts you need in case of need/emergency",
        icon: "material-symbols:check-box",
        color: {
            icon: "text-stone-500",
            border: "border-stone-500",
            title: "text-stone-600",
        },
    },
    {
        title: "Anywhere",
        description:
            "You can open it on any device, yours or not, just remember to logout once done😉",
        icon: "material-symbols:globe",
        color: {
            icon: "text-violet-500",
            border: "border-violet-500",
            title: "text-violet-600",
        },
    },
];
</script>

<template>
    <div>
        <div class="flex flex-col items-center">
            <!--title-->
            <div
                class="text-4xl md:text-6xl lg:text-8xl underline underline-offset-8 decoration-dotted text-black"
            >
                Features
            </div>

            <!--description-->
            <div
                class="mt-8 text-center text-lg text-slate-800 w-11/12 md:w-10/12 lg:w-8/12"
            >
                The core principle of this product is to let you add your
                emergency/known contacts so that in case of an emergency when
                your phone is unavailable, you can easily use anyone's device,
                open this website, login & get access to your saved contacts.
                This is the most simplest way to do the work, which usually
                requires you to login to google/apple account on another device
                which is mostly not secure in stranger's device
            </div>

            <!--grid-->
            <div
                class="mt-16 md:mt-24 lg:mt-36 px-4 md:px-16 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                <div
                    :class="`bg-white h-48 px-4 py-4 rounded-2xl border-4 ${item.color.border}`"
                    v-for="item in data"
                >
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <Icon
                                :name="item.icon"
                                size="36"
                                :class="`${item.color.icon}`"
                            />
                            <div
                                :class="`pl-4 text-2xl font-bold ${item.color.title}`"
                            >
                                {{ item.title }}
                            </div>
                        </div>
                        <div class="pt-4">{{ item.description }}</div>
                    </div>
                </div>
            </div>

            <!--app-->
            <UButton
                class="mt-24 px-16 py-4 rounded-xl shadow-2xl shadow-cyan-600"
                color="primary"
                @click="navigateTo('/app', { open: { target: '_blank' } })"
            >
                Go to App
            </UButton>
        </div>
    </div>
</template>

<style scoped></style>
