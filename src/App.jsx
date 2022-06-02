
import React, { useEffect } from 'react';
import TheForm from './components/TheForm';
import TheList from './components/TheList';
import useStore from './store/appStore';

function App() {
    const toggleDarkMode = useStore(state => state.setDark);
    const dark = useStore(state => state.darkMode);

    useEffect(() => {
        if(dark) {
            document.querySelector('body').classList.add('dark');
        } else {
            document.querySelector('body').classList.remove('dark');
        };
    }, [dark]);


  return (
    <div>
        <TheForm />
        <button onClick={toggleDarkMode}>🌓</button>
        <br />
        <br />
        <h4>Heroes list</h4>
        <TheList />
    </div>
  );
};

export default App;
