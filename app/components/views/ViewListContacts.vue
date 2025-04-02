<script setup lang="ts">
import UIContact from "~/components/ui/UIContact.vue";

defineProps(["items"]);
</script>

<template>
    <div>
        <div class="grid grid-cols-3" v-for="item in items" :key="item.id">
            <UIContact :item="item" />
        </div>
    </div>
</template>

<style scoped></style>
