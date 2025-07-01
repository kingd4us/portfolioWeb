const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#030712] border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 tracking-wider">ABOUT ME</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 leading-tight">
              Building the future through
              code and security
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              As an undergraduate IT student, I'm passionate about creating
              secure, efficient, and user-centered digital experiences. My
              journey spans full-stack development and cybersecurity,
              combining technical expertise with creative problem-solving.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black dark:text-white mb-2 flex items-center">
                  <span className="w-2 h-2 bg-black dark:bg-white mr-3"></span>
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-5">Bachelor's in Information Technology</p>
              </div>

              <div>
                <h3 className="font-bold text-black dark:text-white mb-2 flex items-center">
                  <span className="w-2 h-2 bg-black dark:bg-white mr-3"></span>
                  Focus Areas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-5">Software Development & Cybersecurity</p>
              </div>

              <div>
                <h3 className="font-bold text-black dark:text-white mb-2 flex items-center">
                  <span className="w-2 h-2 bg-black dark:bg-white mr-3"></span>
                  Status
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ml-5">Available for internships and collaboration</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Developer working" 
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About