import { useRef } from "react"
import { BliendersLayer } from "./BlindersLayer"
import { HeroBottomSection } from "./HeroBottomSection"
import { Navbar } from "./NavBar"

export const HeroSection = () => {
	const videoRef = useRef<HTMLDivElement | null>(null)
	return (

		<div className={"relative w-screen h-screen lg:-mx-16 -mx-8"} ref={videoRef}>
			<div className="absolute flex flex-col overflow-x-hidden justify-between h-full w-full py-2 z-10">
				<Navbar />
				<HeroBottomSection />
			</div>
			<div className="absolute w-full h-full bg-[#00000070] " ></div>
			<BliendersLayer containerTargretRef={videoRef} />
			<video className="w-full h-full object-cover" autoPlay muted loop>
				<source src="/beach4.mp4" type="video/mp4" className="object-cover" />
			</video>
		</div>
	)
}
