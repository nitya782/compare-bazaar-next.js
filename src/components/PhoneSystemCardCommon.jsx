
import React, { useState } from 'react';
import { Phone, Star, CheckCircle, ArrowRight, Award } from 'lucide-react';

const PhoneSystemCard = ({ system, onCompareQuotesClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  return (
    <div 
      className="border-2 border-orange-500 rounded-xl shadow-lg p-4 flex flex-col bg-white relative overflow-hidden group mb-8 transition-all duration-300"
      style={{
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderWidth: isHovered ? '2px' : '2px',
        borderImage: isHovered ? 'linear-gradient(45deg, #ff8a00, #ff5630) 1' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Design Elements with enhanced animations */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -mr-12 -mt-12 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -ml-10 -mb-10 opacity-70 transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"></div>
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-tl from-purple-100 to-pink-100 rounded-full opacity-0 transition-all duration-500 group-hover:opacity-80 group-hover:scale-150"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      {/* Highlighted Tag with improved animation */}
      {system.isPopular && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-20 flex items-center gap-1 shadow-md">
          <Award size={12} className="animate-pulse" />
          <span className="animate-pulse">Popular</span>
        </div>
      )}
      
      {/* Header Section with enhanced styling */}
      <div className="mb-3 relative z-10">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-1 text-center transition-all duration-300 group-hover:from-orange-600 group-hover:to-orange-500">{system.name}</div>
        <div className="text-xs text-gray-600 text-center font-medium px-3 py-1 bg-gray-50 rounded-full inline-block mx-auto shadow-sm transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow">{system.bestFor}</div>
      </div>
      
      {/* Logo Section with enhanced hover effect */}
      <div className="h-12 flex items-center justify-center mb-3 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:transform group-hover:rotate-1">
        {system.logo.startsWith('/images') ? (
          <img src={system.logo} alt={system.name} className="h-12 object-contain filter drop-shadow transition-all duration-300 group-hover:drop-shadow-md" />
        ) : (
          <div className="text-2xl font-bold text-gray-700 bg-gray-50 p-3 rounded-lg w-full text-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-50 group-hover:to-white">{system.logo}</div>
        )}
      </div>
      
      {/* Feature List with improved styling and animation */}
      <ul className="text-xs text-gray-700 space-y-2 mb-4 relative z-10 bg-gray-50 p-3 rounded-lg transition-all duration-300 group-hover:shadow-inner group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
        {[system.price, system.videoCapacity, system.support].map((feature, index) => (
          <li key={index} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1">
            <CheckCircle size={14} className="text-green-500 transition-all duration-300 group-hover:text-green-600 group-hover:scale-110" />
            <span className="transition-all duration-300 group-hover:font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Contact Info with enhanced animation */}
      {system.phone && (
        <div className="mb-3 text-center relative z-10 transition-all duration-300 hover:scale-105">
          <a
            href={`tel:${system.phone}`}
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 font-medium text-sm relative overflow-hidden group/phone"
          >
            <Phone size={14} className="transition-all duration-300 group-hover/phone:rotate-12" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 group-hover/phone:after:w-full">{system.phone}</span>
          </a>
        </div>
      )}
      
      {/* Additional Info with enhanced styling */}
      <div className="text-xs text-center text-gray-500 mb-3 relative z-10 italic transition-all duration-300 group-hover:text-gray-600">
        {system.linkText}
      </div>
      
      {/* Button Section with enhanced interactivity */}
      <div className="mt-auto flex justify-center relative z-10">
        <button
          onClick={onCompareQuotesClick}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="py-2 px-6 rounded-lg font-bold bg-orange-500 text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden w-4/5 mx-auto shadow-md hover:shadow-lg"
          style={{
            transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <span className="relative z-10 text-sm transition-all duration-300 group-hover/btn:tracking-wider">Compare Quotes</span>
          <ArrowRight 
            size={16} 
            className="relative z-10 transition-all duration-300 group-hover/btn:translate-x-1" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
      
      {/* Rating Indicator with enhanced styling */}
      {system.rating && (
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow-md z-20 transition-all duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-50">
          <Star size={12} className="text-yellow-500 fill-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="text-xs font-bold transition-all duration-300 group-hover:text-yellow-700">{system.rating}</span>
        </div>
      )}
      
      {/* Subtle border highlight effect */}
      <div className="absolute inset-0 rounded-xl border border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-orange-200"></div>
    </div>
  );
};

export default PhoneSystemCard;

