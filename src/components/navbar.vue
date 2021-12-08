<template>
  <div class="flex justify-center items-center w-full uppercase font-semibold text-xl mb-8">
    <div class="flex flex-row gap-32">
      <router-link class="hover:text-Blue-Green" to="/">
        <div class="flex gap-2"><i class="ri-fingerprint-line"></i>resume</div>
      </router-link>
      <router-link class="hover:text-Blue-Green" to="/projects">
        <div class="flex gap-2"><i class="ri-code-box-fill"></i>projects</div>
      </router-link>
      <router-link class="hover:text-Blue-Green" to="/contact">
        <div  class="flex gap-2"><i class="ri-mail-fill"></i> contact</div>
      </router-link>
    </div>
  </div>
</template>

<style>
.router-link-active {
  @apply text-green-600;
}
</style>
