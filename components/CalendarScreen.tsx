import { Text, View } from 'react-native';
import React from 'react';

import {
    calculateDateDifference,
    getCurrentDate,
    getDatesBetween,
} from '@/utils/getDateBetween';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = ({
    start,
    end,
    startColor,
    endColor,
    intervalColor,
    title,
}: {
    start: string;
    end: string;
    startColor: string;
    endColor: string;
    intervalColor: string;
    title: string;
}) => {
    const dateArr = getDatesBetween(start, end);
    const currentDate = getCurrentDate();

    const startDate = dateArr[0];
    const endDate = dateArr[dateArr.length - 1];

    const diff = Math.abs(calculateDateDifference(startDate));

    const markedDates: { [key: string]: any } = {
        [startDate]: {
            startingDay: true,
            color: startColor,
            textColor: 'white',
        },
        [endDate]: { endingDay: true, color: endColor, textColor: 'white' },
        [currentDate]: {
            color: '#333',

            textColor: 'white',
        },
    };

    const assignmentText =
        currentDate >= startDate ? 'Assignment Period' : `${diff} days left`;

    dateArr.slice(1, -1).forEach((date) => {
        markedDates[date] = { color: intervalColor, textColor: 'white' };
    });
    return (
        <View>
            <View className="flex flex-row justify-between px-2 items-center">
                <Text className="my-2 text-md font-bold"> {title} </Text>
                <Text className="text- text-red-600 font-bold">
                    {assignmentText}
                </Text>
            </View>

            <Calendar
                style={{
                    height: 350,
                    borderColor: 'gray',
                }}
                enableSwipeMonths={true}
                markingType={'period'}
                hideExtraDays={true}
                initialDate={currentDate}
                markedDates={markedDates}
            />
        </View>
    );
};

export default CalendarScreen;
