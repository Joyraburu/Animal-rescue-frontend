import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import NewAnimal from "../components/newanimal";
import Home from "../components/home";
import Header from "../components/header"
import ContactUs from '../components/contactus';

const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route exact path='/' component ={Home}/>
            <Route path = "/newanimal" component ={NewAnimal}/>
            <Route path ="/contactus" component={ContactUs}/>
            
        </Switch> 
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;