import React from 'react';
import './App.css';
import NavBar from './componetnt/NavBar/NavBar';
import Banner from './componetnt/Banner/Banner';
import RowPost from './componetnt/RowPost/RowPost';
import {orginals,action,romatic,Documentaries} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost urls={(orginals)}  title='Netflix Orginals' />
      <RowPost urls={(action)} title='Action' isSmall/>
      <RowPost urls={(romatic)} title='Romatic' isSmall/>
      <RowPost urls={(Documentaries)} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
