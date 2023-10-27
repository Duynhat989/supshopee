<style scoped>
.header{
    background-color: #f84c2f;
    min-height: 70px;
    width: 100%;
    padding:0 20px;
    color: white;
    text-align: center;
}
h1{
    text-transform: uppercase;
    font-size: 1.75em;
}
</style>
<template>
    <div class="header">
        <h1>SupShopee</h1> 
        <span> --- Online sales support --- </span>
    </div>
</template>
<script setup>
    const click = () => {
        alert("Xin chao")
    }
</script>