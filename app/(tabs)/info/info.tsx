import { View, Text, Image } from 'react-native';
import Security from '@/assets/images/security.jpg';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import ArrowUpRightIcon from '@/assets/icons/arrowUpRight.svg';
import AssignmentCard from '@/components/AssignmentCard';
import useAssignmentStore from '@/store/zustand/Assignment';

const InfoScreen = () => {
    const { assignments } = useAssignmentStore();
    return (
        <View className="p-2">
            {/* <View className="mt-2 p-4 shadow-md bg-red-400 rounded-lg w-full h-[120px] border-none">
                <Text className="text-lg font-bold text-white ">
                    Assignments
                </Text>
                <View className="flex flex-row justify-end items-center "></View>
            </View> */}

            <View
                className=" space-y-6 mt-6 "
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {assignments.map((item: any) => (
                    <View key={item.id}>
                        <AssignmentCard
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            type={item.unit_type}
                            value={item.credit_value}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default InfoScreen;
