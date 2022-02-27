import ConteinerForms from './Components/ConteinerForms';
import PokemonesListContainer from './Components/PokemonesListContainer';
import useStore from './Store/index';

import './index.css'
function App() {
  const { pokemon_list_status,} = useStore();
  return (
    <div className="App">
      {
        pokemon_list_status ? <PokemonesListContainer /> : <ConteinerForms/>
      }
    </div>
  );
}

export default App;
