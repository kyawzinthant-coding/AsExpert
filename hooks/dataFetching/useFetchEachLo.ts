import { useState, useEffect } from 'react';
import { db } from '@/libs/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';

const fetchEachLo = async ({ id, lo }: { id: any; lo: any }): Promise<any> => {
    const docRef = doc(db, 'assignment', id);
    const docSnap = await getDoc(docRef);

    let loData;

    if (docSnap.exists()) {
        const data = docSnap.data();
        loData = data?.LO?.[lo];
    }

    return loData;
};

const useFetchEachLos = ({ id, lo }: { id: any; lo: any }) => {
    const { data, isLoading, error, refetch } = useQuery<any>({
        queryKey: [`${id}-${lo}`],
        queryFn: () => fetchEachLo({ id, lo }),
        staleTime: Infinity,
        refetchOnMount: false,
        retry: 3,
        enabled: !!lo,
    });

    return {
        LoData: data || [],
        LoLoading: isLoading,
        error,
        refetch,
    };
};

export default useFetchEachLos;
