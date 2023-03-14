import './App.css';
import Card from './components/Card';
import Productos from './components/Productos';
function App() {
  return (
    <div className="App">
      <Card
        nombre="Plankton Verde"
        cargo="Cocinero del infierno jeje"
        comment="Puedo cocinar cualquier plato que me pidan"
        imagen="personaje1"
      />
      <Card
        nombre="Plankton Verde"
        cargo="Cocinero del infierno jeje"
        comment="Puedo cocinar cualquier plato que me pidan"
        imagen="personaje1"
      />
      <Productos
        imagen="illustration-hero"
        text1="Order Summary"
        parrafo1="You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!"
        h1="Annual Plan"
        parrafo2="$59.99/year"
        icono="icon-music" 
        link="Change"
        boton1="Proced to Payment"
        boton2="Cancel Order"
        nameatribution="Mariana Montoya"
        />
    </div>

  );
}

export default App;
