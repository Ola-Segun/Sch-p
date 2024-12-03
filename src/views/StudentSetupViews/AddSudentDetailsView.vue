<script setup>
import partialCard from '@/components/partialCard.vue';
import Backnav from '@/components/Backnav.vue';
import { InputGroup, InputGroupAddon, InputText, Password, FloatLabel, Checkbox, Button } from "primevue";
</script>

<template>
    <partialCard :height="'h-[100%]'" :padding-t="'pt-14'">
        <template #card-title>
            <Backnav text-color="text-black" margin-x="0">
                Account Type
            </Backnav>
            <div class=" text-text-primary font-bold">Student Details</div>
            <small class="text-black">Fill all details correctly.</small>
        </template>

        <template #card-content>
            <div class="grid gap-2 gr-col">
                <small class=" col-span-2">
                    Personal info
                </small>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="firstname" />
                        <label for="firstname">First name</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="lastname" />
                        <label for="lastname">Last name</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="middlename" />
                        <label for="middlename">Middle name</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="email" />
                        <label for="email">Email</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="dateOfBirth" />
                        <label for="dateOfBirth">Date of birth</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="phoneNumber" />
                        <label for="phoneNumber">Phone Number</label>
                    </FloatLabel>
                </InputGroup>
                <small class="col-span-2">School details</small>
                <hr class="col-span-2">
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="schoolName" />
                        <label for="schoolName">School Name</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="matriculationNumber" />
                        <label for="matriculationNumber">Matriculation number</label>
                    </FloatLabel>
                </InputGroup>
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="state" />
                        <label for="state">State</label>
                    </FloatLabel>
                </InputGroup>
                <small class="col-span-2">Additional details</small>
                <hr class="col-span-2">
                <InputGroup>
                    <FloatLabel variant="on">
                        <InputText v-model="value3" inputId="extra" />
                        <label for="extra">Extra</label>
                    </FloatLabel>
                </InputGroup>
            </div>

            <div class="self-end grid gap-6  mb-10">
                <RouterLink  class="w-full" to="/student/confirmOtp">
                    <Button label="Continue" icon="pi pi-arrow-right" icon-pos="right" class="w-full"/>
                </RouterLink>

                <div class="w-full flex justify-center ">  
                    <p>Have an Account? <RouterLink  to="/" class="font-semibold text-text-primary text-center">Signin</RouterLink> </p>
                </div>
            </div>
        </template>
    </partialCard>
</template>