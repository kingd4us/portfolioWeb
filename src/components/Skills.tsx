import { motion } from 'framer-motion'
import { Code, Shield, Server, Pilcrow, Network } from 'lucide-react'

const skillIcons = {
  'React & TypeScript': <Code size={24} className="text-blue-500" />,
  'Node.js (Express)': <Server size={24} className="text-green-500" />,
  'Python (Flask)': <Pilcrow size={24} className="text-yellow-500" />,
  'Web Security (OWASP)': <Shield size={24} className="text-red-500" />,
  'Network Security': <Network size={24} className="text-indigo-500" />,
};

const skillsData = [
  {
    category: 'Development',
    description: 'Building responsive and scalable web applications with modern technologies, focusing on clean and maintainable code.',
    skills: [
      {
        name: 'React & TypeScript',
        level: 'Intermediate',
        reason: 'Developed several medium-scale projects using React for dynamic user interfaces and TypeScript for type-safety.'
      },
      {
        name: 'Node.js (Express)',
        level: 'Beginner',
        reason: 'Understand the basics of creating RESTful APIs using Express.js for backend services.'
      },
       {
        name: 'Python (Flask)',
        level: 'Beginner',
        reason: 'Used Flask for smaller backend projects and rapid prototyping.'
      }
    ]
  },
  {
    category: 'Security',
    description: 'Analyzing and implementing cybersecurity best practices to protect applications from threats.',
    skills: [
      {
        name: 'Web Security (OWASP)',
        level: 'Intermediate',
        reason: 'Good understanding of the OWASP Top 10 security risks and how to mitigate them in web development.'
      },
      {
        name: 'Network Security',
        level: 'Beginner',
        reason: 'Learning the fundamental concepts of network security, including firewalls, IDS/IPS, and secure protocols.'
      }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-[#030712] border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sticky Title */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                WHAT I DO
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in creating robust and secure applications, combining my skills in development and cybersecurity.
              </p>
            </div>
          </div>

          {/* Skills List */}
          <div className="lg:col-span-2 space-y-16">
            {skillsData.map((area, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{area.category}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">{area.description}</p>
                <div className="space-y-8">
                  {area.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="flex items-start space-x-6"
                    >
                      <div className="mt-1">
                        {skillIcons[skill.name as keyof typeof skillIcons]}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-xl font-semibold text-black dark:text-white">{skill.name}</h4>
                          <span className="text-sm font-medium bg-black/10 dark:bg-white/10 text-black dark:text-white px-3 py-1 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">{skill.reason}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;