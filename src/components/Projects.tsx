import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const projects = [
    {
      id: 1,
      title: 'Project Hub',
      image: image1,
      link: image2, // ✅ Added live link here
    },
    {
      id: 2,
      title: 'Ecommerce App',
      image: './src/assets/image2.png',
      link: 'https://www.figma.com/proto/c2vf2HE58MR2XsNiFVSVse/Practice?node-id=48-9&t=CcEy9gBSo39AJxeZ-1',
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="bg-orange-500 py-16 px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-2">Projects</h2>
        <p className="text-white mb-10  text-2xl">
          Explore some of the ideas I’ve brought to life — where creativity meets functionality.
        </p>
        <div className="grid gap-8 md:grid-cols-2 justify-items-center">
          {projects.map(({ id, title, image, link }) => (
            <div
              key={id}
              className="relative bg-purple-500 text-white p-4 rounded-lg shadow-lg max-w-xs hover:scale-105 transition"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-400 text-black font-bold rounded-full flex items-center justify-center text-xl border-4 border-white shadow-md z-10">
                {id}
              </div>
              <h3 className="mt-8 mb-4 text-xl font-semibold">{title}</h3>
              <img src={image} alt={title} className="rounded-md mx-auto mb-4" />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-6 py-2 font-semibold rounded transition hover:bg-black hover:text-white"

              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
