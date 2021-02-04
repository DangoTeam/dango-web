<template>
  <nav>
    <router-link :to="{ name: 'Home' }"><img src="../assets/dango.svg"></router-link>
    <router-link :to="{ name: 'Home' }">HOME</router-link>
    <router-link :to="{ name: 'Installation' }">INSTALLATION</router-link>
    <router-link :to="{ name: 'Support' }">SUPPORT</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

nav {
  display: flex;
  justify-content: center;
}

nav img {
  width: 33.5px;
  position: absolute;
  left: 15px;
  top: 15px;
  transition: all .2s;
}

nav img:hover {
  transform: scale(1.2);
  cursor: pointer;
}

a {
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 44px;
  text-align: right;
  color: var(--text-primary);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all .2s;
  padding: 15px;
}

a:hover {
  transition: .3s;
  color: var(--text-active);
}
</style>
