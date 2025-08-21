'use client';

import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Welcome from './Components/Welcome/Welcome';
import Crosslinks from './Components/Crosslinks/Crosslinks';
import Newshighlights from './Components/Newshighligts/Newshighlights';
import Manifesto from './Components/Manifesto/Manifesto';
import Tickets from './Components/Tickets/Tickets';
// import Footer from './Components/Footer/Footer';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      {!isLoading && (
        <main>
          <Header />
          <Hero />
          <Welcome />
          <Crosslinks />
          <Newshighlights />
          <Manifesto />
          <Tickets />
        </main>
      )}
    </>
  );
}