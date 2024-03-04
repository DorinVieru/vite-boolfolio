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
                console.log(response.data.results);
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
                    <p>Lorem ipsum dolor et sdsdsdsd</p>
                </div>
                <div class="col-12"> 
                    <ProjectCard />
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