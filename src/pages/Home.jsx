import React from 'react';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';
import Inspiration from '../Components/Inspiration/Inspiration';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import Review from '../Components/Review/Review';

const Home = () => {
  return (
    <div>
     <NavigationBar/>
     <Banner/>
     <Categories/>
     <Review/>
     <Inspiration/>
    </div>
  )
}

export default Home
