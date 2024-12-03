<script setup>
import ExchangeIcon from '@/assets/svg/exchange.svg';
import PrepaidIcon from '@/assets/svg/mobileDollar.svg';
import BeneficiaryIcon from '@/assets/svg/contactBook.svg';
import HistoryIcon from '@/assets/svg/historyIcon.svg';
import ActionBtn from './ActionBtn.vue';

import { ref } from 'vue';
import { Button, SelectButton } from 'primevue';
import { RouterLink } from 'vue-router';

const btns = ref([
    { name: 'Transfer', img: ExchangeIcon, link: '/account/transfer', value: 'transfer' },
    { name: 'Prepaid', img: PrepaidIcon, link: '', value: 'prepaid' },
    { name: 'Beneficiary', img: BeneficiaryIcon, link: '/account/beneficiaries', value: 'beneficiary' },
    { name: 'History', img: HistoryIcon, link: '/account/history', value: 'History' },
])
</script>
<template>
    <div class="flex justify-evenly self-center w-full lg:w-fit justify-self-center h-fit">
        <div v-for="(btn, index) in btns" class=" font-semibold grid justify-items-center text-sm">
            <ActionBtn :key="index" :link="btn.link">
                <template #iconImg>
                    <img :src="btn.img" alt="" class="w-14">
                </template>
                <!-- <template #btnName>
                </template> -->
            </ActionBtn>
            <p>{{ btn.name }}</p>
        </div>
    </div>
</template>
