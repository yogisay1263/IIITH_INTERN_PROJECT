//import logo from './logo.svg';

// import './App.css';
import NextPage from './components/Nextpage';
import Main from './components/main';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import StudentPortalForm from './components/form';
//import Functions from './components/Functionalmp';
function App() {
  return (
    <div className="App">
    {/* <Sidebar></Sidebar>
    <Piechart/>
 
   <CardList></CardList> */}
<Router>
   <Routes>
    <Route path='/next' element={<NextPage/>}/>
    <Route path='/form' element={<StudentPortalForm/>}/>
    <Route path='/' element={<Main/>}/>

   </Routes>
   </Router>
    </div>
  );
}

export default App;
