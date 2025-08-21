import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
          Hi, I'm [Eva]
        </motion.h2>
        <p className="text-lg mb-6">A passionate developer creating modern web applications</p>
        <Button asChild>
          <a href="#projects">View My Work</a>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-center text-lg text-gray-700">
          I am a web developer skilled in React, Tailwind, and modern web tools. I love
          building elegant, responsive, and functional web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-200 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="shadow-md hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-4">
                <h4 className="text-xl font-semibold mb-2">Project {project}</h4>
                <p className="text-gray-600 mb-4">A short description of the project goes here.</p>
                <Button asChild variant="outline">
                  <a href="#">View Details</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <p className="text-lg mb-6">Feel free to reach out if you'd like to collaborate or just say hi!</p>
        <Button asChild>
          <a href="mailto:yourname@example.com">Email Me</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-white border-t mt-10">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
