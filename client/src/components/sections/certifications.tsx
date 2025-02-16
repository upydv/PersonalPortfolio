import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-4 md:px-8 lg:px-12"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Certifications
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROFILE_DATA.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 backdrop-blur-sm border-primary/10">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-8 w-8 text-primary/80" />
                  <div>
                    <h3 className="text-xl font-bold text-primary/80">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{cert.grade || cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}