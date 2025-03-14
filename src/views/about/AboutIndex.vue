<script setup lang="ts">
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore()

const { count } = storeToRefs(store)
const increment = store.increment
</script>

<template>
  <div class="container mt-3">
    <h5 class="text-primary">About</h5>

    <div class="mt-3">
      <p>Count: {{ count }}</p>
      <button @click="increment" type="button" class="btn btn-primary">Increment</button>
    </div>
  </div>
</template>