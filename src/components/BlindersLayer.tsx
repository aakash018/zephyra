"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react";

const generateGradient = (progress: number) => {
	let gradientStops = [];
	const baseStep = 3.33; // Base width of each stripe

	for (let i = 0; i < 30; i++) { // Generate 30 stops
		const expansionFactor = (i + 1) / 30; // Gradually increases with i
		const dynamicExpansion = progress * expansionFactor * 10; // Adjust growth rate
		const startBlack = i * baseStep;
		const endBlack = startBlack + baseStep - progress * dynamicExpansion;
		const startWhite = endBlack;
		const endWhite = startWhite + progress * dynamicExpansion;

		// Add Black Stop
		if (startBlack < 100) {
			gradientStops.push(`rgba(0,0,0,1) ${startBlack.toFixed(2)}% ${endBlack.toFixed(2)}%`);
		}

		// Add White Stop
		if (startWhite < 100) {
			gradientStops.push(`rgba(255,255,255,0) ${startWhite.toFixed(2)}% ${endWhite.toFixed(2)}%`);
		}
	}

	const final_grd = `linear-gradient(0deg, ${gradientStops.join(', ')})`;
	return final_grd
};

interface Props {
	containerTargretRef: React.RefObject<HTMLDivElement | null>
	className?: string
}

export const BliendersLayer = ({ containerTargretRef, className }: Props) => {
	console.log(containerTargretRef)
	const { scrollYProgress } = useScroll({
		target: containerTargretRef,
		offset: ["0.9 1", "0.5 0"],
		layoutEffect: false
	}); // Scroll progress between 0 and 1

	const gradient = useTransform(scrollYProgress, [0, 1], [
		generateGradient(1),  // Initial gradient (fully striped)
		generateGradient(0),  // Final gradient (almost white)
	]);

	const gradient_opacity = useTransform(scrollYProgress, [1, 0.5, 0.2, 0], [1, 1, 0, 0]);

	return (

		<motion.div className={`absolute w-full h-full bg-primary-bg ${className}`} style={
			{
				maskImage: gradient,
				opacity: gradient_opacity
			}
		} >Hello World</motion.div>
	)
}
