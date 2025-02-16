import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Certifications() {
  return (
    <section id="certifications" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROFILE_DATA.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
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
