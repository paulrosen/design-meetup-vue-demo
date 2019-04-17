<template>
  <div class="input-view">
    <h1>{{title()}}</h1>
    <h2>Input View</h2>
    <input type="text" ref="inputTitle" @change="titleChange">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "input-view",
    methods: {
      ...mapGetters(['title']),
      ...mapActions(['setTitle']),
      titleChange() {
        const newTitle = this.$refs.inputTitle.value;
        this.setTitle(newTitle);
      },
    },
  }
</script>

<style scoped lang="scss">
</style>
