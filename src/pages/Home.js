import Slider from "../components/sliderProject";
import NewsPanel from "../components/newsPanel";
import React from 'react';
import { Carousel } from 'antd';

// Banner轮播数据
const bannerData = [
  {
    image: "./images/home1.png",
    title: "Predictive Focal-Plane Adaptive Optics for Deep Fluorescent Microscopy",
  },
  {
    image: "./images/home2.jpg",
    title: "Generative neural physics enables quantitative volumetric ultrasound of tissue mechanics",
  },
  {
    image: "./images/home3.gif",
    title: "High-Resolution Volumetric Label-Free Imaging of Mouse Oocytes via Inverse Scattering",
  },
  {
    image: "./images/banner2.png",
    title: "Astronomers Reveal First Image of the Black Hole at the Heart of Our Galaxy",
  }
];

const Home = () => {
    return (
        <div>
            {/* Banner轮播区域 - 两侧留白 */}
            <div className="relative h-auto overflow-hidden mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <Carousel autoplay autoplaySpeed={5000} effect="fade" arrows={false} className="custom-banner-carousel">
                {bannerData.map((item, index) => (
                  <div key={index} className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                    {/* 背景：使用原图的模糊填充，保证主体图片完整展示 */}
                    <div
                      className="absolute inset-0 bg-center bg-cover filter blur-md transform scale-100"
                      style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    {/* 半透明遮罩以提升文字可读性 */}
                    <div className={item.image && item.image.includes('home2.jpg') ? "absolute inset-0 bg-black bg-opacity-45" : "absolute inset-0 bg-black bg-opacity-30"} />

                    {/* 前景：完整展示图片（contain）与文字 */}
                    <div className="relative z-20 w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center max-w-[1000px]">
                        <img
                          src={item.image}
                          alt={`Banner ${index + 1}`}
                          className="object-contain max-h-full max-w-full mx-auto block"
                        />
                        {/* 文本覆盖在图片中央 */}
                        <div className="absolute inset-0 flex items-center justify-center px-4">
                          <div className={`text-center ${item.image && item.image.includes('home2.jpg') ? 'text-white' : 'text-white'}`}>
                            <h1 className={`text-lg md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-md ${item.image && item.image.includes('home2.jpg') ? '' : ''}`} style={item.image && item.image.includes('home2.jpg') ? { WebkitTextStroke: '1px black', textStroke: '1px black' } : {}}>
                              {item.title}
                            </h1>
                            {item.subtitle && (
                              <p className="hidden md:block text-sm md:text-lg mt-3 leading-relaxed">
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* 实验室介绍段落：插入在轮播与 Project Highlights 之间 */}
            <div className="w-4/5 mx-auto mt-8 mb-8 text-center text-sm md:text-base leading-relaxed text-gray-800">
              <p className="mb-4">
                Computational Imaging is a vibrant and rapidly growing research area at the intersection of computer science, physical science, and instrumentation. Our group pioneers the development of advanced algorithms and innovative hardware to facilitate future scientific imaging at extreme scales. Our scope of work extends across multiple scientific disciplines, ranging from biomedicine to physical sciences. Our research is inherently interdisciplinary and our extensive expertise bridges optics, deep learning, computer vision/graphics, statistical inference, and hardware design.
              </p>
              <p>
                Our group is led by He Sun, Assistant Professor of Biomedical Engineering & Biophysics, and affiliated with the National Biomedical Imaging Center (NBIC) at Peking University. Please see our Contact page for more information or opportunities page for potential research positions.
              </p>
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