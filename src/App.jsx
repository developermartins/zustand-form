
import React, { useEffect } from 'react';
import TheForm from './components/TheForm';
import useStore from './store/appStore';

function App() {
    const heroes = useStore(state => state.heroes);
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
        <p>We have {heroes.length} heroes added</p>
        <h4>Heroes list</h4>
        <ul>
            {  heroes.map((hero) => ( 
                <li>{hero.firstName} {hero.lastName}</li>
            ))  }
        </ul>
    </div>
  );
};

export default App;
