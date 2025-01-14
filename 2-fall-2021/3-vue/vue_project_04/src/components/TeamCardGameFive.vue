<template>
  <div class="container card">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3">
            <p>9 AM</p>
            <p>APPROX</p>
          </div>
          <div class="col-3">
            <p>RGE</p>
            <p>FPX</p>
          </div>
          <div class="col-3">
            <show-button/>
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
  name: 'TeamCardGameThree',
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
