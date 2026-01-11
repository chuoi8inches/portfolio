<template>
  <v-app-bar color="primary" dark elevated>
    <v-toolbar-title class="text-h6">Your Name</v-toolbar-title>
    <v-spacer />
    <v-btn text href="#projects">Projects</v-btn>
    <v-btn text href="#contact">Contact</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
defineOptions({ name: 'ProjectHeader' })
</script>

<style scoped>
</style>
