import React from "react";
import { List, Typography } from "antd";

const { Title, Text, Link } = Typography;

// Sample data for the publications
const publications = [
    {
        image: "./rawdata/publication_uniinstruct.png",
        title: "Uni-Instruct: One-step Diffusion Model through Unified Diffusion Divergence Instruction",
        authors: "Yifei Wang, Weimin Bai, Colin Zhang, Debing Zhang, Weijian Luo, He Sun. NeurIPS, 2025",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2505.20755",
        },
        ],
        year: 2025,
    },
    {
        image: "./rawdata/publication_FlowDAS.png",
        title:
            "FlowDAS: A Flow-Based Framework for Data Assimilation",
        authors: "Siyi Chen, Yixuan Jia, Qing Qu, He Sun, and Jeffrey A. Fessler. NeurIPS, 2025",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2501.16642",
        },
        {
            type: "Code",
            url: "https://github.com/umjiayx/FlowDAS",
        }],
        year: 2025,
    },
    {
        image: "./rawdata/publication_dive3d.png",
        title:
            "Dive3D: Diverse Distillation-based Text-to-3D Generation via Score Implicit Matching",
        authors: "Weimin Bai, Yubo Li, Weijian Luo, Wenzheng Chen, He Sun. arxiv, 2025",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2407.01014",
        },
        {
            type: "Website",
            url: "https://ai4scientificimaging.org/dive3d/",
        },{
            type: "Code",
            url: "https://github.com/ai4imaging/dive3d",
        }
        ],
        year: 2025,
    },
    {
        image: "./rawdata/publication_vlm3d.png",
        title:
            "Vision–Language Models as Differentiable Semantic and Spatial Rewards for Text-to-3D Generation",
        authors: "Weimin Bai, Yubo Li, Wenzheng Chen, Weijian Luo, He Sun. Preprint, 2025",
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
        image: "./rawdata/publication_satellite.png",
        title:
            "Reconstructing Satellites in 3D from Amateur Telescope Images",
        authors: "Zhiming Chang, Boyang Liu, Yifei Xia, Youming Guo, Boxin Shi, He Sun. IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/pdf/2404.18394",
        },{
            type: "Website",
            url: "https://ai4scientificimaging.org/3DSatellites/",
        },{
            type: "Code",
            url: "https://github.com/ai4imaging/3DSatellitesCode",
        }
        ],
        year: 2025,
    },
    {
        image: "./rawdata/publication_empmc.png",
        title:
            "Learning Diffusion Model from Noisy Measurement using Principled Expectation-Maximization Method",
        authors: "Weimin Bai, Weiheng Tang, Enze Ye, Siyi Chen, Wenzheng Chen, He Sun. ICASSP (Oral), 2025",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/pdf/2410.11241?",
        },
        {
            type: "Code",
            url: "https://github.com/weiminbai/EMDiffusion",
        }
        ],
        year: 2025,
    },
    {
        image: "./rawdata/publication_openwaves.png",
        title:
            "OpenWaves: A Large-Scale Anatomically Realistic Ultrasound-CT Dataset for Benchmarking Neural Wave Equation Solvers",
        authors: "Zhijun Zeng, Youjia Zheng, Hao hu, Yubing Li, He Sun. arXiv, 2024",
        year: 2024,
        links: [
        {
          type: "Website",
          url: "https://open-waves-usct.github.io/",
        }
        ]
    },
    {
        image: "./rawdata/publication_blind.png",
        title:
            "Blind Inversion using Latent Diffusion Priors",
        authors: "Weimin Bai, Siyi Chen, Wenzheng Chen, He Sun. arXiv, 2024",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/pdf/2407.01027",
        }, {
            type: "Website",
            url: "https://ai4scientificimaging.org/latentdem/",
        },],
        year: 2024,
    },
    {
        image: "./rawdata/publication_emdiffusion.jpg",
        title:
            "An Expectation-Maximization Algorithm for Training Clean Diffusion Models from Corrupted Observations",
        authors: "Weimin Bai, Yifei Wang, Wenzheng Chen, He Sun. NeurIPS, 2024",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2407.01014",
        },
        {
            type: "Code",
            url: "https://github.com/weiminbai/EMDiffusion",
        }
        ],
        year: 2024,
    },
    {
        image: "./rawdata/publication_imaging.jpg",
        title:
            "Imaging biomacromolecules in action with liquid-phase electron microscopy",
        authors: "Jiaye Li, He Sun, Huan Wang. Trends in Chemistry, 2024",
        links: [{
            type: "Paper",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S2589597424000674",
        }],
        year: 2024,
    },
    {
        image: "./rawdata/publication_m87.png",
        title: "The persistent shadow of the supermassive black hole of M 87",
        authors: "The Event Horizon Telescope Collaboration, Astronomy and Astrophysics 2024",
        links: [{
            type: "Paper",
            url: "https://www.aanda.org/articles/aa/full_html/2024/01/aa47932-23/aa47932-23.html",
        }],
    },
    {
        image: "./rawdata/publication_discover.png",
        title:
            "Discovering Structure From Corruption for Unsupervised Image Reconstruction",
        authors: "Oscar Leong, Angela F.Gao, He Sun, Katherine L.Bouman. IEEE Transactions on Computational Imaging, 2023",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/pdf/2304.05589",
        },
        {
            type: "Website",
            url: "http://imaging.cms.caltech.edu/igm/",
        },
        {
            type: "Code",
            url: "https://github.com/angelafgao/IGM",
        }
        ],
        year: 2023,
    },
    {
        image: "./rawdata/publication4.png",
        title: "Image Reconstruction without Explicit Priors",
        authors: "Oscar Leong, Angela F.Gao, He Sun, Katherine L.Bouman. ICASSP, 2023",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/pdf/2303.12217",
        },
        {
            type: "Website",
            url: "http://imaging.cms.caltech.edu/igm/",
        },
        ],
        year: 2023,
    },
    {
        image: "./rawdata/publication_filamentary.png",
        title: "Filamentary structures as the origin of blazar jet radio variability",
        authors: "The Event Horizon Telescope Collaboration. Nature Astronomy 2023",
        links: [{
            type: "Paper",
            url: "https://www.nature.com/articles/s41550-023-02105-7",
        }],
        year: 2023,
    },
    {
        image: "./rawdata/publication6.jpg",
        title: "Recovering a Molecule's 3D Dynamics from Liquid-phase Electron Microscopy",
        authors: "Enze Ye, Yuhang Wang, Hong Zhang, Yiqin Gao, Huan Wang, He Sun. ICCV, 2023",
        links: [{
            type: "Paper",
            url: "https://arxiv.org/abs/2308.11927",
        },
        {
            type: "Website",
            url: "https://ai4scientificimaging.org/tempor",
        },
        {
            type: "Code",
            url: "https://github.com/ai4imaging/tempor_code",
        }
        ],
        year: 2023,
    },
    {
        image: "./rawdata/publication5.jpg",
        title: "Deep learning-assisted analysis of single molecule dynamics from liquid-phaseelectron microscopy",
        authors: "Bin Cheng, Enze Ye, He Sun, Huan Wang. Chemical Communications, 2023",
        links: [{
            type: "Paper",
            url: "https://pubs.rsc.org/en/content/articlelanding/2023/cc/d2cc05354c",
        },],
        year: 2023,
    },
    {
        image: "./rawdata/publication_dpi.png",
        title:
            "α-Deep Probabilistic Inference (α-DPI): efficient uncertainty quantification from exoplanet astrometry to black hole feature extraction",
        authors: "He Sun, Katherine L. Bouman, Paul Tiede, Jason J. Wang, Sarah Blunt, Dimitri Mawet. The Astrophysical Journal, 2022",
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
        ],
        year: 2022,
    },

];

