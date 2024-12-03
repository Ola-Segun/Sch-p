<script setup>
import { Avatar, OverlayBadge,SpeedDial } from 'primevue';
import ProfileImage from '@/assets/images/profileimage.png';
import BellIcon from '@/assets/svg/bellIcon.svg';
import { ref } from 'vue';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        severity: 'info',
        variant: 'outlined'
    },
    {
        label: 'Features',
        icon: 'pi pi-star',
        severity: 'info'
    },
    {
        label: 'Settings',
        icon: 'pi pi-cog',
        severity: 'info'
    },
    {
        label: 'Notifications',
        icon: 'pi pi-envelope',
        severity: 'info'
    }
]);
</script>

<template>
    <div class="mx-4 py-3 flex justify-between items-center font-semibold text-xl text-white">
        <div class=" flex items-center">
            <Avatar :image="ProfileImage" class="mr-2" size="xlarge" shape="circle" />
            <p>Hi, Dean Lewis</p>
        </div>
        <div class="mr-4">
            <!-- <OverlayBadge severity="danger">
                 <img :src="BellIcon" alt="" class="w-[37px]">
            </OverlayBadge> -->
            <SpeedDial :model="items" :radius="80" direction="down" :style="{ position: 'absolute', right:'30px', bottom: '65%' }" :buttonProps="{ severity: 'primary', rounded: true }" />

        </div>

    </div>
</template>



<style scoped>
    .p-badge{
        border: none;
    }
</style>