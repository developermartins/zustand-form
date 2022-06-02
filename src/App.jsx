
import React from 'react';
import TheForm from './components/TheForm';
import useStore from './store/appStore';

function App() {
    const heroes = useStore(state => state.heroes)

  return (
    <div>
        <TheForm />
        <br />
        <br />
        <p>We have {heroes.length} heroes added</p>
        <h4>Heroes list</h4>
        <ul>
            {  heroes.map((hero) => ( 
                <li>{hero.firstName}</li>
            ))  }
        </ul>
    </div>
  );
};

export default App;
