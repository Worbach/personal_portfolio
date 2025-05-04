import {RevealOnScroll} from "../RevealOnScroll.jsx";


export const Home = () => {
    return (
        <section id="home"
                 className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm William Orbach 👋
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I am a full-stack developer with a passion for building clean, scalable web 
                applications. My focus is on delivering high-performance solutions that provide a 
                seamless and engaging user experience.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <a href="#projects"
                       className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition
                    relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>

                    <a href="#contact"
                       className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all
                        duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                    <a class="btn content-download button-main button-scheme" href="/src/WillO_Resume.pdf" download="">
                    <button type="button" className="border border-blue-500/50 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right py-3 px-6 rounded font-medium transition-all
                        duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 cursor-pointer">
                            Download CV
                    </button>
                    </a>
                    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}