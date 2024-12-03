<script setup>
import partialCard from '@/components/partialCard.vue';
import Backnav from '@/components/Backnav.vue';
import circleChecked from '@/assets/svg/circleChecked.svg';
import ConfettiAnimation from '@/assets/svg/ConfettiAnimation.gif';
import { RouterLink } from 'vue-router';
import { Button, InputOtp } from 'primevue';
</script>
<template>
    <partialCard :height="'h-[100%] bg-gif'" :padding-t="'pt-14'">
        <template #card-title>
            <Backnav text-color="text-black" margin-x="0">
                Student Details
            </Backnav>
        </template>
        <template #card-content>
            <img :src="ConfettiAnimation" alt="" class="absolute top-[15%] w-[250px] justify-self-center ">
            <div class="card grid gap-5 justify-center h-fit self-center">
                <img :src="circleChecked" alt="" class="w-24 h-fit self-center justify-self-center">
                <div class="text-text-primary font-bold h-fit text-2xl text-center">
                    Account Created Successfully
                </div>
            </div>

            <div class="self-end grid gap-6  mb-10">
                <RouterLink  class="w-full" to="/account/view">
                    <Button label="Let's go" icon="pi pi-arrow-right" icon-pos="right" class="w-full" />
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
    .bg-gif{
        background-image: url(/vue-pro/src/assets/svg/ConfettiAnimation.gif);
    }

</style>