"use client"
import { useScroll, useTransform, motion } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

interface Props {
	rootClassName?: string,
	imageClassName?: string,
	imageLoc: string,
	width?: number,
	height?: number
}

export const ImageHolder = ({ rootClassName, imageClassName, imageLoc, width, height }: Props) => {

	const divRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: divRef,
		offset: ["start end", "end start"]
	})

	const transformY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"])

	return (
		<div className={`overflow-hidden ${rootClassName}`} ref={divRef}>
			<motion.div
				style={{
					y: transformY
				}}

				className="w-full h-full">
				<Image src={imageLoc} className={`${imageClassName} scale-[1.2] object-cover w-full h-full`} width={width ? width : 1000} height={height ?? 800} alt="resort-1" />
			</motion.div>
		</div>
	)
}
