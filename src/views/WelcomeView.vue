<script setup>
    import introAnimation from '@/components/introAnimation.vue';
    import { RouterLink } from 'vue-router';
    import BottomFlow from '@/assets/svg/bottomFlow.svg'
</script>

<template>
    <div class="h-screen md:intro-content grid md:grid-flow-col md:justify-between md:gap-[3%] grid-flow-row justify-center items-center mx-[5%] text-white">
        <div class="animation w-full h-full grid items-center">
            <introAnimation />
        </div>
        <div class="intro-text mb-20">
            <div class="text-3xl mb-2">
                App Name
            </div>
            <div class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nisi?
            </div>
        </div>
    </div>
    <!-- <div class="absolute w-full">
        <img :src="BottomFlow" alt="" class="h-30 w-screen">
    </div> -->
    <RouterLink  to="/signup" class="absolute bg-white h-[4rem] w-[4rem] rounded-full flex justify-center items-center bottom-7 right-8">
        <i class="pi pi-arrow-right font-bold text-2xl" style="font-size:30px; font-weight: bolder;"></i>
    </RouterLink>
</template>
