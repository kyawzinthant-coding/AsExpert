import { query, collection, where, getDocs } from 'firebase/firestore';

import { useQuery } from '@tanstack/react-query';
import { db } from '@/libs/firebase';
import useAssignmentStore from '@/store/zustand/Assignment';
import { useEffect } from 'react';

// Fetch assignments by semester ID
const fetchAssignmentBySemester = async (
    semesterId: string
): Promise<any[]> => {
    const q = query(
        collection(db, 'assignment'),
        where('semester_id', '==', semesterId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

const useFetchAssignmentBySemester = (semesterId: any) => {
    const { setAssignment } = useAssignmentStore();
    const { data, isLoading, error } = useQuery<any[], Error>({
        queryKey: ['assignments', semesterId],
        queryFn: () => fetchAssignmentBySemester(semesterId),
        staleTime: Infinity,
        refetchOnMount: false,
        retry: 3,
        enabled: !!semesterId,
    });

    useEffect(() => {
        if (data && !isLoading) {
            setAssignment(data);
        }
    }, [data, isLoading, setAssignment]);

    return {
        Adata: data || [],
        Aloading: isLoading,
        error,
    };
};

export default useFetchAssignmentBySemester;
