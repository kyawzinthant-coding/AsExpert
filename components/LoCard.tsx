import { View, Text } from 'react-native';
import React from 'react';

const LoCardDetails = ({
    lo,
    title,
}: {
    lo: string;
    title: string | string[];
}) => {
    return (
        <View className="p-6 border h-[100px] flex items-center flex-row bg-[#f0eeee]   w-full shadow-md rounded-md">
            <Text className="capitalize">Learning Outcome - {lo}</Text>
        </View>
    );
};

export default LoCardDetails;
