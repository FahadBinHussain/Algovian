'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Algovian</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A community of computer science enthusiasts dedicated to learning, collaboration, and innovation.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/algovian" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                href="https://twitter.com/algovian" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/algovian" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/events"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/join-us"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-gray-600 dark:text-gray-400 mt-0.5" />
                <a href="mailto:info@algovian.org" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  info@algovian.org
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-600 dark:text-gray-400 mt-0.5" />
                <p className="text-gray-600 dark:text-gray-400">
                  Computer Science Department<br />
                  University Campus<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-sm text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Algovian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 