<script setup>
import { Button, Menubar, SelectButton, ToggleButton } from "primevue";
import { ref } from "vue";
import BookHat from "@/assets/svg/bookHat.svg";
import ShopIcon from "@/assets/svg/shop.svg";
import PersonIcon from "@/assets/svg/personIcon.svg";

const transactionTypes = ref([
  {
    label: "Academics",
    icon: "pi pi-book",
    key: "academics",
  },
  {
    label: "Mate",
    icon: "pi pi-user",
    key: "mate",
  },
  {
    label: "Others",
    icon: "pi pi-shop",
    key: "others",
  },
]);

const selectedTransactionName = ref("Loading");

const emit = defineEmits(['updateData'])

function sendToParent() {
  emit('updateData', selectedTransactionName.value.toLocaleLowerCase())
}

function handleMenuClick(event) {
  selectedTransactionName.value = event.label; // Use the label of the clicked menu item
  sendToParent();
}


</script>

<template>
  <Menubar
    :model="
      transactionTypes.map((item) => ({ ...item, command: () => handleMenuClick(item), class: 'my-custom-menuitem' }))
    "
    breakpoint="10px"
    mobileActive=true
    class="w-fit custom-menubar"
  />

</template>


<style scoped>

</style>