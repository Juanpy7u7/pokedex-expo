import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Text,
  TextInput,
  Button,
  Card,
  IconButton,
  Snackbar,
} from 'react-native-paper';

export default function FavoritesScreen() {
  const [name, setName] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);

  const handleAdd = () => {
    if (name.trim() !== '') {
      setFavorites([...favorites, name.trim()]);
      setName('');
      setVisible(true);
    }
  };

  const handleRemove = (index: number) => {
    const newList = favorites.filter((_, i) => i !== index);
    setFavorites(newList);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 10 }}>
        Agregar Pokémon Favorito
      </Text>

      <TextInput
        label="Nombre del Pokémon"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />

      <Button mode="contained" onPress={handleAdd}>
        Agregar a Favoritos
      </Button>

      {favorites.length > 0 && (
        <>
          <Text variant="titleMedium" style={{ marginTop: 20 }}>
            Lista de Favoritos:
          </Text>

          {favorites.map((fav, index) => (
            <Card key={index} style={{ marginTop: 10 }}>
              <Card.Title
                title={fav.toUpperCase()}
                right={() => (
                  <IconButton
                    icon="delete"
                    onPress={() => handleRemove(index)}
                  />
                )}
              />
            </Card>
          ))}
        </>
      )}

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={2000}
      >
        ¡Agregado a favoritos!
      </Snackbar>
    </ScrollView>
  );
}
