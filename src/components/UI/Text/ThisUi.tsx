import Header from "./Header";
import { thisContent } from "../../../content/this";

const ThisUi = () => {
	return <Header text={thisContent} className="!text-pink" />;
};

export default ThisUi;
