"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Museum() {
  const workItems = [
    {
      id: 1,
      title: "Museum Piece 01",
      image: "/My_Museum_01.webp",
      description: "A showcase of creative exploration and design thinking"
    },
    {
      id: 2,
      title: "Museum Piece 02", 
      image: "/My_Museum_02.webp",
      description: "Innovation meets artistry in this curated piece"
    },
    {
      id: 3,
      title: "Museum Piece 03",
      image: "/My_Museum_03.webp", 
      description: "A blend of technology and creative vision"
    },
    {
      id: 4,
      title: "Museum Piece 04",
      image: "/My_Museum_04.webp", 
      description: "Contemporary design with thoughtful execution"
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#fefefe] text-black px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28"
      style={{backgroundColor: '#fefefe'}}
    >
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center text-sm sm:text-base text-gray-600">
            <Link 
              href="/"
              className="hover:text-[#0015ff] transition-colors duration-200 underline"
            >
              Home
            </Link>
            <svg 
              className="mx-2 w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black font-medium">Museum</span>
          </div>
        </motion.nav>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0015ff] mb-4">
            My Museum
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of my work and creative explorations
          </p>
        </motion.div>

        {/* Work Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-12 mb-12"
        >
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer max-w-2xl mx-auto w-full"
            >
              <div className="bg-card rounded-lg shadow-md border overflow-hidden hover:shadow-lg transition-shadow duration-300" style={{boxShadow: 'var(--shadow)', borderColor: '#5548ff'}}>
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.main>
  );
}