<template>
  <div>
    <Header />
    <el-container class="container"> </el-container>
    <Footer />
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
      products: {}
    };
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/img/bg.jpg) repeat;
}
</style>
