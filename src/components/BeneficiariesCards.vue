<script setup>
import { Button, Menubar, SelectButton } from "primevue";
import ProfileImage from "@/assets/images/profileimage.png";
import UserData from '@/Users.json';
import { ref } from "vue";

const beneficiariesDetails = ref([
  {
    name: "Add",
    icon: "pi pi-plus",
    value: "addBeneficiaries",
    severity: "help",
  },
  {
    name: "Mate",
    icon: "pi pi-user",
    image: ProfileImage,
    value: "mate",
    severity: "help",
  },
  {
    name: "Dean",
    icon: "pi pi-user",
    image: ProfileImage,
    value: "dean",
    severity: "help",
  },
  {
    name: "Sean",
    icon: "pi pi-user",
    image: ProfileImage,
    value: "sean",
    severity: "help",
  },
  {
    name: "Billy",
    icon: "pi pi-user",
    image: ProfileImage,
    value: "billy",
    severity: "help",
  },
  {
    name: "Boyi",
    icon: "pi pi-user",
    image: ProfileImage,
    value: "boyi",
    severity: "help",
  },
]);

const selectedBeneficiaryData = ref('null');

const emit = defineEmits(["updateMateData", 'allBeneficiaries']);

function sendToMateForm() {
  emit("updateMateData", selectedBeneficiaryData.value);
  emit('allBeneficiariesDetails', beneficiariesDetails);
}

function getBeneficiaryName(event) {
  selectedBeneficiaryData.value = event.value; // Use the label of the clicked menu item
  sendToMateForm();
}
</script>

<template>
  <!-- Beneficiary Group -->
  <div class="overflow-x-auto beneficiaries-group py-2">

    <SelectButton
      v-model="selectedBeneficiaryData"
      :options="beneficiariesDetails"
      optionLabel="value"
      dataKey="value"
      aria-labelledby="custom"
      @change="getBeneficiaryName"
    >
      <template #option="slotProps">
        <img
          v-if="slotProps.option.image"
          :src="slotProps.option.image"
          alt="icon"
          class="beneficiary-img w-14 h-14"
        />

        <i v-else :class="slotProps.option.icon"></i>
        <span>{{ slotProps.option.name }}</span>
      </template>
    </SelectButton>

  </div>
</template>

<style scoped></style>
