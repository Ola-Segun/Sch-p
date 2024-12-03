<script setup>
import partialCard from '@/components/partialCard.vue';
import Backnav from '@/components/Backnav.vue';
import TransactionButton from '@/components/transactionButton.vue';
import AcademicPaymentForm from '@/components/paymentTypeForms/AcademicPaymentForm.vue';
import MateTransferForm from '@/components/paymentTypeForms/MateTransferForm.vue';
import OtherPaymentForm from '@/components/paymentTypeForms/OtherPaymentForm.vue';
import BeneficiariesCards from '@/components/BeneficiariesCards.vue';
import nTransactionButton from '@/components/nTransactionButton.vue';
import OtherPaymentButtons from '@/components/OtherPaymentButtons.vue';

// images
import ProfileImage from '@/assets/images/profileimage.png';
import dotsSpinner from '@/assets/svg/dot-rotate-spinner.svg'
import { SelectButton, Timeline, Card, Tag, DataView, Button, IconField, InputText, InputIcon } from 'primevue';
import { ref, onMounted, computed } from "vue";
import { ProductService } from '@/service/ProductService';
// import DataView from 'primevue/dataview';

// JSON data
import UserData from '@/Users.json'

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');
const tableLayouts = ref(['list', 'grid']);

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

// Add after your existing refs
const searchQuery = ref('');

// Add this computed property
const filteredFileData = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  
  if (!query) return UserData;
  
  return UserData.filter(user => {
    return (
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toString().toLowerCase().includes(query) ||
      user.userName.toLowerCase().includes(query) ||
      user.middleName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });
});



const users = ref(UserData);
// console.log(users.value.toLowerCase().trim());
</script>

<template>
    <partialCard :height="'h-[100%] bg-gif'" :padding-t="'pt-14'" :overflow="''">
        <template #card-title>
            <Backnav text-color="text-black" margin-x="0">
                Beneficiaries
            </Backnav>
        </template>

        <template #card-content>
            <div class="card">
                <DataView :value="filteredFileData" :layout="layout">
                    <template #header>
                        <div class="flex gap-2 justify-between">
                            <IconField>
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="searchQuery" placeholder="Search" />
                            </IconField>
                            <SelectButton v-model="layout" :options="tableLayouts" :allowEmpty="false">
                                <template #option="{ option }">
                                    <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                                </template>
                            </SelectButton>
                        </div>
                    </template>

                    <template #list="slotProps">
                        <div class="flex flex-col">
                            <div v-for="(item, index) in slotProps.items" :key="index">
                                <div class="flex justify-between items-center py-3 px-2 gap-4"
                                    :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                    <div class="flex items-center gap-5">
                                        <img :src="ProfileImage" alt="" class="profile-image w-14 h-14">
                                        <div class="grid">
                                            <div class="account-category">
                                                {{ item.account.category }}
                                            </div>
                                            <div class="text-xl">
                                                {{ item.firstName }} <span>{{ item.lastName }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <Button>
                                            <RouterLink to="/account/transfer">
                                                <p class="italic">Pay</p>
                                            </RouterLink>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #grid="slotProps">
                        <div class="grid grid-cols-12 gap-4">
                            <div v-for="(item, index) in slotProps.items" :key="index"
                                class="col-span-4 sm:col-span-3 md:col-span-2  p-2">
                                <div
                                    class="py-4 px-2 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded-md shadow-md justify-center grid gap-2">
                                    <img :src="ProfileImage" alt="" class="profile-image w-14 h-14 justify-self-center">
                                    <div class="grid justify-center">
                                        <div class="flex flex-wrap justify-center w-full text-center">
                                            {{ item.firstName }}
                                            {{ item.lastName }}
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <Button class="w-full">
                                            <RouterLink to="/account/transfer">
                                                <p class="italic">Pay</p>
                                            </RouterLink>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>

        </template>
    </partialCard>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Squada+One&display=swap');

.account-category {
    font-family: "Squada One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: larger;
    color: black;
    letter-spacing: .5px;
}
</style>
