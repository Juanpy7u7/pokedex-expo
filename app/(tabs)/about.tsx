import { ScrollView, Image } from 'react-native';
import { Card, Text, List, Divider } from 'react-native-paper';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Title
          title="Pokédex App"
          subtitle="Proyecto realizado con Expo y React Native"
        />
        <Card.Content>
          <Text variant="bodyMedium" style={{ marginBottom: 10 }}>
            Esta aplicación es una Pokédex interactiva que consume la PokéAPI
            para mostrar información en tiempo real sobre Pokémon. Está diseñada como práctica educativa y de desarrollo móvil con Expo.
          </Text>

          <Divider style={{ marginVertical: 10 }} />

          <Text variant="titleSmall" style={{ marginBottom: 5 }}>
            Desarrollador
          </Text>
          <Text variant="bodyMedium">Juan Pablo Enríquez</Text>
          <Text variant="bodySmall">Frontend / Mobile Developer</Text>

          <Divider style={{ marginVertical: 10 }} />

          <Text variant="titleSmall" style={{ marginBottom: 5 }}>
            Tecnologías usadas
          </Text>
          <List.Item title="React Native + Expo" left={() => <List.Icon icon="react" />} />
          <List.Item title="TypeScript" left={() => <List.Icon icon="code-tags" />} />
          <List.Item title="React Native Paper" left={() => <List.Icon icon="palette" />} />
          <List.Item title="React Navigation (Expo Router)" left={() => <List.Icon icon="navigation" />} />
          <List.Item title="PokéAPI" left={() => <List.Icon icon="cloud-download" />} />

          <Divider style={{ marginVertical: 10 }} />

          <Text variant="bodySmall" style={{ textAlign: 'center', marginTop: 20 }}>
            © {new Date().getFullYear()} Juan Pablo. Todos los derechos reservados.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
