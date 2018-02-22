<template>
  <div>
    <nav-bar></nav-bar>
    {{getUserName}}
  </div>
</template>
<script>
  import NavBar from '../partials/navbar';

  export default {
    components: {
      NavBar,
    },
    computed: {
      getUserName() {
        return this.$store.getters.getUserName;
      },
    },
  };
</script>
