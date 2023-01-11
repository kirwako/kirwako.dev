import { Link } from "react-router-dom";
import { NavbarContent } from "../../content/Navbar";

const NavLinks:React.FC = () => {
	return (
		<div className="flex gap-10">
			<NavLink to="#" label={NavbarContent.about}/>
			<NavLink to="#" label={NavbarContent.blog}/>
			<NavLink to="#" label={NavbarContent.portfolio}/>
			<NavLink to="#" label={NavbarContent.contact}/>
		</div>
	);
};

export default NavLinks;

const NavLink: React.FC<{
	to: string;
	label: string;
}> = ({ to, label }) => {
	return (
		<Link to={to} className="text-xl hover:text-pink">
			{label}
		</Link>
	);
};