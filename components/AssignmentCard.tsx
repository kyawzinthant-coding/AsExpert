import { View, Text, Image, TouchableOpacity } from 'react-native';
import ArrowUpRightIcon from '@/assets/icons/arrowUpRight.svg';
import React from 'react';
import { useRouter } from 'expo-router';

interface IAssignmentCard {
    title: string;
    image: any;
    type: string;
    value: number;
    id: string;
}

const AssignmentCard = ({ title, image, type, value, id }: IAssignmentCard) => {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            //@ts-ignore
            pathname: `/assignment/assignmentlos/${id}`,
            params: { title, id },
        });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View className="bg-[#A9EBF9] flex flex-col space-y-4 p-4 rounded-lg border-none shadow-md ">
                <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row items-center space-x-4">
                        <Image
                            source={{ uri: image }}
                            className="w-16 h-16 rounded-lg"
                        />
                        <Text className="text-[14px] font-bold">{title}</Text>
                    </View>
                    <View className="p-2 rounded-full flex items-center justify-center bg-black">
                        <ArrowUpRightIcon width="24" height="24" />
                    </View>
                </View>
                <View className="mt-4 space-y-2">
                    <Text className="text-md font-bold">
                        Unit Type : {type}{' '}
                    </Text>
                    <Text className="text-md font-bold">
                        Credit Value : {value}{' '}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AssignmentCard;
