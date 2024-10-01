import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

export const SafeArea = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};
