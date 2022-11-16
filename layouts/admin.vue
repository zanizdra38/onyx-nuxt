<template>
  <div id="admin-page" class="row-dz layout-admin-wrap">
    <div id="admin-sidebar">
      <nav id="admin-navbar">
        <div id="container-admin-logo">
          <img id="img-admin-logo" src="~/assets/onyx_lite.png" alt="onyx logo" />
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link parent-link" to="/admin">Analytics</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link parent-nav-link" href="" @click.prevent="showSubUsers=!showSubUsers">Users</a>
            <ul v-if="showSubUsers" class="sub-nav-bar">
              <li class="nav-item sub-nav-link">
                <nuxt-link class="nav-link sub-link" to="/admin/users">Users</nuxt-link>
              </li>
              <li class="nav-item sub-nav-link">
                <nuxt-link class="nav-link sub-link" to="/admin/users/createNewUser">Create User</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-on:click="showSubPages=!showSubPages">
            <nuxt-link class="nav-link parent-link" to="/admin/pages">Pages of Site</nuxt-link>
          </li>
          <li class="nav-item" v-on:click="showSubPages=!showSubPages">
            <nuxt-link class="nav-link parent-link" to="/admin/categories">Categories</nuxt-link>
          </li>
          <li class="nav-item" v-on:click="showSubPages=!showSubPages">
            <nuxt-link class="nav-link parent-link" to="/admin/products">Products</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link parent-link" to="/admin/news">News</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link parent-link" to="/admin/projects">Projects</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link parent-link" to="/admin/settings">Settings</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link parent-link" to="/admin/logout">Logout</nuxt-link>
          </li>
        </ul>

      </nav>
    </div>
    <div id="admin-main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showSubPages: false,
      showSubUsers: false,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
//        this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style scoped>
#admin-page{
  font-family: Roboto-Regular;
}
.row-dz {
  display: flex;
}
.layout-admin-wrap {
  width: 100%;
  height: 100vh;
}
#admin-sidebar {
  padding: 0;
  background-color: #2D3A4B;
  min-width: 150px;

}
#admin-sidebar a{
  color: #E4DDDD;
  font-size: 1.2rem;
}
#admin-navbar {
  height: 100%;
  align-content: flex-start;
  padding: 20px;
}
#admin-main {
  width: 100%;
  padding: 20px;
}
#container-admin-logo{
  height: 30px;
  margin-bottom: 15px;
}
#img-admin-logo{
  height: 100%;
}
.nav-item, .parent-nav-link{
  margin-bottom: 0.5rem;
}
.sub-nav-link{
  padding-left: 10px;
}
/*
.nav-item > a {
  color: red;
}
 */
#admin-sidebar .nav-item:hover .parent-link,
#admin-sidebar .sub-nav-link:hover .sub-link{
  color: #F5E144;
}
#admin-sidebar .nav-item a{
  text-decoration: none;
}
</style>
