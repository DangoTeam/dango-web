<template>
  <main id="app">
    <Navbar />
    <router-view />
    <footer>
      <hr class="line" />
      <img src="./assets/dango.svg" />
      <span>© Copyright - 2021</span>
    </footer>
  </main>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
  },
};
</script>

<style>
:root {
  --primary: #303841;
  --secondary: #3a4750;
  --text-primary: #eee;
  --text-active: #00adb5;
  --secondary-dark: #232a30;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  background-color: var(--primary);
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.line {
  width: 95%;
  border: 1px solid #3a4750;
  margin: auto;
}

footer {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

footer img {
  margin-top: 15px;
  width: 50px;
}

footer span {
  color: var(--text-primary);
  font-size: 18px;
}
</style>
