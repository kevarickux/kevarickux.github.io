export function Hero() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl">
            Creative UI/UX Designer
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-xl border-b border-gray-300 pb-2 w-fit">About</h2>
            <p className="text-gray-600 leading-relaxed">
            I'm a passionate aspiring UI/UX designer with a strong interest in creating clean, 
            user-friendly digital experiences. I specialize in using Figma to design intuitive 
            interfaces and am currently building my skills in UX research, responsive design, 
            and interaction prototyping.
            </p>
            <p className="text-gray-600 leading-relaxed">
            My approach focuses on understanding real user needs and solving problems through simple, 
            thoughtful design. I’m eager to grow by working on real projects, collaborating with teams, 
            and continuously improving through feedback and practice.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://i.imgur.com/ndhneYj.png"
              alt="UI/UX Designer Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}