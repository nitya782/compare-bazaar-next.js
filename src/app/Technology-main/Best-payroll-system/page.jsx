"use client";

import React, { useState, useEffect, useRef } from 'react';
import PhoneSystemCardCommon from '../../../components/PhoneSystemCardCommon';
import TableOfContents from '../../../components/TableOfContents';
import FAQ from '../../../components/FAQ';
import Article from '../../../components/ArticleLayoutCommon';
import PayrollForm from '../../../components/PayrollForm';
import Modal from '../../../components/Modal';
import Link from 'next/link';
import Head from 'next/head';

const BestPayrollSystem = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [widgetLoaded, setWidgetLoaded] = useState(false);
    const widgetRef = useRef(null);
  
    useEffect(() => {
      if (document.querySelector('script[src*="bzWidget.min.js"]')) return;
    
      const script1 = document.createElement('script');
      script1.src = "https://cdn.buyerzone.com/apps/widget/bzWidget.min.js";
      script1.async = true;
      script1.setAttribute('data-bzwidget', '');
      script1.setAttribute('data-bzwidget-pub-id', '59578');
      script1.setAttribute('data-bzwidget-color-palette-name', 'default');
      script1.setAttribute('data-bzwidget-category-id', '10113');
    
      const container = document.getElementById('buyerzone-widget-container');
      if (container) {
        container.appendChild(script1);
        
        script1.onload = () => {
          if (typeof bzWidget !== 'undefined') {
            bzWidget.init();
          }
        };
      }
    
      return () => {
        if (container && container.contains(script1)) {
          container.removeChild(script1);
        }
      };
    }, []);
  
    useEffect(() => {
      const iframe = document.createElement('iframe');
      iframe.src = 'about:blank';
      iframe.style.width = '100%';
      iframe.style.maxWidth = '500px';
      iframe.style.height = window.innerWidth < 640 ? '670px' : '620px';
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      iframe.style.display = 'block';
      iframe.style.margin = '0 auto';
      iframe.scrolling = 'no';
      
      const widgetContainer = document.getElementById('buyerzone-widget-container');
      
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
        widgetContainer.appendChild(iframe);
        
        setTimeout(() => {
  if (!iframe.contentWindow && !iframe.contentDocument) return;
  const iframeDoc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
  if (!iframeDoc) return; // Extra safety

  iframeDoc.open();
          iframeDoc.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Payroll System Comparison</title>
              <style>
                body {
                  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  margin: 0;
                  padding: 0;
                  align-items: center;
                  text-align-center;
                  background: linear-gradient(135deg, #fff4f0 0%, #ffffff 100%);
                  overflow: hidden;
                }
                #bzWidgetContainer {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  border-radius: 12px;
                  box-shadow: 0 8px 30px rgba(255, 134, 51, 0.1);
                }
                .loading {
                  text-align: center;
                  padding: 40px;
                  width: 100%;
                  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,244,240,0.9) 100%);
                  border-radius: 10px;
                  box-shadow: 0 4px 20px rgba(255, 134, 51, 0.07);
                }
                .spinner {
                  border: 4px solid rgba(255, 134, 51, 0.1);
                  border-left: 4px solid #ff8633;
                  border-radius: 50%;
                  width: 50px;
                  height: 50px;
                  animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
                  margin: 25px auto;
                }
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @media (max-width: 640px) {
                  .loading {
                    padding: 25px;
                  }
                  .spinner {
                    width: 40px;
                    height: 40px;
                  }
                }
              </style>
            </head>
            <body>
              <div id="bzWidgetContainer">
                <div class="loading">
                  <div class="spinner"></div>
                  <p style="color: #ff8633; font-size: 16px; font-weight: 500;">Loading payroll system comparison...</p>
                </div>
              </div>
              
              <script data-bzwidget
                src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
                data-bzwidget-pub-id="59578"
                data-bzwidget-color-palette-name="default"
                data-bzwidget-category-id="10113">
              </script>
              
              <script>
                function initBzWidget() {
                  if (typeof bzWidget !== 'undefined') {
                    bzWidget.init();
                    document.getElementById('bzWidgetContainer').querySelector('.loading').style.display = 'none';
                  } else {
                    setTimeout(initBzWidget, 500);
                  }
                }
                
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(initBzWidget, 1000);
                  
                  setTimeout(function() {
                    if (typeof bzWidget === 'undefined') {
                      document.getElementById('bzWidgetContainer').innerHTML = 
                        '<p style="text-align:center; padding:30px; color:#e74c3c; background: linear-gradient(180deg, #fff0f0 0%, #ffe0e0 100%); border-radius: 10px; box-shadow: 0 4px 15px rgba(231, 76, 60, 0.1);">Unable to load the comparison tool. Please refresh and try again.</p>';
                    }
                  }, 10000);
                });
  
                window.addEventListener('resize', function() {
                  if (typeof bzWidget !== 'undefined' && bzWidget.refresh) {
                    bzWidget.refresh();
                  }
                });
              </script>
            </body>
            </html>
          `);
          iframeDoc.close();
          
          setWidgetLoaded(true);
        }, 0);
      }
      
      const handleResize = () => {
        if (iframe) {
          iframe.style.height = window.innerWidth < 640 ? '650px' : '620px';
          iframe.style.width = '100%';
          iframe.style.maxWidth = '500px';
        }
      };
      
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

    const systems = [
      {
        name: "ADP",
        logo: "/images/adp.jpg",
        bestFor: "Best for Large Enterprises",
        price: "$10/user/month + $50 base",
        videoCapacity: "Full-service payroll & tax filing",
        support: "Dedicated specialist",
        link: "#",
      },
      {
        name: "Zoho",
        logo: "/images/zo.jpg",
        bestFor: "Best for Small Businesses",
        price: "$25/user/month",
        videoCapacity: "Automated payroll & compliance",
        support: "Email/chat support",
        link: "#",
      },
      {
        name: "BambooHr",
        logo: "/images/bam.jpg",
        bestFor: "Best for HR Integration",
        price: "Custom pricing",
        videoCapacity: "Payroll + HR platform",
        support: "24/7 support",
        link: "#",
      },
      {
        name: "Onpay",
        logo: "/images/on.jpg",
        bestFor: "Best for SMBs with contractors",
        price: "$36 + $4/user/month",
        videoCapacity: "Unlimited payroll runs",
        support: "Phone/email support",
        link: "#",
      },
      {
        name: "QuickBooks",
        logo: "/images/quick.png",
        bestFor: "Best for Accounting Sync",
        price: "$45/month + $5/user",
        videoCapacity: "Auto tax calculations",
        support: "24/7 support",
        link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
        linkText: "Links to Ooma Office"
      },
  ];
  const contents = [
    { id: 1, title: "Introduction to Best Payroll System", slug: "intro-payroll" },
    { id: 2, title: "What Is Payroll System?", slug: "what-is-payrollsystem" },
    { id: 3, title: "How Does Payroll System Works", slug: "payrollsystem-working" },
    { id: 4, title: "Why Does it matter?", slug: "whymatter-payroll" },
    { id: 5, title: "Related Articles", slug: "payroll-articles" },
    { id: 6, title: "FAQs", slug: "payroll-faq" } ,
  ];

  const payrollFAQs = [
    {
      question: "When will I get paid?",
      answer: "All employees at Compare Bazaar are paid on the 15th and last day of each month. If these dates fall on a weekend or holiday, you'll be paid on the last business day before."
    },
    {
      question: "How can I view my payslips?",
      answer: [
        "You can access your payslips through:",
        "1. The employee portal on our company website",
        "2. The Compare Bazaar mobile app (available for iOS and Android)",
        "3. Email delivery (if you've opted for this option)",
        "Payslips are typically available by 9 AM on payday"
      ]
    },
    {
      question: "What should I do if I notice an error in my pay?",
      answer: "Please contact our payroll team immediately at payroll@comparebazaar.com or call extension 555. Include your employee ID, pay period, and details about the discrepancy. We'll investigate and correct any errors within 3 business days."
    },
    {
      question: "How do I update my bank details for direct deposit?",
      answer: [
        "To update your bank information:",
        "1. Log in to the employee portal",
        "2. Navigate to 'Payment Settings'",
        "3. Select 'Update Bank Information'",
        "4. Enter your new account details",
        "Changes take effect for the next pay period if submitted by the 10th or 25th of the month"
      ]
    },
    {
      question: "What tax forms are available and when?",
      answer: "Your W-2 (for US employees) or P60 (for UK employees) will be available by January 31st each year. You can download digital copies from the portal or request a paper copy from HR."
    },
    {
      question: "How are bonuses and commissions paid?",
      answer: "Bonuses and commissions are included in your regular paycheck. They're processed on the same schedule but may appear as separate line items on your payslip."
    },
    {
      question: "What payment methods are available?",
      answer: [
        "We offer:",
        "• Direct deposit (recommended and fastest)",
        "• Physical checks (available upon request)",
        "• Pay cards (for employees without bank accounts)",
        "Note: International employees may have additional options"
      ]
    },
    {
      question: "How do I change my tax withholdings?",
      answer: "You can update your W-4 (US) or tax code (UK) through the employee portal under 'Tax Settings'. Major changes may require submitting physical forms to HR for verification."
    },
    {
      question: "What benefits deductions will I see on my paycheck?",
      answer: [
        "Common deductions include:",
        "• Health insurance premiums",
        "• Retirement contributions (401k/pension)",
        "• Flexible spending accounts",
        "• Union dues (if applicable)",
        "All deductions are listed in detail on your payslip"
      ]
    },
    {
      question: "Who should I contact for payroll questions?",
      answer: [
        "Our payroll team is available:",
        "• Email: payroll@comparebazaar.com",
        "• Phone: (800) 555-1234 ext. 555 (Mon-Fri 9AM-5PM)",
        "• In-person: HR office, 3rd floor (Wednesdays only)",
        "For fastest service, please include your employee ID in all communications"
      ]
    },
    {
      question: "How does overtime pay work?",
      answer: "Non-exempt employees receive 1.5 times their regular rate for hours worked over 40 in a week (US) or over contracted hours (UK). Overtime is automatically calculated and appears on your payslip."
    },
    {
      question: "When are pay raises processed?",
      answer: "Annual raises typically take effect in April paychecks. Promotional raises are processed in the next full pay period after approval. All changes will be reflected in your payslip with details."
    }
  ];

  const articles1 = [
    {
      id: 1,
      title: "Compare Bazaar Payroll System: A Complete Guide to Getting Paid",
      image: "/images/art1payroll.webp",
      author: "HR Team",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      excerpt: "Everything you need to know about our payroll system - from pay schedules to accessing your payslips and troubleshooting common issues.",
      link: "#"
    },
    {
      id: 2,
      title: "5 Time-Saving Features of Our Payroll System You Might Not Know About",
      image: "/images/art2payroll.jpeg",
      author: "Finance Team",
      date: "May 15, 2023",
      excerpt: "Discover hidden features like automated tax form generation, mobile payslip access, and instant payment notifications that make payroll easier.",
      link: "#"
    },
    {
        id: 3,
        title: "Self-Service Payroll Portal: How to Update Your Details in Minutes",
        image: "images/art3payroll.jpg",
        author: "IT Support",
        date: "January 30, 2023",
        excerpt: "Step-by-step guide to changing your bank details, tax withholdings, and personal information without HR paperwork.",
        link: "#"
      },
  ]


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

  const additionalText = "Our payroll system is designed to make your life easier. It automatically calculates your pay, taxes, and deductions, so you don't have to worry about errors. You can access your payslips anytime from your phone or computer, and if you ever have questions, our friendly payroll team is just an email or call away. We've built this system with real people in mind - whether you're in the office, working remotely, or on the go.";

  return (
    <>
    <Head>
                  <title>Compare Payroll & HR Software | Free Quotes from Trusted Providers – Compare-Bazaar</title>
                  <meta name="description" content="Simplify your payroll and HR management with the right software. Compare top solutions side-by-side, get free quotes, and find a system that fits your business—no pressure, no guesswork." />
                  <link rel="canonical" href="https://www.compare-bazaar.com/BestPayrollSystem" />
                </Head>

    <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Compare Bazaar Payroll Made Simple</h1>
  
          <p className="text-gray-800 text-base mb-4">
            At <span className="text-[#ff8633] font-semibold">Compare Bazaar</span>, we believe getting paid should be the easiest part of your job. <span className="text-[#ff8633] font-semibold"> <Link href="/BusinessPayroll" className="hover:underline">
          Our payroll system
          </Link></span> gives you reliable, on-time payments with no surprises. Whether you're full-time, part-time, or contract, we make sure your pay is accurate and arrives when it should. View your payslips, update your details, and track your payments - all in one simple place.
          </p>
        </header>
  
        <section className="mb-6">
          <p className="text-gray-800 text-base">
            Getting paid shouldn't be complicated. That's why we've built a payroll system that works for you. You'll get paid on the same dates every month (the 15th and last day), and can check your payment details anytime. Need to change your bank account? Update it in minutes through our employee portal. Questions about your pay? We're here to help.
            {showMore && (
              <span className="block mt-3">
                {additionalText} Plus, we keep your information safe with bank-level security. You'll get notifications when your pay is coming, and can download your tax documents with one click. At <span className="text-[#ff8633] font-semibold">Compare Bazaar</span>, we're committed to making payroll simple, clear, and stress-free for everyone in our team.
              </span>
            )}
          </p>
          <button
            className="mt-2 text-[#000e54] font-semibold flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less -' : 'Read more +'}
          </button>
        </section>
      {/* Responsive Grid Layout */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {systems.map((system, index) => (
            <PhoneSystemCardCommon 
              key={index} 
              system={system} 
              createRipple={createRipple} 
              onCompareQuotesClick={() => setIsModalOpen(true)}
            />
          ))}
        </div>
    </div>
    <TableOfContents contents={contents} />

    {/* introduction */}
    <div id="intro-payroll" className="max-w-6xl mx-auto rounded-xl px-4 py-10 flex flex-col md:flex-row items-center gap-8">
  {/* SVG/Image */}
  <div className="w-full md:w-1/2">
    <img 
      src="/images/payrollintro.avif" 
      alt="Easy Payroll System" 
      className="w-full h-auto rounded-xl"
    />
  </div>
  
  {/* Text Content */}
  <div className="w-full md:w-1/2">
    <h1 className="text-3xl font-semibold text-gray-900 mb-4">
      Payroll Made <span className="text-[#ff8633]">Easy & Stress-Free</span>
    </h1>
    <p className="text-base text-gray-800 mb-6">
      At <strong>Compare Bazaar</strong>, we make sure you get paid <strong>on time, every time</strong>.  
      No confusing numbers, no delays—just simple, accurate payments right to your bank.  
    </p>
    <a href="#payrollsystem-working">
  <button className="bg-[#ff8633] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e67329] transition-colors">
    See How It Works
  </button>
</a>
  </div>
</div>

{/* what is payroll */}
<div id="what-is-payrollsystem" className="max-w-6xl mx-auto px-4 font-sans text-gray-800">
      {/* Header with visual */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-gray-900 font-semibold">
          What is a Payroll System?
        </h1>
        <p className="text-base text-gray-800 mt-2">
          (And Why Every Business Needs One)
        </p>
      </div>

      {/* Main explanation */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 bg-blue-50 p-6 rounded-xl">
          <div className="w-32 h-32 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#000e54" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl text-gray-800 font-semibold mb-4">The Simple Definition</h2>
            <p className="mb-4">
              A payroll system is like your business's <strong className="font-semibold">automatic paycheck machine</strong>. It's the process (and software) that:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-base text-gray-800">
              <li>Calculates how much each employee earns</li>
              <li>Subtracts the right taxes and deductions</li>
              <li>Sends money to employee bank accounts</li>
              <li>Files tax paperwork with the government</li>
            </ul>
            <div className="bg-white p-4 rounded-lg border-l-4 text-gray-800 text-base border-[#000e54] italic">
              Think of it like your car's GPS - you tell it where employees need to go (their correct pay), and it handles all the complicated turns (calculations) to get them there.
            </div>
          </div>
        </div>

       

        

        {/* Final summary */}
        <div className="flex flex-col md:flex-row gap-8 bg-[#ff8633] text-white p-8 rounded-xl mt-12">
          <div className="w-48 mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-auto fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm3 0c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm3 0c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">In Everyday Terms...</h2>
            <p className="mb-4 text-base">
              A payroll system is your business's <strong className="font-semibold">paycheck assistant</strong> that handles all the math, payments, and tax paperwork automatically. Just like you wouldn't do accounting with pen and paper anymore, modern businesses use payroll systems instead of manual calculations.
            </p>
            <p className="text-base">
              Whether you have 2 employees or 200, it ensures everyone gets paid correctly and on time, while keeping you compliant with tax laws.
            </p>
          </div>
        </div>
      </div>
    </div>


 {/* How it works section */}
 <div id="payrollsystem-working" className="mt-16 max-w-6xl mx-auto px-4">
  {/* Section Header - Centered */}
  <div className="text-center mb-12">
    <h2 className="text-4xl text-gray-900 font-semibold mb-4 flex items-center justify-center">
      How Payroll Actually Works
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 ml-2 fill-[#000e54]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    </h2>
    <p className="text-base text-gray-800 max-w-2xl mx-auto">
      A simple breakdown of how Compare Bazaar ensures accurate, on-time payments every cycle
    </p>
  </div>

  {/* Steps Container - Centered with max width */}
  <div className="space-y-10">
    {/* Step 1 */}
    <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 rounded-xl p-6">
      <div className="flex-shrink-0 bg-[#000e54] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
        1
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Tracking Time & Work</h3>
        <p className="text-base text-gray-800 mb-4">
          The system automatically records your work hours, overtime, leaves, and bonuses.
        </p>
        <div className="flex justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-[#000e54]">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
          </svg>
        </div>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 rounded-xl p-6">
      <div className="flex-shrink-0 bg-[#000e54] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
        2
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Calculating the Numbers</h3>
        <p className="text-base text-gray-800 mb-4">
          It computes your pay and handles all deductions automatically:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <span className="bg-white px-4 py-2 rounded-full text-sm font shadow-sm">Taxes</span>
          <span className="bg-white px-4 py-2 rounded-full text-sm font shadow-sm">Insurance</span>
          <span className="bg-white px-4 py-2 rounded-full text-sm font shadow-sm">Retirement</span>
          <span className="bg-white px-4 py-2 rounded-full text-sm font shadow-sm">Other deductions</span>
        </div>
        <div className="flex justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-[#000e54]">
            <path d="M7 2h10v2H7zm0 4h10v2H7zm0 4h10v2H7zm0 4h7v2H7zm10 0h3v2h-3z"/>
          </svg>
        </div>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 rounded-xl p-6">
      <div className="flex-shrink-0 bg-[#000e54] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
        3
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Paying Employees</h3>
        <p className="text-base text-gray-800 mb-4">
          Your net pay is deposited directly to your bank account on scheduled paydays - no waiting for checks to clear.
        </p>
        <div className="flex justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-[#000e54]">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM12 8l-5 5h4v4h2v-4h4l-5-5z"/>
          </svg>
        </div>
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 rounded-xl p-6">
      <div className="flex-shrink-0 bg-[#000e54] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
        4
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Handling the Paperwork</h3>
        <p className="text-base text-gray-800 mb-4">
          The system generates all necessary tax documents and stays updated with the latest regulations.
        </p>
        <div className="flex justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 fill-[#000e54]">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-5-7v5h-2v-5h-3l4-4 4 4h-3z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

{/* our quotes form */}
<div className="relative w-full min-h-screen overflow-hidden mt-10 max-w-6xl mx-auto rounded-xl">
        {/* Strong linear gradient background from light to dark orange */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-300 to-orange-700 max-w-6xl mx-auto "></div>

        {/* Enhanced grid overlay for technical feel - moved to sides */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ff8633" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="10%" width="80%" height="100%" fill="none" />
            <rect width="10%" height="100%" fill="url(#grid)" />
            <rect x="90%" width="10%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Left side payroll elements */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none">
          {/* Paycheck animation */}
          <div className="absolute top-1/5 left-1/4 w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <rect x="20" y="30" width="60" height="40" rx="5" fill="#fff" stroke="#ff8633" strokeWidth="2"/>
              <rect x="25" y="35" width="50" height="10" rx="2" fill="#ffd1b3"/>
              <rect x="25" y="50" width="50" height="5" rx="1" fill="#ffb380"/>
              <rect x="25" y="60" width="50" height="5" rx="1" fill="#ffb380"/>
              <text x="50" y="80" fontFamily="Arial" fontSize="10" fill="#ff8633" textAnchor="middle">PAYROLL</text>
            </svg>
          </div>

          {/* Calculator icon */}
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#ff8633" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="6" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="18" x2="16" y2="18" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Money growth indicator */}
          <div className="absolute top-2/3 left-1/4 flex items-end space-x-1">
            <div className="w-3 bg-orange-300 rounded-t opacity-70" style={{ height: '15px' }}></div>
            <div className="w-3 bg-orange-400 rounded-t opacity-80" style={{ height: '25px' }}></div>
            <div className="w-3 bg-orange-500 rounded-t opacity-90" style={{ height: '35px' }}></div>
            <div className="w-3 bg-orange-600 rounded-t" style={{ height: '45px' }}></div>
          </div>
        </div>

        {/* Right side payroll elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none">
          {/* Payroll chart visualization */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <rect x="10" y="40" width="15" height="60" rx="2" fill="#ff8633" opacity="0.7"/>
              <rect x="30" y="20" width="15" height="80" rx="2" fill="#ff8633" opacity="0.7"/>
              <rect x="50" y="60" width="15" height="40" rx="2" fill="#ff8633" opacity="0.7"/>
              <rect x="70" y="30" width="15" height="70" rx="2" fill="#ff8633" opacity="0.7"/>
            </svg>
          </div>

          {/* Time clock */}
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ff8633" strokeWidth="4" strokeDasharray="2,1" opacity="0.5" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ff8633" strokeWidth="8" strokeDasharray="100,1000" 
                      strokeLinecap="round" transform="rotate(-90 50 50)" opacity="0.7">
                <animate attributeName="stroke-dasharray" values="30,1000;80,1000;30,1000" dur="4s" repeatCount="indefinite" />
              </circle>
              <text x="50" y="55" textAnchor="middle" fontSize="20" fill="#ff8633" opacity="0.8">9:00</text>
            </svg>
          </div>

          {/* Employee icon */}
          <div className="absolute top-2/3 right-1/3 w-10 h-10">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="#ff8633" opacity="0.7">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>

        {/* Floating payroll elements - positioned at sides */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[5%] w-40 h-40 rounded-full bg-orange-300 opacity-15 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-[5%] w-48 h-48 rounded-full bg-orange-400 opacity-15 animate-pulse-slower"></div>
        </div>

        {/* Payroll path visualization - positioned at sides */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M5,10 C15,50 10,70 5,90" stroke="#ff8633" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
            <path d="M95,20 C85,30 90,40 95,20" stroke="#ff8633" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
          </svg>
        </div>
        
        {/* Main content container */}
        <div className="relative z-10 w-full  flex flex-col items-center py-10 px-4 sm:px-6">
          <div className="w-full max-w-6xl mx-auto">
            
            {/* Horizontal banner for small/medium screens */}
            <div className="lg:hidden w-full flex justify-center relative group mb-8">
              <div className="absolute -inset-1  opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
              <a href="https://app.buyerzone.com/hr-personnel/payroll-services/rfqz?publisherId=59578&amp;publisherTypeId=1788%27;;"
                target="_self" className="relative block w-full max-w-[600px]">
                <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-orange-900/50 transition-all duration-500 group-hover:shadow-[#ff8633]/40 h-[140px]">
                  {/* Banner background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f0] to-[#ffd1b3]"></div>
                  
                  {/* Left content */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <h3 className="text-xl font-bold text-[#ff6b1a] mb-1">Payroll Solutions</h3>
                    <p className="text-sm text-[#ff8633] mb-2">Compare top providers</p>
                    <div className="bg-[#ff6b1a] text-white text-sm font-bold px-4 py-2 rounded-lg inline-block">
                      Free Quotes
                    </div>
                  </div>
                  
                  {/* Right graphic */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
                    <div className="relative">
                      {/* Paycheck stack */}
                      <div className="relative w-16 h-16">
                        <div className="absolute w-full h-full bg-white rounded-md shadow-md transform rotate-3"></div>
                        <div className="absolute w-full h-full bg-white rounded-md shadow-md transform rotate-6"></div>
                        <div className="absolute w-full h-full bg-white rounded-md shadow-md flex items-center justify-center">
                          <span className="text-[#ff6b1a] font-bold text-sm">$</span>
                        </div>
                      </div>
                      {/* Calculator icon */}
                      <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <rect x="4" y="2" width="16" height="20" rx="2"/>
                          <line x1="8" y1="6" x2="16" y2="6"/>
                          <line x1="8" y1="12" x2="16" y2="12"/>
                          <line x1="8" y1="18" x2="16" y2="18"/>
                          <line x1="12" y1="8" x2="12" y2="16"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Benefits list */}
                  <div className="absolute top-30 bottom-2 left-0 right-0 flex justify-center space-x-4">
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <span className="text-xs text-[#ff6b1a] ml-1">Automated</span>
                    </div>
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <span className="text-xs text-[#ff6b1a] ml-1">Tax Filing</span>
                    </div>
                    <div className="flex items-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <path d="M22 4L12 14.01l-3-3"/>
                      </svg>
                      <span className="text-xs text-[#ff6b1a] ml-1">HR Integration</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Main content layout */}
            <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8">
              {/* Vertical banner for large screens */}
              <div className="hidden lg:block relative group h-[680px] w-[180px]">
                <div className="absolute -inset-1  opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-90"></div>
                <a href="https://app.buyerzone.com/hr-personnel/payroll-services/rfqz?publisherId=59578&amp;publisherTypeId=1788%27;;"
                  target="_self" className="relative h-full w-full">
                  <div className="relative h-full w-full bg-gradient-to-b from-[#fff8f0] to-[#ffd1b3] rounded-xl shadow-2xl shadow-orange-900/50 overflow-hidden p-6 flex flex-col items-center">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#ff6b1a]">Payroll Solutions</h3>
                      <p className="text-sm text-[#ff8633] mt-1">Compare top providers</p>
                    </div>
                    
                    {/* Main graphic */}
                    <div className="relative flex-1 flex items-center justify-center w-full">
                      <div className="relative w-24 h-24">
                        {/* Paycheck stack */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-md transform rotate-3"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-md transform rotate-6"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-md flex items-center justify-center">
                          <span className="text-[#ff6b1a] font-bold text-2xl">$</span>
                        </div>
                        
                        {/* Calculator icon */}
                        <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                            <rect x="4" y="2" width="16" height="20" rx="2"/>
                            <line x1="8" y1="6" x2="16" y2="6"/>
                            <line x1="8" y1="12" x2="16" y2="12"/>
                            <line x1="8" y1="18" x2="16" y2="18"/>
                            <line x1="12" y1="8" x2="12" y2="16"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA button */}
                    <div className="w-[500px] text-center mb-6">
                    <div className="bg-[#ff6b1a] text-white text-sm font-bold px-4 py-2 rounded-lg inline-block">
                      Free Quotes
                    </div>
                    </div>
                    
                    {/* Benefits list */}
                    <div className="w-full space-y-3">
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">Automated Payroll</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">Tax Compliance</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">Direct Deposit</span>
                      </div>
                      <div className="flex items-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        <span className="text-sm text-[#ff6b1a] ml-2">HR Integration</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              
              {/* Information panel */}
              <div className="w-full px-4 mx-auto md:max-w-[500px] sm:max-w-[500px] lg:max-w-[450px] relative group">
                <div className="absolute -inset-1  opacity-60 rounded-2xl blur-md transition-all duration-300"></div>
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#ff6b1a]/40 via-[#ff8633]/40 to-[#ff9e5e]/40 rounded-2xl shadow-2xl overflow-hidden border border-[#ff8633]/30">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff8633] rounded-full opacity-10 blur-2xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#ff8633] rounded-full opacity-10 blur-2xl"></div>
                  
                  <div className="relative p-10 z-10 sm:h-[800px] md:h-[800px] lg:h-[680px]">
                    <h2 className="text-3xl font-semibold text-white mb-4">💰 Compare Payroll System Options — 100% Free!</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff8633] to-[#ffb380] mb-8"></div>
                    <h3 className="text-xl font-semibold text-orange-100 mb-7">Looking for the best payroll solution? We've got you covered.</h3>
                    
                    <div className="mb-10 space-y-6">
                      <p className="text-orange-50 leading-relaxed text-base">
                        Just answer a few quick questions and get customized quotes from top providers - all in under a minute.
                      </p>
                      
                      <div className="space-y-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#000e54] flex items-center justify-center mr-4  transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="font-semibold text-orange-50 text-base">Get free, no-obligation quotes from top providers</span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#000e54] flex items-center justify-center mr-4  transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="font-semibold text-white text-base">Takes less than a minute!</span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#000e54] flex items-center justify-center mr-4  transition-colors duration-300">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="font-semibold text-orange-50 text-base">Make smarter payroll decisions with side-by-side comparisons—all for $0.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comparison widget */}
              <div className="w-full px-4 mx-auto max-w-[500px] relative group">
                <div className="absolute -inset-1  opacity-60 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#ff8633] to-[#ff6b1a] p-4 text-white text-center">
                    <h3 className="text-xl font-semibold">Compare Payroll Solutions</h3>
                  </div>
                  <div 
                    id="buyerzone-widget-container" 
                    className="w-full h-full bg-white rounded-b-2xl overflow-hidden"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

{/* Why it matters section */}
<div id="whymatter-payroll" className="mt-16 max-w-6xl mx-auto px-4">
  <h2 className="text-4xl font-semibold text-gray-900 mb-8 flex items-center justify-center">
    Why Payroll Matters More Than You Think
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 ml-2 fill-[#000e54]">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm1.6-11.4l-.8.8c-.8.8-1.2 1.2-1.2 2.2v.4h-2v-.3c0-.9.5-1.7 1.3-2.3l1-.7c.3-.2.5-.5.5-.9 0-.6-.4-1-1-1-.5 0-1 .4-1 1H8c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .9-.4 1.7-1.4 2.2z"/>
    </svg>
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-xl shadow-sm text-left hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full fill-[#000e54]">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 5h2v7h-2z"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Your Time Is Money</h3>
<p className="text-gray-800 text-base">
  Small business owners spend 5+ hours monthly on payroll tasks. That's 60+ hours yearly – enough time to:
</p>
<ul className="text-left mt-2 text-sm text-gray-800 list-disc pl-5">
  <li>Land 2-3 new clients</li>
  <li>Develop a new product feature</li>
  <li>Take a proper vacation</li>
</ul>

    </div>
    
    <div className="bg-white p-6 rounded-xl shadow-sm text-left hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full fill-[#000e54]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      </div>
      <h3 className="text-xl text-gray-800 font-semibold mb-2">Compliance = Peace of Mind</h3>
<p className="text-gray-800 text-base">
  Payroll mistakes aren't just expensive - they can damage your reputation. We help you:
</p>
<ul className="text-left mt-2 text-sm text-gray-800 list-disc pl-5">
  <li>Avoid tax penalties (up to 15% of unpaid amounts)</li>
  <li>Stay updated with changing labor laws</li>
  <li>Maintain perfect audit trails</li>
</ul>

    </div>
    
    <div className="bg-white p-6 rounded-xl shadow-sm text-left hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full fill-[#000e54]">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      </div>
      <h3 className="text-xl text-gray-800 font-semibold mb-2">Employee Trust Builder</h3>
<p className="text-gray-800 text-base">
  Payday is the most important day for your team. Consistent payroll:
</p>
<ul className="text-left mt-2 text-sm text-gray-800 list-disc pl-5">
  <li>Reduces turnover by 30%</li>
  <li>Boosts productivity by 23%</li>
  <li>Creates positive company culture</li>
</ul>

    </div>
  </div>

  <div className="mt-10 bg-blue-50 p-6 rounded-xl">
    <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">The Hidden Costs of Manual Payroll</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <div className="bg-white p-4 rounded-lg">
        <div className="text-xl font-semibold text-[#000e54]">1 in 3</div>
        <p className="text-gray-800 text-base">Small businesses face payroll penalties each year</p>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="text-xl font-semibold text-[#000e54]">$850</div>
        <p className="text-gray-800 text-base">Average cost to correct payroll errors</p>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="text-xl font-semibold text-[#000e54]">42%</div>
        <p className="text-gray-800 text-base">Employees would leave after two payroll mistakes</p>
      </div>
    </div>
  </div>

  <div className="mt-10 p-6 border border-blue-100 rounded-xl bg-white">
    <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Payroll Done Right Means...</h3>
    <div className="flex flex-wrap justify-center gap-4">
      <span className="px-4 py-2 bg-blue-50  text-[#000e54] rounded-full text-base">✓ More time for strategy</span>
      <span className="px-4 py-2 bg-blue-50 text-[#000e54] rounded-full text-base">✓ No more tax season stress</span>
      <span className="px-4 py-2 bg-blue-50 text-[#000e54] rounded-full text-base">✓ Happier, more loyal team</span>
      <span className="px-4 py-2 bg-blue-50 text-[#000e54] rounded-full text-base">✓ Financial peace of mind</span>
      <span className="px-4 py-2 bg-blue-50 text-[#000e54] rounded-full text-base">✓ Growth-ready systems</span>
    </div>
  </div>
</div>

{/* buyers guide */}
<div className="max-w-6xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side text content - centered at all screen sizes */}
          <div className="w-full lg:w-2/5 text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-2 text-center">
              Payroll System
            </h2>
            <h3 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
              Buyer's Guide
            </h3>

            <div className="w-16 h-1 bg-gray-300 mx-auto mb-6 block"></div>

            <p className="text-gray-800 mb-8 text-left text-base">
            Managing payroll manually is time-consuming and prone to errors, but the right payroll system can automate salary calculations, tax deductions, and compliance filings, saving you hours of work while ensuring accuracy. Look for a system that offers automatic tax updates, direct deposit, employee self-service portals, and seamless integration with your existing accounting software—cloud-based solutions are ideal for most businesses because they're accessible anywhere, update automatically, and scale as you grow. Be mindful of hidden costs like setup fees or per-employee charges, and always take advantage of free trials to test the system before committing. At Compare Bazaar, we've designed our payroll solution to be user-friendly, compliant, and fully supported by real experts, so you can focus on your business while we handle the complexities of payroll—let us help you find the perfect fit.
            </p>

            <a
              href="https://www.compare-bazaar.com/BusinessPayroll"
              className="inline-block border-2 mx-auto border-[#ff8633] text-[#ff8633] font px-6 py-3 rounded-full hover:bg-[#ff8633] hover:text-white transition-colors duration-300"
            >
              READ THE BUYER'S GUIDE
            </a>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/payrollbuyersguide.jpg"
                alt="Business communications concept showing a hand touching a phone with digital network icons"
                className="w-full"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>

              {/* Overlay elements to match the original image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

    <div id="payroll-articles">
      <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />
    </div>
    <div id="payroll-faq" className="">
        <FAQ faqs={ payrollFAQs} />
    </div>
    
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PayrollForm/>
    </Modal>
    </>
  );
};

export default BestPayrollSystem;