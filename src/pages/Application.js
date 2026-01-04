import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Paragraph } = Typography;

const sections = [
    {
        title: "Biomedicine",
        cards: [
            { title: "Ultrasound Computed Tomography", image: "./rawdata/application_ultrasound.jpg" },
            { title: "Super-resolution Fluorescent Microscope", image: "./rawdata/application_super.png" },
            { title: "Quantitative Phase Microscope", image: "./rawdata/application_odt-gif.gif" },
            { title: "Liquid-phase Electron Microscope", image: "./rawdata/application_liquid2.gif" },
        ],
    },
    {
        title: "Astronomy & Physics",
        cards: [
            { title: "Exoplanet Detection", image: "./rawdata/application_exoplanet.gif" },
            { title: "Black Hole Imaging", image: "./rawdata/application_blackhole.png" },
            { title: "Fluid Metrology", image: "./rawdata/application_fluid.gif" },
            { title: "Astrophotography", image: "./rawdata/application_satellite.gif" },
        ],
    },
    {
        title: "Graphics & Photography",
        cards: [
            { title: "Inverse Rendering", image: "./rawdata/application_inverse.gif" },
            { title: "Text-to-3D Generation", image: "./rawdata/application_dive3d.png" },
        ],
    },
];

const Application = () => {
    return (
        // --- FIX #1 (关键修复): 在根 div 上添加 'container' 类 ---
        <div className="container mx-auto py-10">
            {/* 页面标题 */}
            <h2 className="text-center text-xl md:text-3xl font-semibold">
                Scientific Applications
            </h2>
            <Paragraph className="text-justify text-gray-500 text-lg px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 max-md:px-[6%]">
                Modern data-driven and AI-powered computational imaging technology offers great potential, fostering new scientific discoveries and revolutions. Our team has a broad interest in developing modern computational imaging techniques in various scientific applications, including but not limited to the following topics:
            </Paragraph>

            {/* 遍历板块 */}
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-16 text-center m-auto">
                    {/* 板块标题 */}
                    <h3 className="font-bold mb-8">{section.title}</h3>

                    <Row gutter={[24, 24]} justify="center" style={{ display: "flex", alignItems: "stretch" }}>
                        {section.cards.map((card, cardIndex) => (
                            // --- FIX #2: 调整栅格布局以获得更适中的图片尺寸 ---
                            // xs={12} -> 超小屏幕每行2个
                            // sm={8}  -> 小屏幕每行3个
                            // md={6}  -> 中等屏幕每行4个
                            <Col
                                key={cardIndex}
                                xs={12}
                                sm={8}
                                md={6}
                                style={{ display: "flex", flexDirection: "column" }}
                            >
                                <Card
                                    hoverable
                                    className="shadow-lg flex flex-col justify-between"
                                    style={{ display: "flex", flexDirection: "column", height: "100%" }}
                                    styles={{ body: { padding: 0 } }}
                                >
                                    {/* 图片部分 */}
                                    <div style={{ width: "100%", paddingTop: "100%", position: "relative", overflow: "hidden" }}>
                                        <img
                                            alt={card.title}
                                            src={card.image}
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </div>

                                    {/* 文字部分 */}
                                    <div style={{ padding: "12px", whiteSpace: "normal", textAlign: "center", fontSize: "15px", flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        {card.title}
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default Application;