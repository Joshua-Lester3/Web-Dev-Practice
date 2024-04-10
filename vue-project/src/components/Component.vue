<template>
  <h1 @click="disappearComponent">{{ header }}</h1>
  <p>{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['header', 'text'],
  methods: {
    disappearComponent() {
      this.$emit('close');
    },
  },
});
</script>

<style scoped>
h1 {
  color: black;
}
</style>
