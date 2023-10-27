<style scoped>
.wrapper {
    background-color: rgb(223, 223, 223);
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