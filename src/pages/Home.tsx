import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ContactSection from "../components/Pages/Home/ContactSection";
import MyWorkSection from "../components/Pages/Home/MyWorkSection/MyWorkSection";
import NameSection from "../components/Pages/Home/NameSection";
import UsingSection from "../components/Pages/Home/UsingSection";
import WhatIdoSection from "../components/Pages/Home/WhatIdoSection";
import Mobarmij from "../components/UI/Badge/Mobarmij";

const Home = () => {
	const parallaxClassName = "flex items-center justify-center";

	return (
		<>
			<Parallax pages={5}>
				{/* <ParallaxLayer
					sticky={{ start: 0.1, end: 3 }}
					className="flex justify-center items-start"
				>
					<Mobarmij />
				</ParallaxLayer> */}

				<ParallaxLayer
					speed={1}
					offset={0}
					className={`${parallaxClassName} relative`}
				>
					<NameSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.5}
					className={`${parallaxClassName} bg-purple`}
				>
					<WhatIdoSection />
				</ParallaxLayer>

				<ParallaxLayer
					speed={0.5}
					offset={2}
					className={`${parallaxClassName}`}
				>
					<UsingSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={3}
					speed={0.5}
					className={`${parallaxClassName} bg-purple`}
				>
					<MyWorkSection />
				</ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={0.5}
					className={`${parallaxClassName} relative`}
				>
					<ContactSection />
				</ParallaxLayer>
			</Parallax>
		</>
	);
};

export default Home;
