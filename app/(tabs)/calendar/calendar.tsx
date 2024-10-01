import {
    View,
    ScrollView,
    Modal,
    Button,
    StyleSheet,
    Text,
} from 'react-native';
import CalendarScreen from '@/components/CalendarScreen';
import { useEffect, useState } from 'react';
import useFetchSemesters from '@/hooks/dataFetching/useFetchSemester';
import { Picker } from '@react-native-picker/picker';
import useStore from '@/store/zustand/Semester';
import useFetchAssignmentBySemester from '@/hooks/dataFetching/useFetchAssignmentBySemester';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from '@/components/Loading';

const CalendarPage = () => {
    const { data: semesters, loading } = useFetchSemesters();

    const [modalVisible, setModalVisible] = useState(true);
    const { selectedSemester, setSelectedSemester } = useStore();
    const { Adata, Aloading } = useFetchAssignmentBySemester(
        selectedSemester?.id
    );

    const handleSemesterChange = (itemValue: any) => {
        const selected = semesters.find(
            (semester) => semester.id === itemValue
        );
        setSelectedSemester(selected as any);
        setModalVisible(false);
    };

    const handleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        if (selectedSemester?.id === '') {
            setModalVisible(true);
        } else {
            setModalVisible(false);
        }
    }, [setSelectedSemester]);

    return (
        <>
            {selectedSemester?.id === '' ? (
                <></>
            ) : (
                <>
                    {Aloading ? (
                        <Loading />
                    ) : (
                        <>
                            <View>
                                <TouchableOpacity>
                                    <Button
                                        title="Select Semester"
                                        onPress={handleModal}
                                    />
                                </TouchableOpacity>
                            </View>

                            {Adata.length > 1 ? (
                                <ScrollView>
                                    <View className="flex flex-col space-y-2">
                                        <View className="mt-2 px-2">
                                            <CalendarScreen
                                                title={Adata[0]?.title}
                                                start={Adata[0]?.start_date}
                                                end={Adata[0]?.end_date}
                                                startColor="#f87171"
                                                endColor="#f87171"
                                                intervalColor="#A9EBF9"
                                            />
                                        </View>

                                        <View className="px-2">
                                            <CalendarScreen
                                                title={Adata[1].title}
                                                start={Adata[1].start_date}
                                                end={Adata[1].end_date}
                                                startColor="#f87171"
                                                endColor="#f87171"
                                                intervalColor="#A9EBF9"
                                            />
                                        </View>
                                    </View>
                                </ScrollView>
                            ) : (
                                <View className="w-full h-full flex justify-center items-center">
                                    <Text>
                                        No assignemnt data yet that module yet
                                    </Text>
                                </View>
                            )}
                        </>
                    )}
                </>
            )}

            {modalVisible && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Please Select a Semester
                            </Text>

                            {loading && <Text>Loading...</Text>}

                            <Picker
                                selectedValue={selectedSemester?.id}
                                onValueChange={handleSemesterChange}
                                style={{ height: 50, width: 200 }}
                            >
                                {semesters?.map((semester) => (
                                    <Picker.Item
                                        key={semester.id}
                                        label={semester.name}
                                        value={semester.id}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default CalendarPage;
