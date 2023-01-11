import { HomeContent } from "../../../content/Home";
import Layout from "../../Layout/Layout";
import NavBar from "../../NavBar/NavBar";
import ScrollIcon from "../../UI/Scroll/ScrollIcon";
import Header from "../../UI/Text/Header";
import SubHeader from "../../UI/Text/SubHeader";
import ThisUi from "../../UI/Text/ThisUi";

const NameSection: React.FC = () => {
	return (
		<>
			{/* <NavBar /> */}
			<Layout>
				<Header text={HomeContent.nameSection.header} />
				<Header text={HomeContent.nameSection.subHeader} />
				<ThisUi />
				<Header text={HomeContent.nameSection.name} />
				<SubHeader text={HomeContent.nameSection.aka} />
				<ScrollIcon />
			</Layout>
		</>
	);
};

export default NameSection;
