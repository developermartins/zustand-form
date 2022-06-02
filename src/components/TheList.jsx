import React from 'react';
import useStore from '../store/appStore';

function TheList() {
  const heroes = useStore(state => state.heroes);

  return (
    <div>
        <p>We have {heroes.length} heroes added</p>
        <ul>
            {  heroes.map((hero) => ( 
                <li>{hero.firstName} {hero.lastName}</li>
            ))  }
        </ul>
    </div>
  );
};

export default TheList;
