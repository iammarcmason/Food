<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Food App</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/food" class="nav-link">Food List</a>
        </li>
        <li class="nav-item">
          <a href="/addFood" class="nav-link">Add Food</a>
        </li>
        <li class="nav-item">
          <a href="/schedule" class="nav-link">Schedule</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
