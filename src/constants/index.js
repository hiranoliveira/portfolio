import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	gpt3,
	threejs,
	jobs,
	logoWhite,
	kenzie,
	vtex,
	romanha,
	ligga,
	domatech,
	portfolio,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "JavaScript Developer",
		icon: creator,
	},
	{
		title: "VTEX Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	// {
	// 	name: "TypeScript",
	// 	icon: typescript,
	// },
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	// {
	// 	name: "Tailwind CSS",
	// 	icon: tailwind,
	// },
	// {
	// 	name: "Node JS",
	// 	icon: nodejs,
	// },
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	// {
	// 	name: "Three JS",
	// 	icon: threejs,
	// },
	{
		name: "VTEX",
		icon: vtex,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: "Frontend Formation | 1000 Hours",
		company_name: "Kenzie Academy Brasil",
		icon: kenzie,
		iconBg: "#383E56",
		date: "May 2021 - October 2021",
		points: [
			"HTML/CSS",
			"JavaScript ES6",
			"ReactJS",
			"React Hooks",
			"React State Management",
			"Redux",
			"Componentization & use of component libraries",
			"UX Notions",
			"GIT",
			"Agile Methodologies",
			"API Handling",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "JobSpace Creative",
		icon: jobs,
		iconBg: "#E6DEDD",
		date: "August 2022 - July 2023",
		points: [
			"Developing and maintaining web applications using React.js, WordPress, VTEX and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Freelance Frontend Developer",
		company_name: "",
		icon: logoWhite,
		iconBg: "#383E56",
		date: "Jan 2021 - Present",
		points: [
			"Crafting dynamic and user-centric web solutions using the power of React.js, WordPress, VTEX IO, VTEX CMS, and NuvemShop, while maintaining a keen focus on performance and functionality.",
			"Ensuring a seamless digital experience by skillfully implementing responsive design, guaranteeing flawless cross-browser compatibility across platforms, and continuously enhancing the user journey.",
		],
	},
	// {
	// 	title: "Web Developer",
	// 	company_name: "Shopify",
	// 	icon: shopify,
	// 	iconBg: "#383E56",
	// 	date: "Jan 2022 - Jan 2023",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "GPT-3 ReactJS Project",
		description:
			"Fully responsive modern UI/UX website in ReactJS from a Figma design",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			// {
			// 	name: "mongodb",
			// 	color: "green-text-gradient",
			// },
			{
				name: "CSS3",
				color: "green-text-gradient",
			},
		],
		image: gpt3,
		source_code_link: "https://github.com/hiranoliveira/gpt3/",
		source_code_site: "https://gpt3-website-black.vercel.app/",
	},
	{
		name: "Portfolio ReactJS Project",
		description: "Portfolio built in ReactJS + Tailwind",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			// {
			// 	name: "mongodb",
			// 	color: "green-text-gradient",
			// },
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/hiranoliveira/gpt3/",
		source_code_site: "https://gpt3-website-black.vercel.app/",
	},
	{
		name: "Romanha Website (not live yet)",
		description: "Website built in HTML5 + PHP + SCSS + Bootstrap.",
		tags: [
			{
				name: "HTML5",
				color: "green-text-gradient",
			},
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
		],
		image: romanha,
		source_code_link: "https://github.com/hiranoliveira/romanha-wp/",
		source_code_site:
			"https://www.jobscreative.com.br/jobs/romanha/v2/back/",
	},
	{
		name: "Ligga Website",
		description: "Website built in HTML5 + PHP + SCSS + Bootstrap.",
		tags: [
			{
				name: "HTML5",
				color: "green-text-gradient",
			},
			{
				name: "PHP",
				color: "blue-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
		],
		image: ligga,
		source_code_link: "https://github.com/hiranoliveira/ligga-wp/",
		source_code_site: "https://liggavc.com.br/",
	},
	{
		name: "Domatech Website",
		description: "Website built in ReactJS + NextJS",
		tags: [
			{
				name: "HTML5",
				color: "green-text-gradient",
			},
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
		],
		image: domatech,
		source_code_link: "#",
		source_code_site: "https://domatech.com.br/",
	},
	// {
	// 	name: "Gericht",
	// 	description:
	// 		"Modern restaurant web application made in ReactJS from a Figma design",
	// 	tags: [
	// 		{
	// 			name: "react",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "restapi",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "scss",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: jobit,
	// 	source_code_link: "https://github.com/hiranoliveira/gericht/",
	// 	source_code_site: "https://github.com/hiranoliveira",
	// },
	// {
	// 	name: "Trip Guide",
	// 	description:
	// 		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "supabase",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: tripguide,
	// 	source_code_link: "https://github.com/",
	// 	source_code_site: "https://github.com/hiranoliveira",
	// },
];

export { services, technologies, experiences, testimonials, projects };
