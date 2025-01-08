import React from "react";
import { Card, Row, Col } from "antd";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const sections = [
    {
        title: "Biomedicine",
        cards: [
            {
                title: "Ultrasound Computed Tomography",
                image: "./rawdata/application_ultrasound.jpg",
            },
            {
                title: "Super-resolution Fluorescent Microscope",
                image: "./rawdata/application_super.png",
            },
            {
                title: "Quantitative Phase Microscope",
                image: "./rawdata/application_quantitative.png",
            },
            {
                title: "Liquid-phase Electron Microscope",
                image: "./rawdata/application_liquid.gif",
            },
        ],
    },
    {
        title: "Astronomy & Physics",
        cards: [
            {
                title: "Exoplanet Detection",
                image: "./rawdata/application_exoplanet.gif",
            },
            {
                title: "Black Hole Imaging",
                image: "./rawdata/application_blackhole.png",
            },
            {
                title: "Fluid Metrology",
                image: "./rawdata/application_fluid.gif",
            },
            {
                title: "Astrophotography",
                image: "./rawdata/application_satellite.gif",
            },
        ],
    },
    {
        title: "Graphics & Photography",
        cards: [
            {
                title: "Inverse Rendering",
                image: "./rawdata/application_inverse.gif",
            },
        ],
    },
];

const Application = () => {
    return (
        <div className="container mx-auto py-10">
            {/* 页面标题 */}
            <Title level={2} className="text-center">
                Scientific applications
            </Title>
            <Paragraph className="text-gray-500 text-lg pb-20">
                Modern data-driven and AI-powered computational imaging technology offers great potential, fostering new scientific discoveries and revolutions. Our team has a broad interest in developing modern computational imaging techniques in various scientific applications, including but not limited to the following topics:
            </Paragraph>

            {/* 遍历板块 */}
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-16 text-center m-auto">
                    {/* 板块标题 */}
                    <h2 className="text-2xl font-bold mb-8">{section.title}</h2>

                    {/* 图片网格 */}
                    <Row
    gutter={[16, 18]}
    justify="center"
    style={{
        display: "flex",
        alignItems: "stretch", // 确保所有卡片高度一致
    }}
>
    {section.cards.map((card, cardIndex) => (
        <Col
            key={cardIndex}
            xs={24} // 超小屏幕（<576px）：每行 1 列
            sm={12} // 小屏幕（≥576px）：每行 2 列
            md={8} // 中等屏幕（≥768px）：每行 3 列
            lg={5} // 大屏幕（≥992px）：每行 4 列
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch", // 确保列中的内容拉伸对齐
            }}
        >
            <Card
                hoverable
                className="shadow-lg flex flex-col justify-between"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%", // 高度自适应父容器
                }}
                styles={{ body:{padding: 0} }}
            >
                {/* 图片部分 */}
                <div
                    style={{
                        width: "100%",
                        paddingTop: "100%",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <img
                        alt={card.title}
                        src={card.image}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/* 文字部分 */}
                <div
                    style={{
                        padding: "10px",
                        whiteSpace: "normal",
                        overflow: "hidden",
                        textAlign: "center",
                        wordBreak: "break-word",
                        fontSize: "16px",
                        flexGrow: 1, // 确保文字部分占据剩余空间
                        display: "flex",
                        alignItems: "center", // 垂直居中
                        justifyContent: "center", // 水平居中
                    }}
                >
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
