<script>
export default {
    name: 'app',
    data () {
      return {

      }
    },
    watch: {
      '$route': {
        handler: function (to) {
          document.title = to.meta.title || '';
        },
        immediate: true
      }
    }

}
</script>

<template>
  <div id="app">
    <!-- Header -->
    <div class="header">
      <div class="headerWrapper">
        <router-link to="/"><h1>Rest Country API</h1></router-link>
      </div>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111517;
  font-size: 14px;
  height: 100%;
  background-color: #fff;
}

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

.header {
  background-color: #fff;
  padding: 0 75px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  position: relative;
}

.headerWrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #000;
}

@media (max-width: 875px) {
  .header {
    padding: 0 15px;
  }

  h1 {
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}


</style>