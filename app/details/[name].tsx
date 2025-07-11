// app/details/[name].tsx

import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { ActivityIndicator, Card } from 'react-native-paper';

export default function Details() {
  const { name } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, []);

  if (!pokemon) return <ActivityIndicator animating={true} />;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Title title={pokemon.name.toUpperCase()} />
        <Card.Content>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={{ width: 100, height: 100, alignSelf: 'center' }}
          />
          <Text>Altura: {pokemon.height}</Text>
          <Text>Peso: {pokemon.weight}</Text>
          <Text>Tipo(s): {pokemon.types.map((t: any) => t.type.name).join(', ')}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
