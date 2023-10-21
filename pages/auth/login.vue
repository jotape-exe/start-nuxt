<template>
  <a-spin v-if="isLoading" class="loading" size="large" />

  <div class="content-login">
    <a-typography-title
      :level="2"
      style="text-align: center; margin-bottom: 20px"
      >LOGIN</a-typography-title
    >
    <a-form
      class="form"
      :model="formState"
      layout="horizontal"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 24 }"
      autocomplete="off"
      @submit="login"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <!--<a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>-->

      <a-form-item class="button-login" :wrapper-col="{ offset: 4, span: 16 }">
        <a-button style="width: 10vw" type="primary" html-type="submit">
          Entrar
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { type NotificationPlacement, notification } from "ant-design-vue";


interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: "login-layout"
})

const isLoading = ref(false);

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});

const loginData = {
  username: "joao",
  password: "senhadificil",
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const login = () => {
  isLoading.value = true;

  setTimeout(function () {
    if (loginData.password !== formState.password || loginData.username !== formState.username) {
      openNotification();
    } else{
      router.push({name: "home"})
    }

    isLoading.value = false;
  }, 1000);
};

const openNotification = () => {
  notification["error"]({
    message: "Erro",
    description:
      'Usuário ou senha incorretos!',
  });
};

</script>
<style>
.content-login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}

.form {
  border-radius: 10px;
  background-color: #dddddd;
  padding: 1rem;
}

.button-login {
  text-align: center;
  width: 40vw;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.144);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
