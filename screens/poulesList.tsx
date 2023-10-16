import { NavigationProp } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { BackButton } from '../components/buttons/backButton';
import { PouleCard } from '../components/cards/pouleCard';
export type ItemType = {
  id: number;
  name: string;
  dateStart: string;
  timeStart: string;
  availability: number;
  taken: number;
};

const items: ItemType[] = [
  {
    id: 1,
    name: 'Entrainement du lundi Hockey U14Boys2',
    dateStart: '23 août 2023',
    timeStart: '17h30',
    availability: 4,
    taken: 1
  },
  {
    id: 2,
    name: 'Match contre Indiana Hockey U14Boys2',
    dateStart: '30 août 2023',
    timeStart: '11h30',
    availability: 4,
    taken: 1
  },
  {
    id: 3,
    name: 'Entrainement du lundi Hockey U14Boys2',
    dateStart: '5 septembre 2023',
    timeStart: '17h30',
    availability: 4,
    taken: 1
  },
  {
    id: 4,
    name: 'Match contre Wadu U14Boys2',
    dateStart: '12 septembre 2023',
    timeStart: '10h00',
    availability: 4,
    taken: 1
  },
  {
    id: 5,
    name: 'Match contre Racing U14Boys2',
    dateStart: '18 septembre 2023',
    timeStart: '10h00',
    availability: 4,
    taken: 1
  }
];

export const PoulesList = ({
  navigation
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) => {
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <BackButton>Vos Carpoules</BackButton>
        <View className="h-[660]">
          <FlatList
            contentContainerStyle={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({ item }) => {
              return <PouleCard item={item} />;
            }}
            keyExtractor={(item) => `row-${item.id}`}
          />
        </View>
      </View>
    </View>
  );
};
