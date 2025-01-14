<template>
  <div id="app">
      <div>
        <nav-bar/>
      </div>
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
        <div class="col-6 offset-3">
          <team-card-game-four/>
        </div>
        <div class="col-6 offset-3">
          <team-card-game-five/>
        </div>
        <div class="col-6 offset-3">
          <team-card-game-six/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-css"
import Navbar from './components/Navbar.vue'
import ShowAllButton from './components/ShowAllButton.vue'
import TeamCardGameOne from './components/TeamCardGameOne.vue'
import TeamCardGameTwo from './components/TeamCardGameTwo.vue'
import TeamCardGameThree from './components/TeamCardGameThree.vue'
import TeamCardGameFour from './components/TeamCardGameFour.vue'
import TeamCardGameFive from './components/TeamCardGameFive.vue'
import TeamCardGameSix from './components/TeamCardGameSix.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ShowAllButton,
    TeamCardGameOne,
    TeamCardGameTwo,
    TeamCardGameThree,
    TeamCardGameFour,
    TeamCardGameFive,
    TeamCardGameSix
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
