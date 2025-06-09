import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import me from '../../assets/me.svg';

export function Home() {
  return (
    <div className="text-white bg-gradient-to-b from-slate-800 via-slate-950 to-slate-900 min-h-screen">
      <Header />

      <section id="about" className="container mx-auto flex flex-col-reverse text-justify max-md:gap-y-10 md:grid md:grid-cols-2 items-center p-10  py-20">
        <div className="flex flex-col justify-center gap-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl">Hi, i'm Pedro Franco<br /><span className="text-2xl">Front-end Developer</span></h2>
          <p className="font-light italic">I'm Pedro Franco, a Front-End developer passionate about creating interactive interfaces using HTML, CSS, JavaScript, ReactJS, React Native, and TypeScript. I focus on building intuitive, efficient, and modern solutions through continuous learning.</p>

          <div className="flex flex-row gap-6">
            <a href="" className="text-white font-medium bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-2">Hire me!</a>
            <a href="#" className="max-sm:hidden relative group overflow-hidden text-white border-2 border-red-500 px-8 py-2 font-medium">
              <span className="absolute inset-0 bg-red-500 transition-all duration-300 transform translate-x-[-100%] group-hover:translate-x-0 z-0"></span>
              <span className="relative z-10">My works</span>
            </a>
          </div>
        </div>
        
        <div className="flex justify-end items-center">
          <img
            src={me}
            alt="Minha foto"
            className="rounded-full h-80"
          />
        </div>
      </section>

      <section>
        <div className="container mx-auto p-10">
          <div className="flex justify-between items-center ">
            <p className="text-lg">Featured works</p>
            <a href="" className="text-blue-400 text-sm hover:underline">See all</a>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 mt-10 gap-6">
            <div className="flex flex-col gap-y-6 border border-slate-100 rounded-2xl">
              <img 
                src="data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20300%2094.33'%3e%3cdefs%3e%3cclipPath%20id='clip-path'%3e%3cpath%20d='M52.41,12.33A37.34,37.34,0,1,1,15.07,49.67,37.33,37.33,0,0,1,52.41,12.33Z'%20fill='none'%20clip-rule='evenodd'/%3e%3c/clipPath%3e%3c/defs%3e%3ctitle%3eO%3c/title%3e%3cg%20clip-path='url(%23clip-path)'%3e%3cpath%20d='M44.51,45.09c-2.42-1.64-3.09-2.33-5.34-3.79C35.66,35.48,28.3,31.94,21,28.45c3.11-4.86,8.12-8.7,14-12,7.37,7.84,10.5,17.06,9.49,28.69Z'%20fill='%23b2f0d9'%20stroke='%23b2f0d9'%20stroke-miterlimit='22.93'%20stroke-width='0.88'%20fill-rule='evenodd'/%3e%3cpath%20d='M44.47,45.8c.66-10.38.1-17.55-9.51-29.23,6.33-3.8,13-4.14,19.59-4.14C57.54,21.64,60.87,44,89.69,42l1.07,10.76c-32.84,23.57-36.43-.1-46.29-6.93Z'%20fill='%23ffac34'%20stroke='%23ffac34'%20stroke-miterlimit='22.93'%20stroke-width='0.88'%20fill-rule='evenodd'/%3e%3cpath%20d='M39.17,41.3C42.24,50.55,25.73,62.81,19.5,68c24,35.78,68.78,18.72,71.52-15.6C59.22,74.94,51.13,46.92,39.17,41.3Z'%20fill='%230b5fcf'%20fill-rule='evenodd'/%3e%3cpath%20d='M54.07,12.43C60,33.3,69.18,43.57,89.2,42A37.9,37.9,0,0,0,54.07,12.43Z'%20fill='%23ed6094'%20stroke='%23ed6094'%20stroke-miterlimit='22.93'%20stroke-width='0.88'%20fill-rule='evenodd'/%3e%3cpath%20d='M21.33,27.69C10.27,44.31,15.88,62.07,19.5,68c27.72-18.61,26.07-29.49,1.83-40.34Z'%20fill='%23fe0000'%20fill-rule='evenodd'/%3e%3c/g%3e%3cpath%20d='M129.57,77.87v-3h-6.21a7.65,7.65,0,0,1-5.63-2.15,7.92,7.92,0,0,1-2-5.71V41.87h13.82v-3H115.75V28.13h-3.06V38.89h-4v3h4V66.71a11.4,11.4,0,0,0,2.89,8.18q2.82,3,8.44,3Zm148.82,0V58.42a20.1,20.1,0,0,0-5.55-14.48,17.69,17.69,0,0,0-13.41-5.8,17.88,17.88,0,0,0-13.57,5.8,20.44,20.44,0,0,0-5.38,14.48A20.18,20.18,0,0,0,246,72.91a17.74,17.74,0,0,0,13.41,5.79A16.42,16.42,0,0,0,266.88,77c.28-.16.76-.5,1.45-1s1.45-1.08,2.28-1.74,1.67-1.35,2.52-2.07l2.19-1.82v7.53Zm-3.07-11L273,69c-.87.77-1.77,1.53-2.68,2.27s-1.76,1.41-2.57,2-1.37,1-1.76,1.2a13.54,13.54,0,0,1-3,1,17.37,17.37,0,0,1-3.51.33,14.83,14.83,0,0,1-10.89-5,16.88,16.88,0,0,1-4.79-12.31,17.35,17.35,0,0,1,4.79-12.39,14.65,14.65,0,0,1,10.89-5A14.5,14.5,0,0,1,271,46.41a18,18,0,0,1,4.37,12.05v8.42Zm-43.61,11V54.12a15.56,15.56,0,0,0-15.9-16,15.65,15.65,0,0,0-7.11,1.58,16.29,16.29,0,0,0-5.38,4.46V20.26h-3.07V77.87h3.15V54.59A13.72,13.72,0,0,1,207,44.83a11.87,11.87,0,0,1,8.94-3.71,11.63,11.63,0,0,1,8.85,3.8,13.39,13.39,0,0,1,3.65,9.67V77.87Zm-40.39,0V20.26H188V77.87ZM179.64,27.8a2.2,2.2,0,0,0-.74-1.74,2.75,2.75,0,0,0-1.74-.66,2.07,2.07,0,0,0-1.74.74,2.14,2.14,0,0,0-.74,1.66,2.51,2.51,0,0,0,.74,1.82,2.37,2.37,0,0,0,1.74.66,2.48,2.48,0,0,0,1.82-.74,2.38,2.38,0,0,0,.66-1.74Zm-.74,50.07v-39h-3.31v39ZM166.07,27.8a2.23,2.23,0,0,0-.74-1.74,2.79,2.79,0,0,0-1.74-.66,2.07,2.07,0,0,0-1.74.74,2.11,2.11,0,0,0-.75,1.66,2.48,2.48,0,0,0,.75,1.82,2.35,2.35,0,0,0,1.74.66,2.5,2.5,0,0,0,1.82-.74,2.38,2.38,0,0,0,.66-1.74Zm-.74,50.07v-39H162v39Zm-10.43-36v-3h-3.64a12,12,0,0,0-7,2.32A9.88,9.88,0,0,0,141.53,44c-.74,1.13-1.39,2.22-1.94,3.27V38.89h-3.07v39h3.07V57.51a17.3,17.3,0,0,1,3.64-11.17q3.56-4.47,8.36-4.47Z'%20fill-rule='evenodd'/%3e%3c/svg%3e" 
                alt="Logo do site triilha.com" 
                className="h-[100px] object-scale-down rounded-t-2xl bg-slate-100"
              />
              
              <div className="px-6 my-4 flex flex-col gap-y-2">
                <h3 className="font-semibold text-xl">Triilha</h3>
                <p className="italic text-justify">I built the Triilha website using ReactJS, TypeScript, TailwindCSS, and React Router DOM, focusing on performance, responsiveness, and reusable components. The goal was to create a blog with content about career and technology. I structured the layout to adapt well to different devices, keeping the code clean and scalable with modern front-end best practices.</p>
              </div>

              <div className="px-6 pb-4 flex flex-col gap-y-4">
                <a
                  target="_blank"
                  href="https://triilha.com"
                  className="bg-slate-600 hover:bg-slate-100 hover:text-slate-950 transition-all duration-300 px-8 py-2 font-medium text-center"
                >
                  Visit site
                </a>
                <p className="text-xs">Is a private project in github, you not can see the code, but you can see the site.</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 max-h-[600px] border border-slate-100 rounded-2xl">
              <img 
                src="https://www.minhamedicina.com/cdn/shop/files/LOGO_MINHAMEDICINA_10_0c28a328-2183-4489-96b0-1f8f1f4b3d6d_460x.png?v=1748003993" 
                alt="Logo do site minhamedicina.com" 
                className="h-[100px] object-scale-down rounded-t-2xl bg-slate-100"
              />
              
              <div className="px-6 my-4 flex flex-col gap-y-2">
                <h3 className="font-semibold text-xl">Minha medicina</h3>
                <p className="italic text-justify">I built Minha Medicina as an e-commerce site for medical students using Next.js, TypeScript, TailwindCSS, and CMS integration. The goal was to create a modern, responsive, and easy-to-navigate store with a scalable and modular structure. Performance and user experience were key priorities, from layout design to product organization across all pages.</p>
              </div>

              <div className="px-6 pb-4 flex flex-col gap-y-4">
                <a 
                  target="_blank" 
                  href="https://minhamedicina.com" 
                  className="bg-slate-600 hover:bg-slate-100 hover:text-slate-950 transition-all duration-300 px-8 py-2 font-medium text-center"
                >
                  Visit site
                </a>
                <p className="text-xs">Is a private project in github, you not can see the code, but you can see the site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}