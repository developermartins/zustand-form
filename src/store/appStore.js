import create from 'zustand';

const useStore = create(set => ({
    heroes: [],

    setHeroes: (value) => {
        set((state) => ({  heroes: [...state.heroes, value]  }))
    },
    
    
}));

export default useStore;
