import { Player } from "@lottiefiles/react-lottie-player";

const ScrollIcon: React.FC<{
	isWhite?: boolean;
	className?: string;
}> = ({
	isWhite = false,
	className = "",
}) => {
	return (
		<div className={`mt-6 ${className}`}>
			<Player
				autoplay
				loop
				src={isWhite ? "/lottie/scroll-white.json" : "/lottie/scroll-black.json"}
				className="h-10 w-10"
			>
			</Player>
		</div>
	);
};

export default ScrollIcon;
