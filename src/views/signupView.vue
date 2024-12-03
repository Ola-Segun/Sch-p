<script setup>
import Card from "primevue/card";
import Backnav from "@/components/Backnav.vue";
import SignLogo from '@/assets/svg/signLogo.svg';
import partialCard from "@/components/partialCard.vue";
import { InputGroup, InputGroupAddon, InputText, Password, FloatLabel, Checkbox, Button } from "primevue";
</script>

<template>
    <Backnav>Sign Up</Backnav>
    <partialCard>
        <template #card-title>
            <div class=" text-text-primary font-bold">Welcome to Name</div>
            <small>Create a new Account</small>
        </template>

        <template #card-content>
            <div class="logo flex justify-center">
                <img :src="SignLogo" alt="">
            </div>

            <div class="font-semibold grid gap-7">
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="username" />
                        <label for="username">Username</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-key"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <Password v-model="value3" inputId="password" toggleMask strongRegex />
                        <label for="password">Password</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-key"></i>
                    </InputGroupAddon>
                    <FloatLabel variant="on">
                        <Password v-model="value3" inputId="confirm-password" toggleMask strongRegex />
                        <label for="confirm-password">Confirm Password</label>
                    </FloatLabel>
                </InputGroup>
            </div>

            <div class="flex items-center gap-4">
                <Checkbox v-model="size" inputId="size_large" name="size" value="Large" size="large" />
                <label for="size_large" class="text-lg">
                    By creating an account your aggree to our <RouterLink  to="/"
                        class="font-semibold text-text-primary text-center">Terms and Condtions</RouterLink>
                </label>
            </div>

            <div class="self-end grid gap-6 mb-10">

                <RouterLink  class="w-full" to="/accountType">
                    <Button label="Signup" class="w-full" />
                </RouterLink>

                <div class="w-full flex justify-center">
                    <p>Have an Account? <RouterLink  to="/" class="font-semibold text-text-primary text-center">Signin
                        </RouterLink>
                    </p>
                </div>
            </div>
        </template>
    </partialCard>
</template>
