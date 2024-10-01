import { create } from 'zustand';

interface ILo {
    title: string;
    loContent: any;
}

interface Lostore {
    data: ILo;
    setLo: (data: ILo) => void;
}

const useLoStore = create<Lostore>((set) => ({
    data: { title: '', loContent: '' },
    setLo: (data: ILo) => set({ data }),
}));

export default useLoStore;
