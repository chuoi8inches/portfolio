<script setup lang="ts">
import { ref } from 'vue'
import './styles.css'

import Header from './components/Header.vue'
import Filters from './components/Filters.vue'
import ProjectsGrid from './components/ProjectsGrid.vue'
import ContactForm from './components/ContactForm.vue'

import { projects as sampleProjects } from './data/projects'

const projects = ref(sampleProjects)
const activeTags = ref<string[]>([])
const query = ref('')

function toggleTag(tag: string) {
  const i = activeTags.value.indexOf(tag)
  if (i === -1) activeTags.value.push(tag)
  else activeTags.value.splice(i, 1)
}
</script>

<template>
  <v-app>
    <Header />
    <main class="container">
      <section class="hero">
        <h1 class="text-h3">Hi — I'm Your Name</h1>
        <p class="text-body-1">A short intro — front-end developer focused on Vue, TypeScript, and fast experiences.</p>
      </section>

      <section>
        <Filters :projects="projects" :tags="activeTags" :query="query" @update:query="(v) => (query = v)" @toggle-tag="toggleTag" />
      </section>

      <ProjectsGrid :projects="projects" :tags="activeTags" :query="query" />

      <ContactForm />

      <footer class="footer">
        <div>© {{ new Date().getFullYear() }} Your Name — built with Vue + Vite</div>
      </footer>
    </main>
  </v-app>
</template>

<style scoped>
.container { padding-bottom: 40px; }
.hero { margin-top: 24px; }
</style>
