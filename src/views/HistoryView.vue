<script setup>
import partialCard from '@/components/partialCard.vue';
import Backnav from '@/components/Backnav.vue';
import ConfirmDialog from 'primevue/confirmdialog';


// images
import ProfileImage from '@/assets/images/profileimage.png';
import dotsSpinner from '@/assets/svg/dot-rotate-spinner.svg'
import { SelectButton, Timeline, Card, DataView, Button, IconField, InputText, InputIcon } from 'primevue';
import { ref } from 'vue';
import { onMounted } from 'vue';


// JSON file
import { TransactionService } from '@/service/History';
import { ProductService } from '@/service/ProductService';
import History from '@/History.json'


import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = (transaction) => {
    confirm.require({
        group: 'templating',
        header: 'Receipt',
        class: 'transaction-receipt',
        transaction,
        icon: 'pi pi-receipt',
        rejectProps: {
            label: 'Close',
            icon: 'pi pi-times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Download',
            icon: 'pi pi-arrow-down',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

function formatNumber(number, options = {}) {
    const {
        decimals = 2,
        thousandsSeparator = ",",
        decimalSeparator = ".",
        currency = "$",
    } = options;

    if (isNaN(number)) {
        return "Invalid Number";
    }

    // Round to the specified decimals
    const fixedNumber = number.toFixed(decimals);

    // Split the number into whole and decimal parts
    const [integerPart, decimalPart] = fixedNumber.split(".");

    // Add thousands separators to the integer part
    const formattedInteger = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        thousandsSeparator
    );

    // Combine integer and decimal parts
    const formattedNumber = decimalPart
        ? `${formattedInteger}${decimalSeparator}${decimalPart}`
        : formattedInteger;

    // Add currency symbol if specified
    return currency ? `${currency}${formattedNumber}` : formattedNumber;
}


const history = ref()
const layout = ref('all');
const tableLayouts = ref(['all', 'send', 'receive']);



</script>

<template>
    <partialCard :height="'h-[100%] bg-gif'" :padding-t="'pt-14'" :overflow="''">
        <template #card-title>
            <Backnav text-color="text-black" margin-x="0">
                Transaction History
            </Backnav>
        </template>

        <template #card-content>
            <div class="card overflow-y-scroll">
                <!-- <DataView :value="TransactionHistory" :layout="layout">
                    <template #header>
                        <div class="flex gap-2 justify-end">
                            <SelectButton v-model="layout" :options="tableLayouts" :allowEmpty="false">
                                <template #option="{ option }">
                                    <i v-if="option === 'send'" class="pi pi-arrow-up" />
                                    <i v-else-if="option === 'receive'" class="pi pi-arrow-down" />
                                    <i v-else class="pi pi-arrow-right-arrow-left rotate-90" />
                                </template>
</SelectButton>
</div>
</template>
<template #all="slotProps">

                    </template>
<template #send="slotProps">
                        <Timeline :value="events" class="customized-timeline">
                            <template #marker="slotProps">
                                <span
                                    class="flex w-10 h-10 items-center justify-center text-white rounded-full z-10 shadow-sm font-semibold timeIcon"
                                    :style="{ backgroundColor: slotProps.item.color }">
                                    <p>{{ slotProps.item.date }}</p>
                                </span>
                            </template>
<template #content="slotProps">
                                <Card class="mt-4">
                                    <template #title>
                                        {{ slotProps.item.status }}
                                    </template>
<template #subtitle>
                                        {{ slotProps.item.date }}
                                    </template>
<template #content>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
                                            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
                                            nobis, culpa ratione quam perferendis esse, cupiditate
                                            neque quas!
                                        </p>
                                        <Button label="Read more" text></Button>
                                    </template>
</Card>
</template>
</Timeline>
</template>
<template #receive="slotProps">

                    </template>
</DataView> -->

                <Timeline :value="History" class="customized-timeline">
                    <template #marker="slotProps">
                        <span
                            class="flex items-center w-10 h-10 rounded-full justify-center text-white z-10 shadow-sm font-semibold timeIcon"
                            style="background-color: black;">
                            <p>{{ slotProps.item.Months.slice(0, 3) }}</p>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <div
                            class="w-full h-10 bg-yellow-400 rounded-lg shadow-md flex items-center justify-between px-3 timeIcon z-10">
                            <div class="font-bold text-lg">
                                <p>{{ slotProps.item.Months }}</p>
                            </div>
                            <div class="hidden sm:block">
                                <p>Transactions: <span class="font-bold text-lg">{{
                                        slotProps.item.summary.totalTransactions }}</span></p>
                            </div>
                            <div class="">
                                <p class="font-bold text-lg">{{
                                    formatNumber(slotProps.item.summary.totalAmount) }}</p>
                            </div>
                        </div>
                        <Card v-for="transaction in slotProps.item.transactions"
                            :class="transaction.type === 'Credit' ? 'mt-4 border-b-2 border-green-500 !bg-green-50' : 'mt-4 border-b-2 border-red-500 !bg-red-50'">

                            <template #title>
                                <div class="w-full flex justify-between gap-5">
                                    {{ formatNumber(transaction.amount) }}
                                    <div :class="transaction.type === 'Credit' ? 'text-green-500' : 'text-red-500'">
                                        {{ transaction.type }}
                                    </div>
                                </div>
                            </template>
                            <template #subtitle>
                                {{ transaction.date }}
                            </template>
                            <template #content>
                                <div class="flex w-full justify-between items-center">
                                    <p v-if="transaction.type === 'Credit'">
                                        From : <span>{{ transaction.senderFullName }}</span>
                                    </p>
                                    <p v-else-if="transaction.type === 'Debit'">
                                        To : <span>{{ transaction.receiverFullName }}</span>
                                    </p>
                                    <Button @click="showTemplate(transaction)">
                                        <i class="pi pi-receipt"></i>
                                    </Button>


                                </div>
                            </template>
                        </Card>
                    </template>
                </Timeline>
                <div class="receipt">
                    <ConfirmDialog group="templating">
                        <template #message="slotProps">
                            <div
                                class="flex flex-col items-center w-full text-left justify-start gap-4 border-b border-surface-200 dark:border-surface-700">
                                <i :class="slotProps.message.icon"
                                    class="!text-5xl text-primary-500"></i>
                                    <div class="text-xl w-full grid gap-2">
                                        <p class="flex justify-between gap-5">Amount: <span class="font-semibold text-right">{{ formatNumber(slotProps.message.transaction.amount) }}</span></p>
                                        <p class="flex justify-between gap-5">Date: <span class="font-semibold text-right">{{ slotProps.message.transaction.date }}</span></p>
                                        <p class="flex justify-between gap-5">Time: <span class="font-semibold text-right">{{ slotProps.message.transaction.time }}</span></p>
                                        <p class="flex justify-between gap-5">Sender: <span class="font-semibold text-right">{{ slotProps.message.transaction.senderFullName }}</span></p>
                                        <p class="flex justify-between gap-5">Receiver: <span class="font-semibold text-right">{{ slotProps.message.transaction.receiverFullName }}</span></p>
                                        <p class="flex justify-between gap-5">Type: <span class="font-semibold text-right">{{ slotProps.message.transaction.type }}</span></p>
                                    </div>
                            </div>
                        </template>
                    </ConfirmDialog>
                </div>
            </div>
        </template>
    </partialCard>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Squada+One&display=swap');

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}

/* A very important Styling for Timeline */
.timeIcon {
    position: sticky;
    top: 0;
    margin-top: 10px;
}

.p-dialog{
    
}
</style>
