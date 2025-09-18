import { CheckCircle, BookOpen, Users2, Building, Sparkles, FileSpreadsheet } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Conflict-Free Scheduling",
      description: "Advanced AI algorithms ensure zero time conflicts across all schedules"
    },
    {
      icon: BookOpen,
      title: "Student-Centric Design",
      description: "Supports major/minor combinations, electives, and personalized learning paths"
    },
    {
      icon: Users2,
      title: "Faculty-Friendly",
      description: "Considers teacher preferences, workload balance, and availability constraints"
    },
    {
      icon: Building,
      title: "Room & Lab Optimization",
      description: "Intelligent resource allocation for classrooms, labs, and special facilities"
    },
    {
      icon: Sparkles,
      title: "NEP 2020 Aligned",
      description: "Built specifically for new education policy requirements and flexibility"
    },
    {
      icon: FileSpreadsheet,
      title: "Export Timetables",
      description: "Download schedules in PDF, Excel, or share digitally with stakeholders"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Everything you need to create perfect timetables for the complex world of contemporary education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;