import type { BlogItem } from "../pages/api/trpc/[trpc]";
import BooksFeed from "./books-feed";
import MediumFeed from "./medium-feed";

type HomeProps = {
    mediumData: BlogItem[]
    booksData: String[]
}

const Home = ({ mediumData, booksData } : HomeProps) => {
    return (
        <>    
          <div className="p-8 w-full flex flex-row gap-4 font-mono fomt-bold text-xl justify-end items-center fixed top-0">
            <a href="#about" className="hover:underline hidden md:block">ABOUT</a>
            <a href="#projects" className="hover:underline hidden md:block">PROJECTS</a>
            <a href="#books" className="hover:underline hidden md:block">BOOKS</a>
            <a href="#blog" className="hover:underline hidden md:block">BLOG</a>
            <a href="https://github.com/louisjdcharles" aria-label="github"><img src="/github-icon.svg" alt="github" className="sm:w-5 sm:h-5 w-7 h-7"/></a>
            <a href="https://www.linkedin.com/in/louisjdcharles/" aria-label="linkedin"><img src="/linkedin-icon.svg" alt="linkedin" className="sm:w-5 sm:h-5 w-7 h-7"/></a>
          </div>
    
          <main className="bg-gray-100">
            <div className="h-screen w-full p-4">
              <div className="h-full w-full border-black border overflow-y-scroll hide-scrollbar scroll-smooth">
    
            <div className="h-full font-mono font-bold flex justify-center items-center">
              <div>
                <h1 className="text-4xl md:text-8xl">LOUIS CHARLES</h1>
                <div className="flex flex-col md:flex-row">
                  <div>
                    <span className="md:hidden">&bull;&nbsp;</span><span>PROGRAMMER&nbsp;</span>
                  </div>
                  <div>
                    <span>&bull;&nbsp;</span><span>STUDENT&nbsp;</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div id="about" className="h-full font-mono p-8 flex justify-center items-center  font-bold text-justify">
              <div className="md:w-3/5 lg:w-2/5 w-full space-y-4">
                <h2 className="text-4xl border-b border-black">ABOUT</h2>
                <p className="text-sm md:text-base">
                  Hi, I&apos;m Louis, a student based in the United Kingdom.
                  I am applying to study a degree in computer science at the Universities of
                  Cambridge, Bristol, Bath, Warwick and Imperial College London.
                </p>
                <p className="text-sm md:text-base">
                  I am passionate about using both technology and creativity to solve
                  interesting problems, and hope to found a company that does
                  exactly that in future. 
                </p>
              </div>
            </div>
    
            <div id="projects" className="h-full font-mono font-bold p-8 flex justify-center items-center">
              <div className="md:w-3/5 lg:w-2/5 w-full space-y-4">
                <h2 className="text-4xl border-b border-black">PROJECTS</h2>
                <p className="text-sm md:text-base">I am currently working on <a className="underline" href={"https://bopify.app"}>bopify.app</a>,
                a web app allowing large numbers of people to collaborate on a single spotify queue
                </p>
                <p className="text-sm md:text-base">
                  I am also working on a 2D game engine written in C++ using OpenGL for rendering
                </p>
                <p className="text-sm md:text-base">
                  In 2019, I worked on the game <a className="underline" href={"https://ygd.bafta.org/competition/competition-news/2019/ladder-climb"}>Ladder Climb</a> which
                  was nominated for a Bafta Young Game Designers award
                </p>
                <p className="text-sm md:text-base">
                  For details on my other projects, go to my <a className="underline" href="https://github.com/louisjdcharles">GitHub page</a>
                </p>
                <p className="text-sm md:text-base">
                  For more details about my current and future projects, see this <a className="underline" href="https://github.com/louisjdcharles">Notion page</a>
                </p>
              </div>
            </div>
    
            <div id="books" className="h-full font-mono font-bold p-8 flex justify-center items-center">
              <div className="md:w-3/5 lg:w-2/5 w-full">
                <h2 className="text-4xl border-b border-black">BOOKS</h2>
                <BooksFeed data={booksData} className="text-sm md:text-base"/>
              </div>
            </div>
    
            <div id="blog" className="h-full font-mono font-bold p-8 flex justify-center items-center">
              <div className="md:w-3/5 lg:w-2/5 w-full">
                <h2 className="text-4xl border-b border-black">BLOG</h2>
                <MediumFeed data={mediumData} className="text-sm md:text-base"/>
              </div>
            </div>
              </div>
            </div>
    
            
          </main>
        </>
      );
}

export default Home