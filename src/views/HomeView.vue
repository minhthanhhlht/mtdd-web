<template>
  <div class="home">  
    <Header />  
    <!-- <Header /> -->
    <!-- <el-row class="mb-4">
    <button @click="say">Demo</button>
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain @click="say">Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button> -->
  <!-- </el-row> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  },
  methods: {
    say() {
      alert("msg")
    }
  }
}
</script>
