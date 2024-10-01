import BackButton from '@/setting/BackButton';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function AssignmentIDLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                headerLeft: () => <BackButton />,
                headerBackVisible: false,
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: '#fefae0',
                },
            }}
        >
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: false,
                    headerTitle: () => (
                        <Text className="text-[17px] font-nbold">
                            Assignment
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="eachLo"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}
