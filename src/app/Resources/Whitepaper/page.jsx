"use client";

import React from 'react';
import { whitepapers } from "../../../components/whitepaperData";
import Head from 'next/head';
import WhitepaperCard from "../../../components/WhitepaperCard";              

const Whitepaper = () => {
  return (
    <>
      <Head>
        <title>Our Whitepapers - Compare Bazaar</title>
        <meta name="title" content="Our Whitepapers - Compare Bazaar" />
        <meta
          name="description"
          content="Download free whitepapers on software comparison, vendor selection, and technology buying guides. Expert insights to help you make informed business decisions."
        />
        <link rel="canonical" href="https://www.compare-bazaar.com/WhitePaper" />
      </Head>
      
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <h1 className="text-4xl font-semibold text-center mb-4 text-gray-900">
          Our Whitepapers
        </h1>
        
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Download comprehensive guides on software comparison, vendor selection, 
          and technology implementation to make informed business decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whitepapers.map((paper, index) => (
            <div key={`${paper.title}-${index}`} className="w-full">
              <WhitepaperCard paper={paper} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whitepaper;
