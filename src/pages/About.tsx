import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cpu, GraduationCap, Terminal } from "lucide-react";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-300">
            Passionate developer with expertise in modern web technologies and a drive for creating elegant solutions.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-black/50 border-emerald-900/50">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-emerald-400" />
                <h2 className="text-xl font-semibold text-emerald-400">Technical Skills</h2>
              </div>
              <p className="text-gray-300">
                Proficient in React, TypeScript, Node.js, and modern web development practices. Experienced in building scalable and performant applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-emerald-900/50">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-6 w-6 text-emerald-400" />
                <h2 className="text-xl font-semibold text-emerald-400">Experience</h2>
              </div>
              <p className="text-gray-300">
                Over 5 years of professional experience in software development, working with diverse teams and technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-emerald-900/50">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-emerald-400" />
                <h2 className="text-xl font-semibold text-emerald-400">Education</h2>
              </div>
              <p className="text-gray-300">
                Bachelor's degree in Computer Science with continuous learning through professional certifications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-emerald-900/50">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-emerald-400" />
                <h2 className="text-xl font-semibold text-emerald-400">Specialization</h2>
              </div>
              <p className="text-gray-300">
                Focused on full-stack development with expertise in modern frameworks and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}