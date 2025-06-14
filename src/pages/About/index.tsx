import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export function About() {
  return(
    <div className="text-white bg-gradient-to-b from-slate-800 via-slate-950 to-slate-900 min-h-screen">
      <Header />

      <section className="container mx-auto p-10">
        <h1 className="text-3xl font-semibold mb-6">About Me</h1>
        <p className="text-lg font-light">
          I'm Pedro Franco, a Front-End developer passionate about creating interactive interfaces using HTML, CSS, JavaScript, ReactJS, React Native, and TypeScript. I focus on building intuitive, efficient, and modern solutions through continuous learning.
        </p>
        <p className="mt-4 text-lg font-light">
          My journey in web development has been driven by a desire to create engaging user experiences and solve real-world problems through technology. I enjoy collaborating with teams to bring ideas to life and am always eager to learn new skills and technologies.
        </p>
      </section>
      
      <Footer />
    </div>
  )
}