import React from 'react';
import { Carousel } from 'antd';
import { Card } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

// 定义卡片数据列表
const cardData = [
  {
    title: 'Vision-Language Models as Semantic and Spatial Critics for 3D Generation',
    image: "./rawdata/project_vlm3d.jpeg",
    url: "https://arxiv.org/abs/2511.14271"
  },
  {
    title: 'Masked Auto-Regressive Variational Acceleration',
    image: "./rawdata/project_marval.jpeg",
    url: "https://arxiv.org/abs/2511.15190"
  },
  {
    title: 'Real-Time Video Inverse Problem Solver with Distilled Diffusion Prior',
    image: "./rawdata/project_instantvir.jpeg",
    url: "https://arxiv.org/abs/2511.14208"
  },
  {
    title: 'Data Assimilation using Flow-based Generative Models',
    image: "./rawdata/application_fluid.gif",
    url: "https://arxiv.org/abs/2501.16642"
  },
  {
    title: '3D Astrophotography of Space Stations',
    image: './rawdata/project_satellite.png',
    url: "https://ai4scientificimaging.org/3DSatellites/"
  },
  {
    title: 'Neural Operators for Wave Imaging',
    image: '/rawdata/project_neural.png',
    url: "https://open-waves-usct.github.io/"
  },
  {
    title: '3D Reconstruction from Unposed Images',
    image: './rawdata/project_3dgeneration.gif',
    url: "https://ai4scientificimaging.org/latentdem/"
  },
  {
    title: 'Learning Clean Diffusion Models from Corrupted Observations',
    image: './rawdata/project_diffusion.gif',
    url: "https://arxiv.org/abs/2407.01014"
  },
  {
    title: "Imaging a Molecule's 3D Dynamics with Electron Microscopy",
    image: './rawdata/project_recover.gif',
    url: "https://ai4scientificimaging.org/tempor"
  },
  {
    title: 'Diverse and High-Quality Text-to-3D Generation',
    image: './rawdata/project_dive3d.png',
    url: "https://arxiv.org/abs/2506.13594"
  },
    {
    title: 'Distilling One-step Generation Model',
    image: './rawdata/project_uniinstruct.png',
    url: "https://arxiv.org/abs/2505.20755"
  },
    {
    title: 'Imaging Galactic Center Black Hole',
    image: './rawdata/project_imaging.png',
    url: "https://eventhorizontelescope.org/blog/astronomers-reveal-first-image-black-hole-heart-our-galaxy"
  },
  
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
        breakpoint: 2200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
    },
    {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
    },
    {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const SliderProject = () => (
  <Carousel autoplay className="m-5 custom-carousel" {...settings}>
    {cardData.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-start w-full h-full"
      >
        <Link to={item.url} target="_blank" className="block">
          <div className="w-[120px] md:w-[180px]">
            {/* 正方形图片显示区域 */}
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 文字标题 */}
            <div className="text-sm text-center text-black mt-2 px-2 leading-tight">
              {item.title}
            </div>
          </div>
        </Link>
      </div>
    ))}
  </Carousel>
);




export default SliderProject;