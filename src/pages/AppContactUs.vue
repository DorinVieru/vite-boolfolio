<!-- SEZIONE JS SCRIPT -->
<script>
import AppContactForm from '../components/AppContactForm.vue'

import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'AppContactUs',
    components: {
        AppContactForm,
    },

    data() {
        return {
            store,
        }
    },
    created() {
        
    },
    methods: {
       
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <main>
        <div class="container mt-5"> 
            <div class="row"> 
                <div class="col-12 mt-2 mb-5"> 
                    <h1 class="text-center fs-1 fw-bold">Contatti</h1>
                </div>
                <div class="col-12 mt-2">
                    <div class="row justify-content-center">
                        <div class="col-5">
                            <p><strong><i class="fa-solid fa-location-dot"></i> Indirizzo: </strong>Via cercala approfonditamente, 6 12058</p>
                            <p><strong><i class="fa-solid fa-tree-city"></i> Città: </strong>Monza (MI)</p>
                        </div>
                        <div class="col-3">
                            <p><strong><i class="fa-solid fa-phone-volume"></i> Telefono: </strong>(+39) 348 7756 989</p>
                            <p><strong><i class="fa-solid fa-envelope"></i> Email: </strong>info@boolfolio.it</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <AppContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;


</style>./AppContactUs.vue/index.js