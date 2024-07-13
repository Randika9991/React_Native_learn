import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

export default function Index() {
    return (

        <Stack>
            <Stack.Screen name="test" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />
        </Stack>
    )
}

const styles = StyleSheet.create({

})
