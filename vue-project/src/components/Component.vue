<template>
  <h1>{{ header }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['header'],
});
</script>

<style scoped>
h1 {
  color: black;
}
</style>
