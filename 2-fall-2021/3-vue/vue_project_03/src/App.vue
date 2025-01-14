<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3">
          <show-all-button/>
          <team-card-game-one/>
        </div>
        <div class="col-6 offset-3">
          <team-card-game-two/>
        </div>
        <div class="col-6 offset-3">
          <team-card-game-three/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-css"
import ShowAllButton from './components/ShowAllButton.vue'
import TeamCardGameOne from './components/TeamCardGameOne.vue'
import TeamCardGameTwo from './components/TeamCardGameTwo.vue'
import TeamCardGameThree from './components/TeamCardGameThree.vue'

export default {
  name: 'App',
  components: {
    ShowAllButton,
    TeamCardGameOne,
    TeamCardGameTwo,
    TeamCardGameThree
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  background-color: #191f25;
  height: 100vh;
  width: 100vw;
}
</style>
