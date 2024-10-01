import BackButton from '@/setting/BackButton';
import { Stack } from 'expo-router';
import { StatusBar, Text } from 'react-native';

export default function AssignmentCardLayout() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <Stack
                screenOptions={{
                    headerShown: false,
                    headerLeft: () => <BackButton />,
                    headerBackVisible: false,
                    headerShadowVisible: false,
                }}
            >
                <Stack.Screen
                    name="assignmentlos"
                    options={{
                        headerShown: true,
                        headerTitle: () => (
                            <Text className="text-[17px] ml-2 font-nbold">
                                Learning Outcomes
                            </Text>
                        ),
                    }}
                />
            </Stack>
        </>
    );
}
