<template>
  <a-layout style="height: 100vh">
    <a-layout>
      <a-layout-header
        style="
          background: #fff;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        "
      >
        <a-space size="small" style="align-self: flex-end">
          <a-button @click.prevent="doLogin()" type="primary">LOGIN</a-button>
          <a-button>CADASTRAR</a-button>
        </a-space>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
const router = useRouter();

function doLogin() {
  router.push("/auth/login");
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
