"use client"
import { BliendersImage } from "@/components/BlindersImage";
import { HealthSection } from "@/components/HealthSection";
import { HeroSection } from "@/components/HeroSectionVideo";
import { IntroductionSection } from "@/components/IntroductionSection";
import { LenisRef, ReactLenis } from 'lenis/react'
import { cancelFrame, frame } from "motion";
import Image from "next/image";
import { useEffect, useRef } from "react";


export default function Home() {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <ReactLenis root options={{ smoothWheel: true, syncTouch: true, }}>
      <div className="w-full flex flex-col gap-28">
        <HeroSection />
        <IntroductionSection />
        <HealthSection />
        <div className="h-[8000px] " ref={containerRef}>
          <div className="-mx-16 -mt-28 z-[-1] sticky top-0 ">
            <div className="absolute w-full h-full bg-[#00000050] " ></div>
            <BliendersImage containerTargretRef={containerRef} />
            <Image width={1920} height={1080} src="/insides1.jpg" className="object-center object-cover w-screen h-screen" alt="indides" />
          </div>
        </div>

        <div>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
        </div>
      </div>
    </ReactLenis>
  );
}


