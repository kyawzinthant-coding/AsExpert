import BackButton from '@/setting/BackButton';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

import { Text } from 'react-native';

export default function CategoryLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerLeft: () => <BackButton />,
                headerBackVisible: false,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name="noti"
                options={{
                    headerShown: true,
                    headerTitle: () => (
                        <Text className="text-[17px] font-nbold">Noti</Text>
                    ),
                }}
            />
        </Stack>
    );
}
