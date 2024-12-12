<script setup name="MapStyleButton">
import { MapLocation } from '@element-plus/icons';
function handleClick() {
    alert('MapStyleButton clicked');
}
</script>

<template>
    <el-button @click="handleClick" type="info" :icon="MapLocation" circle />

</template>

<style scoped>
.el-button {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9999;
}
</style>