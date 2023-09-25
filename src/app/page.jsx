"use client"
import Hero from "../components/Hero";
import QuienesSomos from "../components/QuienesSomos";
import QueOfrecemos from "../components/QueOfrecemos";
import PorQueElegirnos from "../components/PorQueElegirnos";
import Herramientas from "../components/Herramientas";
import GiveItAChance from "../components/GiveItAChance";
import ContactForm from "../components/ContactForm";
import NosAyudanACrecer from "../components/NosAyudanACrecer";

import { useEffect } from "react";



export default function Home() {


  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  return (
    <main>
      <Hero />
      <GiveItAChance />
      <QuienesSomos />
      <QueOfrecemos />
      <PorQueElegirnos />
      <NosAyudanACrecer />
      <Herramientas />
      <ContactForm />
    </main>
  );
}
