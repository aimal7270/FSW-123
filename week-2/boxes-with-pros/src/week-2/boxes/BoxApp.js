import React from 'react'
import BoxCard from './card.js'
import './card.css'


function App() {
    return (
      <div className="flexBox">
              <BoxCard
                  title='Hello!'
                  subtitle = 'Facny Fruit and produce'
                  description= 'Love this store'
                  bgcolor = '#ff0001'
                  width = "250px"
              />
              <BoxCard
                  title='Work here at Fish Market'
                  subtitle = 'Salmon is the best'
                  description= 'Filet no skin'
                  bgcolor = '#ffa500'
                  width = "250px"
              />
              <BoxCard
                  title='I am alergic to shrimp'
                  subtitle = 'All shell fish'
                  description= 'but i like Lobster'
                  bgcolor = '#fffe01'
                  width = "250px"
              />
              <BoxCard
                  title='I Love my family'
                  subtitle = 'We are only three members'
                  description= 'Aimal, Shema, and Laly'
                  bgcolor = '#008000'
                  width = "250px"
              />
          </div>
    );
  }
  
  export default App;
  