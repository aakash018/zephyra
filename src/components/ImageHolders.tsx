"use client"
import { useScroll, useTransform, motion } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

interface Props {
	rootClassName?: string,
	imageClassName?: string,
	imageLoc: string
}

export const ImageHolder = ({ rootClassName, imageClassName, imageLoc }: Props) => {

	const divRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: divRef,
		offset: ["start end", "end start"]
	})

	const transformY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"])

	return (
		<div className={`overflow-hidden ${rootClassName}`} ref={divRef}>
			<motion.div
				style={{
					y: transformY
				}}

				className="w-full h-full">
				<Image src={imageLoc} className={`${imageClassName} scale-[1.2] object-cover w-full h-full`} width={1000} height={800} alt="resort-1" />
			</motion.div>
		</div>
	)
}
