import React from 'react';
import Main from '../components/Main';
import AnimationMenu from '../AnimationMenu';
import Hero from '../components/Hero';
import FoodItem from '../components/FoodItem';
import Food from '../components/Food';
import Items from '../components/Items';

export default function HomePage() {
  return (
    <>
      <Main/>
      <AnimationMenu/>
      <Hero/>
      <FoodItem/>
      <Food/>
      <Items/>
    </>
  )
}
