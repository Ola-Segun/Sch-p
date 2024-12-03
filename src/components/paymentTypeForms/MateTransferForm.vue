<script setup>
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import { InputText, InputNumber, Select, Button, ConfirmDialog, Dialog, InputMask } from "primevue";
import TransferPinDialog from "../TransferPinDialog.vue";
import { ref } from "vue";

import DotsScaleLoading from '@/assets/svg/dotsScaleBlack.svg'


const text1 = ref(null);
const text2 = ref(null);
const number = ref(null);
const selectedCity = ref();
const cities = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
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


const selectedCountry = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);


const props = defineProps(['beneficiary', 'allBeneficiaries'])

const newData = ref(props.allBeneficiaries)
console.log(newData.value)
</script>

<template>

    <div class="grid grid-cols-3 items-center">
        <div class="font-semibold mx-3 flex items-center gap-2">
            <div v-if="beneficiary" class="">
                {{ beneficiary.name }}
            </div>
            <span>
                <img :src="DotsScaleLoading" alt="" class="w-4">
            </span>
        </div>

        <!-- {{ allBeneficiaries }} -->
          <!-- {{ countries }} -->
        <Select v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full col-span-2">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Select>
    </div>
    <div class="grid grid-cols-4 gap-5 px-3 py-3  rounded-md bg-slate-100 transfer-form">

        <InputGroup class="col-span-full md:col-span-2">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Name" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-2">
            <InputGroupAddon>ID</InputGroupAddon>
            <InputMask id="basic" v-model="value" mask="9999 9999 9999" placeholder="9999 9999 9999" />
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

        <Button label="Send" icon="pi pi-send" icon-pos="right" class="w-full font-extrabold  col-span-1 self-center"
            @click="openModal" />

    </div>
    <TransferPinDialog v-model:visibleTrue="isModalVisible" @close="closeModal" />
</template>


<style scoped>
.p-button-icon.addBeneficiary {
    @apply text-sm
}
</style>