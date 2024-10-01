import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BackButtonIcon from '../assets/icons/BackButton.svg';

const BackButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.back()}
            className="ml-4 mr-12 w-6 h-5 flex flex-col justify-center"
        >
            <BackButtonIcon width={20} height={17} fill="#696969" />
        </TouchableOpacity>
    );
};

export default BackButton;
