"use client";
import { useState, useEffect } from "react";
import WhitepaperForm from "./WhitePaperForm";
import { Download, ArrowLeft, Clock, BookOpen, BarChart2 } from "lucide-react";

const WhitepaperDetail = ({ paper, onBack }) => {
  const [showForm, setShowForm] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 ">
      <button 
        onClick={onBack}
        className="m-6 px-4 py-2 text-white text-base font-medium rounded-md bg-[#000e54] hover:bg-[#ff8633] cursor-pointer transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Whitepapers
      </button>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left side - Image */}
        <div className="w-full lg:w-2/5 lg:p-8 flex flex-col items-center justify-center bg-gray-50">
          <div className="relative group">
            <img 
              src={paper.image} 
              alt={paper.title}
              className="w-full max-w-md object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#000e54]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Download  onClick={() => setShowForm(true)} className="cursor-pointer h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          <div className="mt-8 text-center space-y-4">
            <span className="text-6xl mb-4 block ">{paper.icon}</span>
            <h2 className="text-xl font-semibold text-gray-800">{paper.title}</h2>
            <p className="text-[#ff8633] font-medium">By Compare Bazaar</p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-[#000e54]" />
                <span>{paper.readTime || '10 min'} read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="h-4 w-4 text-[#000e54]" />
                <span>{paper.pages || '15'} pages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BarChart2 className="h-4 w-4 text-[#000e54]" />
                <span>{paper.level || 'Intermediate'} level</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-3/5 p-4">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
            
             <style jsx>{`
    @keyframes pop {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    .animate-pop {
      animation: pop 1s infinite;
    }
  `}</style>

         <div className="flex items-center gap-4">  
    <h1 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
      Request Your Free Guide Now:
    </h1>
    <Download
      className="h-8 w-8 text-[#000e54] cursor-pointer animate-pop hover:animate-none"
      onClick={() => setShowForm(true)}
    />
  </div>
            </div>
            
            <div className="bg-[#000e54]/5 p-6 rounded-lg mb-8 border-l-4 border-[#ff8633]">
              <h2 className="text-lg font-bold text-[#000e54] mb-3 italic">
                "{paper.title}"
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {paper.fullDescription}
              </p>
            </div>
            
            {/* Key Takeaways Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#000e54] mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Key Takeaways
              </h3>
              <ul className="space-y-2 pl-5">
                {(paper.keyPoints || [
                  'Comprehensive market analysis',
                  'Actionable investment strategies',
                  'Latest industry trends',
                  'Expert recommendations'
                ]).map((item, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                    <span className="text-[#ff8633]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="cursor-pointer space-y-4">
            <button
              onClick={() => setShowForm(true)}
              className="w-full cursor-pointer py-4 bg-gradient-to-r from-[#000e54] to-[#000e54]/90 text-white font-bold rounded-lg hover:from-[#ff8633] hover:to-[#ff8633]/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Download className="cursor-pointer h-5 w-5" />
              DOWNLOAD FREE WHITEPAPER
            </button>
            
            <p className="text-center text-sm text-gray-500">
              No credit card required • 100% free download
            </p>
          </div>
        </div>
      </div>

      {showForm && (
        <WhitepaperForm 
          paper={paper} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
    </>

  );
};

export default WhitepaperDetail;
