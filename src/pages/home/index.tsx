import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Speakers from '../../components/Speakers';
import Agenda from '../../components/Agenda';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Agenda />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Home;



