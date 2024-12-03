<script setup>
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import { InputText, InputNumber, Select, Button, ConfirmDialog, Dialog } from "primevue";
import TransferPinDialog from "../TransferPinDialog.vue";
import { ref } from "vue";

import DotsScaleLoading from '@/assets/svg/dotsScaleBlack.svg'

const text1 = ref(null);
const text2 = ref(null);
const number = ref(null);
const selectedCity = ref();
const cities = ref([
{ name: "Shop 102", code: "" },
    { name: "Shop 103", code: "" },
    { name: "Shop 104", code: "" },
    { name: "Shop 105", code: "" },
    { name: "Shop 106", code: "" },
]);
// Create a ref to control modal visibility
const isModalVisible = ref(false);

// Method to open the modal
const openModal = () => {
    isModalVisible.value = true;
};

// Method to close the modal
const closeModal = () => {
    isModalVisible.value = false;
};

defineProps(['OtherPaymentButton'])
</script>

<template>
    <div class="grid grid-cols-3 items-center">
        <div class="font-semibold mx-3 flex items-center gap-2">
            {{ OtherPaymentButton.name }}
            <span>
                <img :src="DotsScaleLoading" alt="" class="w-4">
            </span>
        </div>

        <InputGroup v-if="OtherPaymentButton.category === 'personal-estab'" class="col-span-2">
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Shop 105" />
        </InputGroup>
        <InputGroup v-else-if="OtherPaymentButton.category === 'school-estab'" class="col-span-2">
            <InputText v-model="OtherPaymentButton.value" :options="cities" optionLabel="name" placeholder="Shop 105" disabled />
        </InputGroup>
    </div>

    <div class="grid grid-cols-4 gap-5 px-3 py-3  rounded-md bg-slate-100 transfer-form">
        <InputGroup class="col-span-full md:col-span-2">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Name" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-2">
            <InputGroupAddon>...</InputGroupAddon>
            <InputText v-model="text2" placeholder="Account ID" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-2">
            <InputGroupAddon>
                abc
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Description" />
        </InputGroup>

        <InputGroup class="col-span-3">
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber v-model="number" placeholder="Amount" class="transfer-amount text-4xl font-semibold" />
        </InputGroup>

            <Button label="Send" icon="pi pi-send" icon-pos="right" class="w-full font-extrabold  col-span-1 self-center" @click="openModal" />

    </div>
    <TransferPinDialog v-model:visibleTrue="isModalVisible" @close="closeModal" />
</template>


<style scoped>
.p-button-icon.addBeneficiary {
    @apply text-sm
}
</style>