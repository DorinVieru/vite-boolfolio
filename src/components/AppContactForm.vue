<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'AppContactForm',

  data() {
    return {
      store,
      name: '',
      surname: '',
      email: '',
      phone: '',
      message: '',
    }
  },
  methods: {
    sendForm(){
        const data = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            message: this.message,
        }

        axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
            console.log(response.data);
        });
    }
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
    <form @submit.prevent="sendForm()" method="post">
        <div class="row">
            <div class="mb-3 col-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Nome" required v-model="name">
            </div>
            <div class="mb-3 col-6">
                <input type="text" name="surname" class="form-control" id="surname" placeholder="Cognome" required v-model="surname">
            </div>
            <div class="mb-3 col-6">
                <input type="text" name="email" class="form-control" id="email" placeholder="Email" required v-model="email">
            </div>
            <div class="mb-3 col-6">
                <input type="phone" name="phone" class="form-control" id="phone" placeholder="Numero di telefono" required v-model="phone">
            </div>
        </div>
        <div class="mb-3">
            <textarea name="message" class="form-control" id="message" rows="5" placeholder="Messaggio" required v-model="message"></textarea>
        </div>
        <div class="d-flex justify-content-center mt-4 mb-5">
            <button type="submit" class="btn btn-primary px-5 fs-6">Invia</button>
        </div>
    </form>
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

.link{
  text-decoration: none;
}

</style>