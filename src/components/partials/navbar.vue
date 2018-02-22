<template>
  <ul>
    <li><a class="logout" @click="logout">LogOut</a></li>
  </ul>
</template>

<script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.replace('/login');
      },
    },
  };
</script>
<style scoped>

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #000;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }

  .logout {
    text-align: right;
  }
</style>
