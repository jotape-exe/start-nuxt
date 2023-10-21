<template>
  <div>
    <a-typography-title
      :level="2"
      style="text-align: center; margin-bottom: 20px"
      >OUTROS</a-typography-title
    >
    <a-space size="large" direction="horizontal" v-for="item in cards" :key="item.titulo">
      <Card :titulo="item.titulo" :conteudo="item.conteudo" style="margin: 10px;" />
    </a-space>

    <p>FAV</p>
    {{ favoritos }}
  </div>
</template>

<script setup lang="ts">
import type { Card } from "~/interfaces/Card";

definePageMeta({
  layout: "home-layout",
});

const favoritos = useFavoritos()

const cards = [
  {
    titulo: "Card 1",
    conteudo: "Conteúdo do Card 1",
  },
  {
    titulo: "Card 2",
    conteudo: "Conteúdo do Card 2",
  },
  {
    titulo: "Card 3",
    conteudo: "Conteúdo do Card 3",
  },
  {
    titulo: "Card 4",
    conteudo: "Conteúdo do Card 4",
  },
  {
    titulo: "Card 5",
    conteudo: "Conteúdo do Card 5",
  },
  {
    titulo: "Card 6",
    conteudo: "Conteúdo do Card 6",
  },
];


</script>

<style scoped></style>
