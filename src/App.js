import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { auth } from './components/firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/signinup/signinup.page';


class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {this.setState({ currentUser: user})})
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInUp />} />
      </Routes>
    </div>
  
  );
}

}

export default App;