<template>
      <a-layout style="height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
          <div class="logo" />
          <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
              <nuxt-link to="/home"></nuxt-link>
              <user-outlined />
              <span>Home</span>
            </a-menu-item>
            <a-menu-item key="2">
              <nuxt-link to="/videos"></nuxt-link>
              <video-camera-outlined />
              <span>Vídeos</span>
            </a-menu-item>
            <a-menu-item key="3">
              <nuxt-link to="/outros"></nuxt-link>
              <upload-outlined />
              <span>Outros</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header
            style="
              background: #fff;
              padding: 0.4rem;
            "
          >
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            />
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
    