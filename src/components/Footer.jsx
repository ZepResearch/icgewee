"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Send, ArrowUp, Mail, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative overflow-hidden bg-linear-to-t from-[#1a1333]/90 to-transparent text-white py-16">
      {/* Contact Cards */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} className="bg-[#2a2344] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium mb-1">E-mail</h3>
                <p className="text-[#8a6fff]">sales@conf.com</p>
              </div>
              <Mail className="text-[#8a6fff] w-6 h-6" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-[#2a2344] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium mb-1">Telegram</h3>
                <p className="text-[#8a6fff]">@evgendja</p>
              </div>
              <Send className="text-[#8a6fff] w-6 h-6" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-[#2a2344] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium mb-1">MAC Telegram Bot</h3>
                <p className="text-[#8a6fff]">@MAC_Aff_conference_bot</p>
              </div>
              <MessageSquare className="text-[#8a6fff] w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute left-10 bottom-20 w-16 h-16 opacity-80"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L100 50L0 100V0Z" fill="#c9ff00" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-0 top-40 w-40 h-40 opacity-70"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L100 50L0 100V0Z" fill="#8a6fff" transform="rotate(180 50 50)" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg" width={150} height={50} alt="Zepresesarcg" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg">
            zepresearvgch conferences is a global affiliate marketing brand for marketing professionals that allows
            anyone to create, share, find and attend events that fuel their passions and enrich their lives.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div whileHover={{ color: "#8a6fff" }}>
            <Link href="#" className="text-[#8a6fff] hover:underline">
              FAQ
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "#8a6fff" }}>
            <Link href="#" className="hover:text-[#8a6fff] hover:underline">
              REFUND POLICY
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "#8a6fff" }}>
            <Link href="#" className="hover:text-[#8a6fff] hover:underline">
              TERMS AND CONDITIONS
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "#8a6fff" }}>
            <Link href="#" className="hover:text-[#8a6fff] hover:underline">
              COMMERCEGATE
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

