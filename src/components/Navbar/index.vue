<template>
  <nav>
    <NavItem href="/">
      <img src="@/assets/dango.svg" />
    </NavItem>
    <ul>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/installation">Installation</NavItem>
      <NavItem href="/support">Support</NavItem>
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/Navbar/NavItem";

export default {
  components: { NavItem },
};
</script>
<style src="@/components/Navbar/style.css"></style>
