import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PROFILE_DATA, RESUME_URL } from "@/lib/constants";
import { FileDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-8 lg:px-12"
      >
        <div className="md:w-1/3 flex justify-center">
          <Avatar className="h-64 w-64 border-4 border-primary/20 shadow-lg">
            <AvatarImage src={PROFILE_DATA.photoUrl} alt={PROFILE_DATA.name} />
            <AvatarFallback className="text-4xl">UK</AvatarFallback>
          </Avatar>
        </div>
        <div className="md:w-2/3 space-y-8 text-center md:text-left px-4 md:pr-12">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {PROFILE_DATA.name}
          </h1>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary/80">Software Engineer</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {PROFILE_DATA.title.split('. ').map((sentence, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="block mb-2"
                >
                  {sentence}.
                </motion.span>
              ))}
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href={RESUME_URL} download>
                <FileDown className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary/20 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}