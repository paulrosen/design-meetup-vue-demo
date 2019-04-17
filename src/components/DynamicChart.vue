<template>
  <div class="dynamic-chart">
    <svg width="300px" height="200px" viewBox="0 0 300 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke-width="1px" class="frame">
        <line x1="0" y1="0" x2="0" y2="200"></line>
        <line x1="0" y1="200" x2="300" y2="200"></line>
        <line x1="75" y1="200" x2="75" y2="190"></line>
        <line x1="150" y1="200" x2="150" y2="190"></line>
        <line x1="225" y1="200" x2="225" y2="190"></line>
        <line x1="300" y1="200" x2="300" y2="190"></line>
      </g>
      <g class="data">
        <line x1="0" :y1="y0" x2="75" :y2="y1"></line>
        <line x1="75" :y1="y1" x2="150" :y2="y2"></line>
        <line x1="150" :y1="y2" x2="225" :y2="y3"></line>
        <line x1="225" :y1="y3" x2="300" :y2="y4"></line>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'dynamic-chart',
  props: {
    y0: {
      type: String,
      required: true,
    },
    y1: {
      type: String,
      required: true,
    },
    y2: {
      type: String,
      required: true,
    },
    y3: {
      type: String,
      required: true,
    },
    y4: {
      type: String,
      required: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .frame {
    fill: #0050ff;
    stroke: #0050ff;
  }
  .data {
    fill: #888030;
    stroke: #888030;
  }
</style>
