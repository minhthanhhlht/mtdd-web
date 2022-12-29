<template>
  <div class="register">
    <el-container class="container is-vertical">
      <Header />
      <el-main class="frontend-footer-brother" style="margin-top: 22px">
        <el-row justify="center">
          <el-col :span="16" :xs="24">
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

                <!-- <div class="form-footer">
                  <el-checkbox>Đăng ký</el-checkbox>
                </div> -->
                <!-- Button login -->
                <el-form-item class="form-buttons">
                  <el-button
                    @click="validate('register')"
                    class="login-button"
                    type="success"
                    size="large"
                    >Đăng ký!</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { ElMessage } from "element-plus";

export default {
  name: "Register",
  components: { Header },
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
    validate(formName) {
      this.$refs[formName].validate((valid, fields) => {
        if (valid) {
            if (this.register.password === this.register.repassword) {
            // this.loginSubmit(); 
            alert('thành công')
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
.container {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/img/bg.jpg) repeat;
}

.register-box {
  width: 400px;
  margin: 86px auto;
  border-radius: 12px;
  padding: 10px 60px 20px 60px;
  background-color: var(--el-bg-color-page);
}

.register-title {
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: var(--el-font-size-large);
  line-height: 100px;
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
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 20px;
    margin-left: 0;
  }
}

.login-button,
.register-button {
  border-radius: 20px;
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
</style>
