'use client';

import { useState, useEffect } from 'react';
import "../styles/Home.css";
import { ArrowRight } from 'lucide-react';
import Head from 'next/head';
import { ChevronRight, TrendingUp, DollarSign, Search, BarChart3, Zap, Users ,Award} from 'lucide-react';
import CookieConsent from '../components/CookieConsent';
import Image from 'next/image'

import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Headphones,
  Clipboard,
} from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
// import PhoneSystem from './BusinessPhoneSystem';

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  // HANDELING THE SUBSCRIBE BUTTON
  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69"); // Replace with your Web3Forms API Key
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail(""); // Clear input field
          setSubscribed(false); // Reset button state
        }, 3000); // Reset form after 3 seconds
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const testimonials = [
    {
      avatar: "A",
      avatarColor: "bg-purple-600",
      name: "Aisha R.",
      date: "06/12/2024",
      stars: 5,
      text: "Compare Bazaar transformed our email marketing strategy completely. Their team helped us build campaigns that actually get opened, with a 300% increase in engagement. Now I actually look forward to checking our marketing metrics!"
    },
    {
      avatar: "M",
      avatarColor: "bg-red-600",
      name: "Michael T.",
      date: "11/27/2023",
      stars: 5,
      text: "As a small business owner, I was overwhelmed by lead generation. Compare Bazaar delivered qualified leads that actually converted. Their CRM integration made tracking everything seamless. Worth every penny!"
    },
    {
      avatar: "D",
      avatarColor: "bg-blue-500",
      name: "David K.",
      date: "10/31/2023",
      stars: 5,
      text: "Our new website built by Compare Bazaar has increased our online conversions by 45% in just two months. They understood our vision and created a site that truly represents our brand while being incredibly functional."
    },
    {
      avatar: "J",
      avatarColor: "bg-green-500",
      name: "Jessica L.",
      date: "09/15/2024",
      stars: 5,
      text: "The call center solutions from Compare Bazaar have revolutionized our customer service. Response times are faster, customer satisfaction is up, and our team has better tools to manage calls. It's like we upgraded to first class!"
    },
    {
      avatar: "R",
      avatarColor: "bg-yellow-500",
      name: "Robert C.",
      date: "08/20/2024",
      stars: 5,
      text: "I was skeptical about outsourcing lead generation, but Compare Bazaar proved me wrong. The quality of leads we received was exceptional, and their CRM integration made follow-ups effortless. Our sales have never been better!"
    },
    {
      avatar: "S",
      avatarColor: "bg-indigo-600",
      name: "Sophia M.",
      date: "07/05/2024",
      stars: 5,
      text: "From website design to email automation, Compare Bazaar has been our one-stop solution for digital growth. Their team understands how all the pieces work together to build a complete marketing ecosystem. Truly partners in our success!"
    }
];
const clients = [
  { name: "Willscot", image: "/images/zoho.png" },
  { name: "RingCentral", image: "/images/zoom.png" },
  { name: "Culligan", image: "/images/twillio.png" },
  { name: "Toshiba", image: "/images/activ.png" },
  { name: "Satellite", image: "/images/azuga.png" },
  { name: "Google", image: "/images/bomb.png" },
  { name: "Client 7", image: "/images/cloud.png" },
  { name: "Apple", image: "/images/creatio.png" },
  { name: "Apple 2", image: "/images/design.png" },
  { name: "Netflix", image: "/images/goan.png" },
  { name: "Netflix 2", image: "/images/goto.png" },
  { name: "Netflix 3", image: "/images/honey.png" },
  { name: "Google", image: "/images/hub.png" },
  { name: "Client 7", image: "/images/motive.png" },
  { name: "Apple", image: "/images/nextiva.png" },
  { name: "Apple 2", image: "/images/ooma.png" },
  { name: "Netflix", image: "/images/pipe.png" },
  { name: "Netflix 2", image: "/images/ringcentral.png" },
  { name: "Google", image: "/images/samsara.png" },
  { name: "Client 7", image: "/images/tele.png" },
  { name: "Apple", image: "/images/teramind.png" },
  { name: "Apple 2", image: "/images/veri.png" },
  { name: "Netflix", image: "/images/verizon.png" },
  { name: "Netflix 2", image: "/images/vonage.png" },
];


  // Handle component mounting and resizing
  useEffect(() => {
    setIsMounted(true);
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      // Get current and new logos per screen values
      const currentLogosPerScreen = getLogosPerScreen(width);
      const newLogosPerScreen = getLogosPerScreen(newWidth);
      
      // If number of logos shown changes due to resize, adjust activeIndex
      if (currentLogosPerScreen !== newLogosPerScreen) {
        // Calculate what "group" we're currently on
        const currentGroup = Math.floor(activeIndex / currentLogosPerScreen);
        
        // Set new activeIndex based on the same group but with new logosPerScreen
        const newStartIndex = currentGroup * newLogosPerScreen;
        
        // Make sure we don't exceed the maximum valid index
        const maxValidIndex = Math.max(0, clients.length - newLogosPerScreen);
        setActiveIndex(Math.min(newStartIndex, maxValidIndex));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, activeIndex]);

  // Number of logos to show at once - accepts width parameter for calculations
// Only use the passed argument, default to 0 (meaning no width info yet)
const getLogosPerScreen = (screenWidth = 0) => {
  if (screenWidth < 640) return 1;
  if (screenWidth < 1024) return 3;
  return 6;
};

// Use width from state (initialized on client side)
const logosPerScreen = getLogosPerScreen(width);
  
  // Get visible logos based on active index
  const getVisibleLogos = () => {
    return clients.slice(activeIndex, activeIndex + logosPerScreen);
  };

  const goToLogo = (index) => {
    // Ensure index is a multiple of logosPerScreen
    const adjustedIndex = index * logosPerScreen;
    
    // Make sure we don't exceed the maximum valid index
    const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
    setActiveIndex(Math.min(adjustedIndex, maxValidIndex));
  };

  const nextLogo = () => {
    if (activeIndex + logosPerScreen < clients.length) {
      setActiveIndex((prev) => prev + logosPerScreen);
    } else {
      setActiveIndex(0); // Restart from the beginning
    }
  };

  const prevLogo = () => {
    if (activeIndex - logosPerScreen >= 0) {
      setActiveIndex((prev) => prev - logosPerScreen);
    } else {
      // Jump to the last valid starting position
      const maxValidIndex = Math.max(0, clients.length - logosPerScreen);
      setActiveIndex(maxValidIndex);
    }
  };

  const shouldShowDots = () => {
    return width >= 640 && clients.length > logosPerScreen; // Only show dots on medium+ screens when needed
  };

  const getNumberOfDots = () => {
    return Math.ceil(clients.length / logosPerScreen);
  };

  // Don't render until component is mounted to avoid SSR issues with window
  if (!isMounted) return null;


 const tools = [
  {
    name: "Best CRM Software",
    icon: <Users />,
    link: "/BestCRMSoftware",
    image: "/images/crm.webp",
  },
  {
    name: "Best Email Marketing Services",
    icon: <Mail />,
    link: "/EmailMarketing",
    image: "/images/emailsystem.png",
  },
  {
    name: "Best Website Building and Management Platforms",
    icon: <Globe />,
    link: "/BestWebsiteBuildingPlatform",
    image: "/images/bestwebsite.webp",
  },
  {
    name: "Business Phone Systems",
    icon: <Phone />,
    link: "/phone-systems",
    image: "/images/BPS.webp",
  },
  {
    name: "GPS Fleet Management Software",
    icon: <MapPin />,
    link: "/GpsFleetMangement",
    image: "/images/gps-system.webp",
  },
  {
    name: "Best Employee Management Software",
    icon: <Users />,
    link: "/BestEmployeeMangementSoftware",
    image: "/images/bestemploye.webp",
  },
  {
    name: "Best Call Center Management Software",
    icon: <Headphones />,
    link: "/Callcenter",
    image: "/images/call.webp",
  },
  {
    name: "Best Payroll System",
    icon: <DollarSign />,
    link: "/BestPayrollSystem",
    image: "/images/payroll.webp",
  },
  {
    name: "Best Project Management Software",
    icon: <Clipboard />,
    link: "/BestProjectManagement",
    image: "/images/bestproject.webp",
  },
];

  return (
    <>
            <Head>
              <title>Compare Bazaar : Compare Quotes from Top Vendors & Make Smarter Buying Decisions</title>
              <meta name="description" content="Compare quotes from verified vendors with confidence at Compare-Bazaar. Save time, money, and stress with transparent comparisons you can trust." />
               <link rel="canonical" href="https://www.compare-bazaar.com/" />
            </Head>
            
      
      <div className="relative w-full ">
        {/* First Section*/}
     {/* First Section*/}
 

 <div className="relative min-h-[70vh] bg-gradient-to-br from-[#ff8633] via-amber-600 to-orange-800 overflow-hidden">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="mesh1" cx="20%" cy="20%" r="25%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="mesh2" cx="80%" cy="30%" r="30%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="mesh3" cx="60%" cy="80%" r="35%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh1)"/>
            <rect width="100%" height="100%" fill="url(#mesh2)"/>
            <rect width="100%" height="100%" fill="url(#mesh3)"/>
          </svg>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-orange-300 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-40 left-1/3 w-8 h-8 bg-amber-300 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
        <div className="absolute top-1/3 left-[60%] w-5 h-5 bg-white/40 rounded-full animate-bounce opacity-70 blur-sm"></div>
<div className="absolute bottom-24 right-1/4 w-7 h-7 bg-orange-200 rounded-full animate-pulse opacity-60 blur"></div>
<div className="absolute top-1/4 right-1/3 w-3 h-3 bg-yellow-100 rounded-full animate-ping opacity-80"></div>
<div className="absolute bottom-10 left-1/2 w-6 h-6 bg-amber-100 rounded-full animate-bounce opacity-50 blur-sm"></div>
<div className="absolute top-10 left-1/2 w-10 h-10 bg-white/20 rounded-full animate-pulse opacity-40 blur"></div>
<div className="absolute bottom-16 right-10 w-5 h-5 bg-orange-100 rounded-full animate-bounce opacity-60 blur-sm"></div>
<div className="absolute top-1/2 left-10 w-8 h-8 bg-yellow-200 rounded-full animate-ping opacity-50 blur"></div>
<div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-white/30 rounded-full animate-pulse opacity-40 blur"></div>
<div className="absolute top-1/5 right-1/5 w-7 h-7 bg-amber-100 rounded-full animate-bounce opacity-50 blur"></div>
<div className="absolute bottom-1/3 right-1/2 w-4 h-4 bg-orange-300 rounded-full animate-ping opacity-60 blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          
          {/* Left Content */}
         
          {/* Left Content */}
          <div className="space-y-10">
            
            {/* Hero Title */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white leading-[0.9] tracking-tight">
                <span className="block">Smart Pricing</span>
                <span className="block relative">
                  Intelligence
                  <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 rounded-full transform origin-left scale-x-0 animate-[slideIn_1.5s_ease-out_0.5s_forwards]"></div>
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="text-md lg:text-2xl text-orange-50 font-light leading-relaxed max-w-2xl ">
              Transform your procurement process with AI-powered price comparisons. 
              <span className="font-semibold text-yellow-200"> Save 40-60% </span>
              on every purchase while making data-driven decisions in seconds.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              {[
                { icon: TrendingUp, label: "60% Savings", desc: "Average cost reduction" },
                { icon: Zap, label: "3 Seconds", desc: "Compare 100+ vendors" },
                { icon: Users, label: "50K+ Users", desc: "Trust our platform" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{item.label}</div>
                      <div className="text-orange-100 text-sm">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
<div className="space-y-4 ">
  <div className="bg-gradient-to-r from-white via-white to-orange-50 rounded-2xl p-2 shadow-lg border border-white/50">
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <div className="flex-1 flex items-center px-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff8633] to-orange-600 flex items-center justify-center mr-3 shadow-md">
          <Search className="w-5 h-5 text-white" />
        </div>
        <input
          type="email"
          placeholder="Your business email"
          className="flex-1 py-3 text-lg outline-none text-gray-800 placeholder-gray-500 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>
      <button
        className="bg-gradient-to-r from-[#ff8633] to-orange-600 hover:from-orange-600 hover:to-[#ff8633] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
        onClick={handleSubscribe}
        disabled={loading}
      >
        {loading ? "Starting..." : subscribed ? "Welcome! ✨" : "Start Free Trial"}
        {!loading && !subscribed && <ChevronRight className="ml-1 h-5 w-5" />}
      </button>
    </div>
  </div>
  <p className="text-orange-100 text-center opacity-90 text-lg">
    ✅ Free 14-day trial • ✅ No credit card required • ✅ Cancel anytime
  </p>
</div>

          </div>
          {/* Right Content - Revolutionary 3D Interface */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              
{/* Main Interface Card */}
<div className="animate-[floatSlow_8s_ease-in-out_infinite]">
  <div
    className="relative bg-gradient-to-br from-white via-gray-50 to-orange-50 rounded-3xl shadow-[0_10px_40px_10px_rgba(255,134,51,0.25)] border-2 border-orange-200 overflow-hidden transition-transform duration-700 max-h-[710px] min-h-[260px] overflow-y-auto"
    style={{
      transform: 'perspective(1800px) rotateX(12deg) rotateY(-16deg)'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'perspective(1800px) rotateX(0deg) rotateY(0deg) scale(1.05)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'perspective(1800px) rotateX(12deg) rotateY(-16deg)';
    }}
  >
                
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-2 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8633] to-orange-600 flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 text-lg">Compare Bazaar </div>
                        <div className="text-xs text-gray-500">Real-time Analysis</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-4 h-4 rounded-full bg-red-400 shadow-sm"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-sm"></div>
                      <div className="w-4 h-4 rounded-full bg-green-400 shadow-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-2 space-y-6">
                  
                  {/* Search Query Display */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                    <div className="text-sm text-gray-600 mb-1">Currently analyzing:</div>
                    <div className="font-semibold text-gray-800">&quot;Best CRM Software for Enterprise&quot;</div>
                    <div className="text-xs text-blue-600 mt-2">🔍 Found 247 vendors • Analyzed in 2.3s</div>
                  </div>

                  {/* Top Recommendations */}
                  <div className="space-y-3">
                    {[
                      { 
                        name: "Salesforce Enterprise", 
                        score: 9.4, 
                        price: "$150/mo", 
                        savings: "Save $200/mo",
                        color: "from-blue-500 to-blue-600",
                        features: "Advanced AI, Custom Fields, API Access"
                      },
                      { 
                        name: "HubSpot Professional", 
                        score: 8.8, 
                        price: "$90/mo", 
                        savings: "Save $110/mo",
                        color: "from-green-500 to-green-600",
                        features: "Marketing Hub, Sales Analytics, Automation"
                      },
                      { 
                        name: "Pipedrive Advanced", 
                        score: 8.2, 
                        price: "$65/mo", 
                        savings: "Save $85/mo",
                        color: "from-purple-500 to-purple-600",
                        features: "Pipeline Management, Mobile App, Integrations"
                      }
                    ].map((item, index) => (
                      <div key={index} className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} shadow-sm`}></div>
                            <div>
                              <div className="font-semibold text-gray-800 text-sm">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.features}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#ff8633] text-sm">{item.price}</div>
                            <div className="text-xs text-green-600 font-medium">{item.savings}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-[#ff8633] to-orange-500 rounded-full transition-all duration-1000"
                                style={{ width: `${item.score * 10}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="ml-3 text-xs font-bold text-gray-700">
                            {item.score}/10
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI Insight Panel */}
                  <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-4 border-2 border-orange-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8633] to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 mb-1">💡 AI Recommendation</div>
                        <div className="text-sm text-gray-700 leading-relaxed">
                          Based on your requirements, <span className="font-semibold text-[#ff8633]">Salesforce Enterprise</span> offers the best ROI with advanced features. You will save <span className="font-bold text-green-600">$2,400 annually</span> compared to your current solution.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</div>
              {/* Floating Action Buttons */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-3 border border-gray-200 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-800">$50K+ Saved</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-3 border border-gray-200 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#ff8633] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-800">Live Analysis</span>
                </div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8633]/20 to-orange-600/20 rounded-3xl filter blur-xl scale-110 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { 
            transform: perspective(1200px) rotateX(5deg) rotateY(-8deg) translateY(0px);
          }
          50% { 
            transform: perspective(1200px) rotateX(5deg) rotateY(-8deg) translateY(-15px);
          }
        }
        
        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
        {/* BEST TOOLS SECTION */}
        {/* #ebf5fb;color light blue if needed */}
 <div className="max-w-6xl mx-auto py-12 px-4">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Best tools to run your business</h2>
    <p className="text-base text-gray-800 max-w-2xl mx-auto">
      Explore verified reviews, compare real prices, and find the best-fit solutions for your needs and budget—all in one place.
    </p>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {tools.map((tool, index) => (
      <div 
        key={index}
        className="flex flex-col rounded-xl shadow-xl overflow-hidden h-full"
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-start justify-between mb-3 min-h-[60px]">
            <div className="flex items-start space-x-3 flex-1 min-w-0">
              <div className={`p-2 rounded-lg flex-shrink-0 ${
                index % 2 === 0 ? 'bg-[#000e54] text-white' : 'bg-blue-100 text-[#000e54]'
              }`}>
                {tool.icon}
              </div>
              <h3 className="font-semibold text-gray-900 break-words">{tool.name}</h3>
            </div>
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex-shrink-0 ml-2">
              {tool.category}
            </span>
          </div>
          
          <div className="mb-4 rounded-lg overflow-hidden aspect-square">
            <img 
              src={tool.image}
              alt={tool.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-auto">
            <a 
              href={tool.link}
              className="inline-flex items-center justify-center px-4 py-2 bg-[#ff8633] hover:bg-[#e67420] text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow gap-2 text-base"
            >
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  
</div>
{/* <ChangingImageGallery/> */}
        {/* CLIENTS SECTION */}
        <section className="py-16 px-5 bg-white">
          <div className="w-full max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Brands We Work With</h2>
            <p className="text-center text-gray-600 mb-8 text-sm">Our Learners Work at Global Companies & Startups</p>

            {/* Navigation and logos container */}
            <div className="relative flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={prevLogo}
                className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Previous logos"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Logo Container - reduced width for 1024px with increased spacing */}
              <div className="flex justify-center items-center space-x-12 overflow-hidden w-full lg:w-3/4 xl:w-4/5">
                {getVisibleLogos().map((client, index) => (
                  <div key={index} className="flex items-center justify-center h-15 w-30 transition-all duration-300">
                    <img
                      src={client.image}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextLogo}
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                aria-label="Next logos"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              {shouldShowDots() && (
                <div className="flex">
                  {Array.from({ length: getNumberOfDots() }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToLogo(i)}
                      className={`w-2 h-2 rounded-full mx-1 mb-1 transition-colors duration-200 ${
                        i === Math.floor(activeIndex / logosPerScreen)
                          ? 'bg-gray-700'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to logo group ${i + 1}`}
                      aria-current={i === Math.floor(activeIndex / logosPerScreen) ? 'true' : 'false'}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="relative w-full bg-white py-12 px-4 md:px-8 lg:px-12 overflow-hidden">
        
        
        </div>
        {/* <Feedback 
        title="What Our Customers Say"
        testimonials={testimonials}/> */}

      </div>
      <CookieConsent/>
    </>
  );
};

export default Home;
