<script setup>
import { ref } from 'vue';
import { Panel, Button, Tag, Fieldset } from 'primevue';
import profileImage from '@/assets/images/profileImage.png'

const getBadge = (user) => {
    if (user.role === 'Member') return 'info';
    else if (user.role === 'Guest') return 'warn';
    else return null;
}

const users = ref([
    { id: 0, name: 'Amy Elsner', image: profileImage, role: 'Admin' },
    { id: 1, name: 'Anna Fali', image: profileImage, role: 'Member' },
    { id: 2, name: 'Asiya Javayant', image: profileImage, role: 'Member' },
    { id: 3, name: 'Bernardo Dominic', image: profileImage, role: 'Guest' },
    { id: 4, name: 'Elwin Sharvill', image: profileImage, role: 'Member' }
]);


</script>
<template>
    <div>
        <Fieldset :toggleable="true" legend="History" class="mt-2">

            <div class=" max-h-[16.5rem] overflow-auto border border-surface mt-2">
                <ul class="m-0 list-none rounded p-2 flex flex-col gap-2 w-full">
                    <li v-for="user in users" :key="user.id"
                        :class="['p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between', { 'border-primary': selectedUser?.id === user.id }]"
                        @contextmenu="onRightClick($event, user)">
                        <div class="flex flex-1 items-center gap-2">
                            <img :alt="user.name"
                                :src="`${user.image}`"
                                class="w-8 h-8" />
                            <span class="font-bold">{{ user.name }}</span>
                        </div>
                        <Tag :value="user.role" :severity="getBadge(user)" />
                    </li>
                </ul>
            </div>
        </Fieldset>
    </div>
</template>

<style scoped>
    .p-panel{
        background-color: rgb(249, 252, 255);
    }
    .p-panel-header{
        width: 100%;
    }
    .p-panel-header-actions{
        width: fit-content;
    }
</style>