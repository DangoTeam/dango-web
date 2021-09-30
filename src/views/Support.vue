<template>
  <div class="support">
    <span class="question">If you have any question</span>
    <br />
    <span class="join">Join our support server!</span>
    <br />
    <iframe
      src="https://discord.com/widget?id=785315334127091742&theme=dark"
      width="350"
      height="500"
      allowtransparency="true"
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  </div>
</template>

<style scoped>
.question {
  margin-top: 20px;
}
.support {
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}

span {
  color: var(--text-primary);
  text-decoration: var(--text-active);

  display: block;
  font-size: 20px;
}

.join {
  margin-top: 15px;
  font-size: 24px;
}
</style>
