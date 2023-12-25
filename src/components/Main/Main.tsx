import ProjectCard from "../ProjectCard/ProjectCard";
import myImage from "../../assets/images/me.jpeg";
import styles from "./Main.module.css";
import Timeline from "../Timeline/Timeline";

function Main() {
	const projects: Project[] = [
		{
			title: "Discord bot",
			description:
				"This is a bot which plays music from url(Youtube, Spotify) and ChatGPT conversation",
			imgUrl: "",
			githubCode: "https://github.com/CVrgas/Discordbot",
			PreviewUrl: "",
		},
		{
			title: "Library Management",
			description:
				"a online library where u can search, download books and apply for a physical copy.",
			imgUrl: "",
			githubCode: "https://github.com/CVrgas/library-management",
			PreviewUrl: "https://cvrgas.github.io/library-management/",
		},
	];
	//   platforms: platform[] = [
	//     {
	//       name: 'pluralsight',
	//       profileUrl: 'https://app.pluralsight.com/profile/cvrgas#0',
	//       iconUrl: '../../../assets/PS_logo_F-14.png',
	//     },
	//     {
	//       name: 'Alura-oracle',
	//       profileUrl: 'https://app.aluracursos.com/user/CristianVargas',
	//       iconUrl: '../../../assets/logo-aluraespanhol.svg',
	//     },
	//   ];

	return (
		<main className={styles.main}>
			{/* About me */}
			<div className={styles.about}>
				{/* className="flex flex-wrap w-3/4 mx-auto gap-12 justify-center items-center" */}
				<img
					// w-48 h-48 rounded-full border-slate-900 border bg-slate-600
					src={myImage}
					alt="profile image"
				/>

				<div className={styles.aboutText}>
					<h1>Cristian Vargas</h1>
					<p>Software developer.</p>
					<div className={styles.aboutLinks}>
						{/* mt-12 flex justify-center gap-8 md:justify-start */}
						<a
							href=""
							className="fa-brands fa-linkedin"
						></a>
						<a
							href=""
							className="fa-brands fa-github"
						></a>
						<a
							href=""
							className="fa-solid fa-file-arrow-down"
						></a>
						{/* <a
							href=""
							className="text-2xl hover:text-slate-400"
						>
							No Habilitado
						</a> */}
					</div>
				</div>
			</div>
			<hr />

			{/* Experience */}
			{/* <div className="m-2 md:m-auto">
				<h1 className="mb-4 text-3xl font-bold ">Experience</h1>
				<ol className="relative border-s border-gray-700">
					<li className="mb-10 ms-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							September 2023
						</time>
						<h3 className="text-lg font-semibold text-gray-900">
							Fullstack Software Developer
						</h3>
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
							at{" "}
							<a
								href="https://harwes.io/"
								className="underline"
							>
								Harwes
							</a>
						</p>
					</li>
					<li className="mb-10 ms-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							Today
						</time>
					</li>
				</ol>
			</div> */}
			<Timeline />

			<hr className="border-slate-600 my-16" />

			{/* Projects */}
			<div>
				<h1>Projects</h1>
				<ul style={{ display: "grid", gap: "1rem" }}>
					{projects.map((project, index) => {
						return (
							<li
								key={index}
								style={{ listStyle: "none" }}
							>
								<ProjectCard project={project}></ProjectCard>
							</li>
						);
					})}
				</ul>
			</div>
			<hr className="border-slate-600 my-16" />

			{/* Contact me */}
			<div className="m-2 md:m-auto">
				<h1 className="mb-4 font-bold text-3xl">Contact me</h1>
				<form
					action=""
					className="grid grid-cols-1 md:grid-cols-3 border-slate-950 h-48 gap-2"
				>
					<textarea
						name=""
						id=""
						cols={30}
						rows={10}
						placeholder="Enter Message"
						className="grow border border-slate-400 p-1 bg-emerald-50 resize-none col-span-2"
					></textarea>
					<button
						type="button"
						className="fa-solid fa-arrow-right px-6 text-xl rounded-md bg-amber-300 hover:bg-amber-400"
					></button>
				</form>
			</div>
			<hr className="border-slate-100 my-8" />
		</main>
	);
}

export default Main;