const sgra = {
    image: "./rawdata/publication_first.png",
    title: "First Sagittarius A* Event Horizon Telescope results. I-VI",
    authors: "The Event Horizon Telescope Collaboration. The Astrophysical Journal Letters, 2022",
    links: [{
        type: "Paper I",
        url: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6674",
    },
    {
        type: "Paper II",
        url: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6675",
    },
    {
        type: "Paper III",
        url: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6429",
    },
    {
        type: "Paper IV",
        url: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6736",
    },
    {
        type: "Paper V",
        url: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6672",
    },
    {
        type: "Paper VI",
        url: "https://iopscience.iop.org/article/10.3847/2041-8213/ac6756",
    },
    {
        type: "Website",
        url: "https://eventhorizontelescope.org/blog/astronomers-reveal-first-image-black-hole-heart-our-galaxy",
    }
    ],
    year: 2022,
}


const PublicationsList = () => {
    // Track the last year displayed
    let lastYear = null;

    return (
        <div className="w-4/5 sm:w-9/10 mx-auto pt-5 mb-0">
            <div className="flex flex-col items-center justify-center my-0">
                {/* 文字部分 */}
                <p className="text-lg text-gray-500 text-center mb-0">
                    <Title level={2}>Selected Publications</Title>
                    <p className="mt-2 mb-0">
                        please visit{" "}
                        <a
                            href="https://scholar.google.com/citations?user=c9V5HkYAAAAJ&hl=en&oi=ao"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 font-semibold hover:underline hover:text-blue-600"
                        >
                            Google Scholar
                        </a>{" "}
                        for the complete list of publications from our group
                    </p>
                </p>
            </div>
            <List
                itemLayout="vertical"
                dataSource={publications}
                renderItem={(item) => {
                    const showYear = item.year !== lastYear; // Check if the year has changed
                    lastYear = item.year; // Update the last year

                    return (
                        <>
                            {/* Display year if it changes */}
                            {showYear && (
                                <Title level={2} className="mt-8 mb-4 ml-2 text-gray-700">
                                    {item.year}
                                </Title>
                            )}
                            <List.Item>
                                {/* Flex Container */}
                                <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">
                                    {/* Image Section */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full md:w-72 object-cover rounded-md mr-5"
                                    />

                                    {/* Content Section */}
                                    <div className="w-full">
                                        <Title level={3} className="mb-5 mt-2">
                                            {item.title}
                                        </Title>
                                        <div className="block text-gray-600 mb-6 text-base">
                                            {item.authors}
                                        </div>

                                        {/* Link Section */}
                                        {item.links && item.links.length > 0 && (
                                            <div className="flex flex-wrap gap-4">
                                                {item.links.map((links, index) => (
                                                    <Link
                                                        key={index}
                                                        href={links.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 text-base underline"
                                                    >
                                                        {links.type}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </List.Item>
                        </>
                    );
                }}
            />



            <div className="custom-divider"></div>
            <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0 py-3">
                {/* Image Section */}
                <img
                    src={sgra.image}
                    alt={sgra.title}
                    className="w-full md:w-72 object-cover rounded-md mr-5"
                />

                {/* Content Section */}
                <div className="w-full">
                    <Title level={3} className="mb-5 mt-2">
                        {sgra.title}
                    </Title>
                    <Text className="block text-gray-600 mb-2 text-base">
                        {sgra.authors}
                    </Text>
                    <Text className="block text-gray-600 mb-6 text-base">
                        He Sun led the neural-network-based analysis of SgrA*'s variability and morphology in Paper IV,  featured in the
                        {" "}<a href="https://www.nobelprize.org/uploads/2024/09/advanced-physicsprize2024.pdf" style={{ whiteSpace: "nowrap", display: "inline-block" }}><i>Scientific Background

                            to the Nobel Prize in Physics 2024</i> </a>{" "} as a notable AI application in astronomy.
                    </Text>

                    {/* Link Section */}
                    {sgra.links && sgra.links.length > 0 && (
                        <div className="flex flex-wrap space-x-4">
                            {sgra.links.map((links, index) => (
                                <Link
                                    key={index}
                                    href={links.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-base underline"
                                >
                                    {links.type}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>



        </div>
    );
};



export default PublicationsList;
