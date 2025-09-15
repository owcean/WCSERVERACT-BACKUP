<template>
  <div class="page-container">
    <main class="content-container">
      <h1>Welcome to the Home Page</h1>
      <p>Please choose your role:</p>
      <router-link to="/student" class="role-link">
        <button class="role-button">Go to Student Portal</button>
      </router-link>
      <router-link to="/admin" class="role-link">
        <button class="role-button">Go to Admin Portal</button>
      </router-link>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #FDD2E2;
  margin: 0;
  padding: 0;
}
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/*
 * Component-Specific Styles
 * These styles are correctly placed within the <style scoped> block.
 */
.content-container {
  background-color: #fff;
  padding: 60px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 100%;
}

h1 {
  color: #800040;
  margin-bottom: 15px;
  font-size: 2em;
}

p {
  margin-bottom: 30px;
  color: #555;
  font-size: 1.1em;
}

.role-link {
  text-decoration: none;
  display: block;
}

.role-button {
  margin-top: 15px;
  width: 100%;
  padding: 14px;
  font-size: 1.1em;
  background-color: #800040;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.role-button:hover {
  background-color: #a00050;
}
</style>
