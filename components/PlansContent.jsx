"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    title: "Career Growth",
    description: "Continuously enhance my skills in web development and explore new technologies to stay at the forefront of innovation.",
    icon: "🚀"
  },
  {
    title: "Personal Development",
    description: "Focus on improving communication skills and leadership abilities while maintaining a healthy work-life balance.",
    icon: "🎯"
  },
  {
    title: "Learning Goals",
    description: "Master advanced concepts in React, TypeScript, and cloud technologies while contributing to open-source projects.",
    icon: "📚"
  },
  {
    title: "Future Projects",
    description: "Develop innovative web applications that solve real-world problems and create positive impact in the community.",
    icon: "💡"
  }
];

const PlansContent = () => {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] w-full">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto pt-20 pb-10"
        >
          <h1 className="h1 text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
            Future Plans in <span className="text-tertiary">Life</span>
          </h1>
          
          <div className="space-y-6 md:space-y-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                        <span className="text-3xl">{plan.icon}</span>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScrollArea>
  );
};

export default PlansContent; 