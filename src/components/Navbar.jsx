'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GradientButton from '@/components/ui/GradientButton';
import Image from 'next/image';
import { Button } from './ui/button';
import { Home, Store } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 lg:px-10 text-white backdrop-blur-sm ",
        scrolled ? "py-3 backdrop-blur-lg bg-conference-dark/80" : "py-5 bg-conference-dark"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center">
             <Image src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726730807/uljufsgb1qdrmwxqri1s.png" width={60} height={60} alt="ZEP RESEARCH" />
              <div className="ml-2 flex flex-col">
                <span className="text-conference-yellow text-xl font-bold">ZEP</span>
                <span className="text-white text-xl font-bold -mt-2">RESEARCH</span>
              </div>
            </a>
          </motion.div>
          
          {/* DOTS TEAM Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center border border-white/20 rounded-lg px-3 py-1"
          >
            <span className="text-white text-sm font-bold">CONF LOGO</span>
          </motion.div>
          
          {/* Chat bubble icon */}
         
        </div>
        
        {/* Middle links - visible only on desktop */}
        <div className="hidden lg:flex items-center gap-6 border border-white/20 p-1 rounded-4xl    ">
        
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/committee"
            className="text-white px-4 py-2 rounded-full transition-colors"
          >
            
          COMMITTEE
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#afterparty"
            className="text-white px-4 py-2 rounded-full transition-colors"
          >
            SUBMISSION
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#afterparty"
            className="text-white px-4 py-2 rounded-full transition-colors"
          >
            
VENUE
          </motion.a> 
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#afterparty"
            className="text-white px-4 py-2 rounded-full transition-colors"
          >
            CONTACT
          </motion.a>
        </div>
        
        {/* Right buttons */}
        <div className="flex items-center gap-4">
          {/* <div className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full border border-white/20">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/en"
              className="px-2 py-1 text-white font-medium"
            >
              En
            </motion.a>
            <span className="text-white/40">|</span>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/ru"
              className="px-2 py-1 text-white/50 font-medium"
            >
              Ru
            </motion.a>
          </div> */}
          
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/sign-in"
            className="hidden md:flex border gap-2 border-white/20 rounded-full px-5 py-2 items-center text-white transition-colors hover:bg-white/10 hover:border-amber-300"
          >
            Exhibit & Sponsor
           <Store/>
          </motion.a>
          
          <Button
            className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-lime-500 giver hover:from-yellow-500 hover:to-lime-600"
          
          >
            BUY TICKET
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Button>
          
          {/* Mobile menu button - only shows on mobile */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;