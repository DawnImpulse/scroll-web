<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { fetchSignInMethodsForEmail } from "@firebase/auth";
// ----- props -----
const auth = useFirebaseAuth();
const emits = defineEmits(["register", "login"]);
const props = defineProps(["loading"]);

// ----- schema -----
const schema = z.object({
    email: z.string().email("Invalid email"),
    pin: z.array(z.string().length(1)).length(4, "Must be 4 digit"),
});
type Schema = z.output<typeof schema>;

// ----- variables ------
const state = reactive<Partial<Schema>>({
    email: undefined,
    pin: undefined,
});

/**
 * on submit on form
 * @param event
 */
async function onSubmit(event: FormSubmitEvent<Schema>) {
    const signInMethods = await fetchSignInMethodsForEmail(
        auth!!,
        event.data.email,
    );

    // user exists
    if (signInMethods && signInMethods.length > 0) {
    }
    // register user (redirect to verify email)
    else emits("register", event.data.email, event.data.pin);
}
</script>

<template>
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
        <UFormField name="email" label="Email">
            <UInput v-model="state.email" type="email" size="xl" />
        </UFormField>

        <UFormField name="pin" label="Pin">
            <UPinInput v-model="state.pin" size="xl" type="number" length="4" />
        </UFormField>

        <div class="text-xs text-gray-400">
            the pin encrypts your data <br />
            hence it can't be changed ever
        </div>

        <UButton size="xl" type="submit" class="w-full" :loading="loading">
            <div class="flex flex-row items-center w-full">
                <div class="text-sm">NEXT</div>
                <div class="grow" />
                <UIcon name="material-symbols:arrow-right-alt" size="24" />
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
</template>

<style scoped></style>
