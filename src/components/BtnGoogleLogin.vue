<template>
  <div class="text-center">
    <v-btn
    class="mt-6 mb-6"
      prepend-icon="mdi-check-circle"
      append-icon="mdi-account-circle"
      @click="redirectToAuth"
    >
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

      Iniciar Sesión

      <template v-slot:append>
        <v-icon color="warning"></v-icon>
      </template>
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const redirectToAuth = () => {
  const message = ref('Redireccionando a /auth');
  console.log(message.value);

  // Redireccionar a /auth
  window.location.href = 'http://localhost:3000/auth';
};
</script>

<style scoped>
.btn-google-login {
  background-color: blue;
  color: green;
}
</style>

  