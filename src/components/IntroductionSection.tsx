import { ImageHolder } from "./ImageHolders"
import { OnViewAppearText } from "./OnViewAppearText"

export const IntroductionSection = () => {
	return (

		<div>
			<div className="flex mb-24  lg:mb-48 justify-end">
				<ImageHolder imageLoc="/resort4.jpg" rootClassName="w-[1200px] lg:h-[700px] h-[400px] mt-[100px]" />
			</div>
			<div className="text-primary-fg lg:flex justify-between" >
				<h2 className="text-[20px] lg:text-xxl mb-16">
					<OnViewAppearText>
						Introduction
					</OnViewAppearText>
				</h2>
				<div className="text-xxl lg:text-[42px] leading-tight lg:w-[1200px]">
					<div className="lg:w-[80%] font-light break-all ">
						<OnViewAppearText  >
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Welcome to a realm of serenity and
						</OnViewAppearText>
						<OnViewAppearText  >
							renewal with ZEPHYRA, where <span className="text-primary-hl" > nature elegance</span>.
						</OnViewAppearText>
						<OnViewAppearText  >
							<span className="text-primary-hl" >meets unparalleled comfort</span> Discover our
						</OnViewAppearText>
						<OnViewAppearText  >
							luxurious eco-resorts and retreats, thoughtfull
						</OnViewAppearText>
						<OnViewAppearText  >
							crafted in harmony with the world’s most
						</OnViewAppearText>
						<OnViewAppearText  >
							stunning and tranquil landscapes.
						</OnViewAppearText>
					</div>
					<p className="mt-16 text-xl lg:text-xxl lg:w-[40%] lg:mt-28">
						<OnViewAppearText>
							At ZEPHYRA, we embrace a Holistic
						</OnViewAppearText>
						<OnViewAppearText>Harmony approach, focusing on</OnViewAppearText>
						<OnViewAppearText>mindfulness, physical vitality, and</OnViewAppearText>
						<OnViewAppearText>sustainability to foster balance and</OnViewAppearText>
						<OnViewAppearText>connection in every aspect of your life.</OnViewAppearText>

					</p>
				</div>
			</div>
		</div>
	)
}
