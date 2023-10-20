<template>
      <div>
            hello {{ nome }}
      </div>
</template>

<script setup lang="ts">

const route = useRoute()
const nome = computed(()=> route.params.nome)

</script>

<style scoped>



</style>