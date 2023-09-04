import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Redux from './Materi/Redux';
// import Bootstrap from './Materi/Styling/Bootstrap';
// import Reausable from './Materi/Reusable/hello';
// import Rendering from './Materi/Rendering';
// import Form from './Materi/Form';
// import Lifecycle from './Materi/Lifecycle';
// import Hooks from './Materi/Hooks';


function App() {
  const style = {
    margin: "10px"
  }

  return (
    <div className='App'>
      <Redux />
    </div>
  );
}

export default App;
