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
import Card from "./components/Card";
import CountryList from './components/CountryList';
import ClickCount2 from './components/ClickCount2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2'
import ClassCounter from './hooks/ClassCounter';
import HooksCounter from './hooks/HooksCounter';
import HookCounter2 from './hooks/HookCounter2';
//import RefsDemo from './components/RefsDemo';
//import Hero from './components/Hero'
//import ErrorBoundry from './components/ErrorBoundry';
//import ClickCounter from './components/ClickCounter';
//import HoverCounter from './components/HoverCounter';
function App() {
  return (

    <div className="App">
      
      {/*
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
    
      <CountryList/>
      
      <ErrorBoundry>
        <Hero heroName="Batman"></Hero>
        <Hero heroName="SuperMan"></Hero>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundry>


      <ClickCounter/>
      <HoverCounter/>
     
      <ClickCount2/>
      <HoverCounter2/>
      <User render={(isLoggedIn)=>isLoggedIn ? 'Jonathan' : 'Guest'}/>
       
      <Counter2 
        render={(count, incCount)=> (
          <ClickCount2 count={count} incCount={incCount}></ClickCount2>
        )}/>

<Counter2 
        render={(count, incCount)=> (
          <HoverCounter2 count={count} incCount={incCount}></HoverCounter2>
        )}/>

*/}
          
        <ClassCounter/>
        <HooksCounter/>
        <HookCounter2/>
        

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