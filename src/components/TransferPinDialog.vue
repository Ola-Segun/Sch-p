<script setup>
import { ref } from 'vue';
import { Button, InputText, Dialog, InputOtp } from 'primevue';
// Define props
const props = defineProps({
    visibleTrue: {
        type: Boolean,
        default: false
    }
});

// Create emits for communication
const emit = defineEmits(['update:visibleTrue']);

// State for form inputs
const username = ref('');
const email = ref('');

// Method to handle cancel
const handleCancel = () => {
    // Close the modal
    emit('update:visibleTrue', false);
};

// Method to handle save
const handleSave = () => {
    // Perform any save logic here

    // Close the modal
    emit('update:visibleTrue', false);
};

const otpValue = ref(null);
</script>

<template>
    <div class="card flex justify-center">
        <!-- <Dialog :visible="visibleTrue" @update:visible="handleCancel" modal header="Edit Profile"
            :style="{ width: '25rem' }">
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" v-model="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" v-model="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="handleCancel"></Button>
                <Button type="button" label="Save" @click="handleSave"></Button>
            </div>
        </Dialog> -->

        <Dialog :visible="visibleTrue" @update:visible="handleCancel" modal pt:root:class="!border-0 !bg-transparent"
            pt:mask:class="backdrop-blur-sm">
            <template #container="{ closeCallback }">
                <div class="flex flex-col items-center p-8 rounded-2xl gap-5 bg-white border-gray-400 border-2 "
                    >
                    <div
                        class="text-white rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20">
                        <i class="pi pi-key text-5xl" style="font-size: 1.5rem"></i>
                    </div>
                    <div class="">
                        <p>input Your Pin</p>
                    </div>
                    <div class="inline-flex flex-col gap-2">
                        <InputOtp v-model="otpValue" variant="filled" integerOnly mask />
                    </div>
                    <div class="flex items-center gap-4">
                        <Button label="Confirm" @click="closeCallback" text
                            class=" w-full !text-gray-700 !border !bg-gray-200 !border-gray-400 hover:!bg-gray-300 hover:!text-primary"></Button>
                    </div>
                </div>
            </template>
        </Dialog>
    </div>
</template>