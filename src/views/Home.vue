<template>
  <div class="home">
    <Terminal />
    <p>A future shell, made in Rust and compiled for binary!
      Regardless of your OS, you'll be able to use Dango, still in development,
      if you have a suggestion, don't hesitate to send a pull request!</p>
    <a class="code_button" href="https://github.com/shaundeveloper/dango" target="_blank">CODE</a>
  </div>
</template>

<script>
import Terminal from '@/components/Terminal.vue'

export default {
  name: 'Home',
  components: {
    Terminal
  }
}
</script>

<style scoped>
p {
  color: var(--text-primary);
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  display: flex;
}

.code_button {
  color: var(--text-primary);
  font-weight: bold;
  font-size: 24px;
  border: 2px solid var(--text-active);
  border-radius: 19px;
  margin: auto;
  display: block;
  width: max-content;
  padding: 5px 10px 5px 10px;
  transition: all .2s;
  margin-top: 15px;
}

.code_button:hover {
  background: var(--text-active);
}

</style>
