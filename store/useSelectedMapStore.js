import { create } from "zustand";

// Define the store

export const useSelectedMapStore = create((set) => ({
    // initializing it with null
    selectedPosition: null,

    setSelectedPosition: (postion) => set({
        selectedPosition: postion
    })

}));