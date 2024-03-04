<!-- SEZIONE JS SCRIPT -->
<script>
import ProjectCard from '../components/ProjectCard.vue'
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'AppBlog',
    components: {
        ProjectCard
    },

    data() {
        return {
            store,
            projects: [],
            currentProjectPage: 1,
            lastProjectPage: null,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page_number){
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentProjectPage = response.data.results.current_page;
                this.lastProjectPage = response.data.results.last_page;
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
                    <h1 class="text-center">Il Blog del Boolfolio</h1>
                </div>
                <div class="row"> 
                    <ProjectCard v-for="project, index in projects" :key="index" :project="project" />
                </div>
                <div class="row"> 
                    <div class="col-12">
                        <ul class="pagination d-flex justify-content-center">
                            <li> <button :class="currentProjectPage == 1 ? 'disabled' : ''" class="btn btn-square btn-outline-success" @click="getProjects(currentProjectPage - 1)">Precedente</button> </li>
                            <li> <button :class="currentProjectPage == lastProjectPage ? 'disabled' : ''" class="btn btn-outline-success" @click="getProjects(currentProjectPage + 1)">Successivo</button> </li>
                        </ul>
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
</style>