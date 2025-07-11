import { View } from 'react-native';
import {
  Text,
  Switch,
  List,
  RadioButton,
  Divider,
} from 'react-native-paper';
import { useThemeContext } from '../../providers/ThemeContext';
import { useState } from 'react';

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useThemeContext();
  const [language, setLanguage] = useState('es');

  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        Ajustes de la aplicación
      </Text>

      <List.Item
        title="Tema oscuro"
        left={() => <List.Icon icon="theme-light-dark" />}
        right={() => (
          <Switch value={isDark} onValueChange={toggleTheme} />
        )}
      />

      <Divider style={{ marginVertical: 20 }} />

      <Text variant="titleMedium">Idioma</Text>
      <RadioButton.Group
        onValueChange={(value) => setLanguage(value)}
        value={language}
      >
        <RadioButton.Item label="Español" value="es" />
        <RadioButton.Item label="Inglés" value="en" />
        <RadioButton.Item label="Japonés" value="jp" />
      </RadioButton.Group>
    </View>
  );
}
