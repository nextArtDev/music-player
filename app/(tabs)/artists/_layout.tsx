import { Colors } from '@/constants/Colors'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            // ...StackScreenWithSearchBar,
            headerTitle: 'Artists',
          }}
        />

        <Stack.Screen
          name="[name]"
          options={{
            headerTitle: '',
            headerBackVisible: true,
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: Colors.primary,
          }}
        />
      </Stack>
    </View>
  )
}

export default ArtistsScreenLayout