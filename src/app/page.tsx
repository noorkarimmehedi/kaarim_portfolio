"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WaitlistForm from "@/components/waitlist-form";
import ScrambleHover from "@/components/scramble-hover";
import AnimatedText from "@/components/animated-text";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#fefefe] text-black px-4 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-6 md:pt-24 md:pb-6 lg:pt-28 lg:pb-6 font-normal text-[3.9vw] sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight sm:leading-tight text-center"
      style={{backgroundColor: '#fefefe'}}
    >
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
          {/* Main Title */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-full max-w-full md:max-w-md">
              <AnimatedText delay={0} duration={0.6}>
                <h1 className="mb-1 sm:mb-3 text-left">
                  <ScrambleHover
                    scrambleSpeed={30}
                    maxIterations={15}
                    useOriginalCharsOnly={true}
                    className="font-bold text-[#0015ff] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words inline-block"
                  >
                    Dear You,
                  </ScrambleHover>
                </h1>
              </AnimatedText>
              
              <AnimatedText delay={300} duration={0.6}>
                <div className="mb-0 text-left">
                  <ScrambleHover
                    scrambleSpeed={30}
                    maxIterations={15}
                    useOriginalCharsOnly={true}
                    className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl break-words inline-block"
                  >
                    I&apos;m Kaarim, a design engineer based in London. ✺&#xfe0e;
                  </ScrambleHover>
                </div>
              </AnimatedText>
            </div>
          </div>

          {/* Email Form */}
          <div className="w-full max-w-md -mt-2 md:-mt-6">
            <WaitlistForm />
            <div className="mt-4 text-left">
              <AnimatedText delay={600} duration={0.6}>
                <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl text-black">
                  You can reach out to me on <Link href="https://x.com/kaarimdotcom" target="_blank" rel="noopener noreferrer" className="underline transition-colors duration-200" style={{color: '#5548ff'}}>X/Twitter</Link> or see more of my work on <Link href="/museum" className="underline transition-colors duration-200" style={{color: '#5548ff'}}>My Museum</Link>.
                </p>
              </AnimatedText>
              <div className="mt-4">
                <AnimatedText delay={900} duration={0.6}>
                  <span className="block font-normal text-base sm:text-lg whitespace-nowrap">
                    <ScrambleHover
                      scrambleSpeed={30}
                      maxIterations={15}
                      useOriginalCharsOnly={true}
                      className="inline-block"
                    >
                      Kindest regards,
                    </ScrambleHover>
                  </span>
                </AnimatedText>
                <AnimatedText delay={1000} duration={0.6}>
                  <Image 
                    src="/imgi_2_imgi_11_image.webp"
                    alt="Noor signature"
                    width={48}
                    height={48}
                    className="w-12 h-auto mt-2 mb-1"
                  />
                </AnimatedText>
                <AnimatedText delay={1100} duration={0.6}>
                  <span className="block font-normal text-sm sm:text-base mt-1 whitespace-nowrap">
                    <ScrambleHover
                      scrambleSpeed={30}
                      maxIterations={15}
                      useOriginalCharsOnly={true}
                      className="inline-block"
                    >
                      Kaarim
                    </ScrambleHover>
                  </span>
                  <hr className="mt-2 border-t border-gray-300 w-[40px] sm:w-[45px]" />
                </AnimatedText>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <AnimatedText delay={1200} duration={0.6}>
            <div className="mt-2">
              <Link href="https://x.com/kaarimdotcom" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base opacity-50 hover:opacity-100 transition-opacity duration-200">
                X/Twitter
              </Link>
            </div>
          </AnimatedText>
        </div>
      </div>
    </motion.main>
  );
}
