<script setup>
import StaffCard from '@/assets/svg/staffCard.svg'
</script>

<template>
<!-- <div class=""> </div> -->
<img :src="StaffCard" alt="" class="account-card">
    <div class="card-content w-fit gap-[4.5rem] sm:gap-[9rem] mt-12 px-5 select-none absolute  grid top-44 text-white self-start">
        <div class="student-name h-fit text-2xl font-semibold">Dean Lewis</div>
        <div class="h-fit grid gap-1 self-end ">
            <div class="account-id text-xl">4232 .... .... 2434</div>
            <div class="account-balance font-bold text-2xl">$3,324.00</div>
        </div>
    </div>
</template>

<style scoped>


* {
    font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}



.account-card{
    width: 100%;
    max-width: 30rem;
}

.student-name {}

.account-id {
    letter-spacing: 1.5px;
}

@media (min-width: 430px) {
    .card-content{
        gap: 6.5rem
    }
}

@media (min-width: 450px) {
    .card-content{
        gap: 7rem
    }
}
@media (min-width: 490px) {
    .card-content{
        gap: 9rem
    }
}

</style>