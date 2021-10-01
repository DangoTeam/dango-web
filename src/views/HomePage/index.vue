<template>
  <div class="home">
    <Terminal />
    <p>
      A future shell, made in Rust and compiled for binary! Regardless of your
      OS, you'll be able to use Dango, still in development, if you have a
      suggestion, don't hesitate to send a pull request!
    </p>
    <a
      class="code_button"
      href="https://github.com/Dangos-Team/dango"
      target="_blank"
      >CODE</a
    >
  </div>
</template>
<script>
import Terminal from "@/views/HomePage/Terminal";

export default {
  name: "Home",
  components: {
    Terminal,
  },
};
</script>
<style src="@/views/HomePage/style.css" scoped></style>
