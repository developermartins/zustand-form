import create from 'zustand';

const useStore = create(set => ({
    heroes: [],
    dark: false,

    setHeroes: (value) => {
        set((state) => ({  heroes: [...state.heroes, value]  }))
    },
    
    setDark: () => {
        set((state) => ({ dark: !state.dark }))
    }
}));

export default useStore;
