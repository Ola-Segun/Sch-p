<script setup>
import { SelectButton } from "primevue";
import { ref } from "vue";

const value = ref(null);
const transactionTypes = ref([
  { name: "Academics", icon: "pi pi-book", value: "academics" },
  { name: "Mate", icon: "pi pi-user", value: "mate" },
  { name: "Others", icon: "pi pi-shop", value: "others" },
]);

const selectedTransactionName = ref(null);


const emit = defineEmits(["updateData"]);

function sendToParent() {
  emit("updateData", selectedTransactionName.value);
}

function handleMenuClick(event) {
    console.log(event.value);
  selectedTransactionName.value = event.value; // Use the label of the clicked menu item
  sendToParent();
}
</script>

<template>
  <div class="card flex justify-center transaction-btns w-full">
    <SelectButton
    v-model="selectedTransactionName"
    @update:modelValue="handleMenuClick"
      :options="transactionTypes"
      optionLabel="value"
      dataKey="value"
      aria-labelledby="custom"
    >
      <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
        <span>{{ slotProps.option.name }}</span>
      </template>
    </SelectButton>
  </div>
</template>
