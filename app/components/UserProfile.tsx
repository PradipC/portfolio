import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { Space_Grotesk } from "next/font/google";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function UserProfile() {
  return (
    <div className={`text-gray-900 dark:text-white p-6 sm:p-8 rounded-lg max-w-2xl mx-auto mt-5 ${spaceGrotesk.className}`}>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div className="relative group">
          <div className="w-24 h-24 sm:w-[88px] sm:h-[88px] rounded-full 
                         ring-2 ring-offset-2 ring-blue-100 dark:ring-[#5c87f6]/20
                         ring-offset-white dark:ring-offset-[#191e2c]
                         transform transition duration-300 group-hover:scale-105">
            <Image
              className="rounded-full object-cover w-full h-full"
              src="/images/pradip_profile.png"
              alt="User Profile"
              width={88}
              height={88}
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"/>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="flex items-center justify-center sm:justify-start gap-1.5 
                 text-2xl font-bold text-gray-900 dark:text-white
                 font-space-grotesk tracking-tight">
            Pradip Choudhari
            <span className="inline-flex items-center justify-center text-[#1d9bf0]">
              <MdVerified size={24} />
            </span>
          </h1>

          {/* Role Badge */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2
                font-poppins font-medium tracking-wide
                flex items-center justify-center sm:justify-start gap-2">
            <span className="bg-blue-50/80 dark:bg-[#1a1f2d] px-3 py-1 rounded-full 
                   border border-blue-100/50 dark:border-transparent">
              {"<SeniorJavaDev />"}
            </span>
          </p>

          {/* Email & Phone */}
          <div className="mt-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-mono tracking-wide space-y-1">

            <p className="flex items-center justify-center sm:justify-start gap-1">
              <FiPhone className="text-green-500 dark:text-green-400" size={16} />
              <a href="tel:+919284380637" className="hover:text-blue-600 dark:hover:text-[#5c87f6]">
                +91 92843 80637
              </a>
            </p>

            <p className="flex items-center justify-center sm:justify-start gap-1">
              <HiOutlineMail className="text-blue-500 dark:text-blue-400" size={16} />
              <a href="mailto:pradipchoudhari937@gmail.com" className="underline hover:text-blue-600 dark:hover:text-[#5c87f6]">
                pradipchoudhari937@gmail.com
              </a>
            </p>

          </div>

        </div>

      </div>

      <p className="mt-8 text-gray-700 dark:text-gray-300 
                    text-base sm:text-lg leading-relaxed 
                    text-center sm:text-left font-inter
                    space-y-6">
        <span className="block">
          Hello 👋🏼 I’m Pradip, a passionate backend developer with <span className="font-semibold text-blue-600 dark:text-[#5c87f6]">6.6+ years</span> of experience in building scalable microservice-based systems using
          <span className="mx-1 px-2 py-0.5 rounded bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 font-medium">Java</span> &
          <span className="mx-1 px-2 py-0.5 rounded bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400 font-medium">Spring Boot</span>.
        </span>

        <span className="block">
          I’ve worked on upgrading and enhancing enterprise systems like Pay360 and streamlining compliance and movement tracking in the NIFAIS project. My toolset includes Java 8/11, Spring Boot, Spring Security, Hibernate, JPA, Kafka, AWS , Docker, Kubernetes, Terraform, Jenkins, SonarQube, JUnit, Mockito, Oracle, MySQL, and Angular 16. I enjoy transforming business requirements into scalable, well-tested backend APIs and robust systems using modern development practices.
        </span>

        <span className="block">
          Explore my
          <a href="#skills" className="inline-flex items-center mx-1.5 px-2 py-0.5 rounded
                 bg-blue-50/50 dark:bg-blue-500/10 
                 text-blue-800 dark:text-blue-400
                 border border-blue-100/50 dark:border-blue-500/20
                 group cursor-pointer
                 hover:scale-105 transition-all duration-200">
            <span className="mr-1">{"<Skills/>"}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">↓</span>
          </a>

          <a href="#experience" className="inline-flex items-center mx-1.5 px-2 py-0.5 rounded
                 bg-purple-50/50 dark:bg-purple-500/10 
                 text-purple-800 dark:text-purple-400
                 border border-purple-100/50 dark:border-purple-500/20
                 group cursor-pointer
                 hover:scale-105 transition-all duration-200">
            <span className="mr-1">{"<Experience/>"}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">↓</span>
          </a>

          <a href="#projects" className="inline-flex items-center mx-1.5 px-2 py-0.5 rounded
                 bg-green-50/50 dark:bg-green-500/10 
                 text-green-800 dark:text-green-400
                 border border-green-100/50 dark:border-green-500/20
                 group cursor-pointer
                 hover:scale-105 transition-all duration-200">
            <span className="mr-1">{"<Projects/>"}</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">↓</span>
          </a>

          to see what I’ve been building!
        </span>
      </p>
    </div>
  );
}
