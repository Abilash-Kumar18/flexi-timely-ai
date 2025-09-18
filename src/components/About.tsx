import { GraduationCap, Users, Calendar, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Student Choices",
      description: "Flexible major/minor selection and elective preferences"
    },
    {
      icon: Users,
      title: "Faculty Workload",
      description: "Balanced teaching assignments and availability optimization"
    },
    {
      icon: Calendar,
      title: "Resource Optimization",
      description: "Smart room and lab allocation with conflict prevention"
    },
    {
      icon: Zap,
      title: "Flexibility",
      description: "Adaptive scheduling that evolves with changing needs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Why We Built This
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              NEP 2020 transformed education with flexible curricula, interdisciplinary learning, 
              and student choice. But traditional scheduling methods couldn't keep up. 
            </p>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We created an AI system that embraces this complexity, making scheduling 
              simple and stress-free for everyone—students, faculty, and administrators.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;