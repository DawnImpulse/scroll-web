<script setup lang="ts">
const emits = defineEmits(["resend"]);
</script>

<template>
    <!--title-->
    <div class="text-xl tracking-wider text-black">Verification</div>

    <!--description-->
    <div class="text-xs tracking-wider text-gray-400">
        check your inbox for <br />
        verification email & confirm it
    </div>

    <UIcon
        name="mdi:loading"
        class="mt-8 animate-spin self-center text-(--ui-primary)"
        size="48"
    />
    <div class="text-xs self-center">Reload page once verified</div>

    <UButton
        @click="emits('resend')"
        class="mt-4 self-center"
        color="secondary"
    >
        Send Email Again
    </UButton>

    <!--logo-->
    <div class="mt-8 flex items-center self-center">
        <img src="@/assets/icons/logo.svg" class="size-6" alt="" />
        <div class="ml-2 text-sm text-neutral-500">
            <b class="text-(--ui-primary)">Scroll</b> by Codevry
        </div>
    </div>
</template>

<style scoped></style>
