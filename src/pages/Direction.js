import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Typography, Card, List, Button } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";


const { Title, Paragraph } = Typography;

// Data for content sections
const content = [
  {
    title: "Neural PDE - Understanding Imaging Physics",
    description:
      "Partial Differential Equations (PDEs) are fundamental to modeling complex imaging physics, which is crucial for accurately interpreting signals from noisy data. Neural PDE solvers have recently transformed PDE-based physical modeling by offering exceptional approximation capabilities and enhanced computational efficiency. Our research leverages neural PDE methods to address unresolved challenges in scientific imaging, such as medical ultrasound, optical diffraction tomography of scattering tissues, and fluid metrology.",
    image: "./rawdata/application_fluid.gif",
    publications: [
        {
        title:
          "FlowDAS: A Flow-Based Framework for Data Assimilation",
        authors: "Siyi Chen, Yixuan Jia, Qing Qu, He Sun, and Jeffrey A. Fessler, NeurIPS, 2025",
          links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2501.16642",
        },
        {
            type: "Code",
            url: "https://github.com/umjiayx/FlowDAS",
        }],
      },
      {
        image: "./rawdata/publication_openwaves.png",
        title:
          "OpenWaves: A Large-Scale Anatomically Realistic Ultrasound-CT Dataset for Benchmarking Neural Wave Equation Solvers",
        authors: "Zhijun Zeng, Youjia Zheng, Hao hu, Yubing Li, He Sun, arXiv, 2024",
        links: [
        {
          type: "Website",
          url: "https://open-waves-usct.github.io/",
        }
        ]
      },

    ],
  },
  {
    title: "Generative AI - Modeling Image Priors",
    description:
      "Generative AI provides powerful tools for modeling complex image distributions through deep neural networks. By defining data-driven priors for reconstructed images, generative AI surpasses traditional hand-crafted regularizers like sparsity and total variation, leading to superior image reconstruction quality. Our group is particularly focused on advancing deep generative modeling, 3D neural representations, and uncertainty quantification methods to redefine computational imaging.",
    image: "./rawdata/direction_generative.gif",
    publications: [
        {
        image: "./rawdata/publication_dive3d.png",
        title:
            "Uni-Instruct: One-step Diffusion Model through Unified Diffusion Divergence Instruction",
        authors: "Yifei Wang, Weimin Bai, Colin Zhang, Debing Zhang, Weijian Luo, He Sun. NeurIPS, 2025",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2505.20755",
        },
        // {
        //     type: "Website",
        //     url: "https://ai4scientificimaging.org/dive3d/",
        // },{
        //     type: "Code",
        //     url: "https://github.com/ai4imaging/dive3d",
        // }
        ],
        year: 2025,
    },
        {
        image: "./rawdata/publication_emgeneralist.png",
        title:
            "EM Generalist: A Physics-Driven Diffusion Foundation Model for Electron Microscopy",
        authors: "Enze Ye, Chixiang Lu, Zixuan Jiang, Weimin Bai, Shaochi Ren, Chenyu Wang, Jinyang Zhang, Ruohua Shi, Lei Ma, Kun Song, Xiaojuan Qi, Haibo Jiang, He Sun. Preprint, 2025",
        year: 2025,
        links: [{
            type: "Paper",
            url: "https://www.researchsquare.com/article/rs-6602548/v1",
        },
        {
            type: "Website",
            url: "http://generativemicroscope.com",
        }
        ],
    },
      {
        title:
          "An Expectation-Maximization Algorithm for Training Clean Diffusion Models from Corrupted Observations",
        authors: "Weimin Bai, Yifei Wang, Wenzheng Chen, He Sun, NeurIPS, 2024",
        links: [{
          type: "Paper",
          url: "https://arxiv.org/abs/2407.01014",
        },
        {
          type: "Code",
          url: "https://github.com/weiminbai/EMDiffusion",
        }
        ]
      },
      // {
      //   title:
      //     "Reconstructing Satellites in 3D from Amateur Telescope Images",
      //   authors: "Zhiming Chang, Boyang Liu, Yifei Xia, Youming Guo, Boxin Shi, He Sun, arXiv, 2024",
      //   links: [{
      //     type: "Paper",
      //     url: "https://arxiv.org/abs/2407.01014",
      //   },
      //   {
      //     type: "Website",
      //     url: "https://ai4scientificimaging.org/3DSatellites/",
      //   },{
      //     type: "Code",
      //     url: "https://github.com/ai4imaging/3DSatellitesCode",
      //   }
      //   ]
      // },
      {
        title:
          "Recovering a Molecule's 3D Dynamics from Liquid-phase Electron Microscopy Movies",
        authors: "Enze Ye, Yuhang Wang, Hong Zhang, Yiqin Gao, Huan Wang, He Sun, ICCV, 2023",
        links: [
          {
            type: "Paper",
            url: "https://arxiv.org/abs/2407.01014",
          },
          {
            type: "Website",
            url: "https://ai4scientificimaging.org/tempor/",
          },
          {
            type: "Code",
            url: "https://github.com/ai4imaging/tempor_code",
          }
        ]
      },
      {
        title:
          "α-Deep Probabilistic Inference (α-DPI): efficient uncertainty quantification from exoplanet astrometry to black hole feature extraction",
        authors: "He Sun, Katherine L. Bouman, Paul Tiede, Jason J. Wang, Sarah Blunt, Dimitri Mawet, The Astrophysical Journal, 2022",
        links: [{
          type: "Paper",
          url: "https://iopscience.iop.org/article/10.3847/1538-4357/ac6be9/meta",
        },
        {
          type: "Website",
          url: "http://imaging.cms.caltech.edu/dpi/",
        },
        {
          type: "Code",
          url: "https://github.com/HeSunPU/DPI",
          }
        ]
      },
      // {
      //   title:
      //     "Deep probabilistic imaging: Uncertainty quantification and multi-modal solution characterization for computational imaging",
      //   authors: "He Sun, Katherine L. Bouman, Proceedings of the AAAI Conference on Artificial Intelligence, 2021",
      //   links: [{
      //     type: "Paper",
      //     url: "https://ojs.aaai.org/index.php/AAAI/article/view/16366",
      //   },
      //   {
      //     type: "Website",
      //     url: "http://imaging.cms.caltech.edu/dpi/",
      //   },
      //   {
      //     type: "Code",
      //     url: "https://github.com/HeSunPU/DPI",
      //   }
      //   ]
      // }
    ],
  },
  {
    title: "Adaptive Optics - Automating Imaging Systems",
    description:
      "Adaptive optics (AO) systems correct wavefront aberrations that significantly degrade image quality. Our group designs and builds state-of-the-art AO instruments and control software to enhance imaging performance in diverse applications, including telescopic imaging of astronomical objects through atmospheric turbulence and microscopy of strongly scattering biological tissues. ",
    image: "./rawdata/direction_ao.png",
    publications: [
        {
        title:
          "Reconstructing Satellites in 3D from Amateur Telescope Images",
        authors: "Zhiming Chang, Boyang Liu, Yifei Xia, Youming Guo, Boxin Shi, He Sun, IEEE TPAMI, 2025",
        links: [{
          type: "Paper",
          url: "https://arxiv.org/abs/2407.01014",
        },
        {
          type: "Website",
          url: "https://ai4scientificimaging.org/3DSatellites/",
        },{
          type: "Code",
          url: "https://github.com/ai4imaging/3DSatellitesCode",
        }
        ]
      },
      {
        title:
          "High-contrast integral field spectrograph (HCIFS): multi-spectral wavefront control and reduced-dimensional system identification",
        authors: "He Sun, Alexei Goun, Susan Redmond, Michael Galvin, Tyler Groff, Maxime Rizzo, N. Jeremy Kasdin, Optics Express, 2020",
        links: [{
          type: "Paper",
          url: "https://arxiv.org/pdf/2005.09753",

        }],
      },
      {
        title:
          "Efficient wavefront sensing for space-based adaptive optics",
        authors: "He Sun, N.Jeremy Kasdin, Robert Vanderbei, Journal of Astronomical Telescopes, Instruments, and Systems, 2020",
        links: [{
          type: "Paper",
          url: "https://arxiv.org/pdf/1909.07274",
        }],
      },
      {
        title:
          "Identification and adaptive control of a high-contrast focal plane wavefront correction system",
        authors: "He Sun, N.Jeremy Kasdin, Robert Vanderbei, Journal of Astronomical Telescopes, Instruments, and Systems, 2018",
        links: [{
          type: "Paper",
          url: "https://arxiv.org/pdf/1806.10992",
        },
        {
          type: "Code",
          url: "https://github.com/HeSunPU/ML4AO",
        }

        ],
      },
    ],
  },
];

