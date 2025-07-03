'use client'

import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
// import Feedback from './Feedback';
// import busimage from '/images/honey.png';
import TableOfContents from './TableOfContents';

const CallCenterContent = () => {
   

  // faq
  const callCenterFAQs = [
    {
      question: "How does your call center management system improve customer service?",
      answer: [
        "Intelligent call routing based on agent skills and customer needs",
        "Real-time monitoring and coaching tools for quality assurance",
        "Omnichannel capabilities connecting voice, chat, email, and social media",
        "Customer journey tracking across all touchpoints",
        "Smart IVR systems with natural language processing"
      ]
    },
    {
      question: "What features does your system offer for agent performance management?",
      answer: [
        "Real-time dashboards and performance metrics",
        "Call recording and quality scoring",
        "Automated coaching based on conversation analysis",
        "Gamification and incentive management tools",
        "Skill-based scheduling and development tracking"
      ]
    },
    {
      question: "How does your system handle call overflow during peak times?",
      answer: "Our system uses predictive analytics to forecast call volumes and automatically scales resources. It includes dynamic IVR messaging, callback options, intelligent queue management, and can instantly activate overflow call centers or remote agents when thresholds are reached."
    },
    {
      question: "Can the system help with compliance and call recording regulations?",
      answer: [
        "Yes, our compliance features include:",
        "Automatic call recording with consent management",
        "PCI DSS compliant payment processing",
        "HIPAA-compliant data handling options",
        "Customizable disclosure statements",
        "Comprehensive audit trails for all interactions"
      ]
    },
    {
      question: "How does your workforce management functionality work?",
      answer: "Our WFM system uses historical data and machine learning to predict call volumes and optimal staffing needs. It manages agent schedules, monitors adherence in real-time, allows for shift bidding and swapping, handles time-off requests, and optimizes breaks to maintain service levels."
    },
    {
      question: "What reporting and analytics capabilities does the system offer?",
      answer: "We provide comprehensive analytics including call metrics (AHT, FCR, abandonment rates), quality scores, customer satisfaction, agent performance, and trend analysis. Custom reports can be scheduled, exported, and visualized through interactive dashboards with drill-down capabilities."
    },
    {
      question: "How secure is customer data in your system?",
      answer: [
        "We employ enterprise-grade security including:",
        "SOC 2 Type II and GDPR compliance",
        "Encryption for all data at rest and in transit",
        "Role-based access controls with multi-factor authentication",
        "Automatic PCI redaction from recordings",
        "Regular penetration testing and security audits"
      ]
    },
    {
      question: "Can your system integrate with our existing CRM and business tools?",
      answer: "Yes, our platform offers pre-built integrations with major CRM systems like Salesforce, Microsoft Dynamics, and Zendesk. We also integrate with popular business tools and provide open APIs for custom integrations with your unique technology stack."
    },
    {
      question: "What kind of support do you offer for implementation and ongoing service?",
      answer: "We provide 24/7 technical support, a dedicated implementation team, and ongoing account management. Implementation includes discovery workshops, custom configuration, data migration, agent training, and a phased rollout approach. Post-implementation, we conduct quarterly business reviews to ensure you're maximizing ROI."
    },
    {
      question: "How does your system utilize AI and automation to improve efficiency?",
      answer: [
        "AI-powered features include:",
        "Conversational IVR and intelligent virtual assistants",
        "Automated post-call summaries and disposition codes",
        "Sentiment analysis and automatic escalation triggers",
        "Predictive routing based on customer history and needs",
        "Agent assist tools providing real-time guidance during calls"
      ]
    }
  ];


   // /table content
   const contents = [
    {
      id: 1,
      title: "Introduction to Call Center Management Software",
      slug: "introduction",
    },
    {
      id: 2,
      title: "What is Call Center Management Software?",
      slug: "whatiscc",
    },
    {
      id: 3,
      title: "How Modern Call Centers Work?",
      slug: "howiscc",
    },
    {
      id: 4,
      title: "Advanced Call Center Management Features",
      slug: "advancecc",
    },
    {
      id: 5,
      title: "Benefits of Call Center Management Software",
      slug: "benefitcc",
    },
    {
      id: 6,
      title: "Choosing the Call Center Management Software",
      slug: "choosingcc",
    },
    { id: 7, title: "Alternative Call Center Management Software Options", slug: "alternativecc" },
    { id: 8, title: "Related Articles", slug: "call-articles" },
    { id: 9, title: "FAQs", slug: "employee-faq" },
  ];

  const articles = [
    {
      id: 1,
      title: "Cloud-Based vs On-Premise Call Center Solutions: Which is Right for Your Business?",
      image: "/images/img1call1.png",
      author: "Alex",
      date: "March 15, 2023",
      excerpt:
        "When choosing call center software, one of the first decisions is between cloud-based and on-premise solutions. Cloud systems offer scalability and remote access, while on-premise provides more control...",
      link: "#",
    },
    {
      id: 2,
      title: "Top 5 Call Center Software Platforms in 2024: Features and Comparison",
      image: "/images/img2call2.png",
      author: "Alex",
      date: "July 8, 2023",
      excerpt:
        "From Genesys to Five9, today's call center platforms offer advanced features like AI-powered routing, omnichannel support, and real-time analytics. We compare the top solutions based on pricing...",
      link: "#",
    },
    {
      id: 3,
      title: "Essential Features to Look for in Call Center Management Software",
      image: "/images/img3call3.jpg",
      author: "Alex",
      date: "February 10, 2024",
      excerpt:
        "Modern call center software should include more than just basic calling capabilities. Look for features like intelligent call routing, workforce management, CRM integration, and comprehensive reporting...",
      link: "#",
    },
  ];

    const homeTestimonials = [
        {
          avatar: "P",
          avatarColor: "bg-purple-600",
          name: "Pedro G.",
          date: "06/12/2024",
          stars: 5,
          text: "Blake and Courtney are a powerhouse if your are new to the leads world. They kept their end of the bargain lots of quality leads."
        },
        {
          avatar: "E",
          avatarColor: "bg-blue-500",
          name: "Eric L.",
          date: "10/31/2023",
          stars: 5,
          text: "I needed a few more vendors to gather information for a lease or purchase of a copier for our church. 360Connect did just that."
        }
      ];

      const advantages = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="5" />
              <path d="M3 21h18a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
              <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M17 18h-2m-3 0H5" />
              <rect x="8" y="14" width="8" height="4" rx="1" />
            </svg>
          ),
          title: 'Highly trained and skilled professionals'
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <line x1="12" y1="8" x2="12" y2="8" />
              <path d="M15 4.5A3 3 0 0 0 9 6a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2c0 1.1-.9 2-2 2" />
              <path d="M9 12a2 2 0 0 1 0-4" />
            </svg>
          ),
          title: 'Expertise in technology'
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14 2v4" />
              <path d="M18 4l-2 2" />
            </svg>
          ),
          title: 'Enables 24*7 customer support'
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          ),
          title: 'Preferred destination for outsourcing'
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          ),
          title: 'Cost-effective customer support'
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
              <rect x="9" y="9" width="6" height="6" />
              <line x1="9" y1="2" x2="9" y2="4" />
              <line x1="15" y1="2" x2="15" y2="4" />
              <line x1="9" y1="20" x2="9" y2="22" />
              <line x1="15" y1="20" x2="15" y2="22" />
              <line x1="20" y1="9" x2="22" y2="9" />
              <line x1="20" y1="14" x2="22" y2="14" />
              <line x1="2" y1="9" x2="4" y2="9" />
              <line x1="2" y1="14" x2="4" y2="14" />
            </svg>
          ),
          title: 'Modernized Infrastructure and technology'
        }
      ];
    
      //values
      const valueProps = [
        {
          icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 15C45 12.9 44.1 11.1 42.6 9.6C41.1 8.1 39.3 7.2 37.2 7.2H27C27 5.1 26.1 3.3 24.6 1.8C23.1 0.3 21.3 0 19.2 0H15C12.9 0 11.1 0.9 9.6 2.4C8.1 3.9 7.2 5.7 7.2 7.8V37.2C7.2 39.3 8.1 41.1 9.6 42.6C11.1 44.1 12.9 45 15 45H37.2C39.3 45 41.1 44.1 42.6 42.6C44.1 41.1 45 39.3 45 37.2V15Z" 
              stroke="#000e54" 
              strokeWidth="2" 
              fill="none"/>
            </svg>
          ),
          title: 'Experts',
          description: '2 decades of experience'
        },
        {
          icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 7.5C33.9 7.5 37.5 8.7 40.8 11.1C44.1 13.5 46.2 16.8 47.1 21H39C38.4 19.2 37.5 17.7 36.3 16.5C35.1 15.3 33.6 14.4 31.8 13.8C30 13.2 28.2 13.2 26.4 13.8C24.6 14.4 23.1 15.3 21.9 16.5C20.7 17.7 19.8 19.2 19.2 21H10.5C11.4 16.8 13.5 13.5 16.8 11.1C20.1 8.7 24 7.5 28.5 7.5H30Z" 
              stroke="#000e54" 
              strokeWidth="2" 
              fill="none"/>
              <path d="M31.8 46.2C33.6 45.6 35.1 44.7 36.3 43.5C37.5 42.3 38.4 40.8 39 39H47.1C46.2 43.2 44.1 46.5 40.8 48.9C37.5 51.3 33.9 52.5 30 52.5H28.5C24 52.5 20.1 51.3 16.8 48.9C13.5 46.5 11.4 43.2 10.5 39H19.2C19.8 40.8 20.7 42.3 21.9 43.5C23.1 44.7 24.6 45.6 26.4 46.2C28.2 46.8 30 46.8 31.8 46.2Z" 
              stroke="#000e54" 
              strokeWidth="2" 
              fill="none"/>
              <path d="M37.5 30C37.5 31.6 36.9 33 35.7 34.2C34.5 35.4 33.1 36 31.5 36H27C27 37.6 26.4 39 25.2 40.2C24 41.4 22.6 42 21 42H19.5C17.9 42 16.5 41.4 15.3 40.2C14.1 39 13.5 37.6 13.5 36V24C13.5 22.4 14.1 21 15.3 19.8C16.5 18.6 17.9 18 19.5 18H21C22.6 18 24 18.6 25.2 19.8C26.4 21 27 22.4 27 24H31.5C33.1 24 34.5 24.6 35.7 25.8C36.9 27 37.5 28.4 37.5 30Z" 
              stroke="#000e54" 
              strokeWidth="2" 
              fill="none"/>
              <circle cx="38" cy="26" r="4" stroke="#3B6794" strokeWidth="2" fill="none"/>
            </svg>
          ),
          title: 'Minds',
          description: '2000+ agile thinking minds'
        },
        {
          icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="24" stroke="#000e54" strokeWidth="2" fill="none"/>
              <path d="M30 12L34.9 23.2L47 24.7L38.5 33.4L40.8 45.7L30 39.8L19.2 45.7L21.5 33.4L13 24.7L25.1 23.2L30 12Z" 
              stroke="#000e54" 
              strokeWidth="2" 
              fill="none"/>
            </svg>
          ),
          title: 'Results',
          description: '6 Fortune 500 clients'
        },
        {
          icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20V8M20 8L15 13M20 8L25 13" stroke="#000e54" strokeWidth="2"/>
              <path d="M30 20V8M30 8L25 13M30 8L35 13" stroke="#000e54" strokeWidth="2"/>
              <path d="M40 20V8M40 8L35 13M40 8L45 13" stroke="#000e54" strokeWidth="2"/>
              <path d="M20 50V40M30 50V40M40 50V40" stroke="#000e54" strokeWidth="2"/>
              <circle cx="20" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
              <circle cx="40" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
              <circle cx="30" cy="33" r="4" stroke="#000e54" strokeWidth="2" fill="none"/>
            </svg>
          ),
          title: 'Growth',
          description: '20+ languages'
        }
      ];
    
      // choose best service center
      const serviceTypes = [
        {
          name: "Inbound Call Centers",
          description: "Handle incoming customer calls for support, inquiries, and orders",
          bestFor: "Customer service, technical support, order processing"
        },
        {
          name: "Outbound Call Centers",
          description: "Make outgoing calls for sales, surveys, and follow-ups",
          bestFor: "Telemarketing, lead generation, customer retention"
        },
        {
          name: "Omnichannel Contact Centers",
          description: "Integrated platforms handling calls, emails, chats, and social media",
          bestFor: "Businesses needing multichannel customer engagement"
        },
        {
          name: "Virtual Call Centers",
          description: "Cloud-based solutions with remote agents",
          bestFor: "Distributed teams, businesses needing flexibility"
        }
      ];
    
      const evaluationCriteria = [
        {
          title: "Technology Stack",
          details: [
            "Cloud-based vs on-premise solutions",
            "IVR (Interactive Voice Response) capabilities",
            "Call routing algorithms (skills-based, round-robin)",
            "Integration with CRM (Salesforce, HubSpot, Zendesk)",
            "API availability for custom integrations",
            "AI features (sentiment analysis, chatbots)"
          ]
        },
        {
          title: "Performance Metrics",
          details: [
            "Service Level (e.g., 80% of calls answered in 20 seconds)",
            "Average Speed to Answer (ASA)",
            "First Call Resolution (FCR) rate",
            "Call Abandonment Rate (target <5%)",
            "Average Handle Time (AHT)",
            "Customer Satisfaction (CSAT) scores"
          ]
        },
        {
          title: "Security & Compliance",
          details: [
            "PCI DSS compliance for payment processing",
            "HIPAA compliance for healthcare",
            "GDPR compliance for EU customers",
            "Data encryption standards",
            "Call recording storage policies",
            "Disaster recovery protocols"
          ]
        }
      ];
    
      const vendorComparison = [
        { feature: "24/7 Support", essential: true, premium: true },
        { feature: "Multilingual Agents", essential: false, premium: true },
        { feature: "CRM Integration", essential: true, premium: true },
        { feature: "Advanced Analytics", essential: false, premium: true },
        { feature: "AI Capabilities", essential: false, premium: true },
        { feature: "Scalable Seats", essential: true, premium: true },
        { feature: "Custom Reporting", essential: false, premium: true },
        { feature: "Quality Monitoring", essential: true, premium: true }
      ];





    return (
        <>
      <TableOfContents contents={contents} />
{/* introduction */}
<div id="introduction" className="max-w-6xl mx-auto py-12 px-4">
<h1 className="text-4xl font-semibold text-gray-900 text-center mb-6">
            Revolutionize Your Call Center Operations
          </h1>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          < p className="text-base text-gray-800 mb-8 leading-relaxed">
          In today’s fast-paced world of customer service, OmniCall Pro isn’t just another call center software—it’s your all-in-one solution for running a smarter, more efficient call center. Built by experts who truly understand contact centers, OmniCall Pro takes things way beyond simply answering and routing calls. It brings you cutting-edge tools like AI-powered call routing that understands what the caller wants, predictive matching that connects customers with the best agent for them, and real-time speech analysis that can pick up on a customer’s mood while they’re talking.
        With OmniCall Pro, your team gets the tools they need to deliver outstanding customer experiences—smarter call routing, live analytics, and seamless integration with your CRM. You’ll boost productivity by up to 40% and see happier customers, too.
      
            
          </p>
          
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img 
                  key={item}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/150?img=${item}`}
                  alt={`User ${item}`}
                />
              ))}
            </div>
            <p className="ml-4 text-gray-600">
              Trusted by <span className="font-semibold">850+</span> call centers worldwide
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2">
          <img 
            src="https://d1d81vmw1yvc7o.cloudfront.net/wp-content/uploads/sites/190/2014/09/08203031/bigstock-Call-Center-79077622.jpg"
            alt="Call center dashboard interface" 
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </div>

{/* what is employee menagement system */}
<div id="whatiscc" className="max-w-6xl mx-auto rounded-xl">
      {/* Main Heading */}
      <div className="text-left mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">What is Call Center Management?</h1>
<p className="text-base text-gray-800 leading-relaxed">
  Call center management software is a powerful tool that helps businesses handle large volumes of customer interactions across various channels like phone, email, chat, and social media. It brings together communication tools and workforce optimization features to make operations smoother, boost agent productivity, and enhance customer satisfaction.
</p>

<br /><br />

<p className="text-base text-gray-800 leading-relaxed">
  Modern call center management systems usually offer:
</p>

<ul className="list-disc pl-5 mt-2 space-y-1">
  <li>Automatic Call Distribution (ACD) to smartly route calls</li>
  <li>Interactive Voice Response (IVR) systems for self-service options</li>
  <li>Real-time monitoring and analytics dashboards</li>
  <li>Customer relationship management (CRM) integration</li>
  <li>Workforce management for effective scheduling and forecasting</li>
  <li>Quality monitoring and call recording features</li>
  <li>Omnichannel routing to ensure consistent experiences across channels</li>
</ul>

  
  <br />
  
  These systems assist organizations in meeting service level agreements (SLAs), cutting down operational costs, and gaining valuable insights from customer interactions. Cloud-based solutions are especially popular as they offer scalability, support remote work, and provide regular feature updates without the need for expensive hardware installations.
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Team Management</h3>
            <p className="text-gray-800 text-base mt-2">
            Overseeing agents' schedules, performance, and training to ensure top-notch customer service across all channels.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Call Routing</h3>
            <p className="text-gray-800 text-base mt-2">
            Smartly directing incoming calls to the most suitable agents based on their skills, availability, or customer priority.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Analytics & Reporting</h3>
            <p className="text-gray-800 text-base mt-2">
            Monitoring key metrics like call volume, wait times, resolution rates, and customer satisfaction to enhance operations. 
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Workforce Optimization</h3>
            <p className="text-gray-800 text-base mt-2">
            Predicting call volumes and scheduling staff accordingly to maintain service levels while keeping costs in check.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 bg-blue-50 p-6 rounded-lg">
        <div className="flex items-center">
          <svg className="w-10 h-10 text-[#000e54] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-gray-800 text-base">
            <strong>Effective call center management</strong> blends technology, streamlined processes, and skilled people to deliver outstanding customer experiences while ensuring operational efficiency and achieving business goals.
          </p>
        </div>
      </div>
</div>


{/* how does call center works */}
<div id="howiscc" className="max-w-6xl mx-auto py-12">
  <div className="text-center mb-16">
    <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
      How <span className="text-[#000e54]">Modern Call Centers</span> Work
    </h1>
    <p className="text-base text-gray-800 max-w-3xl mx-auto">
    A closer look at the tools, systems, and day-to-day processes that power today’s customer support teams.
    </p>
  </div>

  {/* Overview Section */}
  <div className="bg-white rounded-xl  mb-16">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Call Center Overview</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-800 text-base mb-4">
        Modern call centers are powerful hubs where technology, skilled people, and data come together to offer great customer service. They manage millions of interactions each day across different channels like phone, email, chat, and social media
        </p>
        <p className="text-gray-800 text-base mb-6">
        Today’s call centers use tools like cloud computing, AI, and omnichannel platforms to create smooth customer experiences while also improving efficiency.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-base text-[#000e54] mb-2">Key Statistics:</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>90% of customers rate immediate response as important when they have a customer service question</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Call centers processing over 1M calls/month save $300k yearly with AI routing</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Call center operation" 
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </div>
  </div>

  {/* Detailed Workflow Section */}
  <div className="mb-20">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">How a Call Center Works</h2>
    <div className="relative">
      {/* SVG Connector Lines */}
      <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <path 
          d="M100,150 Q250,150 300,100 Q350,50 500,50 Q650,50 700,100 Q750,150 900,150" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5,5"
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
  
  {/* Step 1 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">1. Multi-Channel Initiation</h3>
    <p className="text-gray-800 text-center text-base">
    Customers can reach out via phone, email, chat, social media, or web forms. All these messages are collected and organized through one system.
    </p>
    <div className="mt-4 bg-blue-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Tools:</strong> Omnichannel ACD, VoIP, SIP Trunking, WebRTC
    </div>
  </div>

  {/* Step 2 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">2. Intelligent IVR Processing</h3>
    <p className="text-gray-800 text-center text-base">
    The IVR system understands what the caller wants using their voice or menu choices, reducing the chances of misdirected calls by 40%. 
    </p>
    <div className="mt-4 bg-purple-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Tools:</strong> NLP, Conversational AI, DTMF Recognition
    </div>
  </div>

  {/* Step 3 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">3. Contextual Routing</h3>
    <p className="text-gray-800 text-center text-base">
    Using data like customer history and sentiment, the system directs the call to the best agent who has all the needed information.
    </p>
    <div className="mt-4 bg-green-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Tools:</strong> Machine Learning, Predictive Routing, CTI
    </div>
  </div>

  {/* Row 2 */}
  
  {/* Step 4 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">4. Agent Engagement</h3>
    <p className="text-gray-800 text-center text-base">
    Agents get the customer’s complete information and suggested responses to help them resolve the issue efficiently and consistently.
    </p>
    <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Tools:</strong> CRM Integration, Knowledge Management, Real-Time Analytics
    </div>
  </div>

  {/* Step 5 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">5. Resolution & Automation</h3>
    <p className="text-gray-800 text-center text-base">
    Some issues are automatically solved through pre-set workflows, while others are handled by agents or self-service tools with AI confirmation.
    </p>
    <div className="mt-4 bg-red-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Tools:</strong> RPA, Workflow Automation, AI Validation
    </div>
  </div>

  {/* Step 6 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">6. Post-Call Optimization</h3>
    <p className="text-gray-800 text-center text-base">
    After the call, surveys and conversation analysis help improve the service and assist with agent training for better performance next time.
    </p>
    <div className="mt-4 bg-indigo-50 p-3 rounded-lg text-base text-gray-800">
      <strong>Tools:</strong> Speech Analytics, Survey Tools, BI Reporting
    </div>
  </div>
</div>
    </div>
  </div>

  {/* Technology Deep Dive */}
  <div className="max-w-6xl mx-auto mb-16">
    <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10">Core Call Center Technologies</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* VoIP Technology */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">VoIP Telephony</h3>
            <p className="text-gray-800 text-base">
            Voice over IP (VoIP) allows you to make calls over the internet rather than using traditional phone lines. With VoIP, businesses can enjoy:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>Crystal-clear voice quality and high reliability</li>
              <li>Global phone numbers for local presence everywhere</li>
              <li>Easy integration with existing business systems</li>
              <li>Significant savings compared to traditional phone services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ACD Technology */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatic Call Distribution (ACD)</h3>
            <p className="text-gray-800 text-base">
            ACD systems automatically direct incoming calls to the most suitable agent, based on several factors:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>Agent expertise and skills</li>
              <li>Customer value and urgency</li>
              <li>Current wait times and service levels</li>
              <li>Previous interaction history</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CRM Integration */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CRM Integration</h3>
            <p className="text-gray-800 text-base">
            By integrating a CRM system, agents get instant access to complete customer data, enabling:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>Full customer profiles and interaction history</li>
              <li>Instant data pop-ups when a customer calls</li>
              <li>Automated workflows to streamline common tasks</li>
              <li>Smooth transitions across different communication channels</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-800 text-base">
            Real-time analytics help businesses track and analyze:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-base">
              <li>Agent performance metrics (AHT, FCR, CSAT)</li>
              <li>Call volume trends and staffing needs</li>
              <li>Customer sentiment and feedback</li>
              <li>Identifying bottlenecks for process improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Future Trends */}
  <div className="bg-gradient-to-r from-indigo-900 to-blue-800 rounded-2xl p-8 text-white">
    <h2 className="text-4xl font-semibold mb-6">Shaping the Future of Call Centers</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-[#000e54] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          AI-Powered Automation
        </h3>
        <p className="text-gray-800 text-base">
        AI technology will handle routine customer inquiries, while complex problems are seamlessly handed off to human agents, who will have all the necessary context to assist.
        </p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-purple-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Predictive Analytics
        </h3>
        <p className="text-gray-800 text-base">
        Future systems will predict customer needs before they even make contact, offering proactive solutions through their preferred communication channels. 
        </p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Human-AI Collaboration
        </h3>
        <p className="text-gray-800 text-base">
        Agents will collaborate closely with AI tools that provide real-time assistance, including sentiment analysis and ensuring regulatory compliance throughout customer interactions.
        </p>
      </div>
    </div>
  </div>
</div>


{/* Advanced Call Center Features Section */}
<div id="advancecc" className="w-full py-12 max-w-6xl mx-auto">
<div className="w-full py-10">
<div className="text-center mb-12">
      <h2 className="text-4xl text-4xl font-semibold text-gray-900 mb-4">
        Advanced Call Center Management Features
      </h2>
      <p className="text-base text-gray-800 max-w-3xl mx-auto">
        Comprehensive solutions designed to optimize your customer interactions and operational efficiency
      </p>
    </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="text-[#000e54] mb-4">
                      {prop.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-gray-800 text-base">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
</div>
<div className="max-w-6xl mx-auto px-4 py-12">
  <div className="rounded-xl overflow-hidden">
    {/* First Row of Features */}
    <div className="flex flex-wrap -mx-4">
      {/* Feature 1 - Omnichannel Communication */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Omnichannel Support</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unified platform for voice, email, chat, SMS</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Seamless customer journey across channels</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Social media integration (Facebook, Twitter, WhatsApp)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 2 - Intelligent Routing */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Intelligent Routing</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Skills-based routing to match agents with calls</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-powered predictive call routing</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Priority routing for VIP customers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 3 - Analytics & Reporting */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Advanced Analytics</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Real-time dashboard with 50+ KPIs</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Custom report builder with scheduling</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Speech analytics for quality monitoring</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 4 - CRM Integration */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">CRM Integration</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Pre-built connectors for Salesforce, HubSpot</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Screen pops with customer history</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automatic call logging and activity tracking</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Second Row of Features */}
    <div className="flex flex-wrap -mx-4">
      {/* Feature 5 - Workforce Management */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Workforce Optimization</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automated shift scheduling</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Forecasting based on historical data</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Performance tracking with gamification</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 6 - AI & Automation */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">AI & Automation</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-powered chatbots for first-level support</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sentiment analysis for customer emotions</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automated call summaries and transcriptions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 7 - Security & Compliance */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Security & Compliance</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>End-to-end encryption for all communications</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>PCI-DSS compliant payment processing</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Role-based access controls and audit logs</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 8 - Scalability */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-8 transition-all duration-300">
          <div className="text-[#000e54] mb-5 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Global Scalability</h3>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant scaling for seasonal demand spikes</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Multi-region deployment options</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Local number provisioning in 100+ countries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/* benefits */}
<div id="benefitcc" className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl">
        Why Professional Call Center Services Are a Game Changer for Your Business
        </h2>
        <p className="mt-4 max-w-2xl text-base text-gray-800 mx-auto">
        See how outsourcing customer support can streamline your operations and take your customer service to the next level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">24/7 Customer Support</h3>
            </div>
            <p className="text-gray-800 text-base">
            With 24/7 customer support, professional call centers ensure that your customers can always get the help they need, no matter the time. This boosts customer satisfaction, loyalty, and helps reduce turnover. Plus, with global coverage, you're ready for every customer interaction, no matter the time zone.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Cost Efficiency</h3>
            </div>
            <p className="text-gray-800 text-base">
            By outsourcing to a professional call center, you save on infrastructure, technology, and training costs. You only pay for the services you use, allowing you to turn fixed costs into flexible ones. This flexibility leads to better financial control and significant savings.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Scalability & Flexibility</h3>
            </div>
            <p className="text-gray-800 text-base">
            Need more support during busy periods? Or less during quiet ones? With a professional call center, you can scale up or down easily, depending on your business needs. This ensures you're always prepared, without the hassle of hiring or laying off staff.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Enhanced Security & Compliance</h3>
            </div>
            <p className="text-gray-800 text-base">
            With the ever-evolving landscape of data security, professional call centers go above and beyond to ensure your customer data is protected. From PCI-DSS compliance to encryption and GDPR, they handle all security standards so you can focus on your business with peace of mind.
            </p>
          </div>
        </div>

        {/* Benefit 5 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-medium text-gray-800">Performance Analytics</h3>
            </div>
            <p className="text-gray-800 text-base">
            Get real-time analytics to track everything from call volumes to customer satisfaction. These insights allow you to refine your strategies, improve customer service, and continuously enhance your overall customer experience. 
            </p>
          </div>
        </div>

        {/* Benefit 6 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Multilingual Support</h3>
            </div>
            <p className="text-gray-800">
            Break down language barriers and expand your global reach. With multilingual support, your call center agents can communicate effectively with customers from different cultural backgrounds, ensuring that no customer feels left out.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#000e54] py-8 px-4 rounded-lg mt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Call Center in India Advantages
          </h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 flex flex-col items-center text-center rounded-sm"
                >
                  <div className="text-[#000e54] hover:text-[#ff8633] mb-4">
                    {advantage.icon}
                  </div>
                  <p className="text-gray-800 text-sm">{advantage.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>

{/* choosing right ccm */}
<div id="choosingcc" className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 sm:tracking-tight mb-6">
        Your Friendly Guide to Picking the Perfect Call Center Service
        </h1>
        <p className="max-w-3xl mx-auto text-base text-gray-800">
        Thinking about a call center? We'll walk you through everything to help you figure out which solution fits your business like a glove.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">What Do You Really Need? Understanding Your Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-200 transition-all">
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">{type.name}</h3>
              <p className="text-gray-800 text-base mb-4">{type.description}</p>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="text-base font-medium text-[#000e54] mb-1">Best for:</h4>
                <p className="text-base text-[#000e54]">{type.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16  rounded-xl max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">What to Look For: Key Things to Consider</h2>
        <div className="space-y-10">
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                <span className="bg-blue-100 text-[#000e54] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {criteria.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                {criteria.details.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Vendor Comparison Checklist</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">
                    Essential Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">
                    Premium Service
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vendorComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.essential ? (
                        <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Included
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Included
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Included
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6">
  <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">How It All Works: Our Implementation Steps</h2>
  <div className="relative">
    {/* Vertical line - hidden on mobile, shown on md+ */}
    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-blue-100 transform -translate-x-1/2"></div>
    
    <div className="space-y-12 md:space-y-0">
      {/* Phase 1 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left content - shown on right on mobile */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pr-8 md:text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Step 1: Getting to Know You (1-2 weeks)</h3>
          <ul className="text-gray-800 text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Define business objectives and KPIs</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Mapping out how your customers interact with you now</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Checking what systems need to work together</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Deciding how we'll measure if things are going well</span>
            </li>
          </ul>
        </div>
        
        {/* Number indicator - always shown but positioned differently */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            1
          </div>
        </div>
        
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-3"></div>
      </div>
      
      {/* Phase 2 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-1"></div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            2
          </div>
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pl-8 order-2 md:order-3">
          < h3 className="text-xl font-semibold text-[#000e54] mb-3">Step 2: Choosing Your Partner (2-4 weeks)</h3>
          <ul className="text-gray-800 text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Create RFP and evaluate proposals</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Seeing how their system works with demos and trials</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Talking to their past clients and looking at their success stories</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Getting the agreement just right</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
      {/* Phase 3 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pr-8 md:text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Step 3: Setting Things Up (4-8 weeks)</h3>
          <ul className="text-gray-800 text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Tailoring the system to your specific needs</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Connecting it with your other important systems</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Getting your team trained and ready</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Making sure everything sounds good with test calls</span>
            </li>
          </ul>
        </div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            3
          </div>
        </div>
        
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-3"></div>
      </div>
      
      {/* Phase 4 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-1"></div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-base md:text-base">
            4
          </div>
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pl-8 order-2 md:order-3">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Step 4: Going Live and Getting Better (Ongoing)</h3>
          <ul className="text-gray-800 text-base md:text-base space-y-2">
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Rolling it out step-by-step and keeping an eye on things</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Seeing how we're doing compared to our goals</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Always looking for ways to improve</span>
            </li>
            <li className="flex items-start text-base">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Checking in regularly to see how things are going</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
  
</section>

      <section className="bg-[#000e54] rounded-xl p-10 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Questions to Ask Before You Decide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Technical Questions</h3>
              <ul className="space-y-2 text-base text-gray-800">
                <li>How often is your system up and running?</li>
                <li>What happens when you get super busy?</li>
                <li>What's your backup plan if things go wrong? </li>
                <li>How often do you update your software?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Service Questions</h3>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>What service levels do you guarantee?</li>
                <li>How do you track and report service quality?</li>
                <li>What kind of training do your team members get?</li>
                <li>How do you handle issues that get escalated?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Cost-Related Questions</h3>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>What’s included in the standard pricing?</li>
                <li>Are there any common extra fees?</li>
                <li>How does your contract termination work?</li>
                <li>Do you provide discounts for larger volumes?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Strategic Questions</h3>
              <ul className="space-y-2 text-gray-800 text-base">
                <li>How do you support business growth?</li>
                <li>What’s your plan for future innovation?</li>
                <li>How do you act on customer feedback?</li>
                <li>What makes you stand out from the rest?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Cost Comparison at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Cost Factor</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">In-House</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Outsourced</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-base font-semibold text-gray-800 uppercase tracking-wider">Hybrid</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Setup Costs</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">High (equipment, software)</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Low to moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Moderate</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Monthly Costs</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Fixed salaries + benefits</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Per-minute/agent fees</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Combination</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Scalability Cost</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">High (hiring/training)</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Low (pay for what you use)</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Moderate</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Technology Updates</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Your responsibility</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Vendor responsibility</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">Shared</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800">Typical ROI Period</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">12-24 months</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">3-6 months</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">6-12 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      
</div>

 {/* alternatives */}
 <div id="alternativecc" className="max-w-6xl mx-auto py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl  font-semibold text-gray-900 mb-4">Alternative Call Center Software Options</h2>
    <p className="text-base text-gray-800 max-w-3xl mx-auto">
    Explore top alternatives to help you choose the best option that aligns with your goals, budget, and technical needs.
    </p>
  </div>

  {/* Alternatives Grid */}
  <div className="flex flex-wrap max-w-6xl mx-auto">
    {/* Alternative 1 - Zendesk Talk */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-blue-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Zendesk Talk</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Popular</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
        A cloud-based call center tool that works right inside Zendesk, giving support teams a seamless way to handle customer calls alongside tickets and chats.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-xl text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Built-in integration with Zendesk Support</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Interactive voice response (IVR) and smart call routing</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Call recording and monitoring tools for quality control</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-base text-gray-800 mb-2">Best For:</h4>
          <p className="text-gray-800 text-base">Businesses already using Zendesk or those looking for an all-in-one, easy-to-connect solution.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-semibold text-gray-800">$19</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Alternative 2 - Genesys Cloud */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-purple-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Genesys Cloud</h3>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Enterprise</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
        A powerful cloud-based contact center platform that helps mid-sized and large businesses manage customer interactions across channels—with built-in AI, smart routing, and detailed analytics.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Smart AI tools for predicting customer needs and optimizing your workforce</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Connects easily with 300+ popular apps and integrations</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customizable dashboards for deep insights and performance tracking</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
          <p className="text-gray-800 text-base">Ideal for large companies that need advanced call routing and powerful workforce management tools.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-semibold text-gray-800">$75</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Alternative 3 - Five9 */}
    <div className="w-full md:w-1/2 lg:w-1/2  px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-green-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Five9</h3>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Established</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
        Five9 is an all-in-one cloud contact center solution offering powerful voice features, smart omnichannel routing, and top-notch workforce optimization tools.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54]mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>I-powered Intelligent Virtual Agent (IVA) for seamless conversations</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Strong outbound calling with predictive dialing for better efficiency</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced quality monitoring tools to support supervisors</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-base text-gray-800 mb-2">Best For:</h4>
          <p className="text-gray-800 text-base ">    Ideal for mid-to-large contact centers managing both inbound and outbound calls, looking for powerful analytics and insights.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-bold text-gray-800 text-base">$100</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Alternative 4 - Talkdesk */}
    <div className="w-full md:w-1/2 lg:w-1/2  px-2 mb-8">
      <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-indigo-500">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Talkdesk</h3>
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Cloud-Native</span>
        </div>
        
        <p className="text-gray-800 text-base mb-6">
        A modern, cloud-based contact center designed to deliver enterprise-level reliability, powerful AI tools, and an easy-to-use interface that makes customer interactions seamless.
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Guaranteed 100% uptime thanks to its distributed cloud setup</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>AI-driven agent assistance with smart conversational insights</span>
            </li>
            <li className="flex items-start text-base">
              <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Personalized dashboards built with low-code and no-code options</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 text-base mb-2">Best For:</h4>
          <p className="text-gray-800 text-base"> Perfect for businesses that prioritize customer satisfaction and need a dependable, AI-powered communication solution.</p>
        </div>
        
        <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
          <span>Starting from <span className="font-semibold text-base text-gray-800">$100</span>/agent/month</span>
          <span className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
        </div>
    </div>

    {/* alternative 5-nice xcone */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2  mb-8">
  <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-blue-500">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-gray-800">NICE CXone</h3>
      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Unified Platform</span>
    </div>
    
    <p className="text-gray-800 text-base mb-6">
    An all-in-one solution for cloud contact centers, offering workforce optimization, deep analytics, and AI-powered insights to elevate customer experience.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
      <ul className="space-y-2 text-gray-800">
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Omnichannel routing with live performance tracking</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>AI-driven predictive routing for smarter decisions</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Complete suite for workforce optimization and quality control</span>
        </li>
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Best For:</h4>
      <p className="text-gray-800 text-base">Large enterprises in need of a comprehensive, intelligent contact center solution with advanced tools for managing workforce efficiency.</p>
    </div>
    
    <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
      <span>Starting from <span className="font-semibold text-base text-gray-800">$110</span>/agent/month</span>
      <span className="flex items-center">
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
    </div>
  </div>
</div>

{/* alternative 6- twilio flex */}
<div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-8">
  <div className="h-full bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border-t-4 border-red-500">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold text-gray-800">Twilio Flex</h3>
      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">Programmable</span>
    </div>
    
    <p className="text-gray-800 text-base mb-6">
    Twilio Flex is your all-in-one, flexible solution for building a contact center that’s as unique as your business. With an API-first design, you can fully customize the customer experience.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-xl mb-2">Key Features:</h4>
      <ul className="space-y-2 text-gray-800">
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Completely customizable UI, built with React components</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>API-driven architecture, designed with microservices</span>
        </li>
        <li className="flex items-start text-base">
          <svg className="h-5 w-5 text-[#000e54] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Seamless integration with other Twilio products</span>
        </li>
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className="font-semibold text-gray-800 text-base mb-2">Best For:</h4>
      <p className="text-gray-800 text-base">Perfect for tech-savvy teams who want full control over customization and have developers ready to make the most out of it.</p>
    </div>
    
    <div className="flex items-center justify-between text-base text-gray-800 mt-auto pt-4 border-t border-gray-100">
      <span>Starting from <span className="font-semibold text-base text-gray-800">$150</span>/agent/month</span>
      <span className="flex items-center">
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
    </div>
  </div>
</div>

    </div>
</div>

       {/* article */}
       <div id="d-article">
        <Article
          title="Related Articles"
          items={articles}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
        />
      </div>


      {/* faq */}
      <div id="employee-faq" className="">
        <FAQ faqs={ callCenterFAQs} />
      </div>

      {/* feedback */}
      {/* <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      /> */}
        </>
    );
};

export default CallCenterContent;