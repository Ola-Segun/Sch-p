<script setup>
import Card from "primevue/card";
import Backnav from "@/components/Backnav.vue";
import SignLogo from '@/assets/svg/signLogo.svg';
import ShopIcon from '@/assets/svg/shop.svg';
import GraduateHat from '@/assets/svg/graduateHat.svg';
import StaffSvg from '@/assets/svg/staff.svg'
import partialCard from '@/components/partialCard.vue'
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { InputGroup, InputGroupAddon, InputText, Password, FloatLabel, Checkbox, Button } from "primevue";

const accountType = ref([
  {
    label: "Student",
    iconClass: 'pi pi-graduation-cap',
    link: '/student/addDetails',
    severity: 'info'
  },
  {
    label: "Staff",
    iconClass: 'pi pi-briefcase',
    link: '',
    severity: 'help'
  },
  {
    label: "Traders",
    iconClass: 'pi pi-shop',
    link: '',
    severity: 'warn'
  },
]);


</script>

<template>
    <Backnav>Sign Up</Backnav>
    <partialCard>
        <template #card-title>                
            <div class=" text-text-primary font-bold">Select Account Type</div>
        </template>

        <template #card-content>

            <div class="self-center flex flex-wrap justify-center gap-7 h-fit items-center font-semibold">
                <RouterLink  v-for="item in accountType" :to="item.link">

                    <Button class="accountBtn" size="large" :severity="item.severity">
                        <i :class="`${item.iconClass} font-bold text-9xl w-5`"></i>
                        <p>{{ item.label }}</p>
                    </Button>
                    <!-- <Button :label="item.label" :icon="item.iconClass" iconPos="top"/> -->
                </RouterLink>
                <!-- <RouterLink >

                    <Button class="accountBtn" size="large" severity="help">
                        <img :src="StaffSvg" alt="">
                        <p>Staff</p>
                    </Button>
                </RouterLink>
                <RouterLink >

                    <Button class="accountBtn" size="large" severity="warn">
                        <img :src="ShopIcon" alt="">
                        <p>Trader</p>
                    </Button>
                </RouterLink> -->
            </div>

            <div class="self-end grid gap-6  mb-10">
                <RouterLink  class="w-full">
                    <Button label="Next" icon="pi pi-arrow-right" icon-pos="right" class="w-full"/>
                </RouterLink>

                <div class="w-full flex justify-center ">  
                    <p>Have an Account? <RouterLink  to="/" class="font-semibold text-text-primary text-center">Signin</RouterLink> </p>
                </div>
            </div>
        </template>
    </partialCard>
</template>

<style scoped>
    .accountBtn{
        @apply w-36 grid
    }

    i{
        font-size: xx-large;
    }
</style>