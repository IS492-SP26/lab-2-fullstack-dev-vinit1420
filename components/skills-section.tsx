import { Badge } from "@/components/ui/badge"

interface SkillGroup {
  category: string
  color: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    color: "bg-blue-500/10 text-blue-700 border-blue-200",
    skills: ["Python", "SQL", "C++", "R"],
  },
  {
    category: "Web",
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    skills: ["HTML", "CSS", "React"],
  },
  {
    category: "Data & ML",
    color: "bg-amber-500/10 text-amber-700 border-amber-200",
    skills: ["PySpark", "Pandas", "NumPy", "XGBoost", "PyTorch", "SMOTE"],
  },
  {
    category: "Cloud & DevOps",
    color: "bg-violet-500/10 text-violet-700 border-violet-200",
    skills: ["AWS", "Azure", "Microsoft Fabric", "Docker", "Git"],
  },
  {
    category: "BI & Visualization",
    color: "bg-rose-500/10 text-rose-700 border-rose-200",
    skills: [
      "Power BI",
      "Tableau",
      "Plotly",
      "Dash",
      "Flask",
      "Altair",
      "Jekyll",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {"Skills & Technologies"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          The tools and technologies I work with day to day.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${group.color} text-xs font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
