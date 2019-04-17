<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Chart</router-link> |
      <router-link to="/input">Input</router-link>
    </div>
    <transition :name="pageDirection()" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    pageDirection() {
      return this.$route.fullPath === '/' ? 'slide-left' : 'slide-right';
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: all .25s;
}
.slide-left-enter, .slide-left-leave-active, .slide-right-enter, .slide-right-leave-active {
  opacity: 0;
}
.slide-left-enter, .slide-right-leave-active {
  transform: translateX(100vh);
}
.slide-left-leave-active, .slide-right-enter {
  transform: translateX(-100vh);
}

</style>
