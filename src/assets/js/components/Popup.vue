<style scoped>
.wrapper {
    background-color: white;
    min-height: 100vh;
}
.left{
    background-color: #fc816b;
    min-height: 100vh;
}
.right{
    min-height: 100vh;
}
</style>
<template>
    <div class="wrapper">
        <HeaderTop />
        <div class="container-fluid">
            <div class="row">
                <div class="left col-2">
                    <LeftTop :dataFromChild="receivedData" @update:dataFromChild="updateReceivedData" />
                </div>
                <div class="right col-10">
                    <Home v-if="receivedData == 'HOME'" />
                    <Person v-if="receivedData == 'PERSON'" />
                    <Store v-if="receivedData == 'STORE'" />
                    <Product v-if="receivedData == 'product'" />
                    <Setup v-if="receivedData == 'SETUP'" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeaderTop from './Layouts/Header.vue'
import LeftTop from './Left.vue'
import Home from './Right/Home.vue'
import Product from './Right/Product.vue'
import Setup from './Right/Setup.vue'
import Store from './Right/Store.vue'
import Person from './Right/Person.vue'
import { ref,onMounted } from 'vue';
const main = ref(false)
const receivedData = ref('HOME')
function updateReceivedData(newData) {
  receivedData.value = newData;
}
onMounted(()=>{
    setTimeout(()=>{
        main.value = true
    },3000)
})
</script>