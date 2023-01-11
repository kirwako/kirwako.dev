import { FooterContent } from "../../content/Footer";

const Footer:React.FC = () => {
	return (
		<div className="bg-purple py-5 absolute bottom-0 left-0 w-full">
			<div className="container">
				<h2 className="text-2xl text-center text-white">{FooterContent.copy}</h2>
			</div>
		</div>
	);
};

export default Footer;