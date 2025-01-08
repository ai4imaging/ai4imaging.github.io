import React from 'react';
import { Carousel } from 'antd';
import { Card } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Meta } = Card;

// 定义卡片数据列表
const cardData = [
  {
    title: 'Data Assimilation using Flow-based Generative Models',
    image: "./rawdata/application_fluid.gif"
  },
  {
    title: '3D Astrophotography of Space Stations',
    image: './rawdata/project_satellite.png',
  },
  {
    title: 'Neural Operators for Wave Imaging',
    image: '/rawdata/project_neural.png',
  },
  {
    title: '3D Reconstruction from Unposed Images',
    image: './rawdata/project_3dgeneration.gif',
  },
  {
    title: 'Learning Clean Diffusion Models from Corrupted Observations',
    image: './rawdata/project_diffusion.gif',
  },
  {
    title: "Imaging a Molecule's 3D Dynamics with Electron Microscopy",
    image: './rawdata/project_recover.gif',
  },
  {
    title: 'Imaging Galactic Center Black Hole',
    image: './rawdata/project_imaging.png',
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
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SliderProject = () => (
  <Carousel autoplay className='m-5' {...settings}>
    {cardData.map((item, index) => (
      <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
        <Card
            className='p-3 m-3'
          hoverable
          style={{
            width: 220,
            height: 320,
            textAlign: 'center',
          }}
          cover={<img alt={item.title} src={item.image} />}
        >
          <div className='p-0'>{item.title}</div>
        </Card>
      </div>
    ))}
  </Carousel>
);

export default SliderProject;