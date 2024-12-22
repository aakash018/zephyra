import { ImageHolder } from "./ImageHolders"
import { OnViewAppearText } from "./OnViewAppearText"

export const HealthSection = () => {
	return (
		<div className="bg-secondary-bg -mx-8 w-screen pb-24 lg:flex lg:pb-0">
			<ImageHolder imageLoc="/yoga.jpg" rootClassName="mb-24 lg:mb-0 lg:-mx-8 lg:w-[45%] lg:h-full h-[550px]" />
			<div className="px-8 lg:w-[50%] lg:flex items-center justify-center flex-col ">
				<div>
					<h2 className="text-[20px] text-primary-fg lg:text-xxl mb-16">
						<OnViewAppearText>
							Wellness Sanctuary
						</OnViewAppearText>
					</h2>
					<div className="text-xxl lg:text-[42px] leading-tight text-primary-fg">
						<OnViewAppearText><span className="text-primary-hl" > Mindful luxury, </span>sustainability</OnViewAppearText>
						<OnViewAppearText>and nature unite </OnViewAppearText>
						<OnViewAppearText>in harmony.</OnViewAppearText>
					</div>
					<div className="text-xl lg:text-xxl mt-8 text-primary-fg">
						<OnViewAppearText>At ZEPHYRA, we use the Integrative </OnViewAppearText>
						<OnViewAppearText>Wellness approach, that considers </OnViewAppearText>
						<OnViewAppearText>psychological, physical, and nutritional </OnViewAppearText>
						<OnViewAppearText>aspects of your life to improve overall </OnViewAppearText>
						<OnViewAppearText>well-being and balance.</OnViewAppearText>
					</div>
				</div>
			</div>
		</div>
	)
}
