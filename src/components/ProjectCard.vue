<template>
  <v-card :class="['project-card', { featured: $props.project.featured }]" outlined>
    <v-img v-if="$props.project.image" :src="$props.project.image" height="160" />
    <v-card-title>{{ $props.project.title }}</v-card-title>
    <v-card-subtitle class="text-body-2">{{ $props.project.year }}</v-card-subtitle>
    <v-card-text>
      <div>{{ $props.project.description }}</div>
      <div class="tags">
        <v-chip v-for="t in $props.project.tags" :key="t" class="ma-1" small>{{ t }}</v-chip>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="$props.project.link" text :href="$props.project.link" target="_blank" rel="noopener">Live</v-btn>
      <v-btn v-if="$props.project.repo" text :href="$props.project.repo" target="_blank" rel="noopener">Repo</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { ProjectEntry } from '../types'

defineOptions({ name: 'ProjectCard' })

defineProps<{ project: ProjectEntry }>()
</script>

<style scoped>
.project-card {
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.project-card:hover {
  transform: translateY(-4px);
}
.tags {
  margin-top: 8px;
}
</style>
