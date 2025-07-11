// app/tabs/index.tsx
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, ActivityIndicator, Text } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator animating={true} style={{ marginTop: 20 }} />;

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={pokemons}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Link href={`/details/${item.name}`} asChild>
          <Card style={styles.card} mode="elevated">
            <Card.Content style={styles.cardContent}>
              <Text style={styles.pokemonName}>
                {item.name.toUpperCase()}
              </Text>
            </Card.Content>
          </Card>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fce4ec', // rosado claro estilo Pokémon
    borderRadius: 16,
    elevation: 3,
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d81b60', // rosa fuerte
    letterSpacing: 1,
  },
});
