import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { projects, type Project } from "@/lib/projects";
import styles from "./page.module.css";

// Group consecutive small projects into rows for side-by-side layout
function groupProjects(list: Project[]): (Project | Project[])[] {
  return list.reduce<(Project | Project[])[]>((acc, project) => {
    if (project.size === "small") {
      const last = acc[acc.length - 1];
      if (Array.isArray(last)) {
        last.push(project);
      } else {
        acc.push([project]);
      }
    } else {
      acc.push(project);
    }
    return acc;
  }, []);
}

export default function Home() {
  const rows = groupProjects(projects);

  return (
    <div className={styles.home}>
      <Navigation />
      <main className={styles.content}>
        {rows.map((row, i) =>
          Array.isArray(row) ? (
            <div key={i} className={styles.projectRow}>
              {row.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          ) : (
            <ProjectCard key={row.title} project={row} />
          )
        )}
      </main>
    </div>
  );
}
