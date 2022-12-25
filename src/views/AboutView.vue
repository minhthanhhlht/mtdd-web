<template>
  <div class="about">
    <div>
    <Header />
    <el-container class="container"> 
      
    </el-container>
    <Footer />
  </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {

  components: {
    Header,
    Footer
  }
}

</script>




<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/img/bg.jpg) repeat;
}
</style>