
const SubHeader: React.FC<{
	text: string;
	className?: string;
}> = ({text, className = ""}) => {
  return (
	  <h3 className={`text-2xl md:text-4xl ${className}`}>
		  {text}
	  </h3>
  );
}

export default SubHeader;