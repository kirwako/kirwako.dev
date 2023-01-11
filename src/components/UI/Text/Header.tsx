
const Header: React.FC<{
	  text: string;
	  className?: string;
}> = ({text, className = ""}) => {
	return (
		<h2 className={`text-6xl md:text-8xl ${className}`}>
			{text}
		</h2>
	);
}

export default Header;