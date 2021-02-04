<template>
  <div class="window">
    <div class="controls">
      <button class="buttons close" id="close"></button>
      <button class="buttons maximize"></button>
      <button class="buttons minimize"></button>
      <div class="title">Dango</div>
    </div>
    <div class="bash">
        <span id="span">shaun ~ </span>
        <span class="type-it blink">dango --version</span>
        <br >
        <span class="result" style="display: none;">v0.1.0</span>
    </div>
  </div>
</template>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Ubuntu';

.window {
  width: 600px;
  margin: 75px auto;
  background: var(--secondary);
  height: 350px;
  border-radius: 5px;
  display: relative;
  font-family: 'Ubuntu', sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.afterclose {
  color: #34495e;
  display: none;
  text-align: center;
}

.open {
  color: #fff;
  padding: 15px;
  background: #2ecc71;
  border-radius: 4px;
  border: none;
}

.bash {
  width: 600px;
  background: var(--secondary-dark);
  height: 310px;
  border-radius: 5px;
  color: #fff;
  padding-top: 10px;
}

.windowmax {
  width: 100%;
  margin: auto;
  background: #2c3e50;
  height: 1000px;
  border-radius: 5px;
  display: relative;
}

.windowmin {
  width: 300px;
  height: 45px;
  background: #2c3e50;
  border-radius: 5px;
  bottom: 0;
  position: fixed;
}

.bashmax {
  display: absolute;
  width: 100%;
  background: #34495e;
  height: 960px;
  border-radius: 5px;
  bottom: 0;
  color: #fff;
}

/* !--end--! */

.buttons {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  float: right;
  margin: 13px 4px;
  border: none;
}

.close {
  background: #e74c3c;
}

.maximize {
  background: #f1c40f;
}

.minimize {
  background: #2ecc71;
}

.controls {
  height: 40px;
  top: 0;
}

.title {
  color: var(--text-primary);
  font-weight: bold;
  padding: 10px;
}

#span {
  color: var(--text-active);
  padding: 0 0 10px 10px;
}

.result {
  color: var(--text-primary);
  margin-left: 11px;
  margin-top: 3px;
}

.blink::after {
  content: '|';
  opacity: 1;
  display: inline-block;
  animation: blink .7s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

</style>

<script>

export default {
  name: 'Terminal',
  methods: {
    typeWriter (classe) {
      const element = document.querySelector(classe)
      const textArray = element.innerHTML.split('')
      element.innerHTML = ''
      setTimeout(() => {
        for (let i = 0; textArray.length > 1; i++) {
          // eslint-disable-next-line no-return-assign
          setTimeout(() => element.innerHTML += textArray[i], 130 * i)
        }
      }, 5000)
      setTimeout(() => {
        const result = document.querySelector('.result')
        result.style.display = 'block'
      }, textArray.length * 130 + 5500)
    }
  },
  mounted () {
    this.typeWriter('.type-it')
  }
}
</script>
