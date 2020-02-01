import React, {Component} from 'react';
import './App.css';
//import Greet from './components/Greet';
//import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClicked from './components/ClassClicked';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList';
import NameListKey from './components/NameListKey';
import Form from './components/Form';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (

    <div className="App">
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClicked/>
      <EventBind/>
      <ParentComp/>
      <UserGreeting/>
     
      <NameListKey/>
      <Form/>
      <UserProvider value="Joanthan">
        <ComponentC/>
      </UserProvider>
    </div>
  );
}

export default App;
/*

<Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet><Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>

      <Welcome name="Dinana" heroName="Wonder Woman">
        <p>thisworked</p>
      </Welcome>

*/