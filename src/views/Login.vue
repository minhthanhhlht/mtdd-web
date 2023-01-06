<template>
  <div class="login">
    <el-container class="container is-vertical">
      <!-- <Header /> -->
      <el-row>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple-light" />
          <router-link to="/">
            <div class="header-logo">
              <img src="@/assets/img/mtdd_logo_160x160.png" alt="logo-header" />
              <span class="hidden-xs-only">MTDD</span>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>

      <el-main class="frontend-footer-brother">
        <el-row justify="center">
          <el-col :span="6" :xs="18">
            <div class="login-box">
              <div class="login-title">Đăng nhập hệ thống</div>
              <el-form ref="form" :model="form" :rules="rules">
                <!-- input user -->
                <el-form-item prop="username">
                  <el-input
                    v-model="form.username"
                    placeholder="Email"
                    size="large"
                    :clearable="true"
                   
                  >
                    <template #prefix>
                      <i
                        class="fa fa-user"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                </el-form-item>
                <!-- input password -->
                <el-form-item prop="password">
                  <el-input                  
                    v-model="form.password"
                    placeholder="Mật khẩu"
                    size="large"
                    type="password"
                    :clearable="true"
                    :show-password="true"
                  >
                    <template #prefix>
                      <i
                        class="fa fa-unlock-alt"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                </el-form-item>
                <div class="form-footer">
                  <el-checkbox>Lưu thông tin</el-checkbox>
                </div>
                <!-- Button login -->
                <el-form-item class="form-buttons">
                  <el-button
                    @click="validate('form')"
                    class="login-button"                    
                    type="success"
                    size="large"
                    >Đăng Nhập</el-button
                  >
                  <el-button
                  @click="loginWithGmailButton"
                    class="login-oauth-container"
                    type="default"
                    size="large"
                  >
                    <span id="google-icon" class="icon"></span>
                    <span class="label">Đăng nhập với google</span>
                  </el-button>
                  <hr />
                  <el-button
                    class="register-button"
                    @click="registerUser"
                    type="default"
                    size="large"
                    >Đăng ký tài khoản!</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
        <div class="leftLarge">
          <img class="footer-image" src="@/assets/img/mtdd-left.png" alt="" />
        </div>
        <div class="rightLarge">
          <img class="footer-image" src="@/assets/img/mtdd-right.png" alt="" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";
import { ElMessage } from "element-plus";

export default {
  name: "Login",
  components: {},

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Vui lòng nhập tài khoản",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng email",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
   
    loginWithGmailButton () {
      alert("dang nhap google")
    },
    validate(formName) {
      this.$refs[formName].validate((valid, fields) => {
        if (valid) {
          this.loginSubmit();
        } else {
          ElMessage.error("Vui lòng nhập đầy đủ thông tin.");
        }
      });
    },
    loginSubmit() {
      this.$request
        .get(`http://localhost:6021/api/getuser/${this.form.username}`)
        .then((response) => {
          const userName = this.form.username;
          const password = this.form.password;
          const user = response.data[0].username;
          const pass = response.data[0].password;
          if (userName == user && password == pass) {
            ElMessage.success("Đăng nhập thành công.");
            this.$router.push({ path: "/dashboard" });
          } else {
            ElMessage.error("Tài khoản hoặc mật khẩu không đúng.");
          }
        });
    },
    registerUser() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>

<style scoped lang="scss">
a {
  color: #253858;
  display: inline-block;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

.el-row {
  margin-bottom: 20px;
  height: 43px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.header-logo {
  display: flex;
  height: 60px;
  align-items: center;
  cursor: pointer;

  img {
    height: 43px;
    width: 43px;
  }
  span {
    color: #253858;
    letter-spacing: 1.5px;
    font-weight: bold;
    padding-left: 12px;
    font-size: 20px;
  }
}

.grid-content {
  margin-top: 40px;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #f9fafc;
  // background: url(@/assets/img/bg.jpg) repeat;
}

.frontend-footer-brother {
  margin-top: 16px;
}

.login-box {
  width: 316px;
  // margin: 86px auto;
  margin-top: 40px;
  border-radius: 12px;
  padding: 25px 40px;
  max-width: 585px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
}

.login-title {
  text-align: center;
  color: #5e6c84;
  letter-spacing: -0.01em;
  font-weight: bold;
  font-size: 16px;
  line-height: 68px;
  user-select: none;
}

:deep(.el-input--large) .el-input__wrapper {
  padding: 4px 15px;
}

.form-footer {
  display: flex;
  align-items: center;
  .forgot-password {
    color: var(--ba-color-primary-light);
    margin-left: auto;
    user-select: none;
    cursor: pointer;
  }
}

.form-buttons {
  padding-top: 20px;
  .el-button {
    width: 100%;
    letter-spacing: 0.5px;
    margin-top: 20px;
    margin-left: 0;
  }
}

.login-button,
.register-button {
  font-weight: bold;
  border-radius: 4.8px;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
}

hr {
  display: block;
  width: 100%;
  height: 1px;
  border: 0;
  border-top: 2px solid hsl(0, 0%, 80%);
  margin: 1em 0;
  padding: 0;
}

.form-error {
  color: var(--el-color-danger);
  font-size: 12px;
  line-height: 1;
  padding-top: 2px;
  position: absolute;
  top: 100%;
  left: 0;
}

.background {
  // z-index: -900;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
.footer-image {
  width: 400px;
  height: 400px;
}
.leftLarge {
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 400px;
  bottom: 0;
  max-width: 30%;
}
.rightLarge {
  position: fixed;
  width: 400px;
  bottom: 0;
  right: 0;
  max-width: 30%;
}

.login-oauth-container {
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
}

#google-icon {
  background: url(@/assets/img/sign-in-with-google.svg) 0 50% no-repeat;
}
span .icon {
  margin: 0 4px;
  display: inline-block;
  width: 18px;
  height: 18px;
  font-weight: bold;
  border-radius: 4.8px;
}

span .label {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  color: #505f79;
  padding: 3px;
  height: 32px;
  line-height: 32px;
}
</style>
