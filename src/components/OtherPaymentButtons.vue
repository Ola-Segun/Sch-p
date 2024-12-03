<script setup>
import { Button, Menubar, SelectButton } from "primevue";
import ProfileImage from "@/assets/images/profileimage.png";
import { ref } from "vue";

// icon svg
import Food from '@/assets/svg/foodIcon.svg';
import Medic from '@/assets/svg/medicineIcon.svg';
import BookLibrary from '@/assets/svg/bookLibraryIcon.svg';
import Hospital from '@/assets/svg/hospitalIcon.svg';

const transactionTypes = ref([
  {
    name: "Cafetaria",
    category: 'personal-estab',
    icon: "pi pi-user",
    image: Food,
    value: "cafetaria",
    severity: "help",
  },
  {
    name: "Pharmacy",
    category: 'school-estab',
    icon: "pi pi-user",
    image: Medic,
    value: "pharmacy",
    severity: "help",
  },
  {
    name: "Library",
    category: 'school-estab',
    icon: "pi pi-shop",
    image: BookLibrary,
    value: "library",
    severity: "help",
  },
  {
    name: "Clinic",
    category: 'school-estab',
    icon: "pi pi-shop",
    image: Hospital,
    value: "clinic",
    severity: "help",
  },
]);

const selectedTransactionName = ref(null);
// const props = defineProps(['buttonName'])
const emit = defineEmits(["updateOtherPaymentType"]);

function sendToOtherPaymentForm() {
  emit("updateOtherPaymentType", selectedTransactionName.value);
}

function getButtonName(event) {
  selectedTransactionName.value = event.value; // Use the label of the clicked menu item
  sendToOtherPaymentForm();
}
</script>

<template>
  <!-- Beneficiary Group -->
  <div class="overflow-x-auto other-payment-group py-2">

    <SelectButton
      v-model="selectedTransactionName"
      :options="transactionTypes"
      optionLabel="value"
      dataKey="value"
      aria-labelledby="custom"
      @change="getButtonName"
      :multiple="false"
    >
      <template #option="slotProps">
        <img
          v-if="slotProps.option.image"
          :src="slotProps.option.image"
          alt="icon"
          class="beneficiary-img w-12"
        />

        <i v-else :class="slotProps.option.icon"></i>
      </template>
    </SelectButton>
  </div>
</template>

<style scoped></style>
