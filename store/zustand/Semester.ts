import { create } from 'zustand';

interface ISemester {
    id: string;
    name: string;
}

interface IStore {
    selectedSemester: ISemester | null; // Optional: Set to null if there's no default value
    setSelectedSemester: (semester: ISemester) => void;
}

const useStore = create<IStore>((set) => ({
    selectedSemester: { id: '', name: '' },
    setSelectedSemester: (semester: ISemester) =>
        set({ selectedSemester: semester }),
}));

export default useStore;
