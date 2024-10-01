import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    RefreshControl,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import { useLocalSearchParams } from 'expo-router';
import useFetchEachLos from '@/hooks/dataFetching/useFetchEachLo';
import Markdown from 'react-native-markdown-display';
import Loading from '@/components/Loading';

const LearningOutCome = () => {
    const { id, lo } = useLocalSearchParams();
    const { LoData, LoLoading, error, refetch } = useFetchEachLos({ id, lo });

    const [refreshing, setRefreshing] = useState(false);

    // Handle refresh action
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await refetch(); // Trigger re-fetch of the data
        setRefreshing(false); // Stop the refreshing animation
    }, [refetch]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {LoLoading && !refreshing ? (
                <Loading />
            ) : error ? (
                <View className="flex flex-row text-center items-center justify-center h-full ">
                    <Text className="text-lg text-red-600 text-bold">
                        {' '}
                        There is no data added yet
                    </Text>
                </View>
            ) : (
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {LoData ? (
                        <>
                            <Text style={styles.title}>
                                <Text className="uppercase">{lo}</Text>:{' '}
                                {LoData.title}
                            </Text>
                            <Markdown style={markdownStyles}>
                                {LoData.loContent}
                            </Markdown>
                            <Text className="my-8 font-bold">
                                That's all for pass
                            </Text>
                        </>
                    ) : (
                        <Text style={styles.noDataText}>
                            No data available yet
                        </Text>
                    )}
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fefae0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
    noDataText: {
        fontSize: 18,
        textAlign: 'center',
    },
});

const markdownStyles = {
    heading1: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 12,
        lineHeight: 28,
    },
    heading2: {
        fontSize: 19,
        fontWeight: 'bold',
        lineHeight: 28,
        marginVertical: 8,
    },
    heading3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    hr: {
        backgroundColor: '#333',
        height: 1,
        width: 1000,
        marginVertical: 12,
        marginBottim: 12,
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 4,
    },
    listItem: {
        fontSize: 200,
        marginLeft: 20,
        marginVertical: 4,
    },
    bullet_list: {
        fontSize: 16,
        lineSpacing: 8,
        lineHeight: 28,
    },
    bullet_list_icon: {
        marginLeft: 10,
        color: '#000',
        fontSize: 20,
        marginRight: 10,
    },
};

export default LearningOutCome;
