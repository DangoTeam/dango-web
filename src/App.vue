<template>
  <main id="app">
    <Navbar />
    <router-view />
    <footer>
      <hr class="line" />
      <img src="./assets/dango.svg" width="50px" />
      <span>© Copyright - 2021</span>
    </footer>
  </main>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar"),
  },
};
</script>

<style src="@/assets/style.css"></style>
