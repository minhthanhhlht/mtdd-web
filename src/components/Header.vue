<template>
  <el-row class="mb-4">
    <button @click="say('hello')">Demo</button>
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain @click="say('hello')">Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>
</template>

<script>


export default {
  name: 'Header',
  data() {
    return {

    }
  },
  method: {
    say(message) {
      alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
