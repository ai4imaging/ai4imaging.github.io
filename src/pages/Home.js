import Slider from "../components/sliderProject";
import NewsPanel from "../components/newsPanel";

const Home = () => {
    return (
        <div>
            <div className="relative h-auto overflow-hidden">
              <img src="./images/banner2.png" alt="Full Width" className="w-full" />
              {/* <img 
                src="./images/banner2.png" 
                alt="Full Width" 
                className="w-full h-screen object-cover object-center" 
              /> */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                <div className="w-4/5 text-center">
                  {/* 第一段：始终显示 */}
                  <h1 className="text-sm md:text-4xl font-bold leading-tight md:leading-normal">
                    Welcome to PKU Computational Scientific Imaging Lab!
                  </h1>

                  {/* 第二段：在 lg 屏幕显示 */}
                  <p className="justify-last-center text-sm md:text-xl mt-4 leading-tight md:leading-normal hidden lg:block">
                    Computational Imaging is a vibrant and rapidly growing research area at the intersection of computer science, physical science, and instrumentation. Our group pioneers the development of advanced algorithms and innovative hardware to facilitate future scientific imaging at extreme scales. Our scope of work extends across multiple scientific disciplines, ranging from biomedicine to physical sciences. Our research is inherently interdisciplinary and our extensive expertise bridges optics, deep learning, computer vision/graphics, statistical inference, and hardware design.
                  </p>

                  {/* 第三段：在 lg 屏幕显示 */}
                  <p className="justify-last-center text-sm md:text-xl leading-tight md:leading-normal">
                    Our group is led by He Sun, Assistant Professor of Biomedical Engineering & Biophysics, and affiliated with the National Biomedical Imaging Center (NBIC) at Peking University. Please see our Contact page for more information or opportunities page for potential research positions.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-4/5 mx-auto">
                <h2 className="mt-10 text-lg md:text-2xl">Project Highlights</h2>
                <Slider />
            </div>

            <div className="w-4/5 mx-auto mt-8 mb-20">
                <h2 className="mt-10 text-lg md:text-2xl">News</h2>
                <NewsPanel />
            </div>
        </div>
    );
};

export default Home;