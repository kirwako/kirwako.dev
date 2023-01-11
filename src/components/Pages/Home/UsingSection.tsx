import { HomeContent } from "../../../content/Home";
import Layout from "../../Layout/Layout";
import ScrollIcon from "../../UI/Scroll/ScrollIcon";
import Header from "../../UI/Text/Header";
import SubHeader from "../../UI/Text/SubHeader";
import ThisUi from "../../UI/Text/ThisUi";

const UsingSection: React.FC = () => {
	return (
		<Layout>
			<Header text={HomeContent.usingSection.header} />
			<ThisUi />
			<div className="flex justify-center flex-wrap gap-16 mt-6">
				{HomeContent.usingSection.tools.map((tool, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-2"
						>
							{tool.icon}
							<SubHeader
								text={tool.label}
								className=""
							/>
						</div>
					);
				})}
			</div>
			<ScrollIcon />
		</Layout>
	);
};

export default UsingSection;
