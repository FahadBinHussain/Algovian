'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Users, Calendar, LucideIcon, BookOpen } from 'lucide-react'

const featuresList = [
  {
    icon: Code,
    title: 'Coding Workshops',
    description: 'Regular hands-on coding sessions to build real-world projects and enhance technical skills.',
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Connect with like-minded peers, mentors, and industry professionals in computer science.',
  },
  {
    icon: Calendar,
    title: 'Tech Events',
    description: 'Attend hackathons, tech talks, and conferences to stay updated with the latest trends.',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access curated learning materials, tutorials, and resources to support your growth.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            >
              Innovate. Collaborate. Code.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Join Algovian, a community of passionate computer science enthusiasts where algorithms meet creativity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/join-us"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Become a Member <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/events"
                className="px-8 py-3 rounded-lg bg-white text-gray-800 border border-gray-200 font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 flex items-center justify-center"
              >
                Explore Events
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
              Algovian is dedicated to creating an inclusive environment where computer science enthusiasts can learn, 
              collaborate, and grow together. We believe in the power of community-driven innovation and knowledge sharing 
              to tackle real-world challenges through technology.
            </p>
            <div className="flex justify-center">
              <Link
                href="/about"
                className="text-purple-600 hover:text-purple-700 font-medium flex items-center dark:text-purple-400 dark:hover:text-purple-300"
              >
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 dark:bg-gray-900 dark:border dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  {<feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Join Our Community?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Become a part of Algovian today and unlock a world of opportunities, resources, and connections.
          </p>
          <Link
            href="/join-us"
            className="px-8 py-3 rounded-lg bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center"
          >
            Join Algovian Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
} 