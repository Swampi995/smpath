'use client';
import { Navbar, Hero, Contact } from '../components';


export default function Home() {
  return (
    <>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className="relative z-0">
        <Contact />
      </div>
    </>
  );
}
