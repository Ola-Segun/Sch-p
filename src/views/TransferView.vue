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
import { SelectButton } from 'primevue';
import { ref } from 'vue';

const selectedTransactionName = ref('')

function handleUpdate(data) {
    selectedTransactionName.value = data
}

const transactionTypes = ref([
    { name: "Academics", icon: "pi pi-book", value: "academics" },
    { name: "Mate", icon: "pi pi-user", value: "mate" },
    { name: "Others", icon: "pi pi-shop", value: "others" },
]);


const OtherPaymentButtonName = ref('Checking');
const handelOtherPaymentButton = (newName) => {
    OtherPaymentButtonName.value = newName;
}

const BeneficiaryName = ref('Checking');
const handelBeneficiaryButton = (newName) => {
    BeneficiaryName.value = newName;
}

const allBeneficiariesD = ref('Checking');
const handelAllBeneficiary = (newName) => {
    allBeneficiariesD.value = newName;
}
</script>

<template>
    <partialCard :height="'h-[100%] bg-gif'" :padding-t="'pt-14'" :overflow="''">
        <template #card-title>
            <Backnav text-color="text-black" margin-x="0">
                Transfer
            </Backnav>
        </template>

        <template #card-content>
            <div class=" grid gap-1 w-full h-fit">
                <div class="h-fit space-y-2">
                    <p class="ml-3">
                        Account details
                    </p>
                    <div class=" grid grid-cols-2 gap-[5%] h-fit items-center">
                        <div class="md:col-span-1 col-span-full">
                            <div
                                class="current-account flex px-5 py-1 h-fit border border-gray-400 rounded-2xl  justify-between items-center gap-2">
                                <div class="account-type card ">
                                    STUDENT
                                </div>

                                <div class="account-id text-lg font-semibold">4232 .... .... 2434</div>
                            </div>
                            <div class="account-balance font-semibold text-text-primary">
                                Balance : $34,230.00
                            </div>
                        </div>

                        <div class="h-fit md:col-span-1 col-span-full w-full">

                            <div class="btns">
                                <!-- <TransactionButton @updateData="handleUpdate" /> -->
                                <!-- <nTransactionButton  @updateData="handleUpdate" /> -->
                                <div class="card flex justify-center transaction-btns w-full">
                                    <SelectButton v-model="selectedTransactionName" :options="transactionTypes"
                                        optionLabel="value" dataKey="value" aria-labelledby="custom">
                                        <template #option="slotProps">
                                            <i :class="slotProps.option.icon"></i>
                                            <span>{{ slotProps.option.name }}</span>
                                        </template>
                                    </SelectButton>
                                </div>
                            </div>


                            <!-- <div class="transaction-type ml-1 my-2 p-2 border rounded-md">
                                <p class="items-center gap-2 flex w-full">Transaction to:
                                    <span v-if="selectedTransactionName.value" class=" uppercase font-semibold p-1 bg-purple-500 text-white rounded-lg">
                                        {{ selectedTransactionName.value }}
                                    </span> 
                                    <img v-else class=" uppercase font-semibold p-1 bg-purple-500 text-white rounded-lg w-7" :src="dotsSpinner" alt="">
                                </p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class=" w-full h-full overflow-y-auto  min-h-[34.4rem]">
                <AcademicPaymentForm v-if="selectedTransactionName.value === 'academics'" />


                <div class="grid mt-3" v-else-if="selectedTransactionName.value === 'mate' ">
                    <div class="w-full flex justify-between">
                        <p>Choose Beneficiary</p>
                        <RouterLink to="/account/beneficiaries" class="font-semibold text-purple-700">
                            <i class="pi pi-window-maximize" style="font-size: large; font-weight: bold;"></i>
                        </RouterLink>
                    </div>

                    <div class="grid gap-5">
                        <BeneficiariesCards @updateMateData="handelBeneficiaryButton" @allBeneficiariesDetails="handelAllBeneficiary"/>
                        <MateTransferForm :beneficiary="BeneficiaryName" :allBeneficiaries="allBeneficiariesD" />
                    </div>
                </div>


                <div class="grid mt-3" v-else-if="selectedTransactionName.value === 'others'">
                    <div class="w-full flex justify-between">
                        <p>Choose Transaction</p>
                        <RouterLink to="" class="font-semibold text-purple-700">
                            <i class="pi pi-window-maximize" style="font-size: large; font-weight: bold;"></i>
                        </RouterLink>
                    </div>

                    <div class="grid gap-5">
                        <OtherPaymentButtons @updateOtherPaymentType="handelOtherPaymentButton" />
                        <OtherPaymentForm :OtherPaymentButton="OtherPaymentButtonName" />
                    </div>
                </div>
            </div>
        </template>
    </partialCard>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Squada+One&display=swap');

.account-type {
    font-family: "Squada One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: x-large;
    color: black;
}

.account-id {
    letter-spacing: 1.5px;
}

p {
    @apply text-gray-600
}
</style>
