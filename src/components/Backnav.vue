<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router ? router.go(-1) : window.history.back();
  } else {
    router ? router.push("/") : (window.location.href = "/");
  }
};

defineProps({
  textColor:{
    type: String,
    default: 'text-white'
  },
  marginX:{
    type: String,
    default: 'mx-4'
  },
  marginB: {
    type: String,
    default: 'mb-3'
  }
})
</script>

<template>
    <div :class="`flex ${textColor} ${marginX} ${marginB} w-fit items-center gap-3 text-xl font-semibold cursor-pointer`" @click="goBack">
        <i class="pi pi-angle-left"></i>
        <slot class=""></slot>
    </div>
</template>