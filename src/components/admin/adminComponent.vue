<template>
  <div>{{getAdminName}}</div>
</template>

<script>
  export default {
    computed: {
      getAdminName() {
        return this.$store.getters.getAdminName
      },
    },
  }
</script>
