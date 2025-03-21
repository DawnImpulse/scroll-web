<script setup lang="ts"></script>

<template>
    <div class="w-full h-full flex flex-col">
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
        <div class="grow" />
        <div>A simple way to access your contacts</div>
        <div>when you are away</div>
        <div class="grow" />
    </div>
</template>

<style scoped></style>
