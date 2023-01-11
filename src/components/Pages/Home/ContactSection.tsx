import { HomeContent } from "../../../content/Home";
import Footer from "../../Footer/Footer";
import Layout from "../../Layout/Layout";
import OutsideLink from "../../UI/Link/OutsideLink";
import Header from "../../UI/Text/Header";
import SubHeader from "../../UI/Text/SubHeader";
import ThisUi from "../../UI/Text/ThisUi";

const ContactSection: React.FC = () => {
	return (
		<Layout>
			<Header text={HomeContent.contactSection.header} />
			<ThisUi />
			<div className="flex flex-wrap justify-between md:justify-center md:gap-x-16 mt-6 gap-y-4">
				{HomeContent.contactSection.socialMedia.map(
					(socialMedia, index) => (
						<OutsideLink to={socialMedia.link} key={index} className="flex flex-col items-center gap-2 basis-1/3 md:basis-auto">
							{socialMedia.icon}
							<SubHeader className="!text-2xl" text={socialMedia.label} />
						</OutsideLink>
					)
				)}
			</div>
			{/* <Footer /> */}
		</Layout>
	);
};

export default ContactSection;
