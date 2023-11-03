import { AllRoutes } from './routes/AllRoutes';
import { Header,   Footer, Categorized, Card, SideCheckList } from './components';
import { Search, } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categorized />
      {/* <SideCheckList /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
