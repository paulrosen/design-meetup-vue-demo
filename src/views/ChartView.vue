<template>
  <div class="chart-view">
    <h1>{{title()}}</h1>
    <h2>Chart View</h2>
    <dynamic-chart :y0="y0" :y1="y1" :y2="y2" :y3="y3" :y4="y4"></dynamic-chart>
    <div class="input">
      <input type="number" min="0" max="200" step="10" v-model="y0">
      <input type="number" min="0" max="200" step="10" v-model="y1">
      <input type="number" min="0" max="200" step="10" v-model="y2">
      <input type="number" min="0" max="200" step="10" v-model="y3">
      <input type="number" min="0" max="200" step="10" v-model="y4">
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import DynamicChart from "../components/DynamicChart";
export default {
  name: 'chart-view',
  data() {
    return {
      y0: "80",
      y1: "20",
      y2: "60",
      y3: "140",
      y4: "30",
    }
  },
  components: {DynamicChart},
  methods: {
    ...mapGetters(['title']),
  },
}
</script>

<style lang="scss" scoped>
  .chart-view {
    width: 300px;
  }
  .input {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
