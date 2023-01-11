import OutsideLink from "../../../UI/Link/OutsideLink";

const MyWorkCard: React.FC<{
	work: IWork;
}> = ({ work }) => {
	return (
		<div className="basis-full md:basis-auto">
			<div className="site-card hidden md:block">
				<OutsideLink to={work.website} className="rounded-[6px]">
					<div className="card-toolbar">
						<span className="card-toolbar-button"></span>
					</div>
					<img
						loading="lazy"
						src={work.img}
						alt={work.name}
						className="rounded-[6px]"
					/>
				</OutsideLink>
			</div>
			<div className="mt-6">
				<OutsideLink to={work.website} className="rounded-[6px]">
					<img src={work.logo} alt="" className="m-auto mb-2 block md:hidden" />
					<h4 className="text-white hidden md:block">{work.name}</h4>
					<p className="text-white text-xs">{work.title}</p>
				</OutsideLink>
			</div>
		</div>
	);
};

export default MyWorkCard;
