<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light py-3 position-sticky top-0"
  >
    <div class="container">
      <a class="navbar-brand">
        <img
          src="/logo.png"
          alt="Logo"
          width="30"
          height="30"
          class="d-inline-block"
        />
        CodeStream
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link
              to="/"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/about"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >About</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/our-work"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >Our Work</router-link
            >
          </li>
          <li class="nav-item mx-2">
            <router-link
              to="/services"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >Services</router-link
            >
          </li>
          <!-- <li class="nav-item mx-2">
            <router-link to="/news" class="nav-link" aria-current="page" exact-active-class="active">News</router-link>
          </li> -->
          <li class="nav-item mx-2">
            <router-link
              to="/contact"
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar .nav-link {
  color: #333;
  transition: color 0.3s ease;
}

// Ensure active class applies properly
:deep(.active),
.navbar .nav-link.router-link-exact-active {
  color: purple !important;
  font-weight: bold;
}
</style>
