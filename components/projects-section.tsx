import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  projectLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: "EvalAI - Multi-Model LLM Evaluation Platform",
    description:
      "React + FastAPI app for side-by-side evaluation of 4+ LLMs with latency, token, and cost analytics. Enables rapid model comparison workflows.",
    image: "/images/project-evalai.jpg",
    tags: ["React", "FastAPI", "Python", "LLM", "Analytics"],
    projectLink: "#",
    githubLink: "#",
  },
  {
    title: "Demand Forecasting Pipeline",
    description:
      "Spark-native forecasting pipeline in Microsoft Fabric with model comparison visuals and scalable multi-client processing for 200K+ SKUs.",
    image: "/images/project-forecasting.jpg",
    tags: ["PySpark", "Microsoft Fabric", "Azure", "Plotly", "TimeGPT"],
    projectLink: "#",
    githubLink: "#",
  },
  {
    title: "Predictive Spending & Credit Line Optimization",
    description:
      "Gradient Boosting spend prediction, customer segmentation with SMOTE + XGBoost, and credit line recommendation model. Built at Synchrony Datathon.",
    image: "/images/project-credit.jpg",
    tags: ["XGBoost", "SMOTE", "Python", "Gradient Boosting", "ML"],
    projectLink: "#",
    githubLink: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          A selection of things I have built recently.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <Button size="sm" asChild>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-3.5" />
                      View Project
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-3.5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
