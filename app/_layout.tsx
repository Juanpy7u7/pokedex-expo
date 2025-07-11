import { Tabs } from 'expo-router';
import { ThemeProvider } from '../providers/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Tabs
        screenOptions={{
          headerShown: true,
        }}
      >
        <Tabs.Screen name="tabs/index" options={{ title: 'Inicio' }} />
        <Tabs.Screen name="tabs/favorites" options={{ title: 'Favoritos' }} />
        <Tabs.Screen name="tabs/search" options={{ title: 'Buscar' }} />
        <Tabs.Screen name="tabs/settings" options={{ title: 'Ajustes' }} />
        <Tabs.Screen name="tabs/about" options={{ title: 'Acerca de' }} />
      </Tabs>
    </ThemeProvider>
  );
}
