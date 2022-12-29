<template>
  
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  
}
a {    
    color: #fff;
    display: inline-block;    
    text-decoration: none;
}
a:hover {   
    text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
