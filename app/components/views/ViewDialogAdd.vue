<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { push, ref as dbRef, getDatabase, set } from "firebase/database";

// ----- props -----
const user = await getCurrentUser();
const toast = useToast();
const props = defineProps({
    item: {
        type: {
            id: String,
            name: String,
            phone: Number,
        },
        required: false,
    },
});

// ----- schema -----
const schema = z.object({
    name: z.string().min(2, "minimum 2 letters").max(25, "maximum 25 letters"),
    phone: z.number().min(3, "minimum 3 digits"),
});
type Schema = z.output<typeof schema>;

// ----- variables ------
const state = reactive<Partial<Schema>>({
    name: props.item?.name || undefined,
    phone: props.item?.phone || undefined,
});

const loading = ref(false);
const database = getDatabase();
const open = ref(false);

/**
 * insert new item
 * @param data
 */
async function insert(data) {
    return push(dbRef(database, `users/${user.uid}/contacts`), data);
}

/**
 * update existing
 * @param data
 */
async function edit(data) {
    return set(
        dbRef(database, `users/${user.uid}/contacts/${props.item.id}`),
        data,
    );
}

/**
 * on submit on form
 * @param event
 */
async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true;

    try {
        if (props.item.id) await edit(event.data);
        else await insert(event.data);

        toast.add({
            title: `Successfully ${props.item.id ? "updated" : "added"}`,
        });

        // reset values (only if new)
        open.value = false;
        if (!props.item.id) {
            state.name = undefined;
            state.phone = undefined;
        }
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
        <UModal :dismissible="!loading" v-model:open="open">
            <slot />

            <template #content>
                <div class="py-4 self-center">
                    <UForm
                        :schema="schema"
                        :state="state"
                        class="mt-8 space-y-4"
                        @submit="onSubmit"
                    >
                        <!--name-->
                        <UFormField name="name" label="Name">
                            <UInput
                                v-model="state.name"
                                type="name"
                                size="xl"
                            />
                        </UFormField>

                        <!--phone-->
                        <UFormField name="phone" label="Phone">
                            <UInput
                                v-model="state.phone"
                                type="number"
                                size="xl"
                            />
                        </UFormField>

                        <!--next-->
                        <UButton
                            size="xl"
                            type="submit"
                            class="w-full"
                            :loading="loading"
                            label="Submit"
                        />
                    </UForm>
                </div>
            </template>
        </UModal>
    </div>
</template>

<style scoped></style>
