import { router, Tabs } from 'expo-router';
import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import NotificationIcons from '@/assets/icons/noti.svg';
import PersonICon from '@/assets/icons/person.svg';
import HomeIcon from '@/assets/icons/home.svg';
import CalendarIocn from '@/assets/icons/calendar.svg';
import useStore from '@/store/zustand/Semester';

export default function TabLayout() {
    const { selectedSemester } = useStore();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#f8f8f8',
                    borderTopWidth: 0,
                    height: 60,
                    paddingBottom: 2,
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
            }}
        >
            <Tabs.Screen
                name="info/info"
                options={{
                    title: 'Info',
                    headerTitle: () => (
                        <View className="w-full flex flex-row items-center justify-between px-1">
                            <Text className="text-md font-bold">
                                Assignment Information
                            </Text>
                        </View>
                    ),
                    headerShown: true,
                    tabBarIcon: ({ color, focused }) => (
                        <HomeIcon width={24} height={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="calendar/calendar"
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <View className="w-full  flex flex-row items-center justify-between px-1">
                            <Text className="text-md font-bold">
                                {selectedSemester?.name || ''}
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    router.push('/noti/noti');
                                }}
                            >
                                <NotificationIcons width={24} height={24} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerShown: true,
                    title: 'Calendar',
                    tabBarIcon: ({ color, focused }) => (
                        <CalendarIocn width={24} height={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile/profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <PersonICon width={24} height={24} />
                    ),
                    headerShown: true,
                }}
            />
        </Tabs>
    );
}
