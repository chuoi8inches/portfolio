<template>
  <div id="contact">
    <v-card class="pa-4" outlined>
      <v-card-title>Contact</v-card-title>
      <v-card-text>
        <v-form ref="formRef" v-model="valid">
          <v-text-field v-model="form.name" label="Name" required />
          <v-text-field v-model="form.email" label="Email" type="email" required />
          <v-textarea v-model="form.message" label="Message" required />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="!valid" color="primary" @click="submit">Send</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const formRef = ref()
const valid = ref(false)
const form = reactive({ name: '', email: '', message: '' })

function submit() {
  if (!valid.value) return
  // For this template we just log and show an alert — no backend
  console.log('Contact submit', { ...form })
  // simple confirmation
  alert('Message sent (local demo) — check console for payload')
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
#contact {
  margin-top: 36px;
}
</style>

