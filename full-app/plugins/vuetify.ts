// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#FFD54F',
            secondary: '#9575CD',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            correct: '#4CAF50',
            misplaced: '#FFC107',
            wrong: '#BDBDBD',
            unknown: '#d6d6d6',
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
