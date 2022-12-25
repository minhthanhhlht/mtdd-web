<template>
  <div class="login">
    <el-container class="container is-vertical">
      <Header />
      <el-main class="frontend-footer-brother">
        <el-row justify="center">
          <el-col :span="16" :xs="24">
            <div class="login-box">
              <div class="login-title">Đăng nhập hệ thống</div>
              <el-form>
                <!-- input user -->
                <el-form-item prop="username">
                  <el-input
                    v-model="user.name"
                    placeholder="Tài khoản"
                    size="large"
                    v-bind:class="{'is-error': errors.username}"
                  >
                    <template #prefix>
                      <i
                        class="fa fa-user"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                  <div class="el-form-item__error">{{ errors.username }}</div>
                </el-form-item>
                <!-- input password -->
                <el-form-item prop="password">
                  <el-input
                    v-model="user.password"
                    placeholder="Mật khẩu"
                    size="large"
                    type="password"
                   
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
                    @click="onSubmit"
                    class="login-button"
                    type="primary"
                    size="large"
                    >Đăng Nhập</el-button
                  >
                  <el-button class="register-button" type="default" size="large"
                    >Đăng ký tài khoản!</el-button
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

export default {
  name: "Login",
  data() {
    return {
        errors: {
            username: "",
            password: ""
        },
      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    validate() {
        this.errors = {
            username: "",
            password: ""
        }
        if(!this.errors.username) {
            this.errors.username = "Vui lòng nhập tài khoản"
        }
    },
    onSubmit() {
      this.validate()
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/img/bg.jpg) repeat;
}

.login-box {
  width: 400px;
  margin: 86px auto;
  border-radius: 12px;
  padding: 10px 60px 20px 60px;
  background-color: var(--el-bg-color-page);
}

.login-title {
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

.el-form-item__error {
    color: var(--el-color-danger);
    font-size: 12px;
    line-height: 1;
    padding-top: 2px;
    position: absolute;
    top: 100%;
    left: 0;
}


</style>
