import ContactSection from "../components/Pages/Home/ContactSection";
import MyWorkSection from "../components/Pages/Home/MyWorkSection/MyWorkSection";
import NameSection from "../components/Pages/Home/NameSection";
import UsingSection from "../components/Pages/Home/UsingSection";
import WhatIdoSection from "../components/Pages/Home/WhatIdoSection";

const Home = () => {
	return (
		<>
			<NameSection />
			<WhatIdoSection />
			<UsingSection />
			<MyWorkSection />
			<ContactSection />
		</>
	);
};

export default Home;
