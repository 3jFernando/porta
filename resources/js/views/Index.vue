<template>
  <div>
    
    <div v-if="$store.state.user == null">
      <div class="alert alert-info">cargando...</div>
   </div>
   <div v-else>    
      <div v-show="$store.state.menuActive == 1">
        <v-home />
      </div>
      <div v-show="$store.state.menuActive == 2">
        <v-profile />
      </div>
      <div v-show="$store.state.menuActive == 3">
        <v-briefcase />
      </div>
      <div v-show="$store.state.menuActive == 4">
        <v-reviews />
      </div>
      <div v-show="$store.state.menuActive == 5">
        <v-services />
      </div>
   </div>
    
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['user'],
  mounted () {
    this.$store.state.user = JSON.parse(this.user);
  }
}
</script>