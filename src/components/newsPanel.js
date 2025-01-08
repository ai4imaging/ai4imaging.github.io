import React from 'react';
import { List } from 'antd';
import { Button } from 'antd';
import { useState } from 'react';


const newsItems = [
  {
    date: 'Jan  2025',
    content: 'He Sun is co-organizing the Machine Learning for Scientific Imaging Conference (MLSI) at Electronic Imaging Symposium 2025.',
    links: [
      { href: 'https://www.imaging.org/IST/IST/Conferences/EI/EI2025/Conference/C_MLSI.aspx', text: '[Program]' },
    ],
  },
  {
    date: 'Nov 2024',
    content: 'New paper Reconstructing Satellites in 3D from Amateur Telescope Images (led by Zhiming)',
    links: [
      { href: 'https://arxiv.org/pdf/2404.18394', text: '[Paper]' },
    ],
  },
  {
    date: 'Oct 2024',
    content: 'New paper OpenWaves: A Large-Scale Anatomically Realistic Ultrasound-CT Dataset for Benchmarking Neural Wave Equation Solvers (led by Zhijun & Youjia & Hao)',

  },
  {
    date: 'Oct 2024',
    content: 'New paper Blind Inversion using Latent Diffusion Priors (led by Weimin & Siyi)',
    links: [
      { href: 'https://arxiv.org/pdf/2407.01027', text: '[Paper]'},
      { href: 'https://ai4scientificimaging.org/latentdem/', text: '[Website]'},
    ],
  },
  {
    date: 'Sep 2024',
    content: 'New paper An Expectation-Maximization Algorithm for Training Clean Diffusion Models from Corrupted Observations gets accepted for publication at NeurIPS 2024.',
    links: [
      { href: 'https://arxiv.org/abs/2407.01014', text: '[Paper]' },
      { href: 'https://github.com/weiminbai/EMDiffusion', text: '[Code]' },
    ],
  },
  {
    date: 'Aug 2024',
    content: 'Weimin Bai, Zhijun Zeng, Yifei Wang, Siyi Chen attend IMSI Computational Imaging Workshop in Chicago. They give oral presentations on Diffusion Posterior Sampling with Inaccurate Priors or Physics.',
    links: [
      { href: 'https://www.imsi.institute/activities/computational-imaging/', text: '[Resource]' },
    ],
  },
  {
    date: 'July 2024',
    content: 'Jinxin Liu, Xiangyi Wang, Yihang Zheng, Youjia Zheng join the group. Welcome!',
  },
  {
    date: 'July 2024',
    content: 'Congratulations to Enze Ye for winning the Presidential Scholarship at Peking University!',
  },
  {
    date: 'Oct 2023',
    content: 'Recovering a Molecule\'s 3D Dynamics from Liquid-phase Electron Microscopy Movies gets accepted for publication at ICCV 2023.',
    links: [
      { href: 'https://arxiv.org/abs/2308.11927', text: '[Paper]' },
      { href: 'https://ai4scientificimaging.org/tempor', text: '[Website]' },
      { href: 'https://github.com/ai4imaging/tempor_code', text: '[Code]' },
    ],
  },
  {
    date: 'July 2023',
    content: 'Weimin Bai, Shaochi Ren, and Enze Ye join the group. Welcome!',
  },
  {
    date: 'June 2023',
    content: 'He Sun co-organizes the IEEE Computational Cameras and Displays (CCD) Workshop in CVPR 2023.',
    links: [
      { href: 'https://ccd2023.github.io/', text: '[Website]' },
    ],
  },
  {
    date: 'Feb 2023',
    content: 'Zhiming Chang joins the group. Welcome!',
  },
  {
    date: 'Jan 2023',
    content: 'Deep learning-assisted analysis of single molecule dynamics from liquid-phase electron microscopy published in Chemical Communications.',
  },
  {
    date: 'Sep 2022',
    content: 'Yaqing Xu joins the group. Welcome!',
  },
  {
    date: 'May 2022',
    content: 'He Sun starts his appointment at College of Future Technology, Peking University.',
  },
];

const NewsPanel = () => {
  // 定义状态，控制是否显示全部新闻
  const [showAll, setShowAll] = useState(false);

  // 如果 `showAll` 为 `true`，显示所有新闻；否则仅显示前 5 条
  const displayedNews = showAll ? newsItems : newsItems.slice(0, 5);

  return (
    <div>
      <List
        itemLayout="vertical"
        dataSource={displayedNews}
        renderItem={(item) => (
          <List.Item>
            <div className="text-base flex w-full flex-wrap md:flex-nowrap">
              {/* 日期部分 */}
              <span
                className="font-bold flex-none w-full md:w-1/12 text-left text-sm md:text-base"
              >
                {item.date}
              </span>

              {/* 内容部分 */}
              <span
                className="flex-grow w-full md:w-11/12 text-sm md:text-base whitespace-normal break-words"
              >
                {item.content}
                {item.links &&
                  item.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 ml-2 underline"
                    >
                      {link.text}
                    </a>
                  ))}
              </span>
            </div>
          </List.Item>
        )}
      />
      {/* 如果新闻条数超过 5，显示 "More" 或 "Less" 按钮 */}
      {newsItems.length > 5 && (
        <div className="text-center mt-4">
          <Button
            className="text-lg"
            type="link"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "More"}
          </Button>
        </div>
      )}
    </div>
  );
};



export default NewsPanel;