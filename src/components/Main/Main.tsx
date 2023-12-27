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

			<div className={styles.contact}>
				<h2>Contact Information</h2>
				<div>
					{/* <span>Email:</span> */}
					<i className="fa-solid fa-envelope"></i>
					<a href="mailto:cristianvargasa389@gmail.com">
						cristianvargasa389@gmail.com
					</a>
				</div>
				<div>
					{/* <span>LinkedIn:</span> */}
					<i className="fa-brands fa-linkedin-in"></i>
					<a href="https://linkedin.com/in/cristian-vargas-844903257">
						linkedin.com/in/cristian-vargas-844903257
					</a>
				</div>

				<div>
					{/* <span>GitHub:</span> */}
					<i className="fa-brands fa-github-alt"></i>
					<a href="https://github.com/CVrgas/">github.com/CVrgas</a>
				</div>
			</div>
			<hr className="border-slate-100 my-8" />
		</main>
	);
}

export default Main;
