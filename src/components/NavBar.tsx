"use client"
import { motion } from "motion/react"
import { List } from "@phosphor-icons/react/dist/ssr"

export const Navbar = () => {
	return (
		<motion.div
			animate={{
				opacity: [0, 1]
			}}
			transition={{
				duration: 0.7,
				delay: 0.15
			}}
			className="text-white p-4 lg:px-16 lg:py-8 flex justify-between items-center w-full">
			<h1 className="text-xxxl font-normal tracking-[16px] uppercase" >Zephyra</h1>
			<div>
				<List className="text-xxxl" />
			</div>
		</motion.div>
	)
}
