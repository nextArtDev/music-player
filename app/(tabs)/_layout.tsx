import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors, fontSize } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { BlurView } from 'expo-blur'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    // <Tabs
    //   screenOptions={{
    //     // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //     tabBarButton: HapticTab,
    //     tabBarBackground: TabBarBackground,
    //     tabBarStyle: Platform.select({
    //       ios: {
    //         // Use a transparent background on iOS to show the blur effect
    //         position: 'absolute',
    //       },
    //       default: {},
    //     }),
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color }) => (
    //         <IconSymbol size={28} name="house.fill" color={color} />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Explore',
    //       tabBarIcon: ({ color }) => (
    //         <IconSymbol size={28} name="paperplane.fill" color={color} />
    //       ),
    //     }}
    //   />
    // </Tabs>

    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: '500',
          },
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',

            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            borderTopWidth: 0,
            paddingTop: 8,
            height: 72,
          },
          tabBarBackground: () => (
            <BlurView
              intensity={95}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
              }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="heart" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="playlists"
          options={{
            title: 'Playlists',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-play"
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(songs)"
          options={{
            title: 'Songs',
            tabBarIcon: ({ color }) => (
              <Ionicons name="musical-notes-sharp" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="artists"
          options={{
            title: 'Artists',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="users-line" size={20} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* <FloatingPlayer
        style={{
          position: 'absolute',
          left: 8,
          right: 8,
          bottom: 78,
        }}
      /> */}
    </>
  )
}
