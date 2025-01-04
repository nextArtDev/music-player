import { View, Text, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import { defaultStyles } from '@/styles'
import { TracksList } from '@/components/track-list'
import library from '@/assets/data/library.json'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { screenPadding } from '@/constants/Colors'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { trackTitleFilter } from '@/helpers/filter'

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  })

  const filteredTracks = useMemo(() => {
    if (!search) return library

    return library.filter(trackTitleFilter(search))
  }, [search, library])

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList
          id={generateTracksListId('songs', search)}
          tracks={filteredTracks}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  )
}
export default SongsScreen
