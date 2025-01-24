/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#1E88E5",
    "primary-darken-1": "#1565C0",
    secondary: "#42A5F5",        // Changed to a lighter blue that complements primary
    "secondary-darken-1": "#1E88E5", // Changed to match primary for better harmony
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#121212",
    surface: "#212121",
    primary: '#64B5F6',
    'on-primary': '#FFF',
    "primary-darken-1": "#64B5F6",
    secondary: "#64B5F6",    // Changed to a softer blue for better contrast with dark theme
    "secondary-darken-1": "#42A5F5", // Adjusted secondary darker shade
    error: "#CF6679",
    info: "#90CAF9",
    success: "#81C784",
    warning: "#FFB74D",      // Softer orange
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'LightTheme',
    themes: {
      LightTheme,
      DarkTheme,
    },
  },
});
