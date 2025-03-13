'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const membershipBenefits = [
  'Access to exclusive workshops and events',
  'Opportunity to collaborate on real-world projects',
  'Networking with industry professionals and peers',
  'Mentorship from experienced developers',
  'Resources to enhance your technical skills',
  'Leadership and volunteering opportunities',
]

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: '',
    experience: 'beginner',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        major: '',
        year: '',
        interests: '',
        experience: 'beginner',
        message: '',
      })
    }, 1500)
  }
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Join Algovian</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Become a part of our vibrant community of computer science enthusiasts and unlock a world of opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Membership Benefits</h2>
              <ul className="space-y-4">
                {membershipBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 dark:bg-purple-900/30">
                      <Check className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Membership Fee</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Annual membership fee: <span className="font-semibold">$20</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The membership fee helps us organize events, workshops, and provide resources to our members. Scholarships are available for those who need financial assistance.
                </p>
              </div>
            </div>
            
            {/* Membership Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Membership Application</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6 bg-green-50 rounded-lg border border-green-200 dark:bg-green-900/20 dark:border-green-800"
                >
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-400">Application Submitted!</h3>
                  <p className="text-green-700 dark:text-green-300 mb-4">
                    Thank you for your interest in joining Algovian. We've received your application and will contact you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 font-medium"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="major" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Major/Field of Study *
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Year of Study
                      </label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="e.g., Freshman, Senior"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Areas of Interest *
                    </label>
                    <input
                      type="text"
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Web Development, AI, Cybersecurity"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Programming Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Why do you want to join Algovian?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Who can join Algovian?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Algovian is open to all students, regardless of major or experience level. We welcome anyone with an interest in computer science, programming, or technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How often do you meet?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We have general meetings twice a month, with additional workshops, coding sessions, and social events throughout the semester. Check our Events page for the latest schedule.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">I'm a beginner. Can I still join?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Absolutely! We have members of all skill levels, from beginners to advanced programmers. We offer introductory workshops and pair beginners with more experienced members for mentorship.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How can I get more involved?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                After joining, you can volunteer for event planning, become a project contributor, lead workshops, or apply for leadership positions when they become available.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Have more questions? Feel free to reach out to us.
            </p>
            <Link
              href="/contact"
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center dark:text-purple-400 dark:hover:text-purple-300"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 