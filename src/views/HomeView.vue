<template>
  <div>
    <el-container class="container">
      <Header />
      <el-main class="content">
        <el-row class="section-register">
          <el-row>
            <el-col :span="12">
              <h1 class="title-one">
                Trello tập hợp tất cả nhiệm vụ, thành viên nhóm và công cụ của
                bạn lại với nhau
              </h1>
              <p class="information-one">
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

        <el-row class="section-about">
          <el-col :span="24"> 
            <p class="information-two">Thông tin cơ bản về Trello</p>
            <h2 class="title-two">Đỉnh cao về năng suất</h2>
            <p class="information-three">Đơn giản, linh hoạt và mạnh mẽ. Chỉ với bảng, danh sách và thẻ, bạn sẽ biết rõ ai đang làm gì và những việc cần làm. Tìm hiểu thêm trong hướng dẫn bắt đầu của chúng tôi.</p>
          </el-col>

          <el-col :span="12">
          </el-col>
        </el-row>
        <el-row> </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content" /></el-col>
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
  margin-top: 46px;
  margin-left: 200px;
  color: #ffffff;
  text-align: left;
  font-size: 48px;
}

.title-two {
  margin-left: 200px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 2.2rem;
  text-align: left;
  text-transform: uppercase;
}
.information-one {
  width: 500px;
  font-size: 20px;
  margin-left: 200px;
  min-width: 500px;
  text-align: left;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 24px;
}

.information-two {
  font-size: 16px;
  font-weight: bold;
  margin-left: 200px;
  margin-bottom: 8px;
  text-align: left;
  text-transform: uppercase;
}

.information-three {
  font-size: 20px;
  margin-left: 200px;
  text-align: left;
  max-width: 600px;
  word-wrap: break-word;
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
