<script setup lang="ts">
defineProps(["item"]);
</script>

<template>
    <div class="flex flex-col px-6 py-4 rounded-xl shadow-2xl bg-white">
        <!--name-->
        <div>{{ item.name }}</div>

        <!--number & actions-->
        <div class="flex flex-row space-between">
            <!--number-->
            <div class="mt-1 grow text-black text-lg font-bold tracking-wider">
                {{ item.phone }}
            </div>

            <!--actions-->
            <div class="flex items-center">
                <UButton
                    color="error"
                    variant="ghost"
                    icon="material-symbols:delete"
                    size="md"
                />
                <UButton
                    color="neutral"
                    variant="ghost"
                    class="ml-4"
                    icon="material-symbols:edit"
                    size="md"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
