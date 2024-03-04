<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      
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
  <div>
      <!-- HEADER -->
      <AppHeader />
      <div>
        <!-- MAIN -->
        <AppMain />
      </div>
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;

</style>