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
import HookCounter3 from './hooks/HookCounter3';
import HookCounterArray from './hooks/HookCounterArray';
import EffectRender from './hooks/EffectRender';
import ConditionalRunEffect from './hooks/ConditionalRunEffect';
import FetchEffects from './hooks/FetchEffects';
import HookContextF from './hooks/HookContextF';
import HookContextC from './hooks/HookContextC';
import Counter2Reducer from './hooks/Counter2Reducer';
import Counter1_useReducer from './hooks/Counter1_useReducer';
import DataFetch2 from './hooks/DataFetch2';
import ParentComponent from './hooks/ParentComponent';
import M_Counter from './memo_UseRef_Hook/M_Counter';
import CustomCounter from './custom/CustomCounter';
import UserForm from './custom/UserForm';
//import RefsDemo from './components/RefsDemo';
//import Hero from './components/Hero'
//import ErrorBoundry from './components/ErrorBoundry';
//import ClickCounter from './components/ClickCounter';
//import HoverCounter from './components/HoverCounter';

 export const UserContextHooks = React.createContext();
 export const ChannelContext = React.createContext();

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
          {/*
        <ClassCounter/>
        <HooksCounter/>
        <HookCounter2/>
        <HookCounter3/>
        <HookCounterArray/>
        <EffectRender/>
        <ConditionalRunEffect/>
         <FetchEffects/>
          */}
        
      <UserContextHooks.Provider value={'Jonathan'}>
          <ChannelContext.Provider value={'Codevolution'}>
            <HookContextC />
          </ChannelContext.Provider>
      </UserContextHooks.Provider>
      <Counter1_useReducer/>
      <DataFetch2/>
      <ParentComponent/>
      <M_Counter/>
      <CustomCounter/>
      <UserForm/>
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