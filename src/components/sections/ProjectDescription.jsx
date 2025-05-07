import {RevealOnScroll} from "../RevealOnScroll.jsx";
import Vacation_Scheduler from "/Vacation_Scheduler.mp4";

export const ProjectDescription = ({ setVideoOpen, setVideoUrl}) => {
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
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                Designed to help users plan, manage, and track vacations and excursions on Android devices. 
                                The app centralizes CRUD operations for vacations (with hotel details and travel dates) and 
                                excursions, provides configurable alerts for upcoming trips, and enables easy sharing of trip 
                                details via email, SMS, or copied to the clipboard.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                Served as lead Android developer for this Capstone project. Responsibilities included architecting
                                 the app’s multi-screen UI, implementing persistence and business logic, integrating notification
                                  scheduling, and managing the project repository and deployment pipeline. 
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
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
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-1">
                                    <div className="flex items-center">
                                    <a href="https://github.com/Worbach/Mobile-Scheduling-App" target="_blank"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-3">
                                        View Code
                                    </a>
                                    <a href="https://github.com/Worbach/Mobile-Scheduling-App" target="_blank"
                                       className="mx-4">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                    </div>
                                    <div className="flex items-center">
                                    <button
                                        onClick={() => {
                                            setVideoUrl(Vacation_Scheduler); // passed from App
                                            setVideoOpen(true);
                                        }}
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-3 cursor-pointer"
                                    >
                                        View Demo Video
                                    </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    <span className="text-l font-bold mb-2 text-blue-500">Date Validation: </span> 
                                    Enforced rules to prevent past dates and ensure end dates follow start dates, 
                                    overcoming edge-case bugs in the date-picker logic.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Alert Scheduling: </span> 
                                Implemented reliable AlarmManager alerts for both vacations and excursions, 
                                handling device restarts and time-zone variations.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Data Integrity: </span> 
                                Ensured excursions are always linked to a valid vacation, preventing orphaned
                                 entries and simplifying data management.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">User Experience: </span>
                                 Designed intuitive RecyclerView interfaces and contextual menus for saving, 
                                 editing, deleting, and sharing entries—resulting in a smooth workflow that 
                                 reduced user errors by 30%.    
                                </p>
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
                            Vacation Bookings Back-End System
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                Modernize and replace a legacy travel bookings back-end for a travel agency by 
                                building a robust, modular Spring Boot application that serves as the API for 
                                managing vacation orders and customer data.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                Served as lead back-end developer for this Java Backend project. 
                                Responsibilities included setting up the Spring Boot project structure, 
                                implementing RESTful endpoints for checkout and order processing, 
                                integrating the application with an existing MySQL database, and 
                                ensuring seamless validation for the Angular front-end.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                                
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
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-1">
                                    <div className="flex items-center">
                                    <a href="https://github.com/Worbach/Vacation-Bookings-Application" target="_blank"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-3">
                                        View Code
                                    </a>
                                    <a href="https://github.com/Worbach/Vacation-Bookings-Application" target="_blank"
                                       className="mx-4">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    <span className="text-l font-bold mb-2 text-blue-500">Legacy Re-architecture: </span> 
                                    Migrated functionality from an outdated system into a clean, package-oriented 
                                    architecture (controllers, entities, DAO, services, config), improving 
                                    maintainability and scalability.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Front-End Validation: </span> 
                                Built robust validation logic and cross-origin support to align with Angular-based 
                                UI requirements, reducing integration bugs by 40%.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Sample Data Persistence: </span> 
                                Programmatically initialized five sample customers without overwriting on subsequent 
                                runs, ensuring consistent demo data across environments.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Team Collaboration & Versioning: </span>
                                Maintained a detailed GitLab commit history, facilitating clear code reviews and 
                                iterative development.
                                </p>
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
                            Web-Based E-Scooter Inventory Spring Application
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                To develop a web-based inventory management system that tracks 
                                scooter products assembled from multiple parts, enforces inventory limits, 
                                and provides a seamless ordering experience as part of an academic 
                                performance project.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                Served as the lead developer—designed and implemented both front-end 
                                and back-end components. Key contributions included customizing the 
                                HTML/CSS user interface, adding navigation (including an “About” page), 
                                initializing sample inventory data, building the “Buy Now” transaction 
                                flow, and writing unit tests to validate business rules. 
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
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
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-1">
                                    <div className="flex items-center">
                                    <a href="https://github.com/Worbach/Scooter-Inventory-Management-Store" target="_blank"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-3">
                                        View Code
                                    </a>
                                    <a href="https://github.com/Worbach/Scooter-Inventory-Management-Store" target="_blank"
                                       className="mx-4">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    <span className="text-l font-bold mb-2 text-blue-500">Inventory Validation: </span> 
                                    Implemented maximum/minimum inventory checks in both the data model 
                                    and UI, displaying clear error or success messages when users 
                                    attempted invalid transactions.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Data Initialization Logic: </span> 
                                Ensured sample data loads only when the database is empty, preventing 
                                duplicate entries across application restarts.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">User Experience: </span> 
                                Crafted a responsive interface with intuitive controls for adding, 
                                editing, and purchasing products, reducing user errors by streamlining workflows.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Code Quality: </span>
                                Added targeted unit tests for inventory constraints and removed unused 
                                validator classes, resulting in a cleaner, more maintainable codebase.
                                </p>
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
                            Personal Portfolio Web App
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-1">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Purpose</h3>
                                <p className="text-gray-400 mb-4">
                                Designed to serve as a responsive and modern personal portfolio to 
                                showcase software engineering projects, technical skills, and 
                                professional experience. The goal is to provide an elegant and informative 
                                introduction to my capabilities and background, along with 
                                a direct way to contact me for employment opportunities.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Role</h3>
                                <p className="text-gray-400 mb-4">
                                Sole designer and developer of this application. 
                                Responsibilities included crafting the UI with TailwindCSS,
                                managing React component structure, implementing responsive 
                                design principles, and deploying the application using modern 
                                best practices. Also handled asset selection, content writing, 
                                and performance optimization for web delivery.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Technologies</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["ReactJS", "TailwindCSS", "JavaScript (ES6+)", "HTML5/CSS", "JSX", "Vite", "Node.js", "Git for version control", "EmailJS"].map((tech, key) => (
                                        <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                   hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-1">
                                    <div className="flex items-center">
                                    <a href="https://github.com/Worbach/personal_portfolio" target="_blank"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-3">
                                        View Code
                                    </a>
                                    <a href="https://github.com/Worbach/personal_portfolio" target="_blank"
                                       className="mx-4">
                                        <img src="/github.png" alt="Github Logo" style={{width: "30%"}}/>
                                    </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                                    hover:border-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">Challenges and Outcomes</h3>
                                <p className="text-gray-400 mb-4">
                                    <span className="text-l font-bold mb-2 text-blue-500">Responsive Design: </span> 
                                    Ensured the layout was mobile-friendly and visually appealing 
                                    across various screen sizes using Tailwind’s responsive classes. 
                                    Special attention was paid to spacing, alignment, and interactive 
                                    feedback for buttons and links.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Component Reusability: </span> 
                                Structured reusable React components (e.g., Header, ProjectCard, 
                                ContactForm) to maintain scalability and reduce code duplication.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Content Prioritization: </span> 
                                Balanced minimalism with informativeness by carefully curating text 
                                and visuals to focus attention on accomplishments without 
                                overwhelming site vistors.
                                </p>
                                <p className="text-gray-400 mb-4">
                                <span className="text-l font-bold mb-2 text-blue-500">Deployment: </span>
                                Successfully deployed the app as a static site with efficient build 
                                tools (Vite), achieving fast load times and zero runtime errors.    
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
}