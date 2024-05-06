import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useQuery } from '@tanstack/react-query';
import { fetchTopAnime } from '@/api/anime';

export default function TabOneScreen() {
const { data: anime, isLoading, error} = useQuery({
  queryKey: ['anime'], 
  queryFn: fetchTopAnime,
});

if (isLoading) {
  return <ActivityIndicator />
}

if (error) {
  console.log(anime);
  return <Text>Error: {error.message}</Text>
}

  return (
    <View style={styles.container}>
      <FlatList data={anime.data} renderItem={({item}) => <View><Text>{item.title}</Text></View>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
