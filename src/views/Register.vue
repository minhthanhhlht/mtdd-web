<template>
  <div class="register">
    <el-container class="container is-vertical">
      <!-- Header -->
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

      <el-main class="frontend-footer-brother" style="margin-top: 22px">
        <el-row justify="center">
          <el-col :span="6" :xs="18">
            <div class="register-box">
              <div class="register-title">Đăng ký tài khoản</div>
              <el-form ref="register" :model="register" :rules="rules">
                <!-- input user -->
                <el-form-item prop="username">
                  <el-input
                    v-model="register.username"
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
                <!-- Phone -->
                <el-form-item prop="phone">
                  <el-input
                    v-model="register.phone"
                    placeholder="Số điện thoai"
                    size="large"
                    :clearable="true"
                  >
                    <template #prefix>
                      <i
                        class="fa-solid fa-phone"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                </el-form-item>

                <!-- input password -->
                <el-form-item prop="password">
                  <el-input
                    v-model="register.password"
                    placeholder="Mật khẩu"
                    size="large"
                    type="password"
                    :clearable="true"
                  >
                    <template #prefix>
                      <i
                        class="fa fa-unlock-alt"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                </el-form-item>

                <!-- repeat password -->
                <el-form-item prop="repassword">
                  <el-input
                    v-model="register.repassword"
                    placeholder="Nhập lại mật khẩu"
                    size="large"
                    type="password"
                    :clearable="true"
                  >
                    <template #prefix>
                      <i
                        class="fa fa-unlock-alt"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                </el-form-item>

                <p class="quiet tos">
                  Bằng cách đăng kí, bạn xác nhận bạn đã đọc và chấp nhận
                  <a href="/">Điều khoản dịch vụ</a> và
                  <a href="/">Chính sách riêng tư</a> của chúng tôi.
                </p>
                <!-- Button login -->
                <el-form-item class="form-buttons">
                  <el-button
                    @click="validate('register')"
                    class="login-button"
                    type="success"
                    size="large"
                    >Đăng ký!</el-button
                  >
                  <hr />
                  <el-button
                    class="login-button"  
                    @click="loginUser"                  
                    type="default"
                    size="large"
                    >Bạn đã có tài khoản! Đăng nhập</el-button
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
import { ElMessage } from "element-plus";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      register: {
        username: "",
        phone: "",
        password: "",
        repassword: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Vui lòng nhập email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng email",
            trigger: ["blur", "change"],
          },
        ],
        phone: [
          {
            required: true,
            message: "Vui lòng nhập số điện thoại",
            trigger: "blur",
          },
          //   {
          //     type: "number",
          //     message: "Vui lòng nhập đúng định dạng số điện thoại",
          //     trigger: "blur",
          //   },
        ],
        password: [
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
            trigger: "blur",
          },
        ],
        repassword: [
          {
            required: true,
            message: "Vui lòng nhập lại mật khẩu",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginUser() {
      this.$router.push({ path: "/login" });
    },
    validate(formName) {
      this.$refs[formName].validate((valid, fields) => {
        if (valid) {
          if (this.register.password === this.register.repassword) {
            // this.loginSubmit();
            alert("thành công");
          } else {
            ElMessage.error("Nhập lại mật khẩu không đúng.");
          }
        } else {
          ElMessage.error("Vui lòng nhập đầy đủ thông tin.");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #253858;
  display: inline-block;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
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

.register-box {
  width: 316px;
  // margin: 86px auto;
  margin-top: 40px;
  border-radius: 12px;
  padding: 25px 40px;
  max-width: 585px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
}

.register-title {
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

.tos {
  text-align: left;
  margin-top: 20px;
  font-size: 12px;
  line-height: 16px;
  color: #5e6c84;
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

.login-button,
.register-button {
  font-weight: bold;
  border-radius: 4.8px;
  box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
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
</style>
