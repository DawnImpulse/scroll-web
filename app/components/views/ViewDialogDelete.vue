<script setup lang="ts">
import { getDatabase, ref as dbRef, remove } from "firebase/database";

// ----- props -----
const user = await getCurrentUser();
const toast = useToast();
const props = defineProps(["id"]);

// ----- variables ------

const loading = ref(false);
const database = getDatabase();
const open = ref(false);

/**
 * delete item
 */
async function deleteItem() {
    loading.value = true;
    try {
        await remove(dbRef(database, `users/${user.uid}/contacts/${props.id}`));
        toast.add({
            title: `Successfully Deleted`,
        });
        open.value = false;
    } catch (err: any) {
        toast.add({
            title: "Something went wrong",
            description: err.toString(),
            color: "error",
        });
    }
    loading.value = false;
}
</script>

<template>
    <div>
        <UModal v-model:open="open">
            <slot />

            <template #content>
                <div class="flex flex-col px-8 py-8">
                    <div>Are you sure to delete ?</div>
                    <UButton
                        class="mt-4 w-fit"
                        color="error"
                        label="Delete"
                        @click="deleteItem"
                    />
                </div>
            </template>
        </UModal>
    </div>
</template>

<style scoped></style>
