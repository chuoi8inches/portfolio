<template>
  <div id="projects">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="p in filtered" :key="p.id">
          <ProjectCard :project="p" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectEntry } from '../types'
import ProjectCard from './ProjectCard.vue'

const props = defineProps<{
  projects: ProjectEntry[]
  tags: string[]
  query?: string
}>()

const filtered = computed(() => {
  const q = (props.query || '').toLowerCase().trim()
  return props.projects.filter((p) => {
    if (props.tags && props.tags.length > 0) {
      const hasTag = props.tags.every((t) => p.tags.includes(t))
      if (!hasTag) return false
    }
    if (!q) return true
    return (
      p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q)
    )
  })
})
</script>

<style scoped>
#projects {
  margin-top: 20px;
}
</style>

