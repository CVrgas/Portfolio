import styles from "./Timeline.module.css";

const TimelineComponent = () => {
	return (
		<div className={styles.timelineContainer}>
			<h1>Experience</h1>
			<ol className={styles.timeline}>
				<li className={styles.timelineItem}>
					<div className={styles.timelineDot}></div>
					<time className={styles.timelineDate}>September 2023</time>
					<h3 className={styles.timelineTitle}>Fullstack Software Developer</h3>
					<p className={styles.timelineDescription}>
						at{" "}
						<a
							href="https://harwes.io/"
							className={styles.timelineLink}
						>
							Harwes
						</a>
					</p>
				</li>
				<li className={styles.timelineItem}>
					<div className={styles.timelineDot}></div>
					<time className={styles.timelineDate}>Today</time>
				</li>
			</ol>
		</div>
	);
};

export default TimelineComponent;
