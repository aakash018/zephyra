"use client"
import { motion } from "motion/react";

export const HeroBottomSection = () => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex gap-8">

				<motion.div
					className="flex gap-8 flex-shrink-0 "
					animate={{
						x: ["0%", "-100%"], // Move from start to end
					}}
					transition={{
						duration: 60, // Duration of the animation
						ease: "linear", // Smooth infinite scroll
						repeat: Infinity, // Loop infinitely
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
					}}
				>

					<div className="flex gap-8 w-fit flex-shrink-0" >
						<TextHolder text="Find your peace" />
						<TextHolder text="Escape to Tranquility" />
						<TextHolder text="Breathe in Serenity" />
						<TextHolder text="Relax, Restore, Repeat" />
					</div>

				</motion.div>
			</div>
			<div className="w-full flex justify-center">
				<div className="h-[1px] w-screen bg-white lg:mt-4 mx-0 lg:mx-16" ></div>
			</div>
			<div className="flex justify-center py-4 lg:py-8 ">
				<div className="w-[300px] lg:w-[450px] text-lg lg:text-xxl text-center text-white">
					Embrace serenity, nurture harmony, create lasting balance
				</div>
			</div>
		</div>
	);
};

const TextHolder = ({ text }: { text: string }) => {
	return (
		<div className="flex-shrink-0 font-light lg:text-[150px] text-[100px] tracking-tighter text-white">{text} <span className="text-[46px] lg:text-[100px] ml-6">•</span></div>
	);
};
