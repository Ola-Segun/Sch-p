<script setup>
import { RouterView } from 'vue-router'
import Backnav from './components/Backnav.vue';
import partialCard from './components/partialCard.vue';



</script>

<template>
  <div class="h-screen w-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-blue-start via-blue-mid to-blue-end flex flex-col justify-end">
    <RouterView />
  </div>
</template>