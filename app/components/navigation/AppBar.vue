<script setup lang="ts">
import BtnGithub from "~/components/container/BtnGithub.vue";
import { signOut } from "firebase/auth";

const auth = useFirebaseAuth();
const user = await getCurrentUser();
const toast = useToast();

function logout() {
    signOut(auth!!)
        .then(() => {
            toast.add({
                title: "Successfully logged out",
            });
            navigateTo("/app/auth/login");
        })
        .catch((error: any) => {
            toast.add({
                title: "Something went wrong",
                description: error.toString(),
                color: "error",
            });
        });
}
</script>

<template>
    <div class="w-full mt-4 flex flex-row items-center">
        <!--title-->
        <div class="flex flex-row items-center">
            <img src="@/assets/icons/logo.svg" class="size-8" alt="" />
            <div class="ml-4 font-bold text-xl text-black tracking-wider">
                Scroll
            </div>
        </div>
        <div class="flex-grow" />

        <!--github-->
        <BtnGithub />

        <!--user popup-->
        <UPopover>
            <UButton
                icon="material-symbols:person"
                size="md"
                color="secondary"
                variant="soft"
                class="rounded-full"
            />

            <template #content>
                <div class="px-8 py-8 flex flex-col">
                    <!--email-->
                    <div class="text-sm">{{ user.email }}</div>

                    <!--logout-->
                    <UModal>
                        <UButton color="error" class="mt-4">Logout</UButton>

                        <template #content>
                            <div class="flex flex-col py-4 px-8">
                                <div class="">
                                    Are you sure you want to logout?
                                </div>
                                <div class="flex mt-4">
                                    <UButton color="error" @click="logout">
                                        Yes Logout
                                    </UButton>
                                </div>
                            </div>
                        </template>
                    </UModal>
                </div>
            </template>
        </UPopover>
    </div>
</template>

<style scoped></style>
