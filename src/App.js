import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo';
import Quotes from './random-quotes-generator/Quotes';
import CalculatorDemo from './calculator/CalculatorDemo'
import Theme from './themeChange/Theme';
import User from './themeChange/User';
import Counter from './themeChange/Counter';
import Todoreducer from './to-do-list-reducer/Todoreducer';
import FbTimeline from './themeChange/fbApp/FbTimeline';
import IgTimeline from './themeChange/igApp/IgTimeline';
import Weather from './waetherApp/Weather';
import Crud from './CrudOperation/Crud';

function App() {
  return (
    <>
      {/* <Todo></Todo> */}
      {/* <Quotes/> */}
      {/* <CalculatorDemo/> */}
      {/* <Theme/> */}
      {/* <User/> */}
      {/* <Counter/> */}
      {/* <Todoreducer/> */}
    {/* <h3>FB Portal</h3>
     <FbTimeline.Post title="No Post"/>
     <hr/>
    <h3>IG Portal</h3>
    <IgTimeline.Post/> */}
    {/* <Weather/> */}
    <Crud/>
    </>
  );
}

export default App;
