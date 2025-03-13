'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: 'Hackathon 2023: Code for Good',
    date: 'June 15-17, 2023',
    time: '9:00 AM - 6:00 PM',
    location: 'University Main Campus, Building A',
    description: 'Join us for a 48-hour hackathon focused on creating solutions for social good. Work in teams to develop innovative applications that address real-world challenges.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    registrationLink: '/events/register/1',
  },
  {
    id: 2,
    title: 'Workshop: Introduction to Machine Learning',
    date: 'July 5, 2023',
    time: '2:00 PM - 5:00 PM',
    location: 'Computer Science Department, Room 302',
    description: 'A beginner-friendly workshop on the fundamentals of machine learning. Learn about different algorithms, data preprocessing, and build your first ML model.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    registrationLink: '/events/register/2',
  },
  {
    id: 3,
    title: 'Tech Talk: The Future of Web Development',
    date: 'July 20, 2023',
    time: '6:00 PM - 8:00 PM',
    location: 'Virtual (Zoom)',
    description: 'Join industry experts as they discuss emerging trends and technologies in web development. Learn about the latest frameworks, tools, and best practices.',
    image: 'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    registrationLink: '/events/register/3',
  },
]

const pastEvents = [
  {
    id: 4,
    title: 'Coding Competition: Algorithm Challenge',
    date: 'April 10, 2023',
    location: 'Computer Science Department',
    description: 'A competitive coding event where participants solved complex algorithmic problems within a time limit. Prizes were awarded to the top performers.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 5,
    title: 'Workshop: Git & GitHub Fundamentals',
    date: 'March 15, 2023',
    location: 'Virtual (Zoom)',
    description: 'A hands-on workshop covering version control basics with Git and collaboration using GitHub. Participants learned how to manage repositories, branches, and pull requests.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
]

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming')

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Events</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Discover our upcoming events and workshops, or browse through our past events.
            </p>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 'upcoming'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                type="button"
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'past'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div className="space-y-12">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md dark:bg-gray-800 dark:border dark:border-gray-700"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-64 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{event.title}</h3>
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 dark:text-gray-400">{event.description}</p>
                      <Link
                        href={event.registrationLink}
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
                      >
                        Register Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md dark:bg-gray-800 dark:border dark:border-gray-700"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{event.title}</h3>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Want to Propose an Event?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Have an idea for a workshop, hackathon, or tech talk? We're always looking for new event ideas and collaborations.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center"
          >
            Contact Us <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
} 