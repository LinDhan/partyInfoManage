<template>
  <div id="app">
    <nav>
      <h3>智慧党建后台管理系统</h3>
    </nav >
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;*/
  color: #2c3e50;
}
nav{
  background-color:rgb(248, 0, 0);
  display: flex;align-items: center;
  padding: 0 1%;color:white
}

</style>
