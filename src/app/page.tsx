"use client"
import { HeroSection } from "@/components/HeroSectionVideo";
import { ImageHolder } from "@/components/ImageHolders";
import { ReactLenis } from 'lenis/react'
import { cancelFrame, frame, MotionValue } from "motion";
import { useEffect, useRef } from "react";


export default function Home() {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis root options={{ smoothWheel: true, syncTouch: true, }}>
      <div className="">
        <HeroSection />
        <div>
          <div className="flex mb-24  lg:mb-48 justify-end">
            <ImageHolder imageLoc="/resort4.jpg" rootClassName="w-[1200px] lg:h-[600px] h-[400px] mt-[200px]" />
          </div>
          <div className="text-primary-fg lg:flex justify-between" >
            <h2 className="text-xxl lg:text-xxl mb-16">Introduction</h2>
            <div className="text-xxxl lg:text-[42px] leading-tight lg:w-[1200px]">
              <p className="lg:w-[80%] font-light break-all ">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Welcome to a realm of serenity and renewal with ZEPHYRA, where <span className="text-primary-hl" > nature's elegance meets unparalleled comfort</span>. Discover our luxurious eco-resorts and retreats, thoughtfully crafted in harmony with the world’s most stunning and tranquil landscapes.
              </p>
              <p className="mt-16 text-xxl lg:w-[40%] lg:mt-28">
                At ZEPHYRA, we embrace a Holistic Harmony approach, focusing on mindfulness, physical vitality, and sustainability to foster balance and connection in every aspect of your life.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[2000px]" >
        </div>
      </div>
    </ReactLenis>
  );
}


