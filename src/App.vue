<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <div v-scroll-content class="content">
        <p v-for="i in 100">{{''+i+i+i+i}}</p>
      </div>
    </div>
    <div>
      <div v-scroll-content="{dir: 'x', speed: 20, timeout: 100}" class="row"><span v-for="i in 100">{{''+i+i+i+i}}</span></div>
    </div>
  </div>
</template>

<script>
import {scrollContent} from './scrollContentDirective'

export default {
  name: 'app',
  components: {},
  directives: {
    scrollContent
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.content{
  overflow: auto;
  width: 300px;
  height: 300px;
  background: aquamarine;
  display: inline-block;
}

.row{
  margin-top: 20px;
  display: inline-block;
  overflow: auto;
  width: 300px;
  background: orange;
  white-space: nowrap;
}

.row span{
  height: 50px;
  line-height: 50px;
  margin-right: 15px;
}
</style>
