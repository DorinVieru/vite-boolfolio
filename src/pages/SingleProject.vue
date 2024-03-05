<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'SingleProject',
    
    data() {
        return {
            store,
            project: null,
            success: null,
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getProjectData(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success){
                    this.project = response.data.project;
                    this.success = response.data.success;
                }
                else{
                    this.$router.push({name: 'not-found'});
                }
            });
        },

        // Funzione per recuperare l'immagine di default another-image
        getUrlImage(){
        let image;
        if(this.project.cover_image != null) {
            image = '/storage/' + this.project.cover_image
        }
        else{
            image = '/img/another-image.jpg';
        }

        return `${this.store.baseUrl}${image}`
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <main>
        <div class="container">
            <div class="row justify-content-center" v-if="success == true">
                <div class="col-7 my-5">
                    <div class="card">
                      <img :src="getUrlImage()" alt="" class="card-img-top">
                      <div class="card-body">
                          <h5 class="card-title text-capitalize"><strong>Titolo:</strong> {{ project.title}}</h5>
                          <p class="card-text"><strong>Descrizione:</strong> {{ project.description }}</p>
                      </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Tipo di progetto:</strong> {{ project.type.name }}</li>
                            <li class="list-group-item"><strong>Techs:</strong> <span class="me-2" v-for="tech, index in project.technologies" :key="index">{{ tech.name }}</span></li>
                        </ul> 
                    </div>
                </div>
                <div class="col-12 text-center mt-5">
                <a href="/blog" > <button class="btn btn-secondary ms-5"><i class="fa-solid fa-door-open"></i> Torna indietro</button></a>
            </div>
            </div>
        </div>
    </main>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

.pagination{
    margin: 20px 10px;
}
</style>