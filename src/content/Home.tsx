import { ReactComponent as ReactIcon } from "../assets/tools/react.svg"
import { ReactComponent as FigmaIcon } from "../assets/tools/figma.svg"
import { ReactComponent as NestIcon } from "../assets/tools/nest.svg"
import { ReactComponent as TypescriptIcon } from "../assets/tools/typescript.svg"
import { ReactComponent as IllustratorIcon } from "../assets/tools/illustrator.svg"

import { ReactComponent as BehanceIcon } from "../assets/socialMedia/behance.svg";
import { ReactComponent as EmailIcon } from "../assets/socialMedia/email.svg";
import { ReactComponent as GithubIcon } from "../assets/socialMedia/github.svg";
import { ReactComponent as InstagramIcon } from "../assets/socialMedia/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../assets/socialMedia/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../assets/socialMedia/twitter.svg";


export const HomeContent = {
	nameSection: {
		header: "Hi,",
		subHeader: "My name is",
		name: "Imran Baali",
		aka: "aka (kirwako)",
	},
	whatIdoSection: {
		header: "I do",
		what: "Fullstack development and",
		what2: "Graphic design",
	},
	usingSection: {
		header: "Using",
		tools: [
			{
				label: "React",
				icon: <ReactIcon /> as JSX.Element,
			},
			{
				label: "Figma",
				icon: <FigmaIcon /> as JSX.Element,
			},
			{
				label: "Nest",
				icon: <NestIcon /> as JSX.Element,
			},
			{
				label: "Typescript",
				icon: <TypescriptIcon /> as JSX.Element,
			},
			{
				label: "Illustrator",
				icon: <IllustratorIcon /> as JSX.Element,
			}
		]
	},
	myWorkSection: {
		header: "My work is like",
		myWork: [
			{
				name: "Uniken Marketlace",
				title: "BUY AND SELL NFTS FROM THE WORLD'S TOP ARTISTS",
				img: "/imgs/myWork/uniken.com.webp",
				website: "https://uniken.netlify.app/",
				logo: "/imgs/myWork/logos/uniken.svg"
			},
			{
				name: "Ouse Token",
				title: "BUY REAL ESTATE NFTS",
				img: "/imgs/myWork/ousetoken.io.webp",
				website: "https://www.ousetoken.io/",
				logo: "/imgs/myWork/logos/ouse.png"
			},
			{
				name: "Voxbyte",
				title: "MANAGING AND EXPLORING YOUR GAME SERVERS",
				img: "/imgs/myWork/voxbyte.com.webp",
				website: "https://voxbyte.vercel.app/",
				logo: "/imgs/myWork/logos/voxbyte.svg"
			},
		]
	},
	contactSection: {
		header: "You will find me in",
		socialMedia: [
			{
				label: "Behance",
				icon: <BehanceIcon className="h-12 " /> as JSX.Element,
				link: "https://www.behance.net/imranbaali"
			},
			{
				label: "Linkedin",
				icon: <LinkedinIcon className="h-12 " /> as JSX.Element,
				link: "https://www.linkedin.com/in/imran-baali-055795199/"
			},
			{
				label: "Twitter",
				icon: <TwitterIcon className="h-12 " /> as JSX.Element,
				link: "https://twitter.com/kirwaKO"
			},
			{
				label: "Github",
				icon: <GithubIcon className="h-12 " /> as JSX.Element,
				link: "https://github.com/kirwako"
			},
			{
				label: "Instagram",
				icon: <InstagramIcon className="h-12 " /> as JSX.Element,
				link: "https://www.instagram.com/baali_imran"
			},
			{
				label: "Email",
				icon: <EmailIcon className="h-12 " /> as JSX.Element,
				link: "mailto:me@kirwako.com"
			}
		]
	}
}