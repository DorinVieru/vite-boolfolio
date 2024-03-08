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
      loading: false,
      errors: '',
    // success: false,
    }
  },
  methods: {
    sendForm(){
        this.loading = true;

        const data = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            message: this.message,
        }

        // DEFINISCO UN OGGETTO CONTENTE I MESSAGGI DI ERRORE
        this.errors = {};

        axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
            // Condizione che mi permette di resettare i campi inseriti dopo l'invio del modulo
            if(response.data.success){
                this.name = '';
                this.surname = '';
                this.email = '';
                this.phone = '';
                this.message = '';

                // this.success = true;

                this.$router.push({
                    name: 'thank-you'
                })
            }
            else{
                this.errors = response.data.errors;
            }

            this.loading = false;
        });
    }
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
    <!-- <div class="row" v-if="success">
        <div class="col-12">
            <div class="alert alert-success fw-bold"><i class="fa-solid fa-check-double"></i> Modulo inviato con successo</div>
        </div>
    </div> -->
    <form @submit.prevent="sendForm()" method="post">
        <div class="row">
            <div class="mb-3 col-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Nome" required v-model="name" :class="errors.name ? 'is-invalid' : ''">
                <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
            <div class="mb-3 col-6">
                <input type="text" name="surname" class="form-control" id="surname" placeholder="Cognome" required v-model="surname" :class="errors.surname ? 'is-invalid' : ''">
                 <p v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
            <div class="mb-3 col-6">
                <input type="text" name="email" class="form-control" id="email" placeholder="Email" required v-model="email" :class="errors.email ? 'is-invalid' : ''">
                 <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
            <div class="mb-3 col-6">
                <input type="phone" name="phone" class="form-control" id="phone" placeholder="Numero di telefono" required v-model="phone" :class="errors.phone ? 'is-invalid' : ''">
                 <p v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
        </div>
        <div class="mb-3">
            <textarea name="message" class="form-control" id="message" rows="5" placeholder="Messaggio" required v-model="message" :class="errors.message ? 'is-invalid' : ''"></textarea>
             <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
        </div>
        <div class="d-flex justify-content-center mt-4 mb-5">
            <button type="submit" class="btn btn-primary px-5 fs-5" :disabled="loading"><i class="fa-solid fa-hand-point-right"></i> {{loading ? 'Invio in corso...' : 'Invia' }}</button>
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