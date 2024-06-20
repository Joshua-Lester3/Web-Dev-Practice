<template>
  <v-btn class="ma-5" @click="count++">Plus me!</v-btn>
  <v-card
    width="50"
    height="50"
    class="ma-5 align-center d-flex justify-center elevation-7"
    style="background-image: radial-gradient(red 5%, blue 75%)"
    >{{ count }}</v-card
  >

  <v-infinite-scroll :height="300" :items="items" :onLoad="load">
    <template v-for="(item, index) in items" :key="item">
      <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number #{{ item }}
      </div>
    </template>
  </v-infinite-scroll>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();
theme.global.name;
const count = ref(0);

const items = ref(Array.from({ length: 30 }, (k, v) => v + 1));

async function api(): Promise<number[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getNumbers());
    }, 1000);
  });
}
function getNumbers() {
  let array = new Array<number>();
  return array;
}
async function load({ done }: { done: any }) {
  // Perform API call
  const res = await api();
  for (let i in res) {
    items.value.push(parseInt(i));
  }

  done('ok');
}
</script>
