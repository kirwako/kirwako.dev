import { HomeContent } from "../../../../content/Home";
import Layout from "../../../Layout/Layout";
import ScrollIcon from "../../../UI/Scroll/ScrollIcon";
import Header from "../../../UI/Text/Header";
import ThisUi from "../../../UI/Text/ThisUi";
import MyWorkCard from "./MyWorkCard";

const MyWorkSection: React.FC = () => {
	return (
		<Layout>
			<Header
				text={HomeContent.myWorkSection.header}
				className="text-white px-4 md:px-0"
			/>
			<ThisUi />
			<div className="flex justify-between flex-wrap md:flex-nowrap  md:gap-10 mt-6">
				{HomeContent.myWorkSection.myWork.map((work, index) => (
					<MyWorkCard key={index} work={work} />
				))}
			</div>
			<ScrollIcon isWhite={true} />
		</Layout>
	);
};

export default MyWorkSection;
