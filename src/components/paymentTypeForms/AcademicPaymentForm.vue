<script setup>
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import { InputText, InputNumber, Select, Button, ConfirmDialog, Dialog } from "primevue";
import TransferPinDialog from "../TransferPinDialog.vue";
import { ref } from "vue";

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
</script>

<template>
    <div class="grid grid-cols-2 gap-5 px-3 py-2 my-2 rounded-md mb-7 bg-slate-100">
        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Username" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber v-model="number" placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>www</InputGroupAddon>
            <InputText v-model="text2" placeholder="Website" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>
                <i class="pi pi-map"></i>
            </InputGroupAddon>
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Username" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Username" />
        </InputGroup>

        <InputGroup class="col-span-full md:col-span-1">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="text1" placeholder="Username" />
        </InputGroup>

            <Button label="Send" icon="pi pi-send" icon-pos="right" class="w-full col-span-full md:col-span-1" @click="openModal" />


        <TransferPinDialog v-model:visibleTrue="isModalVisible"
        @close="closeModal"/>

    </div>
</template>
