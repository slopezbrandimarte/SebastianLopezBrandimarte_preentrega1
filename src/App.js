import 'bulma/css/bulma.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="app">
      <NavBar/>
      
      <ItemListContainer greeting = {'Bienvenidos'}/>
      

    </div>
  );
}

export default App;
