<script setup lang="ts">
defineProps(["name", "number", "id"]);
</script>

<template>
    <div class="flex">
        <!--name-->
        <div>{{ name }}</div>

        <!--number & actions-->
        <div class="flex-col space-between">
            <!--number-->
            <div>{{ number }}</div>

            <!--actions-->
            <div class="flex">
                <UIcon name="material-symbols:delete" />
                <UIcon name="material-symbols:edit" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
