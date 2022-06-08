import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
	  <SideMenu/>
	  <Footer/>
    </div>
  );
}

export default App;
