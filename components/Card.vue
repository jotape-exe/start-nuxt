<template>
  <div>
    <a-card :title="titulo" style="width: 300px">
      <template #extra>
        <div style="cursor: pointer">
          <component @click="toggleFavorite" :is="starIcon" />
        </div>
      </template>
      <p>{{ conteudo }}</p>
    </a-card>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { StarOutlined, StarFilled } from "@ant-design/icons-vue";

const props = defineProps(["titulo", "conteudo"]);
const isFavorite = ref(false);
const favoritos = useFavoritos();

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;

  const index = favoritos.value.findIndex(card => card.titulo === props.titulo);

  if (isFavorite.value && index === -1) {
    favoritos.value.push({ titulo: props.titulo, conteudo: props.conteudo });
  } else if (!isFavorite.value && index !== -1) {
    favoritos.value.splice(index, 1);
  }
};

const starIcon = computed(() => {
  return isFavorite.value ? StarFilled : StarOutlined;
});
</script>

