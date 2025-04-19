import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const ProjectDescription = () => {
    return (
        <>
            <section id="firstproject"
                     className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center"
                        >
                            Vacation Scheduler Android Application
                        </h2>
                        <div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center">
                                    <a href="https://github.com/Worbach"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View GitHub
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank"
                                    className="mx-4">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            <section id="secondproject"
                     className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                                       text-transparent text-center"
                        >
                            Back-End Application Programming
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            <section id="thirdproject"
                     className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center"
                        >
                            Web-Based Sprint Inventory Application
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            <section id="fourthproject"
                     className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
                text-transparent text-center"
                        >
                            Back-End Application Programming
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    Scalable cloud infrastructure management with real-time monitoring and automated
                                    scaling.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
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
                                    <a href="https://differentpartofwebsite.tech"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project
                                    </a>
                                    <a href="https://github.com/Worbach" target="_blank">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
}