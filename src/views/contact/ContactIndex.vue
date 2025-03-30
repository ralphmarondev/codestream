<script setup lang="ts">
import { ref } from 'vue'

const showToast = ref(false)

const toggleToast = () => {
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000) // Hide after 3 seconds
}
</script>

<template>
  <div class="container mt-3">
    Contact

    <button @click="toggleToast" type="button" class="btn btn-primary">
      Show toast
    </button>

    <div
      v-if="showToast"
      class="toast fade show position-fixed bottom-0 start-0 m-3"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">CodeStream</strong>
        <small>Just now</small>
        <button
          type="button"
          class="btn-close"
          @click="showToast = false"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
</template>
