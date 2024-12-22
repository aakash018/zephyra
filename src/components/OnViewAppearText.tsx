"use client"
import { motion } from "motion/react"
interface Props {
	children: React.ReactNode,
	disableOnPhone?: boolean
}
export const OnViewAppearText = ({ children, disableOnPhone = true }: Props) => {

	return (
		<span className={`overflow-hidden ${disableOnPhone ? "lg:block" : "block"}`}>

			<motion.span
				className={`lg:block ${disableOnPhone ? "lg:block" : "block"}`}
				initial={{
					y: "100%"
				}}
				whileInView={{
					y: 0,
					transition: {
						duration: 0.65
					}
				}}
				viewport={{ once: true }}
			>
				{children}
			</motion.span>
		</span>
	)
}
