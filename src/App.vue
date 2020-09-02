<template>
  <div id="app">
    <!-- <div id="nav">
      <p>
        <router-link to="/">Home</router-link>
      </p>
      <p>
        <router-link to="/about">About</router-link>
      </p>
      <p>
        <router-link to="/portfolio">Portfolio</router-link>
      </p>
      <p>
        <router-link to="/links">Links</router-link>
      </p>
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav p {
  display: inline-block;
  margin: 10px;
}

#nav p:hover {
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
