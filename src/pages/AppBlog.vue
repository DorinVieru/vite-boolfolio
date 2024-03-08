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
            types:[],
            currentProjectPage: 1,
            lastProjectPage: null,
        }
    },
    created() {
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getProjects(page_number){
            axios.get(`${this.store.baseUrl}/api/projects/`, {
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentProjectPage = response.data.results.current_page;
                this.lastProjectPage = response.data.results.last_page;
            })
        },

        getTypes(){
            axios.get(`${this.store.baseUrl}/api/types/`).then((response) => {
                this.types = response.data.results;
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
                    <h1 class="text-center">I Progetti del Boolfolio</h1>
                </div>
                <div class="col-12 mt-5"> 
                    <router-link :to="{ name: 'projects-type', params: { slug: type.slug } }" class="badge rounded-pill text-bg-primary me-2 text-decoration-none type-badge" v-for="(type, index) in types" :key="index"> {{ type.name }} </router-link>
                </div>
                <div class="row"> 
                    <ProjectCard v-for="project, index in projects" :key="index" :project="project" />
                </div>
                <div class="row"> 
                    <div class="col-12">
                        <ul class="pagination d-flex justify-content-center">
                            <li> <button :class="currentProjectPage == 1 ? 'disabled' : ''" class="btn btn-square btn-outline-success me-3 fw-bold" @click="getProjects(currentProjectPage - 1)">Precedente</button> </li>
                            <li> <button :class="currentProjectPage == lastProjectPage ? 'disabled' : ''" class="btn btn-outline-success fw-bold" @click="getProjects(currentProjectPage + 1)">Successivo</button> </li>
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

.pagination{
    margin: 20px 10px;
}

.type-badge{
    background-color: rgb(0, 21, 45) !important;
    font-size: 18px;
    transition: 0.4s;

    &:hover{
        background-color: #6C63FF !important;
    }

    &.active{
        background-color: #6C63FF !important;
    }
}
</style>