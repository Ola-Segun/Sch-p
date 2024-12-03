<script setup>
import partialCard from '@/components/partialCard.vue';
import Backnav from '@/components/Backnav.vue';
import { RouterLink } from 'vue-router';
import { Button, InputOtp } from 'primevue';
</script>
<template>
    <partialCard :height="'h-[100%]'" :padding-t="'pt-14'">
        <template #card-title>
            <Backnav text-color="text-black" margin-x="0">
                Student Details
            </Backnav>
        </template>
        <template #card-content>
            <div class="card flex justify-center">
                <div class="flex flex-col items-center">
                    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
                    <p class="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your
                        phone.</p>
                    <InputOtp v-model="value" mask integerOnly :length="6" style="gap: 0">
                        <template #default="{ attrs, events, index }">
                            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                            <div v-if="index === 3" class="px-4">
                                <i class="pi pi-minus" />
                            </div>
                        </template>
                    </InputOtp>
                    <div class="flex justify-between mt-8 self-stretch">
                        <Button label="Resend Code" link class="p-0" severity="help" variant="text"></Button>
                        <Button label="Submit Code"></Button>
                    </div>
                </div>
            </div>

            <div class="self-end grid gap-6  mb-10">
                <RouterLink  class="w-full" to="/student/account/success">
                    <Button label="Continue" icon="pi pi-arrow-right" icon-pos="right" class="w-full" />
                </RouterLink>

                <div class="w-full flex justify-center ">
                    <p>Have an Account? <RouterLink  to="/" class="font-semibold text-text-primary text-center">Signin
                        </RouterLink>
                    </p>
                </div>
            </div>
        </template>
    </partialCard>
</template>

<style scoped>
.custom-otp-input {
    width: 48px;
    height: 48px;
    font-size: 24px;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0;
    border: 2px solid var(--p-inputtext-border-color);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--p-inputtext-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--p-focus-ring-color);
}

.custom-otp-input:first-child,
.custom-otp-input:nth-child(5) {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

}

.custom-otp-input:nth-child(3),
.custom-otp-input:last-child {
    border: 2px solid ;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right-width: 2px;
    border-right-style: solid;
    border-color: var(--p-inputtext-border-color);
}
</style>