<template>
  <div class="h-full flex flex-col p-8">
    <navbar class="flex-none" />
    <router-view
        v-slot="{ Component }"
        class="flex-grow pb-8"
      >
        <transition name="fade" mode="out-in">
          <component
            :is="Component"
            class=""
          />
        </transition>
      </router-view>
    <foot class="flex-none" />
  </div>
</template>

<script>
import Foot from "./components/footer";
import Navbar from "./components/navbar";

export default {
  name: "App",
  components: {
    Navbar,
    Foot,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body{
  @apply h-screen bg-gray-900
  
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a0a4a8;
}
</style>
