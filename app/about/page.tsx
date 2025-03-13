'use client'

import { motion } from 'framer-motion'
import { Terminal, Heart, Zap, Lightbulb, Code, Users } from 'lucide-react'

const values = [
  {
    icon: <Terminal className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: 'Technical Excellence',
    description: 'We strive for excellence in all our technical pursuits, encouraging continuous learning and skill improvement.',
  },
  {
    icon: <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: 'Community',
    description: 'We foster an inclusive and supportive community where everyone feels welcome to contribute and grow.',
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: 'Innovation',
    description: "We push the boundaries of what's possible, embracing creativity and fresh perspectives in problem-solving.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: 'Knowledge Sharing',
    description: 'We believe in freely sharing knowledge and resources to empower everyone in their learning journey.',
  },
  {
    icon: <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: 'Hands-on Learning',
    description: 'We emphasize practical, hands-on learning experiences through projects, workshops, and challenges.',
  },
  {
    icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: 'Collaboration',
    description: 'We value teamwork and cross-disciplinary collaboration to tackle complex problems and create impactful solutions.',
  },
]

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Maya Patel',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Daniel Kim',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Sophia Chen',
    role: 'Events Coordinator',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Algovian</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Discover our story, mission, values, and the team behind Algovian.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p>
                Algovian was founded in 2020 by a group of passionate computer science students who recognized the need for a community where enthusiasts could come together to learn, collaborate, and create. What started as informal study groups quickly evolved into a structured organization with a clear mission: to foster technical excellence and community growth.
              </p>
              <p className="mt-4">
                Over the years, we've grown from a small group into a vibrant community of students, professionals, and hobbyists, all united by our love for computer science and technology. Through our workshops, projects, hackathons, and social events, we've created a space where knowledge is freely shared and innovation is encouraged.
              </p>
              <p className="mt-4">
                Today, Algovian continues to grow and evolve, but our core values remain the same. We are committed to creating an inclusive environment where anyone, regardless of their background or experience level, can find a place to learn and contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-purple-100 p-2 rounded-lg dark:bg-purple-900/30">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-purple-600 dark:text-purple-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 