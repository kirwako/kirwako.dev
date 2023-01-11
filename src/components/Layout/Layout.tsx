
const Layout: React.FC<{
	  children: React.ReactNode;
	  className?: string;
}> = ({ children, className = "" }) => {
	return (
		<div className={`container text-center flex flex-col gap-1 md:gap-2 ${className}`}>
			{children}
		</div>
	);
};

export default Layout;