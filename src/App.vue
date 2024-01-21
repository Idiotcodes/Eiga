<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
import BottomFooter from './components/BottomFooter.vue'
</script>

<template>
  <header></header>
  <TopNavbar />
  <RouterView />
  <BottomFooter />
</template>
