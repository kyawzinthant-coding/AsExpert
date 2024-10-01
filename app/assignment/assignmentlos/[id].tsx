import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import LoCardDetails from '@/components/LoCard';

const Los = ['Lo1', 'Lo2', 'Lo3', 'Lo4'];

const LoCard = () => {
    const { title, id } = useLocalSearchParams();
    const router = useRouter();

    const handlePress = (lo: string) => {
        router.push({
            //@ts-ignore
            pathname: `/assignment/assignmentlos/eachLo/${lo}`,
            params: { id },
        });
    };
    return (
        <View className="p-6 bg-[#E6E9EC] h-full ">
            <Text>Learning Outcome of {title}</Text>

            <View className="flex flex-col w-full gap-6 mt-2">
                {Los.map((item) => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => handlePress(item)}
                    >
                        <LoCardDetails lo={item} title={title} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default LoCard;
