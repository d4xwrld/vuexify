import { useTheme } from 'vuetify'

export function useToggleTheme() {
  const theme = useTheme()

  function toggleTheme() {
    const isDark = theme.global.current.value.dark
    theme.global.name.value = isDark ? "LightTheme" : "DarkTheme"
  }

  return {
    theme,
    toggleTheme
  }
}