const SelectedPublications = ({ publications, expanded, onToggle }) => (
  <div>
    <Button
      type="link"
      className="flex items-center pl-0"
      onClick={onToggle}
    >
      {expanded ? <DownOutlined /> : <RightOutlined />}
      <span className="ml-2 text-lg font-bold">Selected Publications</span>
    </Button>
    {expanded && publications && publications.length > 0 ? (
      <List
        size="small"
        className="mt-2"
        bordered={false}
        dataSource={publications}
        renderItem={(pub) => (
          <List.Item>
            <div>
              {/* Article Title */}
              <h4 className="font-bold text-base my-0">{pub.title}</h4>

              {/* Authors */}
              <p className="text-gray-600 text-sm my-0">{pub.authors}</p>

              {/* Links (PDF, Website, etc.) */}
              <div className="flex space-x-4 p-0">
                {pub.links && (
                  pub.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-sm"
                    >
                      {link.type}
                    </a>
                  ))
                )}
              </div>

            </div>
          </List.Item>
        )}
      />
    ) : expanded ? (
      <p className="mt-4 text-gray-500 italic">No publications available.</p>
    ) : null}
  </div>
);


const Direction = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 mb-10">
      {/* Heading Section */}
      <h2 className="text-center text-xl md:text-3xl font-semibold">
        AI & Imaging Technologies
      </h2>
      <Paragraph className="text-justify text-gray-500 text-lg px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 max-md:px-[6%]">
        Imaging technology decodes wave-matter interactions and plays a pivotal
        role in advancing scientific discoveries. Our research is dedicated to
        developing cutting-edge artificial intelligence and automation tools to
        revolutionize scientific imaging. Key research areas include:
      </Paragraph>

      {/* Content Sections */}
      {content.map((item, index) => (
        <Card key={index} className="my-6 shadow-lg">
          {/* 第一行：图片和文字 */}
          <Row gutter={[16, 8]} align="middle">
            {/* 图片部分 */}
            <Col
              xs={20} // 在移动端占满整行
              sm={4}
              md={4} // 中等屏幕占4列（总列数24，相当于2:8的比例）
              lg={4} // 大屏幕占4列
              xl={4} // 超大屏幕占4列
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  paddingTop: "100%", // 1:1 比例
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>

            {/* 文字部分 */}
            <Col
              xs={20} // 在移动端占满整行
              sm={19}
              md={19} // 中等屏幕占20列（总列数24，相当于2:8的比例）
              lg={19} // 大屏幕占20列
              xl={19} // 超大屏幕占20列
            >
              <Title level={4} className="font-bold my-0">
                {item.title}
              </Title>
              <Paragraph className="text-gray-600 text-lg text-justify">
                {item.description}
              </Paragraph>
            </Col>
          </Row>

          {/* 第二行：展开按钮和内容 */}
          <Row style={{ marginTop: "0px" }}>
            <Col xs={20} md={4}></Col>
            <Col xs={20} md={19}>
              <Button
                type="link"
                className="flex items-center pl-0"
                onClick={() => handleToggle(index)}
              >
                {expandedIndex === index ? <DownOutlined /> : <RightOutlined />}
                <span className="ml-2 text-lg font-bold">Selected Publications</span>
              </Button>

              {/* 展开内容 */}
              {expandedIndex === index && item.publications && (
                <div style={{ marginTop: "10px" }}>
                  <List
                    size="small"
                    dataSource={item.publications}
                    renderItem={(pub) => (
                      <List.Item>
                        <div>
                          {/* Article Title */}
                          <h4 className="font-bold text-base my-0">{pub.title}</h4>
                          {/* Authors */}
                          <p className="text-gray-600 text-sm my-0">{pub.authors}</p>
                          {/* Links */}
                          <div className="flex space-x-4 p-0">
                            {pub.links &&
                              pub.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 underline text-sm"
                                >
                                  {link.type}
                                </a>
                              ))}
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default Direction;