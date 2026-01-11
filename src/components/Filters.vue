<template>
  <div class="filters">
    <v-text-field
      v-model="localQuery"
      label="Search projects"
      dense
      clearable
      @input="$emit('update:query', localQuery)"
    />

    <div class="chips">
      <v-chip
        v-for="tag in allTags"
        :key="tag"
        :input-value="selectedTags.includes(tag)"
        class="ma-1"
        @click="$emit('toggle-tag', tag)"
        filter
      >
        {{ tag }}
      </v-chip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

defineOptions({ name: 'ProjectFilters' })

const props = defineProps<{
  tags: string[]
  projects: { tags: string[] }[]
  query?: string
}>()

defineEmits(['update:query', 'toggle-tag'])

const localQuery = ref(props.query ?? '')

watch(
  () => props.query,
  (v) => {
    localQuery.value = v ?? ''
  }
)

const allTags = computed(() => {
  const set = new Set<string>()
  props.projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return Array.from(set).sort()
})

const selectedTags = computed(() => props.tags || [])
</script>

<style scoped>
.filters {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.chips {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
