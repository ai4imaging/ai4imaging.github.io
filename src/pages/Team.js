import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text, Link } = Typography;

// 更新后的数据结构
const faculty = {
    name: "He Sun 孙赫",
    image: "./teams/sunhe.png",
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
        { name: "Youjia Zheng", chinese: "郑又嘉", image: "./teams/youjia.png" },
        { name: "Kaining Yang", chinese: "杨凯宁", image: "./teams/kaining.jpg" },
        { name: "Hao Hu", chinese: "胡昊", image: "./teams/huhao.jpg" },
        { name: "Zhiru Liu", chinese: "刘芷如", image: "./teams/zhiru.jpg" },
        { name: "Yiwei Ren", chinese: "任翌玮", image: "./teams/yiwei.jpg" },
    ],
    master: [
        { name: "Yuxuan Gu", chinese: "顾宇轩", image: "./teams/yuxuan.png" },
        { name: "Yubo Li", chinese: "李育博", image: "./teams/yubo.jpg" },
        { name: "Qianhang Wu", chinese: "伍千航", image: "./teams/qianhang.jpg" },
        { name: "Xiaoyang Wang", chinese: "王笑阳", image: "./teams/xiaoyang.png" },
    ],
    undergraduate: [
        { name: "Zixuan Jiang", chinese: "蒋子轩", image: "./teams/zixuan.jpg" },
        { name: "Yifei Ma", chinese: "马艺菲", image: "./teams/yifeima.jpg" },
        { name: "Binhong Gao", chinese: "高彬洪", image: "./teams/binhonggao.jpg" },
        { name: "Linbo Cao", chinese: "曹林博", image: "./teams/linbocao.png" },
        { name: "Xiangyou Li", chinese: "李相佑", image: "./teams/xiangyouli.jpg" },
    ],
    visiting: [
        { name: "Zhijun Zeng", chinese:"曾祉竣", image: "./teams/zhijun.jpg" },
        { name: "Xiaodong Guan", chinese:"管小东", image: "./teams/xiaodong.jpg" },
    ],
    alumni: [
        { name: "Siyi Chen", chinese: "陈斯熠", data: "2023-2025", details: "Undergraduate@PKU", next: "-> PhD Student@University of Michigan" },
        { name: "Yifei Wang", chinese: "王翼飞", data: "2023-2025", details: "Undergraduate@PKU", next: "-> PhD Student@Rice University" },
        { name: "Zhiming Chang", chinese: "常志明", data: "2022-2025", details: "Master@PKU", next: "-> HUAWEI Tech" },
        { name: "Yaqing Xu", chinese: "许雅晴", data: "2022-2025", details: "Master@PKU", next: "-> HUAWEI Tech" },
        { name: "Huanyu Yang", chinese: "杨焕煜", data: "2022-2025", details: "Master@PKU", next: "-> Government of Shanxi Province" },
        { name: "Weiheng Tang", chinese: "唐维恒", data: "2022-2025", details: "Undergraduate@PKU", next: "-> PhD Student@Purdue University" },
        { name: "Zhihang Li", chinese: "李旨航", data: "2022-2024", details: "Undergraduate@PKU", next: "-> PhD Student@Washington University in St. Louis" },
        { name: "Lujing Xing", chinese: "邢璐晶", data: "2022-2024", details: "Undergraduate@PKU", next: "-> PhD Student@University of California, Los Angeles" },
        { name: "Haiyue Li", chinese: "李海越", data: "2022-2024", details: "Undergraduate@PKU", next: "-> Master Student@ ETH Zürich" },
    ],
};


const FacultyPage = () => {
    return (
        <div className="w-4/5 sm:w-9/10 mx-auto px-6 py-10">
            {/* Faculty Section */}
            <section className="mb-12">
                <h2 className="text-lg md:text-2xl">Principle Investigator</h2>
                <Row gutter={[32, 32]}>
                    <Col xs={20} md={5}>
                        <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </Col>
                    <Col xs={20} md={18}>
                        <h2 className="mt-0 mb-4 text-lg md:text-2xl">
                            {faculty.name}
                        </h2>
                        <Text className="block mb-4 text-base md:text-lg">{faculty.description}</Text>
                        <Text className="block mb-4 text-base md:text-lg text-justify">
                            Prior to starting at Peking University, He was a postdoctoral researcher
                            and Amazon AI4Science Fellow at Caltech CMS, where he mainly worked with{" "}
                            <Link className="text-base md:text-lg" href="http://users.cms.caltech.edu/~klbouman/" target="_blank" rel="noopener noreferrer">
                                Katie Bouman
                            </Link>{" "}
                            on black hole imaging. He received the Ph.D. from Princeton University in 2019 (advised by{" "}
                            <Link className="text-base md:text-lg" href="https://mae.princeton.edu/people/faculty/kasdin" target="_blank" rel="noopener noreferrer">
                                N. Jeremy Kasdin
                            </Link>
                            ) and the bachelor’s degrees in Engineering Mechanics and Economics from Peking University in 2014.
                        </Text>
                        <Text className="block mt-8 mb-3 text-base md:text-lg">
                            Email:&nbsp;&nbsp;<Link className="text-base md:text-lg" href={`mailto:${faculty.email}`}>{faculty.email}</Link>

                        </Text>
                        <div className="flex space-x-4 text-base md:text-lg">
                            {faculty.links.map((link, index) => (
                                <Link className="text-base md:text-lg" key={index} href={link.url} target="_blank">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </section>

            {/* PhD Students Section */}
            <section className="mb-12">
                <h2 className="mt-0 mb-4 text-lg md:text-2xl">PhD Students</h2>
                <Row gutter={[16, 16]}>
                    {students.phd.map((student, index) => (
                        <Col key={index} xs={10} sm={8} md={4}>
                        <Card
                                hoverable
                                cover={<img className="team-card-img" alt={student.name} src={student.image} />}
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
                <h2 className="mt-0 mb-4 text-lg md:text-2xl">Master Students</h2>
                <Row gutter={[16, 16]}>
                    {students.master.map((student, index) => (
                        <Col key={index} xs={10} sm={8} md={4}>
                        <Card
                                hoverable
                                cover={<img className="team-card-img" alt={student.name} src={student.image} />}
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
                <h2 className="mt-0 mb-4 text-lg md:text-2xl">Undergraduate Students</h2>
                <Row gutter={[16, 16]}>
                {students.undergraduate.map((student, index) => (
                    <Col key={index} xs={10} sm={8} md={4}>
                            <Card
                                hoverable
                                cover={<img className="team-card-img team-card-img-up" alt={student.name} src={student.image} />}
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

            {/* Visiting Students Section */}
            <section className="mb-12">
                <Title level={3}>Visiting Students</Title>
                <Row gutter={[16, 16]}>
                    {students.visiting.map((student, index) => (
                        <Col key={index} xs={10} sm={8} md={4}>
                            <Card
                                hoverable
                                cover={<img className="team-card-img" alt={student.name} src={student.image} />}
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
            <h2 className="mt-0 mb-4 text-lg md:text-2xl">Alumni</h2>
            <div className="py-10">
                <div className="mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center">
                    {students.alumni.map((alum, index) => (
                    <div key={index} className="text-center space-y-2">
                        <h3 className="font-bold text-base">{alum.name}/{alum.chinese}</h3>
                        <p className="text-sm">{alum.details}, {alum.data}</p>
                        <p className="text-sm">{alum.next}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </section>

        </div>
    );
};

export default FacultyPage;
