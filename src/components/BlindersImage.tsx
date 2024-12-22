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
	className?: string,
}

export const BliendersImage = ({ containerTargretRef, className }: Props) => {
	console.log(containerTargretRef)
	const { scrollYProgress } = useScroll({
		target: containerTargretRef,
		offset: ["0 0", `1 0`],
		layoutEffect: false
	}); // Scroll progress between 0 and 1

	const gradient = useTransform(scrollYProgress, [0, 0.1], [
		generateGradient(0),  // Initial gradient (fully striped)
		generateGradient(1),  // Final gradient (almost white)
	]);

	const gradient_opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
	const gradient_scale = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1.11, 1.11]);

	const gradient2 = useTransform(scrollYProgress, [0.3, 0.4], [
		generateGradient(0),  // Initial gradient (fully striped)
		generateGradient(1),  // Final gradient (almost white)
	]);

	const gradient_opacity2 = useTransform(scrollYProgress, [0, 0.4, 0.45], [1, 1, 0]);
	const gradient_scale2 = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1.11, 1.11]);

	const gradient3 = useTransform(scrollYProgress, [0.60, 0.70], [
		generateGradient(0),  // Initial gradient (fully striped)
		generateGradient(1),  // Final gradient (almost white)
	]);

	const gradient_opacity3 = useTransform(scrollYProgress, [0, 0.7, 0.75], [1, 1, 0]);
	const gradient_scale3 = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 1.11, 1.11]);
	return (
		<>

			<motion.div className={`absolute w-full h-full ${className}`} style={
				{
					backgroundImage: `url("/insides4.jpg")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					maskImage: gradient3,
					opacity: gradient_opacity3,
					scale: gradient_scale3
				}
			} ></motion.div>
			<motion.div className={`absolute w-full h-full ${className}`} style={
				{
					backgroundImage: `url("/insides3.jpg")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					maskImage: gradient2,
					opacity: gradient_opacity2,
					scale: gradient_scale2
				}
			} ></motion.div>
			<motion.div className={`absolute w-full h-full ${className}`} style={
				{
					backgroundImage: `url("/insides2.jpg")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					maskImage: gradient,
					opacity: gradient_opacity,
					scale: gradient_scale
				}
			} ></motion.div>
		</>
	)
}
