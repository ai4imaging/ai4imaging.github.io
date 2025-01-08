import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text, Link } = Typography;

// 更新后的数据结构
const faculty = {
    name: "He Sun 孙赫",
    image: "./teams/hesun.jpg",
    description:
        "He Sun is a Boya Young Fellow Assistant Professor at Peking University. His research primarily focuses on AI for scientific imaging, which tightly integrates optics, control and machine learning for scientific discoveries.",
    email: "hesun@pku.edu.cn",
    links: [
        { label: "[Personal Website]", url: "https://ai4scientificimaging.org/" },
        { label: "[Google Scholar]", url: "https://scholar.google.com/citations?user=c9V5HkYAAAAJ&hl=en&oi=ao" },
        { label: "[Github]", url: "https://github.com/HeSunPU" },
        { label: "[Twitter]", url: "https://twitter.com/_sun_he" },
    ],
};

const students = {
    phd: [
        { name: "Weimin Bai", chinese: "柏为民", image: "./teams/weimin.jpg" },
        { name: "Enze Ye", chinese: "冶恩泽", image: "./teams/enze.png" },
        { name: "Shaochi Ren", chinese: "任绍持", image: "./teams/shaochi.jpg" },
        { name: "Jinxin Liu", chinese: "刘金新", image: "./teams/jinxin.jpg" },
        { name: "Xiangyi Wang", chinese: "王相宜", image: "./teams/xiangyi.png" },
        { name: "Youjia Zheng", chinese: "郑又嘉", image: "./teams/youjia.png" },
        { name: "Hao Hu", chinese: "胡昊", image: "./teams/huhao.jpg" },
        { name: "Zhiru Liu", chinese: "刘芷如", image: "./teams/zhiru.jpg" },
        { name: "Yiwei Ren", chinese: "任翊玮", image: "./teams/yiwei.jpg" },
    ],
    master: [
        { name: "Zhiming Chang", chinese: "常志明", image: "./teams/zhiming.jpg" },
        { name: "Yaqing Xu", chinese: "许雅晴", image: "./teams/yaqing.jpg" },
        { name: "Yihang Zheng", chinese: "郑一杭", image: "./teams/yihang.jpg" },
        { name: "Yuxuan Gu", chinese: "顾宇轩", image: "./teams/yuxuan.png" },
        { name: "Yubo Li", chinese: "李育博", image: "./teams/yubo.jpg" },
        { name: "Qianhang Wu", chinese: "伍千航", image: "./teams/qianhang.jpg" },
    ],
    undergraduate: [
        { name: "Siyi Chen", chinese: "陈斯熠", image: "./teams/siyi.png" },
        { name: "Weiheng Tang", chinese: "唐维恒", image: "./teams/weiheng.png" },
        { name: "Yifei Wang", chinese: "王翼飞", image: "./teams/yifei.png" },
        { name: "Zixuan Jiang", chinese: "蒋子轩", image: "./teams/zixuan.jpg" },
    ],
    alumni: [
        { name: "Zhihang Li", chinese: "李旨航", details: "Undergraduate@PKU -> PhD Student@WashU" },
        { name: "Lujing Xing", chinese: "邢璐晶", details: "Undergraduate@PKU -> PhD Student@UCLA" },
        { name: "Haiyue Li", chinese: "李海越", details: "Undergraduate@PKU -> Master Student@ETH" },
    ],
};


const FacultyPage = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            {/* Faculty Section */}
            <section className="mb-12">
                <Title level={2}>Principle Investigator</Title>
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={5}>
                        <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </Col>
                    <Col xs={24} md={18}>
                        <Title className="mt-0 mb-4" level={2}>
                            {faculty.name}
                        </Title>
                        <Text className="block mb-4 text-lg">{faculty.description}</Text>
                        <Text className="block mb-4 text-lg text-justify">
                            Prior to starting at Peking University, He was a postdoctoral researcher
                            and Amazon AI4Science Fellow at Caltech CMS, where he mainly worked with{" "}
                            <Link className="text-lg" href="http://users.cms.caltech.edu/~klbouman/" target="_blank" rel="noopener noreferrer">
                                Katie Bouman
                            </Link>{" "}
                            on black hole imaging. He received the Ph.D. from Princeton University in 2019 (advised by{" "}
                            <Link className="text-lg" href="https://mae.princeton.edu/people/faculty/kasdin" target="_blank" rel="noopener noreferrer">
                                N. Jeremy Kasdin
                            </Link>
                            ) and the bachelor’s degrees in Engineering Mechanics and Economics from Peking University in 2014.
                        </Text>
                        <Text className="block mt-8 mb-3 text-lg">
                            Email:&nbsp;&nbsp;<Link className="text-lg" href={`mailto:${faculty.email}`}>{faculty.email}</Link>

                        </Text>
                        <div className="flex space-x-4 text-lg">
                            {faculty.links.map((link, index) => (
                                <Link className="text-lg" key={index} href={link.url} target="_blank">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </section>

            {/* PhD Students Section */}
            <section className="mb-12">
                <Title level={3}>PhD Students</Title>
                <Row gutter={[16, 16]}>
                    {students.phd.map((student, index) => (
                        <Col key={index} xs={12} sm={8} md={4}>
                            <Card
                                hoverable
                                cover={<img alt={student.name} src={student.image} />}
                                className="text-center"
                            >
                                <div>
                                    <Text className="font-bold block">{student.name}</Text>
                                    <Text className="text-gray-500 block">{student.chinese}</Text>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Master Students Section */}
            <section className="mb-12">
                <Title level={3}>Master Students</Title>
                <Row gutter={[16, 16]}>
                    {students.master.map((student, index) => (
                        <Col key={index} xs={12} sm={8} md={4}>
                            <Card
                                hoverable
                                cover={<img alt={student.name} src={student.image} />}
                                className="text-center"
                            >
                                <div>
                                    <Text className="font-bold block">{student.name}</Text>
                                    <Text className="text-gray-500 block">{student.chinese}</Text>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Undergraduate Students Section */}
            <section className="mb-12">
                <Title level={3}>Undergraduate Students</Title>
                <Row gutter={[16, 16]}>
                    {students.undergraduate.map((student, index) => (
                        <Col key={index} xs={12} sm={8} md={4}>
                            <Card
                                hoverable
                                cover={<img alt={student.name} src={student.image} />}
                                className="text-center"
                            >
                                <div>
                                    <Text className="font-bold block">{student.name}</Text>
                                    <Text className="text-gray-500 block">{student.chinese}</Text>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Alumni Section */}
            <section>
                <Title level={3}>Alumni</Title>
                <ul className="list-disc ml-6 text-lg">
                    {students.alumni.map((alumnus, index) => (
                        <li key={index}>
                            <Text>{alumnus.name}({alumnus.chinese})</Text>
                            <Text className="text-gray-500"> - {alumnus.details}</Text>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FacultyPage;
