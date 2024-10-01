import { create } from 'zustand';

interface IStore {
    assignments: any;
    setAssignment: (data: any[]) => void;
}

const useAssignmentStore = create<any>((set) => ({
    assignments: [],
    setAssignment: (data: any) => set((state: any) => ({ assignments: data })),
}));

export default useAssignmentStore;
