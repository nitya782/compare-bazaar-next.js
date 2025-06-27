'use client'

import React, { useState,useEffect } from 'react';
// import PhoneSystemCardCommon from './PhoneSystemCardCommon';

import TableOfContents from '../../../components/TableOfContents';
import ProjectManagementContent from '../../../components/ProjectManagementContent';
import { CheckCircle, Clock, Calendar, Users, BarChart2 } from 'lucide-react';


const BestProjectManagement = () => {
  const [showMore, setShowMore] = useState(false);
  const [progress, setProgress] = useState(0);
const [windowWidth, setWindowWidth] = useState(0);
useEffect(() => {
  // Progress bar interval
  const interval = setInterval(() => {
    setProgress(prev => (prev >= 100 ? 0 : prev + 1));
  }, 50);

  // Window resize handler
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  setWindowWidth(window.innerWidth); // set initial width
  window.addEventListener('resize', handleResize);

  return () => {
    clearInterval(interval);
    window.removeEventListener('resize', handleResize);
  };
}, []);


const primaryColor = "#ff8633"; // Orange
  const secondaryColor = "#000e54";
  const contents = [
    { id: 1, title: "Introduction to Best Project Management Software", slug: "intro-project" },
    { id: 2, title: "What Is Project Management Software?", slug: "what-is-projectmanagementsoftware" },
    { id: 3, title: "How Does Project Management Software Works", slug: "projectmanagementsoftware-working" },
    { id: 4, title: "Approach of Project Management System", slug: "projectmanagementsoftware-approach" },
    { id: 5, title: "Key Features For Project Management System", slug: "project-feature" },
    { id: 6, title: "Complete Business Software Ecosystem", slug: "project-ecosystem" },
    { id: 7, title: "Future Trends in Project Management Tools", slug: "project-trends" },
    { id: 8, title: "Related Articles", slug: "project-articles" },
    { id: 9, title: "FAQs", slug: "project-faq" } ,
  ];


  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =` ${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const additionalText = "The project management software landscape has evolved significantly, with AI-powered automation replacing manual task tracking in many organizations. Today's project management systems offer advanced features like predictive scheduling, resource allocation algorithms, real-time collaboration tools, and comprehensive performance dashboards. These tools help teams deliver projects faster, improve cross-functional alignment, and streamline workflows. When evaluating different solutions, it's important to consider factors such as scalability, customization options, integration capabilities, and team adoption rates. Many platforms now include unified work management capabilities, bringing together task tracking, document collaboration, time management, and portfolio analytics in a single interface.";

  return (
    <>
   
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Project Management Software of 2025</h1>
  
          <p className="text-gray-800 text-base md:text-base mb-4">
            At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we understand the importance of efficient project execution for your business. That's why we recommend the <span className="text-orange-500 font-semibold">best project management platforms</span> that provide powerful planning tools and team collaboration features. The <span className="text-orange-500 font-semibold">top project management solutions</span> offer intelligent task automation, multi-view project tracking, and real-time progress analytics to help you deliver projects successfully. Whether you're managing a small team or enterprise-level initiatives, the right project management system can transform how you plan, execute, and monitor your work.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base md:text-base">
            As your projects grow in complexity, having the right management tools becomes critical. Small teams might manage with basic task lists, but as your initiatives scale, you need software that grows with you. Implementing the <span className="text-orange-500 font-semibold">best project management platform</span> can significantly enhance your ability to meet deadlines, optimize resources, and maintain visibility across all projects. At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we help you find the perfect solution that aligns with your workflow, offering features like Gantt charts, Kanban boards, workload balancing, and customizable reporting.
          </p>
            {showMore && (
              <span className="block mt-3">
                {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best project management platforms</span> provide advanced capabilities such as risk prediction, budget tracking, client portals, and AI-assisted scheduling to optimize your project outcomes. With <span className="text-orange-500 font-semibold">Compare-bazaar</span>, you can easily compare top solutions, evaluate their collaboration features, and choose the one that best fits your organizational needs. Let us guide you to the tools that will take your project delivery and team productivity to the next level.
              </span>
            )}

          <button
            className="mt-2 text-[#000e54] font-medium flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'LESS -' : 'MORE +'}
          </button>
        </section>
      
    </div>

    <div className="relative h-auto min-h-96 max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl shadow-xl overflow-hidden p-3 sm:p-6 mb-6 sm:mb-10">
  {/* Decorative elements - smaller on mobile */}
  <div className="absolute -top-10 sm:-top-16 -right-10 sm:-right-16 w-32 sm:w-64 h-32 sm:h-64 rounded-full opacity-20" style={{ backgroundColor: secondaryColor }}></div>
  <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-40 sm:w-80 h-40 sm:h-80 rounded-full opacity-20" style={{ backgroundColor: primaryColor }}></div>
  
  {/* Title - smaller on mobile */}
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center relative z-10 mb-4 sm:mb-8" style={{ color: secondaryColor }}>
    Best Project Management Software
  </h2>
  
  {/* Main content container */}
  <div className="relative z-10 flex justify-center">
    <div className="w-full max-w-4xl">
      
      {/* Moving timeline - simplified on mobile */}
      <div className="relative mb-12 sm:mb-20">
        {/* Timeline bar */}
        <div className="h-2 sm:h-3 bg-white bg-opacity-60 rounded-full w-full">
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: primaryColor }}
          ></div>
        </div>
        
        {/* Timeline milestones - compressed on mobile */}
        <div className="flex justify-between mt-1 sm:mt-2">
          {['Plan', 'Design', 'Dev', 'Test', 'Launch'].map((phase, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              style={{
                transition: 'all 0.3s ease',
                transform: progress >= index * 25 ? 'translateY(0)' : 'translateY(5px)',
                opacity: progress >= index * 25 ? 1 : 0.5
              }}
            >
              <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white"
                style={{ 
                  backgroundColor: progress >= index * 25 ? primaryColor : '#CBD5E0'
                }}
              >
                {progress >= index * 25 ? 
                  <CheckCircle size={10} className="sm:hidden" /> :
                  <span className="text-xxs sm:text-xs font-bold sm:hidden">{index + 1}</span>
                }
                {progress >= index * 25 ? 
                  <CheckCircle size={16} className="hidden sm:block" /> :
                  <span className="text-xs font-bold hidden sm:block">{index + 1}</span>
                }
              </div>
              <span className="text-xxs sm:text-xs font-medium mt-1" style={{ color: secondaryColor }}>
                {index === 2 && windowWidth < 360 ? 'Dev' : phase}
              </span>
            </div>
          ))}
        </div>
        
        {/* Desktop floating task cards - visible only on larger screens */}
        <div className="hidden sm:block">
          {[
            { 
              left: '5%', top: '4rem', delay: '0s', 
              title: 'Task Planning', 
              icon: <Calendar size={14} style={{ color: primaryColor }} />
            },
            { 
              left: '25%', top: '7rem', delay: '0.3s', 
              title: 'Time Tracking', 
              icon: <Clock size={14} style={{ color: primaryColor }} />
            },
            { 
              left: '55%', top: '4rem', delay: '0.6s', 
              title: 'Team Collaboration', 
              icon: <Users size={14} style={{ color: primaryColor }} />
            },
            { 
              left: '80%', top: '7rem', delay: '0.9s', 
              title: 'Analytics', 
              icon: <BarChart2 size={14} style={{ color: primaryColor }} />
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="absolute bg-white p-3 rounded-lg shadow-md border w-32 sm:w-40"
              style={{
                left: card.left,
                top: card.top,
                animation: `float 3s ease-in-out infinite ${card.delay}`,
                animationFillMode: 'both',
                borderColor: primaryColor,
                borderWidth: '2px',
                zIndex: 20 - index
              }}
            >
              <div className="flex items-center mb-1">
                {card.icon}
                <span className="ml-1 text-xs font-bold" style={{ color: secondaryColor }}>{card.title}</span>
              </div>
              <div className="h-1 w-12 rounded mb-1" style={{ backgroundColor: primaryColor }}></div>
              <p className="text-xs" style={{ color: secondaryColor }}>
                {index === 0 && "Plan your project roadmap"}
                {index === 1 && "Track hours & deadlines"}
                {index === 2 && "Work together seamlessly"}
                {index === 3 && "Track project metrics"}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile task cards - extremely compact for iPhone */}
        <div className="sm:hidden mt-4 space-y-2 mb-6 ml-43 w-full">
          {[
            { 
              title: 'Task Planning', 
              icon: <Calendar size={12} style={{ color: primaryColor }} />,
              text: "Plan your project roadmap"
            },
            { 
              title: 'Time Tracking', 
              icon: <Clock size={12} style={{ color: primaryColor }} />,
              text: "Track hours & deadlines"
            },
            { 
              title: 'Team Collab', 
              icon: <Users size={12} style={{ color: primaryColor }} />,
              text: "Work together seamlessly"
            },
            { 
              title: 'Analytics', 
              icon: <BarChart2 size={12} style={{ color: primaryColor }} />,
              text: "Track project metrics"
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="bg-white p-2 rounded-lg shadow-md border flex items-center"
              style={{
                borderColor: primaryColor,
                borderWidth: '1px',
                animation: `slideUp 0.5s ease-out ${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="mr-2 p-1 rounded flex-shrink-0">
                {card.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold truncate" style={{ color: secondaryColor }}>{card.title}</div>
                <p className="text-xs truncate" style={{ color: secondaryColor }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Features row - properly centered */}
<div className="flex justify-center w-full mt-25 ml-43">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 w-full max-w-md sm:max-w-2xl mx-auto">
    {[
      { percent: '85%', label: 'Productivity Increase' },
      { percent: '60%', label: 'Time Saved' },
      { percent: '95%', label: 'Customer Satisfaction' }
    ].map((stat, index) => (
      <div 
        key={index} 
        className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center shadow-md w-full"
        style={{
          animation: `slideUp 0.5s ease-out ${index * 0.2}s`,
          animationFillMode: 'both'
        }}
      >
        <div className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: primaryColor }}>{stat.percent}</div>
        <div className="text-xs" style={{ color: secondaryColor }}>{stat.label}</div>
      </div>
    ))}
  </div>
</div>
    </div>
  </div>
        
  {/* CSS Animations */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Custom text-xxs class for extremely small text on tiny screens */
    .text-xxs {
      font-size: 0.65rem;
      line-height: 0.75rem;
    }
  `}</style>
</div>
    <TableOfContents contents={contents} />

    <ProjectManagementContent/>

    </>
  );
};

export default BestProjectManagement;