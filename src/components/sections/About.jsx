import {RevealOnScroll} from "../RevealOnScroll.jsx";


export const About = () => {

    const frontendSkills = [
        "React",
        "Angular",
        "JavaScript",
        "TailwindCSS",
        "HTML/CSS"
        
    ];

    const backendSkills = [
        
        "Java",
        "Python",
        "AWS",
        "Spring Boot",
        "Node.js",
        "MySQL"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-traanslate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    Hi, my name is <span className="text-l font-bold mb-2 text-blue-500">William Orbach</span>—a recent Software Engineering graduate with a strong passion for building thoughtful, user-centered applications. My academic journey focused heavily on Java and Spring Boot, but I’ve also worked across the full stack, developing both web and mobile applications through hands-on projects.
                    </p>

                    <p className="text-gray-300 mb-6">
                    I enjoy turning ideas into practical, scalable software—whether it's a travel 
                    itinerary planner or a custom booking system. I’m particularly interested in 
                    clean architecture, intuitive user experiences, and leveraging modern tools to 
                    solve real-world problems.
                    </p>

                    <p className="text-gray-300 mb-6">
                    I’m currently looking for junior or entry-level roles where I can grow as a 
                    developer, collaborate with a team, and continue learning in a professional 
                    setting. When I’m not coding, you’ll probably find me exploring new places, 
                    trying new food, lifting at the gym, or digging into self-improvement
                    books.
                    </p>

                    <p className="text-gray-300 mb-6">
                    Let’s build something great together.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                            <span className="font-bold"> B.S. in Software Engineering</span> - Western Governors University
                            </li>
                            <li>
                                <span className="font-bold"><strong>A.A.S Allied Health</strong></span> - Middlesex College
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> 
                                Event Ambassador @ Topgolf
                                </h4>
                                <p>
                                Communicated proactively to resolve issues and supported event 
                                execution using strong organizational and project management skills 
                                in fast-paced, team environments.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold"> Tech Support Associate @ CGS </h4>
                                <p>
                                Delivered efficient IT support by resolving technical issues, 
                                documenting solutions, and communicating clearly to ensure prompt 
                                and accurate problem resolution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}