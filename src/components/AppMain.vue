<!-- SEZIONE JS SCRIPT -->
<script>
import ProjectCard from './ProjectCard.vue'
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'AppMain',
    components: {
        ProjectCard
    },

    data() {
        return {
            store,
            projects: []
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.results.data;
            })
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <main>
        <div class="container mt-5"> 
            <div class="row"> 
                <div class="col-12"> 
                    <h1 class="text-center">Benvenuto in Boolfolio</h1>
                </div>
                <div class="row"> 
                    <ProjectCard v-for="project, index in projects" :key="index" :project="project" />
                </div>
            </div>
        </div>
    </main>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;
</style>./ProjectCard.vue/index.js