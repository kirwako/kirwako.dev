import { HomeContent } from "../../../content/Home";
import Layout from "../../Layout/Layout";
import NavBar from "../../NavBar/NavBar";
import ScrollIcon from "../../UI/Scroll/ScrollIcon";
import Header from "../../UI/Text/Header";
import SubHeader from "../../UI/Text/SubHeader";
import ThisUi from "../../UI/Text/ThisUi";

const WhatIdoSection: React.FC = () => {
	return (
		<div className="bg-purple">
			<Layout className="">
				<Header text={HomeContent.whatIdoSection.header} className="text-white" />
				<ThisUi />
				<Header text={HomeContent.whatIdoSection.what} className="text-3xl md:text-7xl text-white" />
				<Header text={HomeContent.whatIdoSection.what2} className="text-3xl md:text-7xl text-white" />
				<ScrollIcon isWhite={true} className="mt-10" />
			</Layout>
		</div>
	);
};

export default WhatIdoSection;
