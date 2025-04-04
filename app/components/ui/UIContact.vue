<script setup lang="ts">
import ViewDialogAdd from "~/components/views/ViewDialogAdd.vue";
import ViewDialogDelete from "~/components/views/ViewDialogDelete.vue";
import Encryption from "~/utils/encryption";

const key = useCookie("key");
const props = defineProps(["item"]);

const data = ref({
    id: props.item.id,
    name: await Encryption.decrypt(key.value!!, props.item.name),
    phone: Number(await Encryption.decrypt(key.value!!, props.item.phone)),
});

watch(
    () => props.item,
    async (item) => {
        data.value.name = await Encryption.decrypt(key.value!!, item.name);
        data.value.phone = Number(
            await Encryption.decrypt(key.value!!, item.phone),
        );
    },
);
</script>

<template>
    <div class="flex flex-col px-6 py-4 rounded-xl shadow-2xl bg-white">
        <!--name-->
        <div>{{ data.name }}</div>

        <!--number & actions-->
        <div class="flex flex-row space-between">
            <!--number-->
            <div class="mt-1 grow text-black text-lg font-bold tracking-wider">
                {{ data.phone }}
            </div>

            <!--actions-->
            <div class="flex items-center">
                <ViewDialogDelete :id="data.id">
                    <UButton
                        color="error"
                        variant="ghost"
                        icon="material-symbols:delete"
                        size="md"
                    />
                </ViewDialogDelete>

                <ViewDialogAdd :item="data">
                    <UButton
                        color="neutral"
                        variant="ghost"
                        class="ml-4"
                        icon="material-symbols:edit"
                        size="md"
                    />
                </ViewDialogAdd>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
