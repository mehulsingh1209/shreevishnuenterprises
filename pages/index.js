import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shree Vishnu Enterprises | Power Systems & Energy Management Solutions</title>
        <meta name="description" content="Industry-leading power systems, grid operation components, and energy management solutions trusted by professionals worldwide." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <Features />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
