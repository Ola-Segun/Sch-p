<script setup>
    import smallBlob from '@/assets/svg/smallBlob.svg'
    import bigBlob from '@/assets/svg/BigBlob.svg'
    import CardTemplate from '@/assets/svg/CardTemplate.svg'
</script>

<template>
    <div>
        <img :src="smallBlob" class=" absolute z-[1]" alt="">
        <img :src="CardTemplate" class=" absolute z-[2]" alt="">
        <img :src="bigBlob" class=" absolute z-[3]" alt="">
    </div>
</template>