<template>
  <div id="app">
    <Component :header="header" :text="text" v-if="showComponent" />
    <button @click="toggleComponent">
      I can make my [Component] disappear
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Component from './components/Component.vue';

export default defineComponent({
  components: { Component },
  data() {
    return {
      header: 'Wassup',
      text: 'my name is josh :)',
      showComponent: true,
    };
  },
  methods: {
    toggleComponent() {
      this.showComponent = !this.showComponent;
    },
  },
});
</script>
