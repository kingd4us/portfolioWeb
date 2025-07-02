import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, GitBranch, Box } from 'lucide-react';

// Custom SVG icons for cybersecurity tools for a clean, consistent look
const skillIcons: { [key: string]: React.ReactNode } = {
  'Python': <Code size={24} className="text-yellow-500" />,
  'React.js': <Code size={24} className="text-blue-500" />,
  'TypeScript': <Code size={24} className="text-blue-400" />,
  'MERN Stack': <Database size={24} className="text-green-500" />,
  'Burp Suite': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#FF6600"/>
      <path d="M12 2L12 22" stroke="white" strokeWidth="1.5"/>
      <path d="M22 7L2 17" stroke="white" strokeWidth="1.5"/>
      <path d="M2 7L22 17" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  'Wireshark': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.05882 18.9999C2.93633 17.5851 2.25 15.8649 2.25 14.0004C2.25 8.33843 6.83807 3.75037 12.5 3.75037C18.1619 3.75037 22.75 8.33843 22.75 14.0004C22.75 15.8649 22.0637 17.5851 20.9412 18.9999L12.5 6.41913V6.41913L4.05882 18.9999Z" fill="#1679A7"/>
    </svg>
  ),
  'Network Miner': (
    <svg width="24" height="24" viewBox="0 0 512 512" fill="#3498db" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm96-128a32 32 0 1 1-64 0 32 32 0 1 1 64 0zM96 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM288 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm64-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM160 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/>
    </svg>
  ),
  'Autopsy': (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a4a4a" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.75,7.25H7.25a.75.75,0,0,0,0,1.5h9.5a.75.75,0,0,0,0-1.5Z"/>
        <path d="M16.75,11.25H7.25a.75.75,0,0,0,0,1.5h9.5a.75.75,0,0,0,0-1.5Z"/>
        <path d="M13.75,15.25H7.25a.75.75,0,0,0,0,1.5h6.5a.75.75,0,0,0,0-1.5Z"/>
        <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM5,3.5A1.5,1.5,0,0,1,6.5,2h11A1.5,1.5,0,0,1,19,3.5V5H5Zm14,14A1.5,1.5,0,0,1,17.5,22h-11A1.5,1.5,0,0,1,5,20.5V6.5H19Z"/>
    </svg>
  ),
  'Docker': <Box size={24} className="text-blue-600" />,
  'Git': <GitBranch size={24} className="text-orange-600" />,
};

const skillsData = [
  {
    category: 'Development',
    description: 'Building modern, scalable applications with a focus on clean code and robust architecture.',
    skills: [
      {
        name: 'Python',
        level: 'Intermediate',
        reason: 'Comfortable using Python for scripting, backend development, and data analysis tasks.'
      },
      {
        name: 'React.js',
        level: 'Intermediate',
        reason: 'Experienced in building dynamic and responsive user interfaces for single-page applications.'
      },
      {
        name: 'TypeScript',
        level: 'Learning',
        reason: 'Actively incorporating TypeScript to build more robust, type-safe applications and reduce runtime errors.'
      },
      {
        name: 'MERN Stack',
        level: 'Beginner',
        reason: 'Exploring the MERN (MongoDB, Express, React, Node.js) stack to build full-stack JavaScript applications.'
      }
    ]
  },
  {
    category: 'Cybersecurity',
    description: 'Applying a defensive and offensive mindset to analyze and secure digital systems.',
    skills: [
      {
        name: 'Burp Suite',
        level: 'Beginner',
        reason: 'Learning to use Burp Suite for web application vulnerability scanning and penetration testing.'
      },
      {
        name: 'Network Miner',
        level: 'Learning',
        reason: 'Exploring Network Miner for passive network analysis and artifact extraction.'
      },
      {
        name: 'Wireshark',
        level: 'Beginner',
        reason: 'Familiar with capturing and analyzing network traffic to troubleshoot issues and identify anomalies.'
      },
       {
        name: 'Autopsy',
        level: 'Learning',
        reason: 'Currently learning to use Autopsy for digital forensics and in-depth file system analysis.'
      }
    ]
  },
   {
    category: 'DevOps & Version Control',
    description: 'Streamlining development workflows and ensuring code integrity.',
    skills: [
      {
        name: 'Docker',
        level: 'Beginner',
        reason: 'Able to create and manage containers for consistent development and deployment environments.'
      },
      {
        name: 'Git',
        level: 'Beginner',
        reason: 'Proficient with Git for version control, including branching, merging, and collaborating on projects.'
      }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-[#030712] border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                      <div className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {skillIcons[skill.name]}
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