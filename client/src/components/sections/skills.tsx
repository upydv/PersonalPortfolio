import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/constants";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold">Languages</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.languages.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold">Frameworks</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold">Tools</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.tools.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold">Core Concepts</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.skills.concepts.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
