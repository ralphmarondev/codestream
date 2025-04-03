<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const onSendMessage = () => {
  console.log('Name:', name.value)
  console.log('Email:', email.value)
  console.log('Message:', message.value)
}
</script>

<template>
  <div class="container mt-3">
    <div class="row d-flex flex-column flex-lg-row">
      <div class="col">
        <div class="card p-3">
          <form @submit.prevent="onSendMessage">
            <div class="card-content">
              <h5 class="mt-3 mx-3 text-primary">Contact Us</h5>
              <div class="card-body">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                    v-model="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                    v-model="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                    v-model="message"
                    required
                  ></textarea>
                </div>
                <button class="btn btn-primary px-4 py-2 mt-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
