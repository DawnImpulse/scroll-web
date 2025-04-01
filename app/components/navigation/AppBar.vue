<script setup lang="ts">
const user = await getCurrentUser();
console.log(user.fullname);
</script>

<template>
    <div class="w-full px-4 mt-4 flex flex-row items-center">
        <!--title-->
        <div class="flex flex-row items-center">
            <img src="@/assets/icons/logo.svg" class="size-8" alt="" />
            <div class="ml-4 font-bold text-xl text-black tracking-wider">
                Scroll
            </div>
        </div>
        <div class="flex-grow" />

        <UPopover>
            <UButton
                icon="material-symbols:person"
                size="md"
                color="neutral"
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
                                    <UButton color="error">
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
