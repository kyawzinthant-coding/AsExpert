import BackButton from '@/setting/BackButton';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function SemesterLayout() {
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
                name="[lo]"
                options={{
                    headerShown: false,
                    headerTitle: () => (
                        <Text className="text-[17px]  font-nbold">
                            Learning Outcome
                        </Text>
                    ),
                }}
            />
        </Stack>
    );
}
