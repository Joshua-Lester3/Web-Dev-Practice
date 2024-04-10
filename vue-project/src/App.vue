<template>
  <div id="app">
    <Component header="wassup" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component from './components/Component.vue';

export default defineComponent({
  components: { Component },
});
</script>
