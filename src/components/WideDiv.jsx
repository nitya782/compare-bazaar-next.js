'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ArrowNavigation from './ArrowNavigation';

const WideDiv = () => {
  return (
    <div className="bg-white text-gray-800 py-20 font-sans">
      <div className="max-w-7xl mx-auto custom-padding-margin">
        <div className="grid px-10 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:px-4 custom-padding3 custom-padding-medium">
          
          {/* Compare Section */}
          <div className="mb-4 -mt-9 lg:pr-3">
            <div className="flex items-center">
              <div className="flex items-center -ml-3 object-contain transition-transform hover:scale-105"> 
                <Image 
                  src="/images/ICON2.png" 
                  alt="Icon 2" 
                  width={80} // Set appropriate width
                  height={60} // Set appropriate height
                  className="rounded-lg mt-8" 
                />
                <Image 
                  src="/images/icon1new.png" 
                  alt="Logo" 
                  width={200} 
                  height={80} 
                  className="object-contain transition-transform hover:scale-105 ml-2 mt-7 mb-3"
                />
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-6 -mt-1">
              Our mission is to help you take your team, your business, and your career to the next level.
            </p>
            <p className="text-sm text-gray-700">
              Whether you're here for product recommendations, research, or career advice, we're happy you're here!
            </p>
          </div>

          {/* What We Cover */}
          <div className="mb-6 lg:pl-6 custom-space">
            <h2 className="text-base font-semibold mb-7 font-serif text-[#ff8633]">What We Cover</h2>
            <ul className="list-none p-0">
              <li className="mb-2 text-sm"><Link href="/StartABusiness" className="link-style">Start a Business</Link></li>
              <li className="mb-2 text-sm"><Link href="/HumanResources" className="link-style">Human Resources</Link></li>
              <li className="mb-2 text-sm"><Link href="/Marketing-solutions" className="link-style">Marketing</Link></li>
              <li className="mb-2 text-sm"><Link href="/Technology" className="link-style">Technology</Link></li>
              <li className="mb-2 text-sm"><Link href="/BusinessPlanning" className="link-style">Business Planning</Link></li>
            </ul>
          </div>

          {/* Our Company */}
          <div className="mb-6 lg:pl-2">
            <h2 className="text-base font-semibold mb-7 font-serif text-[#ff8633]">Our Company</h2>
            <ul className="list-none p-0">
              <li className="mb-2 text-sm"><Link href="/Contact-us/About-us" className="link-style">About Us</Link></li>
              <li className="mb-2 text-sm"><Link href="/Contact-us/Careers" className="link-style">Careers</Link></li>
              <li className="mb-2 text-sm"><Link href="/Advertise" className="link-style">Advertise With Us</Link></li>
              <li className="mb-2 text-sm"><Link href="/EditorialProcess" className="link-style">Editorial Process</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-6 lg:pl-2">
            <h2 className="text-base font-semibold mb-7 font-serif text-[#ff8633]">Legal</h2>
            <ul className="list-none p-0">
              <li className="mb-2 text-sm"><Link href="/PrivacyPolicy" className="link-style">Privacy Policy</Link></li>
              <li className="mb-2 text-sm"><Link href="/DonotSellMyInfo" className="link-style">Do Not Sell/Share My Personal Information</Link></li>
              <li className="mb-2 text-sm"><Link href="/LimitTheUse" className="link-style">Limit Use of My Sensitive Info</Link></li>
              <li className="mb-2 text-sm"><Link href="/TermsOfUse" className="link-style">Terms of Use</Link></li>
              <li className="mb-2 text-sm"><Link href="/Accessibility" className="link-style">Accessibility</Link></li>
              <li className="mb-2 text-sm"><Link href="/CopyrightPolicy" className="link-style">Copyright Policy</Link></li>
              <li className="mb-2 text-sm"><Link href="/AdvertisingDisclosure" className="link-style">Advertising Disclosure</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:pl-2">
            <h2 className="text-base font-semibold mb-6 font-serif text-[#ff8633]">Social</h2>
            <ul className="list-none p-0">
              {[
                { icon: faFacebook, name: 'Facebook' },
                { icon: faInstagram, name: 'Instagram' },
                { icon: faLinkedin, name: 'LinkedIn' },
                { icon: faTwitter, name: 'X' },
              ].map(({ icon, name }) => (
                <li className="mb-2 text-sm" key={name}>
                  <a href="#" className="text-gray-700 no-underline flex items-center group">
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-3 rounded transition-colors duration-200 group-hover:bg-[#ff8633]">
                      <FontAwesomeIcon icon={icon} className="text-gray-600 transition-colors duration-200 group-hover:text-white" />
                    </div>
                    <span className="transition-all duration-200 group-hover:text-[#ff8633] group-hover:font-semibold">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .link-style {
          color: #4b5563;
          text-decoration: none;
          transition: all 0.2s;
        }
        .link-style:hover {
          color: #ff8633;
          font-weight: 600;
        }
        @media (min-width: 1022px) and (max-width: 1200px) {
          .custom-padding3 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        @media (min-width: 1024px) and (max-width: 1330px) {
          .custom-padding-medium {
            padding-left: 2.5rem !important;
            padding-right: 2.5rem !important;
          }
          .custom-space {
            margin-left: 2rem;
          }
        }
        @media (min-width: 1280px) and (max-width: 1330px) {
          .custom-padding-margin {
            margin-left: 0px;
            margin-right: 0px;
          }
        }
      `}</style>

      <ArrowNavigation />
    </div>
  );
};

export default WideDiv;
