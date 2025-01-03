import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { TracksList } from '@/components/track-list'
import library from '@/assets/data/library.json'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { screenPadding } from '@/constants/Colors'

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList
          // id={generateTracksListId('songs', search)}
          id={generateTracksListId('songs')}
          tracks={library}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  )
}
export default SongsScreen
