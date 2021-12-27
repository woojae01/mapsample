import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import DayList from './Daylist';
import Day from './Day';
import Header from './Header';
import EmptyPage from './EmptyPage';
import CreateWord from './CreateWord'
import CreateDay from './CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='day/:day' element={<Day />} />
          <Route path='/create_Word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
