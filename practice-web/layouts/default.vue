<template>
  <!-- <v-app>
    <v-toolbar app height="150" class="indigo">
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-toolbar>
    <v-main>
      <slot />
    </v-main>
  </v-app> -->
  <v-layout>
    <v-toolbar height="25">
      <template v-slot:prepend>
        <v-btn density="compact">File</v-btn>
        <v-btn density="compact">Edit</v-btn>
        <v-btn density="compact">Etc.</v-btn>
      </template>
    </v-toolbar>
  </v-layout>
</template>
