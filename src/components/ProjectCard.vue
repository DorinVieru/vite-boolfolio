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
    <div class="card">
        <img :src="getUrlImage()" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title text-capitalize">{{ project.title}}</h5>
            <p class="card-text"><strong>Descrizione:</strong> {{ createExcerpt() }}</p>
        </div>
            <ul class="list-group list-group-flush">
                <!-- <li class="list-group-item"><strong>Tipo di progetto:</strong> {{ $project->type != null ? $project->type->name : 'Non assegnato' }}</li> -->
                <li class="list-group-item"><strong>Slug:</strong> {{ project.slug }}</li>
                <!-- <li class="list-group-item"><strong>Techs:</strong> 
                    @forelse ($project->technologies as $tech)
                        <div class="my_badge d-inline-block mx-1 {{ $tech->badge_class }}">{{ $tech->name }}</div>
                    @empty
                        Il progetto non ha tecnologie assegnate.
                    @endforelse
                </li> -->
            </ul>
        <div class="card-body">
            <!-- <a href="{{ $project->cover_image !== null ? asset('/storage/' . $project->cover_image) : asset('/img/another-image.jpg') }}" target="_blank" class="btn btn-primary"><i class="fa-solid fa-download"></i> Scarica l'immagine</a>
            
            <a href="{{ route('admin.projects.edit', ['project' => $project['id']]) }}">
                <button type="button" class="btn btn-warning mx-2"><i class="fas fa-edit"></i> Modifica il progetto</button>
            </a>
            <form action="{{ route('admin.projects.destroy', ['project' => $project->id]) }}" method="POST" onsubmit="return confirm('Sei sicuro di voler cancellare {{ $project->title }}?')">
            @csrf
            @method('DELETE')
                <button type="submit" class="btn btn-danger"><i class="fas fa-trash"></i> Cancella il progetto</button>
            </form> -->
        </div>  
    </div>
 </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

</style>