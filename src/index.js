import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card';
import BubbleLogo from './components/bubbleLogo';
import Bubble from './components/bubble';
import Nav from './components/Nav';
import GuestList from './typescripts/GuestList';
import UserSearch from './typescripts/UserSearch';
import EventComponent from './events/EventComponent'
import TodoContain from './components/TodoContain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Nav/>
  <EventComponent/>
  <hr/>
  <GuestList/>
  <hr/>
  <UserSearch/>
  <hr/>
  <TodoContain/>
  </>
);
