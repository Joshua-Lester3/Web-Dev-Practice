<template>
  <v-app>
    <v-app-bar v-slot:prepend>
      <v-btn @click="drawer = !drawer">Hello</v-btn>
    </v-app-bar>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        theme="dark"
        permanent>
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"></v-list-item>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"></v-list-item>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"></v-list-item>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-app>
</template>

<script setup>
const router = useRouter();
const drawer = ref(false);
const items = [1, 2, 3];
</script>
<!-- <template>
  <v-app>
    <v-app-bar>
      <v-icon color="secondary" @click="console.log('hi!!')"
        >mdi-alpha-w</v-icon
      >
      <v-app-bar-nav-icon permanent @click="drawer = !drawer" />
      <v-navigation-drawer v-model="drawer">
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-supervisor-circle"
            title="Supervisors"
            value="supervisors"></v-list-item>
          <v-list-item
            prepend-icon="mdi-clock-start"
            title="Clock-in"
            value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </v-app>
</template>
-->
