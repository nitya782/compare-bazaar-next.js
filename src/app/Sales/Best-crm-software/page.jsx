'use client'

import React, { useState, useEffect } from 'react';
import PhoneSystemCardCommon from '../../../components/PhoneSystemCardCommon';
// import Feedback from './Feedback';
import { ChevronDown, ChevronUp, List, BookOpen } from 'lucide-react';
import TableOfContents from '../../../components/TableOfContents';

import CRMComparison from '../../../components/CRMComparison';

import Advice from '../../../components/Advice '
import Modal from '../../../components/Modal';
import CRMForm from '../../../components/CRMForm';
import FAQ from '../../../components/FAQ';
// import   WhitePaperForm from './WhitePaperForm';
import Article from '../../../components/ArticleLayoutCommon';
import Head from 'next/head';

const BestCRMSoftware = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
    {
      name: "Zoho CRM",
      logo: "/images/zoho.png",
      bestFor: "Best for Growing Businesses",
      price: "Starts at $14 per user per month",
      videoCapacity: "Office 365 integration , Zoho Marketplace",
      support: "24/7 customer support",
      link: "#",
    
    },
    {
      name: "Creatio",
      logo: "/images/creatio.png",
      bestFor: "Best for Customer Lifecycle Management",
      price: "Starts at $25 per user per month",
      videoCapacity: ",14-day free trial",
      support: "24/7 customer support",
      link: "#",
     
    },
    {
      name: "Hub CRM",
      logo: "/images/hub.png",
      bestFor: "Best for Sales and Marketing Integrations",
      price: "Starts at $9 per month per user",
      videoCapacity: "Includes 1,000 marketing contacts",
      support: "Email chat support included",
      link: "#",
    
    },
    {
      name: "HoneyBook",
      logo: "/images/honey.png",
      bestFor: "Best for All-In-One Option",
      price: "Starts at $29 per user per month",
      videoCapacity: "7-day free trial",
      support: "24/7 phone and email support",
      link: "#",
     
    },
    {
      name: "Pipedrive",
      logo: "/images/pipe.png",
      bestFor: "Best for Automation and Management",
      price: "Starts at $14 per user per month",
      videoCapacity: "Free 14-day trial. ",
      support: "24/7 online chat, premium for phone",
      link: "#",
      
    },
  ];
  const crmTestimonials = [
    {
      avatar: "M",
      avatarColor: "bg-teal-600",
      name: "Michael W.",
      date: "05/25/2024",
      stars: 5,
      text: "This CRM transformed our sales process completely. The contact management and pipeline visibility have increased our conversion rates by 27% in just three months."
    },
    {
      avatar: "T",
      avatarColor: "bg-orange-500",
      name: "Teresa J.",
      date: "04/18/2024",
      stars: 4,
      text: "The automation features save our team hours every week. Email sequences and follow-up reminders ensure no lead falls through the cracks."
    },
    {
      avatar: "R",
      avatarColor: "bg-pink-600",
      name: "Robert K.",
      date: "03/30/2024",
      stars: 5,
      text: "Integration with our phone system was seamless. Having call recordings automatically attached to contact records has improved our training and customer service."
    },
    {
      avatar: "L",
      avatarColor: "bg-violet-500",
      name: "Lisa M.",
      date: "02/12/2024",
      stars: 5,
      text: "The reporting features give our management team real-time visibility into sales performance. Custom dashboards help us make data-driven decisions daily."
    },
    {
      avatar: "B",
      avatarColor: "bg-emerald-600",
      name: "Brian T.",
      date: "01/07/2024",
      stars: 4,
      text: "Mobile app is powerful enough that our field sales team can manage their entire workflow on the go. The offline mode is particularly valuable."
    },
    {
      avatar: "C",
      avatarColor: "bg-cyan-500",
      name: "Christina R.",
      date: "04/06/2024",
      stars: 5,
      text: "Customer support has been exceptional. Their onboarding team ensured our data migration went smoothly and trained our staff thoroughly."
    }
  ];
  const crmFAQs = [
    {
      question: "How can CRM software benefit my business?",
      answer: [
        "Centralizes all customer interactions in one place",
        "Automates sales pipelines and follow-ups",
        "Provides detailed customer insights and analytics",
        "Improves team collaboration and accountability",
        "Enhances customer service with history tracking"
      ]
    },
    {
      question: "What types of businesses need CRM software?",
      answer: "CRM systems are valuable for businesses of all sizes and industries - from startups to enterprises. They're particularly beneficial for sales teams, marketing agencies, service providers, e-commerce businesses, and any organization that manages customer relationships."
    },
    {
      question: "How does CRM software integrate with other tools?",
      answer: "Modern CRM platforms offer integrations with email platforms, marketing automation tools, accounting software, customer support systems, and productivity apps. Many connect via APIs or pre-built connectors with popular business applications."
    },
    {
      question: "Can a CRM help with sales forecasting?",
      answer: [
        "Yes, advanced CRM systems provide:",
        "Real-time sales pipeline visualization",
        "Deal probability scoring",
        "Revenue forecasting based on historical data",
        "Performance tracking by team member",
        "Automated sales reports and KPI dashboards"
      ]
    },
    {
      question: "Is CRM software difficult to learn and implement?",
      answer: "Most modern CRM systems are designed for ease of use with intuitive interfaces. Implementation time varies from a few days to several weeks depending on complexity. Many providers offer onboarding assistance, training resources, and templates to accelerate adoption."
    },
    {
      question: "What's the difference between cloud-based and on-premise CRM?",
      answer: "Cloud-based CRM (SaaS) requires no hardware, offers automatic updates, and is accessible from anywhere. On-premise solutions are installed locally, offer more customization, but require IT infrastructure and maintenance. Most businesses today prefer cloud solutions for scalability and ease of use."
    },
    {
      question: "Can CRM software automate marketing campaigns?",
      answer: [
        "Yes, marketing automation features may include:",
        "Email campaign management",
        "Lead scoring and segmentation",
        "Customer journey mapping",
        "Behavior-triggered communications",
        "ROI tracking for marketing efforts",
        "Social media integration"
      ]
    },
    {
      question: "How do I choose the right CRM for my company?",
      answer: "Consider your team size, budget, required features, and scalability needs. Look for industry-specific solutions if applicable. We recommend starting with our comparison tool at Compare-bazaar to evaluate options based on your specific business requirements."
    },
    {
      question: "What mobile capabilities do CRM systems offer?",
      answer: "Most modern CRMs provide full-featured mobile apps allowing access to customer data, logging interactions, updating deals, and receiving notifications while on-the-go. Some offer offline functionality that syncs when connection is restored."
    },
    {
      question: "How secure is customer data in CRM systems?",
      answer: "Reputable CRM providers implement enterprise-grade security including encryption, regular backups, role-based access controls, and compliance with standards like GDPR. Cloud-based systems often offer better security than most businesses can maintain in-house."
    }
  ];

  const contents = [
    { id: 1, title: "Introduction to CRM", slug: "intro-crm" },
    { id: 2, title: "What Is CRM Software?", slug: "what-is-crm" },
    { id: 3, title: "Benefits of Implementing a CRM", slug: "crm-benefits" },
    { id: 4, title: "Types of CRM Solutions", slug: "crm-types" },
    { id: 5, title: "Pricing Models for CRM Software", slug: "crm-pricing" },
    { id: 6, title: "Key Features to Look For", slug: "key-features" },
    { id: 7, title: "Integration Capabilities", slug: "integration" },
    { id: 8, title: "Implementation Process", slug: "implementation" },
    { id: 9, title: "Comparing Top CRM Providers", slug: "comparison" },
    { id: 10, title: "What Are Features to Look for in a CRM?", slug: "features" },
    { id: 12, title: "How Much Would CRM Software Cost?", slug: "cost" },
    { id: 13, title: "How to Choose CRM Software", slug: "Choose CRM" },
    { id: 14, title: "Methodology", slug: "methrlodgy" } 
  ];
  const articles = [
    {
      id: 1,
      title: "Cloud CRM vs On-Premise CRM Software",
      image: "/images/img1crm.jpg",
      author: "Catie",
      date: "March 15, 2023",
      excerpt:
        "Businesses today face a critical decision when choosing CRM technology. Should I invest in cloud-based CRM or stick with on-premise solutions...",
      link: "#",
    },
    {
      id: 2,
      title: "Salesforce CRM: Features, Pricing, Pros and Cons",
      image: "/images/img2crm.png",
      author: "Catie",
      date: "September 22, 2023",
      excerpt:
        "Salesforce Overview Salesforce is a leading CRM platform offering cloud-based solutions for businesses of all sizes. Their comprehensive suite includes...",
      link: "#",
    },
    {
      id: 3,
      title: "10 Essential Factors to Consider When Selecting a CRM System",
      image: "/images/img3crm.png",
      author: "Catie",
      date: "February 8, 2024",
      excerpt:
        "As a business leader, finding the right CRM software is crucial for managing customer relationships effectively. With numerous options available...",
      link: "#",
    },
  ];

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =`${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classNameList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };


  const additionalText = "Business communication has come a long way, with VoIP (Voice over Internet Protocol) systems now replacing traditional PBX setups in many organizations. Today's business phone systems come with cutting-edge features like AI-powered voicemail transcription, smart call routing, CRM integration, and detailed analytics dashboards. These tools enable businesses to track key performance metrics, enhance customer satisfaction, and optimize communication workflows. When choosing a provider, it's crucial to consider factors such as scalability, reliability, security, and the total cost of ownership. Many modern systems now offer unified communications, merging voice, video, messaging, and collaboration tools into one seamless platform.";

  return (
    <>
                <Head>
                   <title>Best CRM Software Compared Side-by-Side | Free Quotes on Compare-Bazaar</title>
                   <meta name="description" content="Easily compare the best CRM software side-by-side. Get free, no-obligation quotes and find the right CRM for your business—fast, simple, and 100% unbiased." />
                   <link rel="canonical" href="https://www.compare-bazaar.com/BestCRMSoftware" />
                 </Head>
    
      <div className="max-w-6xl mx-auto p-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">The Best CRM Software of 2025</h1>


   <p className="text-gray-800 text-base md:text-base mb-4">
  At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we know how important it is to find the right tools to support your business. That’s why we suggest using the <span className="text-orange-500 font-semibold">best CRM software</span>—designed to work effortlessly with today’s VoIP systems. With features like AI-powered insights, smart automation, and real-time analytics, the <span className="text-orange-500 font-semibold">best CRM software</span> helps you build stronger customer relationships and streamline your workflow. Whether you're running a startup or managing a large company, the right CRM can make all the difference in how your team connects, collaborates, and grows.
</p>

        </header>

        <section className="mb-6">
        <p className="text-gray-800 text-base md:text-base">
  As your business grows, having the right communication tools becomes essential. While startups may start with a simple phone system, it’s important to upgrade as your needs evolve. A more advanced setup helps you stay efficient and connected. Integrating the <span className="text-orange-500 font-semibold">best CRM software</span> into your workflow can greatly improve how you manage customer relationships, automate tasks, and support business growth. At <span className="text-orange-500 font-semibold">Compare-bazaar</span>, we help you find the CRM that fits your goals, with features like AI analytics, automation, and smooth integration with your tools.
  {showMore && (
    <span className="block mt-3">
  {additionalText} Additionally, the <span className="text-orange-500 font-semibold">best CRM software</span> comes with advanced features like AI-powered insights, real-time analytics, and powerful automation to enhance your team's efficiency. With <span className="text-orange-500 font-semibold">Compare-bazaar</span>, you can compare leading CRM platforms, assess their strengths, and choose the best fit for your growing business. We're here to help you elevate your communication and customer management strategies.
</span>

  )}
</p>

          <button
            className="mt-2 text-[#000e54] font-semibold flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'LESS -' : 'MORE +'}
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



      {/* Big Divs for Each Section */}
      
      <div className="max-w-6xl mx-auto p-4 space-y-12">
  {/* Introduction to CRM */}
  <div id="intro-crm" className=" bg-white rounded-xl ">
    <div className=" mx-auto  ">
    <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-left">
        Introduction to CRM for B2B Marketing
</h2>
<p className="text-gray-800 text-base mb-8 text-left">
  Customer Relationship Management, or CRM, isn’t just a piece of software—it’s a smart way for businesses to stay connected with their leads and customers. For B2B companies like Compare Bazaar, having a strong CRM system can make a big difference. It helps you find new leads, keep your email marketing on point, and manage your sales pipeline without the usual hassle.

  With everything in one place, a good CRM lets you track every interaction, follow up with potential customers, and build stronger relationships over time. It also works hand-in-hand with marketing tools so you can send more personal emails, set up automated follow-ups, and get valuable insights to tweak your strategies as needed.

  On top of that, it helps your sales team focus on the right leads, cuts down on repetitive tasks, and gives you real-time reports to make smarter decisions. In short, using the right CRM can help Compare Bazaar work more efficiently, close more deals, and create lasting connections with customers.
</p>



      <h3 className="text-4xl font-semibold text-gray-900 mb-5 ">
        Why CRM is Essential for B2B Businesses?
      </h3>
      <p className="text-gray-800 text-base mb-6">
  B2B deals can be pretty complex, with lots of moving parts and ongoing conversations. That’s where a CRM really shines—it brings everything together in one place so your team can easily manage the entire sales process. With better organization and clear insights, it’s easier to work efficiently and make smarter, data-backed decisions.
</p>


<ul className="text-gray-800 text-base list-disc pl-6 space-y-4 mb-8">
  <li>
    <span className="font-semibold">Longer Sales Cycles:</span> B2B deals often take months to close. A CRM helps track each step, ensuring consistent follow-ups and stronger lead nurturing throughout the entire process.
  </li>
  <li>
    <span className="font-semibold">Account-Based Marketing (ABM):</span> CRM systems let you tailor messaging and campaigns for key accounts, making your outreach more personal and improving your chances of converting high-value clients.
  </li>
  <li>
    <span className="font-semibold">Multiple Decision Makers:</span> B2B sales usually involve several stakeholders. A CRM keeps conversations organized and accessible, so you can align communication with everyone involved in the decision.
  </li>
  <li>
    <span className="font-semibold">Data-Driven Lead Generation:</span> Built-in CRM analytics help identify the most promising leads. This lets your team focus on prospects with the highest conversion potential, saving time and effort.
  </li>
  <li>
    <span className="font-semibold">Automation & Workflow Optimization:</span> CRM tools handle routine tasks like emails and follow-ups automatically. This streamlines your workflow and allows your team to spend more time closing deals.
  </li>
  <li>
    <span className="font-semibold">Customer Retention & Relationship Management:</span> CRM helps you stay engaged with clients after the sale. Regular touchpoints and insights help maintain strong relationships and increase chances of repeat business.
  </li>
</ul>



      <div className=" flex justify-center ">
        <img 
          src="https://www.sunzinet.com/hs-fs/hubfs/CRM-implementation%20process.png?width=1992&height=2000&name=CRM-implementation%20process.png" 
          alt="CRM Process Diagram" 
          className=" max-w-lg rounded-lg p-12" 
        />
      </div>

      <h3 className="text-4xl font-semibold text-gray-900 mb-5 ">
        Key Features of an Effective B2B CRM
      </h3>
      <p className="text-gray-800  mb-6 text-base">
        The right CRM should offer a range of features tailored to the needs of B2B businesses:
      </p>
      <ul className="text-gray-700 text-base list-disc pl-6 space-y-4">
        <li><span className="font-semibold">Lead & Contact Management:</span> Track customer interactions and maintain detailed records.</li>
        <li><span className="font-semibold">Sales Pipeline Visibility:</span> Monitor deal progress and forecast revenue.</li>
        <li><span className="font-semibold">Marketing Automation:</span> Automate email campaigns, follow-ups, and lead nurturing.</li>
        <li><span className="font-semibold">Integration with Other Tools:</span> Connect with email, calendar, and analytics platforms.</li>
        <li><span className="font-semibold">Reporting & Analytics:</span> Gain insights into sales performance and customer behavior.</li>
        <li><span className="font-semibold">Mobile Accessibility:</span> Access CRM data on the go for improved productivity.</li>
      </ul>
    </div>
  </div>

  {/* What is CRM */}
  <div id="what-is-crm" className=" rounded-xl ">
    <div className=" mx-auto ">
      <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-left">What Is CRM Software?</h2>
      <p className="text-gray-800 text-base mb-4">
  CRM (Customer Relationship Management) software helps businesses manage interactions with both current and potential customers. It’s more than just a contact list—it’s a tool that supports every stage of the customer journey, from the first lead to long-term loyalty. With a CRM system, you can track leads, manage your sales pipeline, run marketing campaigns, store customer data, analyze performance, and even automate routine tasks—all from one place.
</p>

<p className="text-gray-800 text-base mb-8">
  Almost any business involved in sales can benefit from using a CRM. For instance, a clothing store might use one to track customer preferences and reward loyal shoppers. A timeshare company could rely on a CRM to manage leads and stay connected with ideal prospects. Even larger businesses can use it to better align their sales and marketing efforts. That said, CRMs aren’t a fit for every business. A fast-food restaurant or a doctor’s office, for example, probably wouldn’t need full CRM features—but they might still use tools like POS systems or medical software that include similar functions.
</p>


      <h3 className="text-4xl font-semibold text-gray-900 mb-5">Key Functionalities for B2B CRM:</h3>
      <ul className="list-disc pl-6 text-gray-800 text-base mb-8 space-y-3">
  <li>
    <span className="font-semibold">Lead Tracking & Management:</span> Easily capture leads from sources like websites, emails, or ads. A CRM keeps track of every interaction and helps your team follow up without missing a beat.
  </li>
  <li>
    <span className="font-semibold">Sales Pipeline Visualization:</span> See where each deal stands at a glance. Visual tools help forecast revenue, assign tasks efficiently, and keep your sales team focused on what matters most.
  </li>
  <li>
    <span className="font-semibold">Automated Email & Follow-ups:</span> Let your CRM handle routine follow-ups and emails. This keeps communication timely and personalized, while freeing up your team to close more deals.
  </li>
  <li>
    <span className="font-semibold">Customer Data Analytics:</span> Get clear insights into what your customers want and how they behave. Use this data to refine your marketing, improve targeting, and boost overall performance.
  </li>
  <li>
    <span className="font-semibold">Integration with Marketing Tools:</span> Connect your CRM with tools like email platforms, social media, or ad services. This gives you a complete view of your customer journey across all channels.
  </li>
</ul>


      <h3 className="text-4xl font-semibold text-gray-900 mb-5">Benefits of CRM for Businesses:</h3>
      <ul className="list-disc pl-6 text-gray-800 text-base mb-8 space-y-3">
  <li>
    <span className="font-semibold">Improved Customer Experience:</span> CRM tools help you deliver faster, more personalized service—making customers feel heard and appreciated, which builds loyalty over time.
  </li>
  <li>
    <span className="font-semibold">Increased Efficiency:</span> By automating tasks like follow-ups, data entry, and reports, your team saves time and can focus on what really drives growth and results.
  </li>
  <li>
    <span className="font-semibold">Better Collaboration:</span> With shared access to real-time customer info, your sales, marketing, and support teams can work together more smoothly and stay aligned.
  </li>
  <li>
    <span className="font-semibold">Stronger Customer Relationships:</span> A CRM helps you remember key details about each customer, so every interaction feels personal, thoughtful, and more meaningful.
  </li>
  <li>
    <span className="font-semibold">Increased Revenue:</span> When your processes are streamlined and your team is working smarter, it naturally leads to better conversions, more sales, and happier customers.
  </li>
</ul>


      <div className="my-12 bg-white  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className="w-full md:h-[500px]">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
         
          <rect width="100%" height="100%" fill="white" rx="12" ry="12"/>
          
          
          <rect x="50" y="100" width="700" height="300" rx="10" ry="10" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
          
        
          <circle cx="150" cy="250" r="40" fill="url(#grad1)"/>
          <text x="150" y="250" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" dominantBaseline="middle">Leads</text>
          
          <path d="M190 250 L230 250" stroke="#4F46E5" strokeWidth="3" strokeDasharray="5,5"/>
          
          <circle cx="270" cy="250" r="40" fill="url(#grad1)"/>
          <text x="270" y="250" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" dominantBaseline="middle">Engage</text>
          
          <path d="M310 250 L350 250" stroke="#4F46E5" strokeWidth="3" strokeDasharray="5,5"/>
          
          <circle cx="390" cy="250" r="40" fill="url(#grad1)"/>
          <text x="390" y="250" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" dominantBaseline="middle">Nurture</text>
          
          <path d="M430 250 L470 250" stroke="#4F46E5" strokeWidth="3" strokeDasharray="5,5"/>
          
          <circle cx="510" cy="250" r="40" fill="url(#grad1)"/>
          <text x="510" y="250" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" dominantBaseline="middle">Convert</text>
          
          <path d="M550 250 L590 250" stroke="#4F46E5" strokeWidth="3" strokeDasharray="5,5"/>
          
          <circle cx="630" cy="250" r="40" fill="url(#grad1)"/>
          <text x="630" y="250" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" dominantBaseline="middle">Retain</text>
     
          <g transform="translate(100, 350)">
            <rect x="0" y="0" width="600" height="100" fill="white" rx="8" ry="8" stroke="#e5e7eb" strokeWidth="1"/>
            
       
            <circle cx="60" cy="50" r="20" fill="#10B981"/>
            <path d="M55 60 L65 70 L80 45" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <text x="60" y="90" fontFamily="Arial" fontSize="12" fill="#6B7280" textAnchor="middle">Efficiency</text>
            
            
            <circle cx="180" cy="50" r="20" fill="#3B82F6"/>
            <path d="M165 50 L175 50 L175 70 L165 70" fill="none" stroke="white" strokeWidth="3"/>
            <path d="M185 50 L195 50 L195 70 L185 70" fill="none" stroke="white" strokeWidth="3"/>
            <text x="180" y="90" fontFamily="Arial" fontSize="12" fill="#6B7280" textAnchor="middle">Collaboration</text>
            
            
            <circle cx="300" cy="50" r="20" fill="#F59E0B"/>
            <path d="M290 60 L300 45 L310 60" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <text x="300" y="90" fontFamily="Arial" fontSize="12" fill="#6B7280" textAnchor="middle">Growth</text>
            
           
            <circle cx="420" cy="50" r="20" fill="#EC4899"/>
            <path d="M410 50 L430 50" fill="none" stroke="white" strokeWidth="3"/>
            <path d="M420 40 L420 60" fill="none" stroke="white" strokeWidth="3"/>
            <text x="420" y="90" fontFamily="Arial" fontSize="12" fill="#6B7280" textAnchor="middle">Insights</text>
            
            
            <circle cx="540" cy="50" r="20" fill="#8B5CF6"/>
            <path d="M530 50 L550 50" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <path d="M540 40 L540 60" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            <text x="540" y="90" fontFamily="Arial" fontSize="12" fill="#6B7280" textAnchor="middle">Revenue</text>
          </g>
          
          
          <text x="400" y="60" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#1F2937" textAnchor="middle ">CRM Workflow Process</text>
          <text x="400" y="90" fontFamily="Arial" fontSize="16" fill="#6B7280" textAnchor="middle">From lead generation to customer retention</text>
        </svg>
      </div>

     
    </div>
  </div>


        {/* Types of CRM Solutions */}
        <div id="crm-types" className="">
  <h2 className="text-4xl font-semibold text-gray-900 mb-4 ">Types of CRM Solutions for B2B Businesses</h2>
  <p className="text-gray-800 text-base mb-6 text-base">
    There are several types of CRM solutions, each designed to address different business needs and challenges.
  </p>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gary-500 text-base">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border border-gray-500">CRM Type</th>
          <th className="py-2 px-4 border border-gray-500">Features</th>
          <th className="py-2 px-4 border border-gary-500">Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border border-gary-500">Operational CRM</td>
          <td className="py-2 px-4 border border-gary-500">Lead tracking, sales automation, email workflows</td>
          <td className="py-2 px-4 border border-gary-500">Companies needing streamlined processes</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-gary-500">Analytical CRM</td>
          <td className="py-2 px-4 border border-gary-500">Customer behavior insights, predictive analytics</td>
          <td className="py-2 px-4 border border-gary-500">Data-driven businesses optimizing sales strategy</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gary-500">Collaborative CRM</td>
          <td className="py-2 px-4 border border-gary-500">Shared databases, multi-team collaboration</td>
          <td className="py-2 px-4 border border-gary-500">Businesses needing strong internal communication</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-gary-500">Strategic CRM</td>
          <td className="py-2 px-4 border border-gary-500">Long-term customer engagement focus</td>
          <td className="py-2 px-4 border border-gary-500">Businesses focusing on account-based marketing</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gary-500">AI-Powered CRM</td>
          <td className="py-2 px-4 border border-gary-500">Machine learning insights, automated recommendations</td>
          <td className="py-2 px-4 border border-gary-500">Businesses leveraging AI for personalization</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="py-2 px-4 border border-gary-500">Social CRM</td>
          <td className="py-2 px-4 border border-gary-500">Social media integration, sentiment analysis</td>
          <td className="py-2 px-4 border border-gary-500">Companies focusing on brand engagement</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border border-gary-500">Mobile CRM</td>
          <td className="py-2 px-4 border border-gary-500">Access CRM features on mobile devices</td>
          <td className="py-2 px-4 border border-gary-500">Remote teams and field sales representatives</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="mt-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-base">Example Use Cases:</h3>
    <ul className="list-disc list-inside text-gray-800 text-base">
      <li>A SaaS Company using CRM for subscription management & renewals.</li>
      <li>A B2B Service Provider automating lead nurturing and email marketing.</li>
      <li>An E-commerce business integrating AI-driven customer insights.</li>
      <li>A retail company using social CRM for brand engagement.</li>
      <li>A sales team utilizing mobile CRM for on-the-go client interactions.</li>
    </ul>
  </div>
  
</div>
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className='py-10'>
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#f1f5f9" />
      <stop offset="100%" stopColor="#e2e8f0" />
    </linearGradient>
    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.2" />
    </filter>
    <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stopColor="#1e40af" />
      <stop offset="100%" stopColor="#000e54" />
    </radialGradient>
  </defs>
  
 
  
  <text x="400" y="30" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#000e54">7 Types of CRM Software</text>
  <line x1="275" y1="75" x2="525" y2="75" stroke="#000e54" strokeWidth="3" strokeLinecap="round" />
  
  <circle cx="400" cy="300" r="85" fill="url(#center-glow)" filter="url(#drop-shadow)" />
  <text x="400" y="290" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" textAnchor="middle" fill="white">CRM</text>
  <text x="400" y="315" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Customer Relationship</text>
  <text x="400" y="330" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Management</text>
  
  <circle cx="200" cy="260" r="70" fill="#0284c7" filter="url(#drop-shadow)" />
  <text x="200" y="230" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">Operational</text>
  <text x="200" y="260" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Sales Automation</text>
  <text x="200" y="275" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Marketing</text>
  <text x="200" y="290" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Service</text>
  
 
<path d="M200,200 a12,12 0 1,0 0.1,0 M188,200 L184,200 M212,200 L216,200 M192,192 L189,189 M208,192 L211,189 M192,208 L189,211 M208,208 L211,211"
  stroke="white" strokeWidth="2" fill="none" />
<circle cx="200" cy="200" r="6" fill="white" />
  
  <line x1="280" y1="210" x2="330" y2="230" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
  
  <circle cx="600" cy="250" r="70" fill="#7e22ce" filter="url(#drop-shadow)" />
  <text x="600" y="240" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">Analytical</text>
  <text x="600" y="260" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Data Mining</text>
  <text x="600" y="275" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Reporting</text>
  <text x="600" y="290" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Forecasting</text>
  
  <g transform="translate(600, 205) scale(0.8)">
    <rect x="-30" y="0" width="10" height="25" fill="white" />
    <rect x="-15" y="-10" width="10" height="35" fill="white" />
    <rect x="0" y="-5" width="10" height="30" fill="white" />
    <rect x="15" y="-15" width="10" height="40" fill="white" />
    
    <polyline points="-25,10 -10,-5 5,5 20,-10" 
      stroke="white" strokeWidth="2.5" fill="none" />
    <circle cx="-25" cy="10" r="3" fill="white" />
    <circle cx="-10" cy="-5" r="3" fill="white" />
    <circle cx="5" cy="5" r="3" fill="white" />
    <circle cx="20" cy="-10" r="3" fill="white" />
  </g>
  
  <line x1="520" y1="220" x2="470" y2="230" stroke="#7e22ce" strokeWidth="3" strokeLinecap="round" />
  
  <circle cx="600" cy="450" r="70" fill="#0891b2" filter="url(#drop-shadow)" />
  <text x="600" y="430" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">Collaborative</text>
  <text x="600" y="460" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Shared Data</text>
  <text x="600" y="475" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Team Access</text>
  <text x="600" y="490" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Interaction</text>
  
  <circle cx="590" cy="400" r="5" fill="white" />
  <circle cx="610" cy="400" r="5" fill="white" />
  <path d="M585,410 Q590,415 595,410 M605,410 Q610,415 615,410" stroke="white" strokeWidth="1.5" fill="none" />
  <path d="M590,405 L590,412 Q600,417 610,412 L610,405" stroke="white" strokeWidth="1.5" fill="none" />
  
  <line x1="520" y1="420" x2="470" y2="370" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" />
  
  <circle cx="200" cy="450" r="70" fill="#10b981" filter="url(#drop-shadow)" />
  <text x="200" y="430" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">Strategic</text>
  <text x="200" y="460" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Customer</text>
  <text x="200" y="475" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Retention</text>
  <text x="200" y="490" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Loyalty</text>
  
  <circle cx="200" cy="400" r="10" stroke="white" strokeWidth="2" fill="none" />
  <circle cx="200" cy="400" r="5" stroke="white" strokeWidth="2" fill="none" />
  <circle cx="200" cy="400" r="1" fill="white" />
  <line x1="185" y1="400" x2="195" y2="400" stroke="white" strokeWidth="1" />
  <line x1="205" y1="400" x2="215" y2="400" stroke="white" strokeWidth="1" />
  <line x1="200" y1="385" x2="200" y2="395" stroke="white" strokeWidth="1" />
  <line x1="200" y1="405" x2="200" y2="415" stroke="white" strokeWidth="1" />
  
  <line x1="280" y1="420" x2="330" y2="370" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
  
  <circle cx="300" cy="100" r="60" fill="#3b82f6" filter="url(#drop-shadow)" />
  <text x="300" y="90" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white">Cloud-Based</text>
  <text x="300" y="110" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">SaaS</text>
  <text x="300" y="125" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Subscription</text>
  
  <path d="M285,70 Q275,75 280,85 Q270,85 270,95 Q280,100 290,95 Q295,105 305,100 Q315,105 315,95 Q325,95 325,85 Q320,75 310,80 Q305,65 285,70" 
    stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.3" />
  
  <line x1="340" y1="140" x2="380" y2="180" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
  
  <circle cx="500" cy="100" r="60" fill="#8b5cf6" filter="url(#drop-shadow)" />
  <text x="500" y="90" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white">AI-Powered</text>
  <text x="500" y="110" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Automation</text>
  <text x="500" y="125" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Intelligence</text>
  
  <path d="M500,60 Q490,55 485,65 Q475,65 475,75 Q480,80 485,75 Q490,85 500,80 Q510,85 515,75 Q520,80 525,75 Q525,65 515,65 Q510,55 500,60" 
    stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.3" />
  <path d="M495,70 L495,75 M500,70 L500,77 M505,70 L505,75" stroke="white" strokeWidth="1" />
  
  <line x1="460" y1="140" x2="420" y2="180" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
  
  <circle cx="400" cy="500" r="60" fill="#f59e0b" filter="url(#drop-shadow)" />
  <text x="400" y="490" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle" fill="white">Industry</text>
  <text x="400" y="510" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Specific</text>
  <text x="400" y="525" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="white">Specialized</text>
  
  <path d="M385,465 L385,480 L415,480 L415,465 Z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.3" />
  <path d="M390,465 L390,455 L410,455 L410,465" stroke="white" strokeWidth="1.5" fill="none" />
  <path d="M395,480 L395,470 L400,470 L400,480 M405,480 L405,470 L410,470 L410,480" stroke="white" strokeWidth="1" />
  
  <line x1="400" y1="440" x2="400" y2="380" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
  
  <circle cx="400" cy="300" r="90" fill="none" stroke="#1e3a8a" strokeWidth="2" opacity="0.5">
    <animate attributeName="r" from="85" to="95" dur="2s" repeatCount="indefinite" />
    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
  </circle>
  
  <g stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" opacity="0.3">
    <line x1="200" y1="150" x2="600" y2="150" />
    <line x1="200" y1="450" x2="600" y2="450" />
    <line x1="300" y1="100" x2="500" y2="100" />
    <line x1="200" y1="150" x2="300" y2="100" />
    <line x1="600" y1="150" x2="500" y2="100" />
    <line x1="200" y1="450" x2="400" y2="500" />
    <line x1="600" y1="450" x2="400" y2="500" />
  </g>
</svg>



        {/* Pricing Models for CRM Software */}
  <div id="crm-pricing" className="">
   
    <div className="4xl mx-auto px-4 py-12 ">
  <h2 className="text-4xl font-semibold text-center text-gray-800 mb-2">Pricing Models</h2>
  <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto text-base">Select the perfect CRM solution for your business needs</p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Subscription-Based Card */}
    <div className=" rounded-xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6">
        <h3 className="text-2xl font-semibold text-white text-center">Subscription-Based</h3>
        <div className="flex justify-center mt-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-[#000e54] text-2xl font-semibold">$</span>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center mb-4">
          <span className="text-3xl font-semibold text-gray-800">$29</span>
          <span className="text-gray-800">/month</span>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Monthly/annual fees per user</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Best for small-to-medium businesses</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Examples: HubSpot, Zoho CRM</span>
          </li>
        </ul>
        <div className="mt-8">
          <button className="w-full py-3 bg-[#000e54] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Choose Plan</button>
        </div>
      </div>
    </div>

    {/* Feature-Based Card - Highlighted as recommended */}
    <div className="bg-white rounded-xl border border-orange-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
      <div className="absolute -top-4 inset-x-0 flex justify-center">
        <div className="bg-green-500 text-white py-1 px-4 rounded-full font-semibold shadow-md">
          
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 pt-8">
        <h3 className="text-2xl font-semibold text-white text-center">Feature-Based</h3>
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
            <span className="text-orange-500 text-sm font-semibold">Basic</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
            <span className="text-orange-500 text-sm font-semibold">Pro</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow opacity-50">
            <span className="text-orange-500 text-sm font-semibold">Ultra</span>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center mb-4">
          <span className="text-3xl font-semibold text-gray-800">$49</span>
          <span className="text-gray-500">/month</span>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pay for only needed features</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Ideal for startups with limited budgets</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-orange-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Customizable feature packages</span>
          </li>
        </ul>
        <div className="mt-8">
          <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">Choose Plan</button>
        </div>
      </div>
    </div>

    {/* Enterprise Custom Card */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-6">
        <h3 className="text-2xl font-semibold text-white text-center">Enterprise Custom</h3>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-3 h-10 bg-white rounded-md"></div>
            <div className="w-3 h-6 bg-white rounded-md"></div>
            <div className="w-3 h-8 bg-white rounded-md"></div>
            <div className="w-3 h-5 bg-white rounded-md"></div>
            <div className="w-3 h-7 bg-white rounded-md"></div>
            <div className="w-3 h-9 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center mb-4">
          <span className="text-gray-800 font-semibold">Custom Pricing</span>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Fully customized solutions</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Best for large organizations</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Advanced needs and integrations</span>
          </li>
        </ul>
        <div className="mt-8">
          <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">Contact Sales</button>
        </div>
      </div>
    </div>
  </div>

 
</div>
  </div>
 

  {/* Key Features to Look for in a B2B CRM */}
  
  <div id="key-features" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">Essential CRM Features for Business Growth</h2>
    <p className="text-base text-gray-600 max-w-3xl mx-auto">
      Discover the must-have capabilities that transform your customer relationships and drive revenue
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Lead Management */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-[#000e54]"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Lead Management</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Automated lead capture from multiple sources</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">AI-powered lead scoring and prioritization</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Visual pipeline tracking and management</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#000e54] rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Behavior-based lead nurturing workflows</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Marketing Automation */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-purple-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Marketing Automation</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Multi-channel campaign management</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Personalized email workflows and sequences</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Behavior-triggered communications</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">A/B testing and performance analytics</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Sales Enablement */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-green-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Sales Enablement</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">AI-powered sales forecasting</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Deal stage tracking and probability scoring</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Document and proposal generation</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Meeting scheduling and call logging</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Analytics & Reporting */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-orange-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Analytics & Reporting</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Customizable dashboards and reports</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Revenue forecasting and trend analysis</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Team performance metrics</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">ROI tracking for marketing campaigns</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Integrations */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-indigo-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Integrations</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Email and calendar synchronization</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Marketing automation platforms</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">ERP and accounting software</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Custom API connections</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Mobile & Accessibility */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-2 bg-red-600"></div>
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="bg-red-100 p-3 rounded-lg mr-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Mobile & Accessibility</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Native iOS and Android apps</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Offline access with sync capabilities</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Voice commands and dictation</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <p className="ml-3 text-base">Accessibility compliant interfaces</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  {/* How CRM Enhances Lead Generation & Email Marketing */}
  <div id="lead-generation" className="">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">How CRM Enhances Lead Generation & Email Marketing</h2>
    <p className="text-gray-800 text-base mb-6">
      A CRM-powered lead generation system allows businesses to attract, nurture, and convert leads effectively.
    </p>
    <div className="bg-white rounded-lg  p-6 mb-8 text-base">
      <h3 className="text-xl font-semibold mb-4 text-base">Lead Generation Process with CRM:</h3>
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-semibold mr-2">1.</span>
          <div>
            <p className="font-semibold text-xl">Attract Leads</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Capture new contacts through landing pages, social media campaigns, and digital ads.</li>
  <li>Track where each lead comes from to measure marketing ROI more effectively.</li>
  <li>Use website visitor tracking to identify companies and understand visitor behavior.</li>
  <li>Create gated content that automatically adds leads into your CRM system.</li>
  <li>Handle event sign-ups and manage webinar attendees all in one place.</li>
  <li>Deploy chatbots that collect data and sync directly with your CRM.</li>
</ul>

          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">2.</span>
          <div>
            <p className="font-semibold text-xl">Qualify Leads</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Score leads to focus on those most likely to convert into valuable customers.</li>
  <li>Use AI-powered predictive scoring to identify high-potential prospects faster.</li>
  <li>Apply qualification methods like BANT or MEDDIC to assess lead readiness.</li>
  <li>Set up rules to automatically assign leads based on their profile or behavior.</li>
  <li>Create tailored nurturing journeys for leads at different qualification stages.</li>
  <li>Track engagement like clicks and replies to spot when leads are ready for sales.</li>
</ul>

          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">3.</span>
          <div>
            <p className="font-semibold text-base">Nurture with Email Marketing</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Set up automated drip campaigns to keep leads engaged over time.</li>
  <li>Deliver tailored content journeys based on industry or business type.</li>
  <li>Run re-engagement campaigns to bring back leads that have gone cold.</li>
  <li>Share educational content that helps solve common customer pain points.</li>
  <li>Send relevant case studies based on each lead’s industry interests.</li>
  <li>Trigger targeted campaigns when leads take specific actions or show intent.</li>
</ul>

          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">4.</span>
          <div>
            <p className="font-semibold text-base">Convert into Customers</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Guide leads smoothly through the sales funnel to drive conversions.</li>
  <li>Automate meeting scheduling to easily connect leads with sales reps.</li>
  <li>Generate proposals and quotes with built-in tracking for better follow-ups.</li>
  <li>Set up automated follow-up sequences after sales meetings to keep the momentum going.</li>
  <li>Integrate contract management and e-signatures to simplify the closing process.</li>
  <li>Trigger onboarding sequences automatically once a deal is closed.</li>
</ul>

          </div>
        </li>
      </ul>
      
    </div>
    <div className="w-full max-w-4xl overflow-hidden rounded-lg ">
    <img
      src="https://blog.clickpointsoftware.com/hs-fs/hubfs/lead%20management.jpg?width=1200&height=750&name=lead%20management.jpg"
      alt="CRM Process Diagram"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
  </div>
  
  {/* How CRM Supports Email Marketing & Automation */}
  <div id="email-marketing" className="py-2">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">How CRM Supports Email Marketing & Automation</h2>
    <p className="text-gray-800 text-base mb-6">
      CRM-driven email marketing ensures timely and relevant communication with leads.
    </p>
    <div className="bg-white rounded-lg p-6 mb-8">
      <ul className="space-y-6">
        <li className="flex items-start">
          <span className="font-semibold mr-2">1.</span>
          <div>
            <p className="font-semibold text-base">Automated Drip Campaigns</p>
            <ul className="text-gray-800 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Send emails in a thoughtful sequence based on what the user does</li>
  <li>Figure out the best time gaps between emails for maximum impact</li>
  <li>Begin with helpful info and slowly shift toward promoting your product</li>
  <li>Blend email efforts with social media and retargeting ads for better reach</li>
  <li>Measure how well the campaign performs—look at completions and conversions</li>
  <li>A sample flow: Welcome email → Helpful tips → Case study → Product comparison → Sales message → Reminder → Special offer</li>
</ul>

          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">2.</span>
          <div>
            <p className="font-semibold text-base">Email Personalization & Segmentation</p>
            <ul className="text-gray-800 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Organize leads by their industry, interests, and how they interact</li>
  <li>Use content blocks that adapt based on who the recipient is</li>
  <li>Add personal touches like company names, contact names, or industry terms</li>
  <li>Segment users by how they engage with different types of content</li>
  <li>Track site activity to group leads based on what they’re interested in</li>
  <li>Use company data to tailor messages specific to their business profile</li>
  <li>Suggest helpful content or products using recommendation tools</li>
</ul>

          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2 text-base">3.</span>
          <div>
            <p className="font-semibold text-base">A/B Testing & Analytics</p>
            <ul className="text-gray-800 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Try out different subject lines, buttons, and content to boost email results</li>
  <li>Test various send times to see when users are most likely to open emails</li>
  <li>Compare formats like plain text vs. HTML, or short vs. long messages</li>
  <li>Experiment with where and how CTAs appear to improve clicks</li>
  <li>Test whether using a person’s name or the company name works better</li>
  <li>Use clear dashboards to track how each email performs</li>
  <li>Link email interactions back to revenue with proper attribution tracking</li>
</ul>

          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">4.</span>
          <div>
            <p className="font-semibold text-base">Engagement Monitoring & Scoring</p>
            <ul className="text-gray-600 ml-4 list-disc space-y-1 mt-1 text-base">
  <li>Keep an eye on open rates, clicks, and how people interact with content</li>
  <li>Score user activity to spot leads with the most potential</li>
  <li>Notify sales teams when someone’s engagement hits a key level</li>
  <li>Watch unsubscribe and complaint trends to keep your list healthy</li>
  <li>Run re-engagement campaigns to win back inactive subscribers</li>
  <li>Track who’s forwarding or sharing emails to find your biggest advocates</li>
  <li>Tie email performance into your broader lead scoring system</li>
</ul>

          </div>
        </li>
      </ul>
      <div className="my-6 md:my-12 px-4 flex justify-center">
  <div className="w-full max-w-4xl overflow-hidden rounded-lg ">
    <img
      src="https://www.deskera.com/blog/content/images/2021/05/automation.jpg"
      alt="CRM Process Diagram"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
</div>
    </div>
    
  </div>

  {/* Integration Capabilities: CRM in a B2B Tech Stack */}
  <div id="integration" className="py-2">
  <h2 className="text-4xl font-semibold text-gray-900 mb-4">Integration Platform: Connecting Your B2B Tech Stack</h2>
  <p className="text-gray-800 text-base mb-6">
    Modern integration platforms serve as the central hub connecting various business systems.
  </p>
  
  {/* Card Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {/* Cloud Services Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#000e54] px-4 py-3">
        <h3 className="text-xl font-semibold text-white">1. Cloud Services</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Web Services</p>
          <p className="text-gray-600">RESTful APIs and web-based integrations</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">SaaS Applications</p>
          <p className="text-gray-600">Connect with subscription-based software platforms</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Mobile Apps</p>
          <p className="text-gray-600">Synchronize data with field-based applications</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Public Cloud</p>
          <p className="text-gray-600">Leverage AWS, Azure, or Google Cloud resources</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Private Cloud</p>
          <p className="text-gray-600">Connect with secure dedicated environments</p>
        </div>
      </div>
    </div>

    {/* On-Premises Systems Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">2. On-Premises Systems</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">EDI Systems</p>
          <p className="text-gray-600">Electronic data interchange with customers and suppliers</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">B2B Databases</p>
          <p className="text-gray-600">Manage partner and customer relationship data</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Internal Databases</p>
          <p className="text-gray-600">Connect with core operational systems</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Enterprise Applications</p>
          <p className="text-gray-600">Integrate with ERP and other critical systems</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Legacy Systems</p>
          <p className="text-gray-600">Bridge connections with established technologies</p>
        </div>
      </div>
    </div>

    {/* Custom Development Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">3. Custom Development</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Custom Applications</p>
          <p className="text-gray-600">Integrate with proprietary business solutions</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Microservices</p>
          <p className="text-gray-600">Connect with modular application components</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">API Gateways</p>
          <p className="text-gray-600">Manage authentication and traffic across systems</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Webhook Handlers</p>
          <p className="text-gray-600">Process real-time event notifications</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Data Transformation</p>
          <p className="text-gray-600">Convert between different formats</p>
        </div>
      </div>
    </div>

    {/* Security Infrastructure Card */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-red-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">4. Security Infrastructure</h3>
      </div>
      <div className="p-5">
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Firewalls</p>
          <p className="text-gray-600">Secure traffic between cloud and on-premises systems</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Identity Management</p>
          <p className="text-gray-600">Control access across integrated platforms</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Data Encryption</p>
          <p className="text-gray-600">Protect sensitive information during transfers</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Compliance Monitoring</p>
          <p className="text-gray-600">Ensure regulatory requirements are met</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Audit Logging</p>
          <p className="text-gray-600">Track system interactions for security purposes</p>
        </div>
      </div>
    </div>

    {/* Integration Capabilities Card - Full Width */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2">
      <div className="bg-yellow-600 px-4 py-3">
        <h3 className="text-xl font-semibold text-white">5. Integration Capabilities</h3>
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-3 pb-3 border-b border-gray-200 md:border-r md:pr-4">
          <p className="font-semibold text-gray-800">Centralized Management</p>
          <p className="text-gray-600">Control all connections from one platform</p>
        </div>
        <div className="mb-3 pb-3 border-b border-gray-200">
          <p className="font-semibold text-gray-800">Real-time Data Synchronization</p>
          <p className="text-gray-600">Keep systems updated automatically</p>
        </div>
        <div className="mb-3 md:border-r md:pr-4">
          <p className="font-semibold text-gray-800">Workflow Automation</p>
          <p className="text-gray-600">Trigger actions across multiple systems</p>
        </div>
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Error Handling & Scalability</p>
          <p className="text-gray-600">Manage failures and support growing requirements</p>
        </div>
      </div>
    </div>
  </div>
  
 

    <div className="my-12 flex justify-center">
        <img 
          src="https://www.codelessplatforms.com/wp-content/uploads/2022/11/What-is-system-integration.png" 
          alt="CRM Process Diagram" 
          className="w-full max-w-4xl rounded-lg " 
        />
      </div>
  </div>



  {/* How Compare Bazaar Can Use CRM for Growth */}
  <div id="case-studies" className="py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">How Compare Bazaar Can Use CRM for Growth</h2>
    <p className="text-gray-800 text-base mb-10 text-center max-w-3xl mx-auto">
  With the right CRM system in place, Compare Bazaar can run more smoothly, connect better with customers, and grow steadily across all its comparison services.
</p>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-base">Customer Insights & Personalization</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Create detailed customer profiles with preference and comparison history</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Develop targeted content recommendations based on previous comparisons</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Generate detailed reports on comparison trends and customer preferences</p>
          </li>
        </ul>
      </div>


      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-base">Marketing Optimization</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Improve conversion rates with personalized email campaigns targeted by industry</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800 text-base">Optimize marketing ROI with data-driven strategies and attribution modeling</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="tex-gray-800 text-base">Build segmented nurturing campaigns for different comparison verticals</p>
          </li>
        </ul>
      </div>

  
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Sales Automation</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Automate lead generation and follow-ups across comparison categories</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Develop automated cross-selling between complementary service categories</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Implement referral programs with tracking and reward automation</p>
          </li>
        </ul>
      </div>

    
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Relationship Management</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Strengthen customer relationships for long-term success and repeat business</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Track provider relationships and performance metrics in a centralized system</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Streamline provider onboarding and relationship management</p>
          </li>
        </ul>
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-yellow-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Data Analytics & Reporting</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Track user behavior across comparison journeys for insights</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Generate real-time performance dashboards for all categories</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Identify most profitable comparison verticals and customer segments</p>
          </li>
        </ul>
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Operational Efficiency</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Automate routine customer service inquiries with CRM-powered chatbots</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Centralize all customer interactions across channels in one platform</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <p className="text-gray-800  text-base">Reduce manual data entry with automated data capture from comparison activities</p>
          </li>
        </ul>
      </div>
    </div>


    <div className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-6xl mx-auto border border-gray-200  text-base">
      <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center  text-base">Strategic CRM Implementation Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-3  text-base">Customer-Centric Advantages</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>360° customer view across all comparison activities</li>
            <li>Personalized recommendations increasing engagement by 40-60%</li>
            <li>Faster response times to customer inquiries</li>
            <li>Consistent experience across web and mobile platforms</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-700 mb-3">Business Growth Impact</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>30-50% improvement in lead conversion rates</li>
            <li>20-35% reduction in customer acquisition costs</li>
            <li>15-25% increase in customer lifetime value</li>
            <li>Data-driven decision making for category expansion</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-white p-5 rounded-lg shadow-inner border border-gray-200">
        <p className="text-gray-700 text-center italic">
          "A well-implemented CRM system can become Compare Bazaar's competitive advantage, transforming how customers discover and compare services while delivering measurable business growth across all verticals."
        </p>
      </div>
    </div>
  </div>
</div>

  {/* Conclusion: Why B2B Companies Need CRM */}
  <div id="conclusion" className="">
    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Conclusion: Why B2B Companies Need CRM</h2>
    <p className="text-gray-700 text-base mb-6 text-base">
      A well-implemented CRM is the backbone of B2B marketing success.
    </p>
    <div className=" rounded-lg  p-6 mb-8">
    <ul className="space-y-3">
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Reach out to leads in a personal way using smart automation that helps build real connections</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Make your sales process smoother and close more deals with efficient workflows</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Build stronger customer bonds and keep them coming back with regular, thoughtful communication</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Send automated emails triggered by user behavior to guide leads along the journey</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Cut down on repetitive tasks by 23% using automation to handle admin work</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Help your team get more done—boosting productivity by 34% with easier access to shared info</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Keep your data clean and reliable by removing isolated information systems</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Improve sales by 29% with smarter lead scoring and prioritization techniques</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Make customers happier—boost satisfaction by 35% with quicker, better service</p>
  </li>
  <li className="flex items-start">
    <span className="text-blue-500 mr-2">•</span>
    <p className="text-gray-800 text-base">Support better business decisions with in-depth analytics and insights</p>
  </li>
</ul>

<p className="mt-6 text-gray-800 text-base">
  A well-chosen CRM can help Compare Bazaar grow faster, work more efficiently, and thrive in the B2B space. Most companies see a return on their CRM investment in about 13 months—and top performers often see results in just 5 to 8 months.
</p>

    </div>
  </div>

  {/* Implementation Process */}
  <div id="implementation" className="">
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">Implementation Process</h2>
    <p className="text-gray-800 text-base mb-6 text-base">
      Implementing a CRM system involves planning, customization, data migration, and training. A well-executed implementation ensures that the CRM system meets your business needs and delivers the expected ROI.
    </p>
    <div className="bg-white rounded-lg  p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-base">CRM Implementation Steps</h3>
      <ol className="space-y-4">
        <li className="flex items-start">
          <span className="font-semibold mr-2">1.</span>
          <div>
            <p className="font-semibold text-base">Define Objectives & Requirements</p>
            <p className="text-gray-800 text-base">Clearly identify what you want to achieve with your CRM system.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">2.</span>
          <div>
            <p className="font-semibold text-base">Select the Right CRM Solution</p>
            <p className="text-gray-800 text-base">Based on your requirements, choose a CRM that fits your business needs.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">3.</span>
          <div>
            <p className="font-semibold text-base">Plan Data Migration</p>
            <p className="text-gray-800 text-base">Prepare your existing data for migration to the new system.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">4.</span>
          <div>
            <p className="font-semibold text-base">Customize & Configure</p>
            <p className="text-gray-800 text-base">Tailor the CRM to match your business processes and workflows.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">5.</span>
          <div>
            <p className="font-semibold text-base">Test the System</p>
            <p className="text-gray-800 text-base">Thoroughly test all features and functionalities before full deployment.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">6.</span>
          <div>
            <p className="font-semibold text-base">Train Users</p>
            <p className="text-gray-800 text-base">Provide comprehensive training to ensure effective adoption.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-semibold mr-2">7.</span>
          <div>
            <p className="font-semibold text-base">Go Live & Monitor</p>
            <p className="text-gray-800 text-base">Launch the system and continuously monitor its performance.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
{/* Implementation Process - Horizontal Visual */}
<div id="implementation-visual" className="py-2 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-base">
    <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10 text-base">CRM Implementation Journey</h3>
    
    <div className="relative">
      {/* Progress line */}
      <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 transform -translate-y-1/2"></div>
      
      {/* Parent container with responsive flex wrap */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-4 md:gap-1 lg:gap-2">
  {/* Step 1 - Define Objectives */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Define Objectives</p>
  </div>

  {/* Step 2 - Select CRM */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Select CRM</p>
  </div>

  {/* Step 3 - Data Migration */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Data Migration</p>
  </div>

  {/* Step 4 - Customize */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Customize</p>
  </div>

  {/* Step 5 - Test System */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Test System</p>
  </div>

  {/* Step 6 - Train Users */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Train Users</p>
  </div>

  {/* Step 7 - Go Live */}
  <div className="flex flex-col items-center w-[45%] sm:w-[30%] md:w-full z-10 mb-4 md:mb-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000e54] flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    </div>
    <p className="text-center font-semibold text-gray-900 text-sm sm:text-base">Go Live</p>
  </div>
</div>
    </div>

    {/* Detailed Steps Below */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Planning Phase</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Stakeholder interviews</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Requirement documentation</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Success metrics definition</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Setup Phase</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>System configuration</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Data cleaning & migration</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Custom field creation</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Testing Phase</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>User acceptance testing</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Workflow validation</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Performance testing</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h4 className="font-semibold text-base text-[#000e54] mb-3">Deployment</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Phased rollout strategy</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Ongoing support plan</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Continuous improvement</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
 
  <CRMComparison/>
   {/* What Are Features to Look for in a CRM? */}
   <div id="features" className="bg-white rounded-lg  p-6 mb-8 text-base">
  <h3 className="text-xl font-semibold mb-4 text-base">What Are Features to Look for in a CRM?</h3>
  <p className="text-gray-800 mb-6 text-base">
  CRM tools come in all shapes and sizes—from simple solutions for managing leads and customer relationships to advanced platforms with e-commerce support and deep analytics. Here are some key features to keep an eye out for.
</p>

  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Sales Tools</h4>
    </div>
    <p className="text-gray-800">
  Your CRM should help you manage both leads and deals, making it easier to track your pipeline and guide prospects through the sales process. It should allow you to score and qualify leads, reach out through phone or email, and close deals with ease. Plus, you’ll need tools to plan, track, and measure sales campaigns. These features are essential for streamlining and improving your sales efforts.
</p>

  </div>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Marketing Tools</h4>
    </div>
    <p className="text-gray-600">
  Today’s CRMs come with powerful tools to create, run, and track marketing campaigns. They often include built-in email features and other communication options, or allow easy integration with third-party services. Many CRMs also offer social media capabilities, like tracking brand mentions on platforms like Instagram. Having marketing tools within your CRM helps align your marketing strategies with your sales goals.
</p>

  </div>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Customer Service Tools</h4>
    </div>
    <p className="text-gray-600">
  Since the main goal of CRM software is to manage customer relationships, your CRM should make it easy to communicate with clients and handle support requests. Your customer service team can use the CRM to manage tickets, track open cases, monitor satisfaction, and collaborate with other teams when issues come up. To keep building strong relationships, you can set up reminders for important dates, like a customer’s anniversary with your business, and automatically send a thank-you email for their ongoing partnership.
</p>

  </div>
  
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Reporting Tools</h4>
    </div>
    <p className="text-gray-600">
  CRM reports provide valuable insights into how your sales and marketing efforts are performing, such as the number of prospects or sales within a specific period, where leads are dropping off, and how many calls each sales rep has made. These reports help you make better decisions for your business, which is why having strong analytics in your CRM is essential.
</p>

  </div>
  
  <div>
    <div className="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000e54] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <h4 className="text-base font-semibold text-gray-900">Workflow Automation</h4>
    </div>
    <p className="text-gray-600">
  The best CRM systems automate actions based on workflows you set up. For instance, when a customer fills out a form, your CRM can automatically notify the right sales rep. This automation cuts down on time-consuming tasks like data entry and information sharing, freeing up your team to focus on making sales. It also reduces the risk of leads or customer complaints getting lost or overlooked.
</p>

  </div>
</div>
{/* cost */}
<div id="cost" className="p-6 mb-8">
  {/* New Cost Section */}
  <div className="p-6">
    <div className="flex items-start mb-4">
      <div className="mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gary-900 mb-2">How Much Would CRM Software Cost?</h3>
        <div className="flex justify-end mb-2">
          <span className="text-sm text-[#ff8633] font-semibold text-2xl font-semibold ">Powered by Compare-bazaar</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-800 mb-4 text-base">
  The cost of CRM software for your business depends on several factors, like how many users you have and what features you need. There are affordable or even free CRMs, which work well for small teams or microbusinesses and offer integration options if you need additional features. On the other hand, more advanced CRM platforms can be pricey but come with a wider range of features (both built-in and add-ons), offering greater flexibility and scalability as your business grows.
</p>

    
    <h4 className="text-base font-semobold text-gray-800 mb-2">Here's the general price range of CRM software:</h4>
    
    <ul className="space-y-3 mb-4">
  <li className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <span className="font-semibold text-gray-800 text-base">Affordable cloud-based CRMs</span> often have free versions for small teams (up to 10 users). Paid subscriptions usually start around $15 per user per month.
    </div>
  </li>
  <li className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <span className="font-semibold text-gray-800 text-base">Midrange cloud CRM options</span> usually range from $20 to $40 per user per month, catering to most small business needs. If lighter, budget-friendly solutions aren’t cutting it, this tier could offer a better fit.
    </div>
  </li>
  <li className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <span className="font-semibold text-gray-800 text-base">Enterprise-level CRMs</span> typically cost between $50 and $150 per user per month, offering higher customization, more features, and tailored support or training.
    </div>
  </li>
  <li className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <span className="font-semibold text-gray-800 text-base">Premium cloud CRM subscriptions</span> can exceed $250 per user per month, but they offer a broad range of features that most small and mid-sized businesses won’t require.
    </div>
  </li>
  <li className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <div>
      <span className="font-semibold text-gray-800 text-base">On-premises CRM software</span> can cost upwards of $900 per user per month. These systems provide more control but require a significant upfront investment and advanced technical skills to maintain.
    </div>
  </li>
</ul>

    
<p className="text-gray-800 mb-4 text-base">
  Most cloud-based CRM providers allow you to choose between monthly or annual billing, with discounts of up to 20% for paying annually. On the other hand, vendors offering on-premises CRMs—where the system is hosted on your own network—usually charge a one-time, flat fee per user.
</p>

    
<p className="text-gray-800 mb-4 text-base">
  Things get more complicated with add-ons, storage upgrades, implementation fees, and automatic updates. While one CRM may seem cheaper per user at first, when you factor in the necessary add-ons to get the features you need, it could end up being more expensive.
</p>

<p className="text-gray-800 mb-4 text-base">
  When choosing a CRM, aim to find a balance between your current business needs, future growth, and budget. Be sure to fully understand the pricing structure of the CRM you’re considering. Before committing, specifically ask about automatic upgrades, storage limits, and user restrictions to avoid surprises later on.
</p>

    
    <h4 className="text-base font-semibold text-gray-800 mb-2">Key CRM Data Points to Track:</h4>
    
    <div className="p-4 mb-4">
      <ul className="space-y-3">
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-gray-800 text-base">Cost per lead / customer acquisition cost:</span> This dollar figure tells you how much your business is spending in its marketing efforts to acquire each new lead.
          </div>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-blue-gray text-base">Sales conversion rate / close rate:</span> This percentage indicates how many of your leads and prospects become customers.
          </div>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-gray-800 text-gray">Renewal rate:</span> This number shows the percentage of your existing customers who renew their purchases or buy from you again.
          </div>
        </li>
        <li className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#000e54] mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div>
            <span className="font-semibold text-gray-800 text-gray">Customer lifetime value:</span> This figure estimates the revenue you can expect to generate from a customer over the length of your relationship.
          </div>
        </li>
      </ul>
    </div>
    
    <div className="flex justify-center mt-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#000e54]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <path d="M6 8h.01M6 12h.01"></path>
        <circle cx="14" cy="10" r="4"></circle>
        <path d="M14 6v8"></path>
        <path d="M10 10h8"></path>
      </svg>
    </div>
    
    <div className="text-center mt-2 text-[#000e54] font-semibold">
      Compare CRM options at Compare-bazaar
    </div>

    {/* Workflow Automation SVG */}
    <div className="flex justify-center mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
    <div className="text-center mt-2 text-[#000e54] font-semibold">
      Workflow Automation
    </div>
  </div>
</div>
{/* choose crm */}
<div id="Choose CRM" className="rounded-lg p-6 mb-8">
  <div className="p-6 rounded-lg ">
    <div className="flex items-start mb-4">
      <div className="mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#000e54] mb-2">How to Choose CRM Software</h3>
        <div className="flex justify-end mb-2">
          <span className="text-sm text-[#000e54] font-semibold">Powered by Compare-bazaar</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-800 mb-4 text-base">
  To choose the right CRM software, start by identifying your company’s needs. What goals do you want to achieve with the CRM, and which features are necessary to meet those goals? Next, determine your budget—how much can you spend on a monthly subscription for a cloud-based system or a one-time fee for an on-premises solution? Once you have a clear understanding of your required features and budget, do some research using buying guides like this one to find CRM systems that offer the right functionality at a price that fits your budget.
</p>

    
    <p className="text-gray-800 mb-4 text-base">
      There are, however, some other factors to keep in mind. compare-bazaar.com spoke to dozens of business owners and leaders about the criteria they prioritized when deciding which CRM to purchase for the first time or when switching CRMs.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      <div className="p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Usability
        </h4>
        <p className="text-gray-700">
  Robert Resz, owner of Rad Bronco Parts, shared that “ease of use” was a key factor when choosing a CRM. He wanted something that would improve their sales process without slowing down day-to-day work. In the end, he picked a system that helped his small team be more efficient and productive.
</p>

<p className="text-gray-700 mt-2">
  Zach Dannett, co-founder of Tumble, admitted that his team "rushed into picking a CRM without fully understanding our needs" and ended up with one that was too complicated for them. His advice? Choose a system your team will actually enjoy using day-to-day.
</p>

      </div>
      
      <div className="p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Integrations
        </h4>
        <p className="text-gray-700">
  Reade Taylor, CEO of Cyber Command, stressed how crucial it is for a CRM to integrate with tools like ConnectWise Manage and Office 365. "Look for a CRM that works with the tools you already use," he advised. "The more connected your tech stack, the better the customer experience."
</p>

<p className="text-gray-700 mt-2">
  Brad Smith, owner of Omni Home Ideas, also prioritized strong integration capabilities to ensure seamless compatibility with his project management and accounting tools.
</p>

      </div>
      
      <div className="p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Scalability
        </h4>
        <p className="text-gray-700">
  Brad Smith also emphasized the importance of scalability when selecting a CRM: "Don't just think about what your business needs now. Consider where you want to be in five years and choose a CRM that can scale and evolve as your business grows."
</p>

<p className="text-gray-700 mt-2">
  Angela Green Urbaczewski, owner of RevOppAI, echoed this sentiment, stating, "Free options can be a good starting point, but it’s important to ask—will the paid system best support your future needs?"
</p>

      </div>
      
      <div className="p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Customer Support & Training
        </h4>
        <p className="text-gray-800 text-base">
  Angela Green Urbaczewski emphasized the value of implementation support and customer service, advising, "If it's your first CRM setup, investing in strong onboarding assistance can accelerate your business growth far more effectively than scattered paid ads or generic marketing efforts."
</p>

<p className="text-gray-800 mt-2 text-base">
  Robert Resz stressed the importance of training: “Leverage implementation resources and available training to maximize your investment. A CRM is only as effective as your team’s ability to use it well.”
</p>

      </div>
    </div>
  </div>
</div>

 
  {/* methrlodgy */}
  <div id="methrlodgy" className="bg-white   p-6 mb-8">
  <div className=" p-6 ">
    <div className="flex items-start mb-4">
      <div className="mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-4xl font-semibold text-[#000e54] mb-2">Methodology</h3>
        <div className="flex justify-end mb-2">
          <span className="text-base text-[#000e54] font-xl">Powered by Compare-bazaar</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-800 mb-4 text-base">
  To determine the best CRM software available, our team of sales experts and software analysts started with an initial list of 65 platforms. After thorough evaluation, we narrowed the list down to 13 contenders for further investigation and ultimately selected 10 CRM programs as our top recommendations.
</p>

<p className="text-gray-800 mb-4 text-base">
  To refine our choices at each stage and identify the best options, we conducted vendor interviews, participated in product demos, and tested the software ourselves. We evaluated plan options, feature sets, and customization possibilities, while also considering add-on services, such as whether email marketing tools were part of the core system or only offered as an extra. In addition, we examined independent user reviews to compare real-world experiences with our own testing results.
</p>

<p className="text-gray-800 mb-4 text-base">
  In the end, our experts and analysts evaluated each CRM solution’s functionality across more than 30 factors. These factors were weighted according to their importance to business owners when selecting software and making purchasing decisions.
</p>

    
    <h4 className="text-base font-semibold text-[#000e54] mb-2">Key Evaluation Criteria:</h4>
    
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      <div className=" p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Pricing (30%)
        </h4>
        <p className="text-gray-800 text-base">
  Our experts and analysts carefully compared and contrasted each vendor’s plans, evaluating which packages provided the best value for your investment. We considered factors such as monthly subscription rates, per-user fees, costs for cloud-based versus on-premises systems, implementation fees, and additional expenses for add-ons.
</p>

      </div>
      
      <div className="text-base p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Features (25%)
        </h4>
        <p className="text-gray-700 text-base">
  We evaluated core CRM functions, including lead, contact, and campaign management, automated workflows, revenue tracking, and forecasting tools. Additionally, we assessed available integrations and awarded extra points for advanced features such as omnichannel communications, no-code customization, AI-powered tools, and customer self-service options.
</p>

      </div>
      
      <div className=" p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Ease of Use (25%)
        </h4>
        <p className="text-gray-700 text-base">
  We tested the software firsthand, evaluating each solution’s learning curve, ease of use, and customization options. We also considered the availability of user-friendly marketing features and whether the vendor offered a fully featured mobile app to manage customer relationships and sales tasks on the go.
</p>

      </div>
      
      <div className=" p-4 rounded-lg">
        <h4 className="text-base font-semibold text-[#000e54] mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Customer Service (15%)
        </h4>
        <p className="text-gray-700 text-base ">
          We evaluated the range of each provider’s customer service options, including whether phone assistance was included with all package tiers. We also examined each vendor’s online resources for businesses interested in self-guided help.
        </p>
      </div>
    </div>
    
    <p className="text-gray-800 mt-6 text-base bg-white">
  After thorough evaluation, we identified CRM systems that not only earned our readers' trust but also excelled in addressing specific business needs. Each platform stood out for its unique strengths, whether it was optimizing certain workflows, supporting specialized industries, or enhancing customer relationships. These insights shaped the "Best for" use cases featured on this page, guiding businesses to the CRM that best fits their goals.
</p>

    
    <p className="text-gray-800 mt-4 text-base">
      To learn more about our methodology, see our full editorial process.
    </p>
    
  
    <div className="mt-8 flex justify-center">
    <div className="my-12 flex justify-center">
        <img 
          src="https://bigbang360.com/wp-content/uploads/2023/02/CRM-blog-12-Things-to-Consider-When-Choosing-a-CRM.png" 
          alt="CRM Process Diagram" 
          className="w-full max-w-4xl rounded-lg " 
        />
      </div>
    </div>
    
    <div className="text-center mt-4 text-[#000e54] text-base font-semobold">
      Compare CRM options at Compare-bazaar
    </div>
  </div>
</div>
{/* <WhitePaperForm/> */}
</div>
<div id="d-article">
        <Article
          title="Related Articles"
          items={articles}
          buttonText="View Post"
          buttonColor="bg-[#ff8633]"
       />
</div>
<div id="gpsfleet-faq" className="">
        <FAQ faqs={ crmFAQs}/>
</div>

<Advice/>

{/* <Feedback 
        title="What Our Customers Say"
        testimonials={crmTestimonials}
      /> */}
       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CRMForm/>
         </Modal>
    </>
  );
};

export default BestCRMSoftware;




