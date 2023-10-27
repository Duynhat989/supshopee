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
                    <LeftTop />
                </div>
                <div class="right col-10">
                    <RightTop />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeaderTop from './Layouts/Header.vue'
import LeftTop from './Left.vue'
import RightTop from './Right.vue'

let show = "home"
const click = () => {
    alert("Xin chao")
}
</script>