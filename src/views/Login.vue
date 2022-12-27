<template>
  <div class="login">
    <el-container class="container is-vertical">
      <Header />
      <el-main class="frontend-footer-brother">
        <el-row justify="center">
          <el-col :span="16" :xs="24">
            <div class="login-box">
              <div class="login-title">Đăng nhập hệ thống</div>
              <el-form :rules="FormRules">
                <!-- input user -->
                <el-form-item  prop="username">
                  <el-input
                    v-model="form.username"
                    placeholder="Tài khoản"
                    size="large"
                    :clearable="true"
                    :class="!validate() ? 'error' : '' "
                    
                  >
                    <template #prefix>
                      <i
                        class="fa fa-user"
                        style="size: 16px; color: var(--el-input-icon-color)"
                      ></i>
                    </template>
                  </el-input>
                  <div v-if="!validate()" class="form-error">{{ errors.username }}</div>
                </el-form-item>
                <!-- input password -->
                <el-form-item prop="password">
                  <el-input
                    v-model="form.password"
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
                  <div v-if="!validate()" class="form-error">{{ errors.password }}</div>
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

import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";

import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "Login",
  data() {
    return {
      isActive: false,
      v$: useVuelidate(),
      errors: {
        username: "",
        password: "",
      },
      form: {
        username: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      form: {
        username: { required },
        password: { required },
      },
    };
  },
  setup() {},
  components: {
    Header,
  },
 
  methods: {  
    validate() {
      let isValid = true

      if(this.form.username == "") {
        this.errors.username = "Vui lòng nhập tài khoản"
        isValid = false
      }

      if(this.form.password == "") {
        this.errors.password = "Vui lòng nhập mật khẩu"
        isValid = false
      }

      return isValid

    }, 
    onSubmit() {      
      this.validate()      
      if (!this.validate()) {
        ElNotification({
          title: "Hệ thống",
          message: "Vui lòng điền đầy đủ thông tin",
          type: "error",
        });
      } else {
        ElNotification({
          title: "Hệ thống",
          message: "Đăng nhập thành công",
          type: "success",
        });
      }
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

.form-error {
  color: var(--el-color-danger);
  font-size: 12px;
  line-height: 1;
  padding-top: 2px;
  position: absolute;
  top: 100%;
  left: 0;
}
.error {
  box-shadow: 0 0 0 1px var(--el-color-danger);
  border-radius: var(--el-input-border-radius,var(--el-border-radius-base));
}

</style>
