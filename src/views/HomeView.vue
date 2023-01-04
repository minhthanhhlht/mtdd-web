<template>
  <div>
    <el-container class="container">
      <Header />
      <el-main class="content">
        <el-row class="section-register">
          <el-row>
            <el-col :span="12"
              ><div class="grid-content ep-bg-purple" />
              <h1 class="title-one">
                Trello tập hợp tất cả nhiệm vụ, thành viên nhóm và công cụ của
                bạn lại với nhau
              </h1>
              <p>
                Duy trì mọi thứ ở cùng một nơi—dù cho nhóm của bạn không ở cùng
                nhau.
              </p>
              <el-form class="form-register">
                <el-form-item>
                  <el-input
                    size="large"
                    type="email"
                    class="w-50 email"
                    placeholder="Email"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <button class="btn-register">
                    Đăng ký - Hoàn toàn miễn phí
                  </button>
                </el-form-item>
              </el-form>

              <!-- <el-button>Đăng ký - Hoàn toàn miễn phí</el-button> -->
            </el-col>
            <el-col :span="12"
              ><div class="grid-content ep-bg-purple-light" />
              <img
                src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
                alt=""
              />
            </el-col>
          </el-row>
        </el-row>

        <el-row> </el-row>
        <el-row> </el-row>
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.container {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  // background: url(@/assets/img/bg.jpg) repeat;
}

.content {
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

.title-one {
  width: 400px;
  margin-left: 200px;
  color: #ffffff;
  text-align: left;
  font-size: 48px;
}

p {
  width: 500px;
  font-size: 20px;
  margin-left: 200px;
  min-width: 500px;
  text-align: left;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 24px;
}

img {
  max-width: 100%;
  height: auto;
}

.email {
  height: 48px;
  width: 376px;
  font-size: 16px;
}

.form-register {
  margin-left: 200px;
}
.btn-register {
  align-items: center;
  font-size: 16px;
  width: 248px;
  padding: 13px 16px;
  color: #ffffff;
  background-color: rgb(0, 101, 255);
  border: 1px solid rgb(0, 101, 255);
  border-radius: 4px;
}

.btn-register:hover {
  cursor: pointer;
  background-color: rgb(7, 71, 166);
  border-color: rgb(7, 71, 166);
  text-decoration: none;
}
</style>
