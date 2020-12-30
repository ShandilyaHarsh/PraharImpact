import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Student from './student';
import Social from './Social';
import Guest from './Guest';
import Card from './card';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Carousal from './carousal';

function App(){
    return(<div>
           <Router>
           <NavBar/>
           <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/Student/" component={Student}/>
           <Route path="/Social/" component={Social}/>
           <Route path="/Guest/" component={Guest}/>
           </Switch>

           </Router>
           </div>);
}
    
       

function Home(){
    return (
           <div>
           <marquee> This is an important announcement and needs to be shown on the top of the
         screen constantly with a red color to mark its importance. </marquee>
         <div class="row justify-content-around">
        <Card  name="Student" 
               para="This part of website deals with education and related links. This part of website would help those in need to get resources 
               when they can not afford it. We hope to defeat the problem of education in Villages with this"
              link="/Student/"
               />
        <Card name="Social" 
               para="This part of website deals with Land and related links. This part of website would help those in need to get resources 
               when they can not afford it. We hope to defeat the Land issues in Villages with this"
               link="/Social/"
               />
        <Card name="Guest" 
               para="This part of website deals with Employment and related links. This part of website would help those in need to get resources 
               when they can not afford it. We hope to defeat the problem of unemployment in Villages with this"
               link="/Guest/"
               />
        <Card name="Random" 
               para="This part of website deals with random and related links. This part of website would help those in need to get resources 
               when they can not afford it. We hope to defeat the problem of random in Villages with this"
              link="/Student/"
               />
               </div>
           
        
        <Carousal/>   
        <Footer/>
         
        </div>
    )
}

export default App;