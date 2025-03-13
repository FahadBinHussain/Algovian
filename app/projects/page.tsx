'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'AlgoViz',
    description: 'An interactive visualization tool for common algorithms and data structures. Helps students understand complex concepts through visual representation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    technologies: ['React', 'TypeScript', 'D3.js'],
    github: 'https://github.com/algovian/algoviz',
    demo: 'https://algoviz.algovian.org',
    contributors: 8,
    status: 'Active',
  },
  {
    id: 2,
    title: 'StudyBuddy',
    description: 'A collaborative platform for computer science students to find study partners, form groups, and share resources for specific courses and topics.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/algovian/studybuddy',
    demo: 'https://studybuddy.algovian.org',
    contributors: 5,
    status: 'Active',
  },
  {
    id: 3,
    title: 'CodeReview',
    description: 'An automated code review tool that helps identify common issues, suggests improvements, and enforces coding standards for student projects.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
    technologies: ['Python', 'Flask', 'Docker'],
    github: 'https://github.com/algovian/codereview',
    demo: 'https://codereview.algovian.org',
    contributors: 4,
    status: 'In Development',
  },
  {
    id: 4,
    title: 'EventHub',
    description: 'A comprehensive event management system for organizing hackathons, workshops, and tech talks, with features for registration, attendance tracking, and feedback collection.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/algovian/eventhub',
    demo: 'https://eventhub.algovian.org',
    contributors: 6,
    status: 'Active',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Projects</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Explore the innovative projects developed by our community members, showcasing their skills and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md dark:bg-gray-800 dark:border dark:border-gray-700"
              >
                <div className="relative h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-400">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 dark:text-gray-300">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.contributors} Contributors</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Want to Contribute?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in contributing to our projects or starting a new one? Join our community and start collaborating with fellow developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-us"
              className="px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center"
            >
              Join Our Community <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://github.com/algovian"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Visit Our GitHub <Github className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 