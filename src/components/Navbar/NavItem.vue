<template>
  <li>
    <router-link :to="href">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["href"],
};
</script>
