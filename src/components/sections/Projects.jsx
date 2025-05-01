import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Projects = () => {
    return (
        <section id="projects"
                 className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center"
                >
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Vacation Scheduler Android Application</h3>
                        <p className="text-gray-400 mb-4">
                        A mobile app designed for Android devices that allows users to plan, manage, and track vacations.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Android Studio", "Java", "Room Database (SQLite)", "XML layouts", "GitLab for version control", "Gradle for build configuration"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                            {tech}
                        </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#firstproject"
                               className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                            <a href="https://github.com/Worbach/Mobile-Scheduling-App" target="_blank">
                                <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Vacation Bookings Back-End System</h3>
                        <p className="text-gray-400 mb-4">
                        A robust, modern, modular Spring Boot API used to replace a legacy travel bookings back-end by managing vacation orders and customer data for a travel agency.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java", "Spring Boot (Spring Data JPA & Spring Data REST)", "MySQL Connector/J", "Lombok","RESTful APIs", "GitLab for version control", "Maven for build configuration"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                            {tech}
                        </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#secondproject"
                               className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                            <a href="https://github.com/Worbach/Vacation-Bookings-Application" target="_blank">
                                <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Web-Based E-Scooter Inventory Spring Application</h3>
                        <p className="text-gray-400 mb-4">
                        A web-based inventory management system for tracking scooter products, enforcing inventory limits, and streamlining ordering for companies.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java", "Spring Framework (Spring Boot)", "HTML/CSS", "JavaScript", "JUnit for unit testing", "Maven for build configuration"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                            {tech}
                        </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#thirdproject"
                               className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                            <a href="https://github.com/Worbach/Scooter-Inventory-Management-Store" target="_blank">
                                <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
                        <p className="text-gray-400 mb-4">
                            A React-based single web-page tailored to yours truly using TailwindCSS to help showcase the constant pursuit of skills earned through project-based learning.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript", "ReactJS", "Vite", "HTML/CSS", "TailwindCSS", "EmailJS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                            {tech}
                        </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#fourthproject"
                               className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project
                            </a>
                            <a href="https://github.com/Worbach/personal_portfolio" target="_blank">
                                <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}