<script setup lang="ts">
import AppBar from "~/components/navigation/AppBar.vue";
import { useDatabaseList } from "vuefire";
import { getDatabase, ref as dbRef } from "firebase/database";
import ViewListContacts from "~/components/views/ViewListContacts.vue";
import ViewDialogAdd from "~/components/views/ViewDialogAdd.vue";

const user = await getCurrentUser();
const database = getDatabase();
const itemsRef = dbRef(database, `users/${user.uid}/contacts`);
const { pending, data: items } = useDatabaseList(itemsRef);
</script>

<template>
    <div class="flex w-screen h-screen justify-center bg-zinc-50">
        <div class="flex flex-col w-full px-8 lg:w-10/12 xl:w-8/12">
            <!--appbar-->
            <AppBar />

            <!--add new-->
            <ViewDialogAdd v-if="!pending" class="mt-16 w-fit self-end" />

            <!--loading/empty-->
            <LayoutEmptyScreen
                v-if="pending || items.length === 0"
                class="self-center"
                :loading="pending"
                :empty="items.length === 0"
            />

            <ViewListContacts
                class="mt-16"
                :items="items"
                v-if="items.length > 0"
            />
        </div>
    </div>
</template>

<style scoped></style>
