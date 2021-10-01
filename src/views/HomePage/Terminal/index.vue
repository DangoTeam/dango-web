<template>
  <div class="window">
    <div class="controls">
      <button class="buttons close" id="close"></button>
      <button class="buttons maximize"></button>
      <button class="buttons minimize"></button>
      <div class="title">Dango</div>
    </div>
    <div class="bash">
      <span id="span">dango ~ </span>
      <span class="type-it blink">dango --version</span>
      <br />
      <span class="result" style="display: none">v0.1.0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
  methods: {
    typeWriter(classe) {
      const element = document.querySelector(classe);
      const textArray = element.innerHTML.split("");
      element.innerHTML = "";
      setTimeout(() => {
        for (let i = 0; textArray.length > i; i++) {
          // eslint-disable-next-line no-return-assign
          setTimeout(() => (element.innerHTML += textArray[i]), 130 * i);
        }
      }, 5000);
      setTimeout(() => {
        const result = document.querySelector(".result");
        result.style.display = "block";
      }, textArray.length * 130 + 5500);
    },
  },
  mounted() {
    this.typeWriter(".type-it");
  },
};
</script>
<style src="@/views/HomePage/Terminal/style.css" scoped></style>
