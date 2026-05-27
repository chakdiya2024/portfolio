import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navigation />
      <main className={styles.content}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </main>
    </div>
  );
}
