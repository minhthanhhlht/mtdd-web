<template>
  <div>
    <el-container class="container">
      <Header />
      <el-main class="content">
        <el-row class="section-register">
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content ep-bg-purple-dark"
          /></el-col>
        </el-row>
      </el-main>
      <Footer />
    </el-container>
  </div>
</template>

+
<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",

  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: {},
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  // background: url(@/assets/img/bg.jpg) repeat;
}

.content {
  height: 500px;
  padding: 0;
  margin-top: 60px;
}
.section-register {
  background: url(https://images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg)
      center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box,
    linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto
      repeat scroll padding-box border-box rgb(82, 67, 170);
  height: 100%;
  width: 100%;
}
</style>
