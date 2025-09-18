import { Database, Brain, Download } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Collect Data",
      description: "Input courses, students, faculty preferences, and resource constraints"
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI Engine Generates",
      description: "Our advanced AI processes all variables to create optimal schedules"
    },
    {
      number: "03",
      icon: Download,
      title: "Review & Export",
      description: "Preview your timetables and export in your preferred format instantly"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Three simple steps to transform your scheduling chaos into organized perfection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="mt-12">
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-foreground">Average Processing Time: 2-5 minutes</span>
                </div>
                <p className="text-muted-foreground">
                  From data input to final timetable delivery
                </p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={howItWorksImage} 
                alt="AI timetable generation process illustration" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;