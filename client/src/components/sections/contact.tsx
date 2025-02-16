import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/upydv",
      username: "upydv",
      description: "Check out my projects and contributions"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/updesh-kumar-64944b243/",
      username: "Updesh Kumar",
      description: "Connect with me professionally"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="h-6 w-6" />,
      url: "https://leetcode.com/u/Updesh_kumar/",
      username: "Updesh_kumar",
      description: "View my problem-solving skills"
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="h-6 w-6" />,
      url: "https://www.codechef.com/users/gkey_updesh",
      username: "gkey_updesh",
      description: "Explore my competitive programming journey"
    }
  ];

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-4 md:px-8 lg:px-12"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Let's Connect
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-primary/80 mb-4">Contact Details</h3>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5" />
                  <span>{PROFILE_DATA.email}</span>
                </motion.a>
                <motion.a
                  href={`tel:${PROFILE_DATA.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>{PROFILE_DATA.phone}</span>
                </motion.a>
              </div>
            </CardContent>
          </Card>

          {/* Coding Profiles */}
          <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-primary/80 mb-4">Online Presence</h3>
              <div className="grid gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-200">
                      {link.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium">{link.name}</h4>
                      <p className="text-sm">{link.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}