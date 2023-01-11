import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
	return (
		<div className="container absolute top-0 border-b-2 border-grey">
			<div className="flex justify-between items-center py-6">
				<Link to={routes.home} >
					<LogoIcon />
				</Link>
				<NavLinks />
			</div>
		</div>
	);
}

export default NavBar;