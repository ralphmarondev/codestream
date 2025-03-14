<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="container">
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <img class="mb-2" src="/logo.png" alt="CodeStream Logo" width="40" height="40">
          <small class="d-block mb-3 text-body-secondary">
            &copy; {{ currentYear }} CodeStream. All rights reserved.
          </small>
          <div class="d-flex gap-3">
            <a href="https://facebook.com/codestream" target="_blank" class="text-secondary">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/codestream" target="_blank" class="text-secondary">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/codestream" target="_blank" class="text-secondary">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="col-6 col-md">
          <h5>Our Services</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary text-decoration-none" href="#">Web Development</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Mobile App Development</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">UI/UX Design</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Backend Solutions</a></li>
          </ul>
        </div>

        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary text-decoration-none" href="#">Help Center</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">User Guide</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">API Documentation</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Contact Support</a></li>
          </ul>
        </div>

        <div class="col-6 col-md">
          <h5>Company</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary text-decoration-none" href="#">About Us</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Portfolio</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Blog</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Careers</a></li>
          </ul>
        </div>

        <div class="col-6 col-md">
          <h5>Legal</h5>
          <ul class="list-unstyled text-small">
            <li><a class="link-secondary text-decoration-none" href="#">Privacy Policy</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Terms of Service</a></li>
            <li><a class="link-secondary text-decoration-none" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
