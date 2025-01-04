import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback, useEffect } from 'react'
import 'react-native-reanimated'
import '../global.css'
import { useColorScheme } from '@/hooks/useColorScheme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TrackPlayer from 'react-native-track-player'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

// TrackPlayer.registerPlaybackService(() => playbackService)
export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
  }, [])
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  })

  useLogTrackPlayerState()

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
