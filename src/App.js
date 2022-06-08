import './App.css';
import './Reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header/>
	  <SideMenu/>
	  <Main/>
	  <Footer/>
    </div>
  );
}

export default App;
