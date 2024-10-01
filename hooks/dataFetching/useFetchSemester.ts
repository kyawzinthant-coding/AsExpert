import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/libs/firebase';

interface Semester {
    id: string;
    name: string;
}

const fetchSemesters = async (): Promise<Semester[]> => {
    const snapshot = await getDocs(collection(db, 'semester'));
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Semester[];
};

const useFetchSemesters = () => {
    const { data, isLoading, error } = useQuery<Semester[], Error>({
        queryKey: ['semester'],
        queryFn: fetchSemesters,
        staleTime: Infinity,
        refetchOnMount: false,
        retry: 3,
    });

    return {
        data: data || [],
        loading: isLoading,
        error,
    };
};

export default useFetchSemesters;
