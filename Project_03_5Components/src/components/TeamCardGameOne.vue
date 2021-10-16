<template>
  <div class="container card">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <p>5 AM</p>
            <p>APPROX</p>
          </div>
          <div class="col-3">
            <p>FPX</p>
            <p>DK</p>
          </div>
          <div class="col-3">
            <show-button/>
            <p id="score"></p>
          </div>
          <div class="col-3">
            <p>Worlds</p>
          </div>              
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowButton from './ShowButton.vue';


export default {
  name: 'TeamCardGameOne',
  components: {
    ShowButton
  }
};
</script>

<style scoped>
.card {
  color:azure;
  border-radius: 10px;
  background-color: #313133;
  margin-top: 20px;
}
</style>
