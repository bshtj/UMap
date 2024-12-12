<template>
  <JiaDingMapContainer />
  <!-- <MainLayout /> -->


  <MainLayout v-if="showMap" @map-loaded="showMap = true" />

  <MapStyleButton />
</template>

<script setup>
import { ref } from 'vue';
import JiaDingMapContainer from '@/components/JiaDingMapContainer.vue';
import MainLayout from '@/components/MainLayout.vue';
import MapStyleButton from '@/components/MapStyleButton.vue';

const showMap = ref(true); // 默认显示地图
</script>

<style scoped></style>
