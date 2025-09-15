<template>

  <div class="page-container">
    <form @submit.prevent="submitForm" class="form-container">
      <h1>KGT Student Portal</h1>
      <label for="id">Student ID:</label>
      <input type="text" id="id" v-model="student.id" required />
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="student.firstName" required />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="student.lastName" required />
      <label for="section">Section:</label>
      <input type="text" id="section" v-model="student.section" required />
      <button type="submit">Submit</button>
    </form>
    <router-link to="/" id="go-back-home">Go Back to Home</router-link>
  </div>

</template>

<script>
export default {
  data() {
    return {
      student: {
        id: '',
        firstName: '',
        lastName: '',
        section: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Student data submitted:', this.student);
      alert('Student data submitted successfully!');
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #EEA8BF;
  margin: 0;
  padding: 0;
}
.page-container {
  /* Use Flexbox to center the content vertically and horizontally */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.form-container {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #800040;
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #800040;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #a00060;
}

#go-back-home {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #800040;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

#go-back-home:hover {
  background-color: #a00060;
}
</style>
