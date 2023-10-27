<style scoped>
.slider{
    min-height: 50px;
    padding: 10px;
}
.btn{
    background-color: #fd6044;
    box-shadow: 0 2px 3px 0 #e9e9e991, 0 2px 4px rgba(233, 233, 233, 0.514)e9;
    border-radius: 7px;
    width: 100%;
    height: 55px;
    color: white;
    margin-top: 5px;
}
</style>
<template>
    <div class="slider">
        <button class="btn" @click="click">
            HOME
        </button>
        <button class="btn" @click="click">
            PRODUCT
        </button>
        <button class="btn" @click="click">
            METHOD
        </button>
        <button class="btn" @click="click">
            PRODUCT
        </button>
        <button class="btn" @click="click">
            METHOD
        </button>
        <button class="btn" @click="click">
            PRODUCT
        </button>
        <button class="btn" @click="click">
            METHOD
        </button>
        <button class="btn" @click="click">
            SETUP
        </button>
    </div>
</template>
<script setup>
    const click = () => {
        
    }
</script>