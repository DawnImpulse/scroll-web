<script setup lang="ts">
import UIContact from "~/components/ui/UIContact.vue";

defineProps(["items"]);
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div v-for="item in items" :key="item.id">
                <UIContact :item="item" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
