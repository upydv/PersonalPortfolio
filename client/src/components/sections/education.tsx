import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
        <div className="grid gap-4">
          {PROFILE_DATA.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.grade}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
