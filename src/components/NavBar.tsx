import { List } from "@phosphor-icons/react/dist/ssr"

export const Navbar = () => {
	return (
		<div className="text-white p-4 lg:px-16 lg:py-8 flex justify-between items-center w-full">
			<h1 className="text-xxxl font-bold tracking-[16px] uppercase" >Zephyra</h1>
			<div>
				<List className="text-xxxl" />
			</div>
		</div>
	)
}
