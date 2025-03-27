<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

// use fns
const toast = useToast();

// zod schema
const schema = z.object({
    email: z.string().email("Invalid email"),
});

type Schema = z.output<typeof schema>;

// state of input fields
const state = reactive<Partial<Schema>>({
    email: undefined,
});

/**
 * on submit on form
 * @param event
 */
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({
        title: "Success",
        description: "The form has been submitted.",
        color: "success",
    });
    console.log(event.data);
}
</script>

<template>
    <div
        class="w-screen h-screen flex justify-center items-center bg-gray-400 bg-[url(@/assets/images/login-bg.jpg)]"
    >
        <div class="flex flex-col justify-center">
            <div
                class="rounded-2xl px-8 py-8 flex flex-col shadow-2xl bg-white"
            >
                <!--title-->
                <div class="text-xl tracking-wider text-black">LOGIN</div>

                <!--description-->
                <div class="text-xs tracking-wider text-gray-400">
                    register/login to the service
                </div>

                <UForm
                    :schema="schema"
                    :state="state"
                    class="mt-8 space-y-4"
                    @submit="onSubmit"
                >
                    <UFormField name="email">
                        <UInput v-model="state.email" type="email" size="xl" />
                    </UFormField>

                    <UButton size="xl" type="submit" class="w-full">
                        <div class="flex flex-row items-center w-full">
                            <div class="text-sm">NEXT</div>
                            <div class="grow" />
                            <UIcon
                                name="material-symbols:arrow-right-alt"
                                size="24"
                            />
                        </div>
                    </UButton>
                </UForm>

                <!--logo-->
                <div class="mt-8 flex items-center self-center">
                    <img src="@/assets/icons/logo.svg" class="size-6" alt="" />
                    <div class="ml-2 text-sm text-neutral-500">
                        <b class="text-(--ui-primary)">Scroll</b> by Codevry
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
