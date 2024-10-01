import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

const Loading: React.FC = () => {
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const pulse = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );

        pulse.start();

        return () => pulse.stop();
    }, [pulseAnim]);

    return (
        <View className={`flex-1 justify-center items-center `}>
            <Animated.View
                //@ts-ignore
                className={[
                    `w-20 h-20 bg-blue-500 rounded-full justify-center items-center`,
                    {
                        transform: [{ scale: pulseAnim }],
                    },
                ]}
            >
                <Text className={`text-white text-lg font-bold`}>📚</Text>
            </Animated.View>
            <Text className={`mt-4 text-gray-700 text-lg font-semibold`}>
                Loading...
            </Text>
            <Text className={`mt-2 text-gray-500 text-sm`}>
                Preparing your study materials
            </Text>
        </View>
    );
};

export default Loading;
