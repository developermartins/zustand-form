import create from 'zustand';

const useStore = create(set => ({
    heroes: [],
    darkMode: false,

    setHeroes: (value) => {
        set((state) => ({  heroes: [...state.heroes, value]  }))
    },
    
    setDark: () => {
        set((state) => ({ darkMode: !state.darkMode }))
    }
}));

export default useStore;
