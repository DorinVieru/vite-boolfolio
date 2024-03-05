<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';

export default {
  name: 'ProjectCard',
  props: {
    project: Object
  },
  
  data() {
    return {
      store,
    }
  },
  methods: {
    // Funzione per mostrare la descrizione abbreviata
    createExcerpt(){
      return this.project.description.substr(0, 20) + "...";
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
  <div class="col-12 col-md-4 mt-5">
    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="link">
      <div class="card">
          <img :src="getUrlImage()" alt="" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title text-capitalize">{{ project.title}}</h5>
              <p class="card-text"><strong>Descrizione:</strong> {{ createExcerpt() }}</p>
          </div>
            <ul class="list-group list-group-flush">
                  <!-- <li class="list-group-item"><strong>Tipo di progetto:</strong> {{ project.type.name }}</li> -->
                  <!-- <li class="list-group-item"><strong>Techs:</strong> <span v-for="tech, index in project.technologies" :key="index" class="me-1"> {{ tech.name }}</span></li> -->
              </ul>
          <div class="card-body">
          </div>  
      </div>
    </router-link>
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