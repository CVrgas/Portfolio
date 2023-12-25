import styles from "./ProjectCard.module.css";

type props = {
	project: Project;
};

function ProjectCard({ project }: props) {
	return (
		<div className={styles.card}>
			{/* grid grid-cols-1 md:grid-cols-2 p-1 gap-4 items-center backdrop-blur-sm max-w-[800px] rounded bg-gray-300/20 border border-gray-300 */}
			<div className={styles.image}>
				<img
					className="rounded bg-slate-300 h-full"
					src={project.imgUrl}
					alt="Imagen del projecto"
				/>
			</div>
			<div className={styles.aboutproject}>
				<h1 className="text-2xl md:text-4xl font-semibold">{project.title}</h1>
				<p>{project.description}</p>
				<div className={styles.links}>
					{project.githubCode && (
						<a
							className="fa-solid fa-code text-2xl rounded-md w-12 h-12 flex justify-center items-center text-white bg-slate-600 hover:bg-slate-500"
							href={project.githubCode}
						></a>
					)}
					{project.PreviewUrl && (
						<a
							className="fa-solid fa-arrow-up-right-from-square text-2xl rounded-md w-12 h-12 flex justify-center items-center text-white bg-slate-600 hover:bg-slate-500"
							href={project.PreviewUrl}
						></a>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
