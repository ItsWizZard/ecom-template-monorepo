<script setup lang="ts">
const { data: users } = await useAsyncData('users', () =>
  $fetch('http://localhost:3000/api/users', { method: 'get' }),
);
const { user, login, logout } = useUser();
</script>

<template>
  <div class="container">
    <h1>Nuxt 4 monorepo e-com template</h1>

    <div class="buttons">
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
    </div>

    <pre>User: {{ user || 'Not logged in' }}</pre>
    <pre>Fetched Users: {{ users }}</pre>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1em;

  color: #f7f7f7;
  background-color: #101010;
}

h1 {
  margin: 0 auto;
  margin-top: 1em;
  width: 60%;

  text-align: center;
}

.buttons {
  margin: 0 auto;
  display: flex;
  gap: 1em;
}

button {
  padding: 0.25em 0.5em;
}

pre {
  margin: 0 auto;
  width: 80%;
  min-height: 30px;

  padding: 0.5em 0.75em;
  border-radius: 0.35em;
  background-color: #ffffff19;
}
</style>
