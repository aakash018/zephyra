"use client"
import { motion } from "motion/react";

export const HeroBottomSection = () => {
	return (
		<div className="flex flex-col gap-1 relative">
			<div className="overflow-hidden">

				<motion.div
					animate={{
						y: ["100%", 0],
					}}
					transition={{
						duration: 0.3,
						delay: 0.8
					}}
					className="flex gap-8">


					<motion.div
						className="flex gap-8 flex-shrink-0 "
						animate={{
							x: ["0%", "-100%"], // Move from start to end
						}}
						transition={{
							duration: 60, // Duration of the animation
							ease: "linear", // Smooth infinite scroll
							repeat: Infinity, // Loop infinitely
							delay: 1.3
						}}
					>

						<div className="flex gap-8 w-fit flex-shrink-0" >
							<TextHolder text="Find your peace" />
							<TextHolder text="Escape to Tranquility" />
							<TextHolder text="Breathe in Serenity" />
							<TextHolder text="Relax, Restore, Repeat" />
						</div>

					</motion.div>

					<motion.div
						className="flex gap-4 flex-shrink-0"
						animate={{
							x: ["0%", "-100%"], // Move from start to end
						}}
						transition={{
							duration: 60, // Duration of the animation
							ease: "linear", // Smooth infinite scroll
							repeat: Infinity, // Loop infinitely
							delay: 1.3
						}}
					>

						<div className="flex gap-8 w-fit flex-shrink-0" >
							<TextHolder text="Find your peace" />
							<TextHolder text="Escape to Tranquility" />
							<TextHolder text="Breathe in Serenity" />
							<TextHolder text="Relax, Restore, Repeat" />
						</div>

					</motion.div>
				</motion.div>
			</div>
			<div className="w-full flex justify-center">
				<motion.div className="h-[2px] origin-left w-screen bg-white lg:mt-4 mx-0 lg:mx-16"
					animate={{
						scaleX: [0, 1],
						transition: {
							delay: 1.1,
							duration: 0.35
						}
					}}
				></motion.div>
			</div>
			<div className="flex justify-center py-4 lg:py-8 ">
				<motion.div
					animate={{
						y: [25, 0],
						opacity: [0, 1]
					}}
					transition={{
						delay: 1.45,
						duration: 0.25
					}}
					className="w-[300px] lg:w-[450px] text-lg lg:text-xxl text-center text-white">
					Embrace serenity, nurture harmony, create lasting balance
				</motion.div>
			</div>
		</div>
	);
};

const TextHolder = ({ text }: { text: string }) => {
	return (
		<div className="flex-shrink-0 font-light lg:text-[150px] text-[100px] tracking-tighter text-white">{text} <span className="text-[46px] lg:text-[100px] ml-6">•</span></div>
	);
};
