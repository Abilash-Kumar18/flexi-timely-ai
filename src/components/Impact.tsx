import { Quote } from "lucide-react";

const Impact = () => {
  const testimonials = [
    {
      quote: "Our scheduling time went from weeks to minutes. The AI handles complexity we never could manage manually.",
      author: "Dr. Sarah Chen",
      role: "Academic Director, Tech University",
      avatar: "SC"
    },
    {
      quote: "Finally, a system that understands student choice is paramount. NEP 2020 compliance made easy.",
      author: "Prof. Rajesh Kumar", 
      role: "Dean of Studies, National College",
      avatar: "RK"
    },
    {
      quote: "Zero conflicts, maximum satisfaction. Our faculty and students love the new timetables.",
      author: "Dr. Priya Sharma",
      role: "Principal, Modern Institute",
      avatar: "PS"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Quote */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="font-display text-3xl lg:text-4xl font-semibold leading-relaxed text-foreground mb-8">
              "Less stress, more learning. Our AI makes education management 
              as flexible as the future demands."
            </blockquote>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/60" />
              </div>
              
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">NEP Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;