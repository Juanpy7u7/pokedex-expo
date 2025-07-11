import { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import {
  TextInput,
  Button,
  Card,
  ActivityIndicator,
  Text,
} from 'react-native-paper';
import { Link } from 'expo-router';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);
    setNotFound(false);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!res.ok) throw new Error('No encontrado');
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <TextInput
        label="Buscar Pokémon por nombre"
        value={query}
        onChangeText={setQuery}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />

      <Button mode="contained" onPress={handleSearch}>
        Buscar
      </Button>

      {loading && <ActivityIndicator animating={true} style={{ marginTop: 20 }} />}

      {notFound && (
        <Text style={{ marginTop: 20, color: 'red' }}>
          Pokémon no encontrado.
        </Text>
      )}

      {result && (
        <Link href={`/details/${result.name}`} asChild>
          <Card style={{ marginTop: 20 }}>
            <Card.Title title={result.name.toUpperCase()} />
            <Card.Content style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: result.sprites.front_default }}
                style={{ width: 100, height: 100 }}
              />
              <Text>Altura: {result.height}</Text>
              <Text>Peso: {result.weight}</Text>
              <Text>Tipo(s): {result.types.map((t: any) => t.type.name).join(', ')}</Text>
            </Card.Content>
          </Card>
        </Link>
      )}
    </ScrollView>
  );
}
