import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PROFILE_DATA, RESUME_URL } from "@/lib/constants";
import { FileDown } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-8"
      >
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          {PROFILE_DATA.name}
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {PROFILE_DATA.title}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <a href={RESUME_URL} download>
              <FileDown className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
