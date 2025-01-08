import React, { useState } from "react";
import { Card, Button, Typography, Divider } from "antd";
import { ScheduleOutlined, YoutubeOutlined, CalendarOutlined, BookOutlined } from "@ant-design/icons";

const { Title, Paragraph, Link } = Typography;

const courses = [
  {
    id: "23310067",
    title: "Inverse Problems and Computational Imaging",
    chineseTitle: "反问题和计算成像",
    since: "Fall 2023/2024",
    ta: "Weimin Bai, Enze Ye",
    description:
      "Computational imaging leverages algorithms to reconstruct signals of observed targets from indirect measurements. Its applications span various scientific and engineering fields, such as astronomical observation, medical ultrasound, X-ray computed tomography, and super-resolution microscopy. This course provides a comprehensive introduction to the fundamental theories, classical algorithms, and representative applications of computational imaging. It is organized into three core modules: optimization and regularization, statistical inference, and deep learning.",
    syllabus: "/syllabus1",
    lectures: "/lectures1",
    projects: "/projects1",
    image: "./rawdata/teaching1.jpg",
  },
  {
    id: "23310072",
    title: "Adaptive Optics: Principles & Applications",
    chineseTitle: "自适应光学：原理及应用",
    since: "Spring 2024",
    ta: "Jinxin Liu",
    description:
      "This course introduces the principles and applications of adaptive optics, a key technology for correcting optical aberrations in imaging systems. Originating from astronomical telescopes and contributing to groundbreaking discoveries like the supermassive black hole, adaptive optics has expanded to fields such as ophthalmic and microscopic imaging. Through lectures and literature reviews, the course aims to equip students with the knowledge and skills to apply adaptive optics to practical scientific challenges.",
    syllabus: "/syllabus2",
    lectures: "/lectures2",
    projects: "/projects2",
    image: "./rawdata/teaching2.jpg",
  },
];


const presentations = [
  {
    date: "2022-11-13",
    conference: "格致论道",
    title: "Imaging the Milky Way’s Black Hole with Generative AI",
    chineseTitle: "用这种“黑科技”，我们洗出了银河系中心黑洞的照片",
    description: "在过去，我们依靠“猜”实现黑洞的概率成像，但是这个过程十分缓慢，计算量极高。科学家们发明了一个新方法，借助深度生成模型，洗出了银河系中心黑洞的照片。而且，这项技术还能应用于医学领域，成为“科学家的眼睛”…",
    youtubeLink: "https://self.kepu.net.cn/self_yj/202212/t20221202_503460.html",
  },
];

const CourseCard = ({ course }) => {
  const [expanded, setExpanded] = useState(false); // 用于控制展开和隐藏状态

  return (
    <Card
      hoverable
      className="shadow-lg rounded-lg my-4 mx-auto"
      style={{ padding: "20px", marginBottom: "20px", maxWidth: "1000px" }}
    >
      <div className="flex items-center justify-between mb-4">
        {/* 左侧课程ID */}
        <div className="flex items-center text-gray-600">
          <BookOutlined className="mr-2" />
          <span>{course.id}</span>
        </div>
        {/* 右侧开设年份 */}
        <div className="flex items-center text-gray-600">
          <CalendarOutlined className="mr-2" />
          <span>{course.since}</span>
        </div>
      </div>

      {/* 课程标题 */}
      <div className="text-center">
        <h3 className="text-xl">{course.title}</h3>
        <p className="text-gray-500 text-sm">{course.chineseTitle}</p>
      </div>

      {/* 底部学期信息 */}
      <div className="text-center mt-4 text-gray-600 flex items-center justify-center">
        {/* 展开或隐藏的课程描述 */}
        <span className="text-sm">
          <span className="mr-2">{course.description}</span>
          {course.term}
        </span>
      </div>
    </Card>
  );
};

const PresentationCard = ({ presentation }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      hoverable
      className="shadow-lg rounded-lg my-4 mx-auto"
      style={{ padding: "20px", marginBottom: "20px", maxWidth: "1000px" }}
    >
      <div className="flex items-center justify-between mb-4">

        {/* 左侧课程ID */}
        <div className="flex items-center text-gray-600">
          <ScheduleOutlined className="mr-2" />
          <span>{presentation.conference}</span>
        </div>
        {/* 右侧开设年份 */}
        <div className="flex items-center text-gray-600">
          <CalendarOutlined className="mr-2" />
          <span>{presentation.date}</span>
        </div>

      </div>

      {/* 演讲标题 */}
      <div className="text-center flex items-center justify-center">
        <Button
          type="primary"
          shape="circle"
          icon={<YoutubeOutlined />}
          onClick={() => window.open(presentation.youtubeLink, "_blank")}
          className="mr-4"
        />
        <Link href={presentation.youtubeLink} target="_blank" className="text-xl font-bold">
          {presentation.chineseTitle}
        </Link>
      </div>
      <div className="text-center">
        <p className="text-base mt-2">{presentation.title}</p>
      </div>
      {/* 演讲描述 */}
      <div className="text-center mt-4 text-gray-600">
        <Paragraph ellipsis={!expanded ? { rows: 2 } : false}>
          {presentation.description}
        </Paragraph>
      </div>
    </Card>
  );
};

const CourseList = () => {
  return (
    <div className="py-10">

      {/* Presentations Section */}
      <Title level={3} className="mt-10 text-center" style={{ fontWeight: 'bold' }}>
        Science Lectures
      </Title>
      {presentations.map((presentation, index) => (
        <PresentationCard key={index} presentation={presentation} />
      ))}
      {/* Courses Section */}
      <Title level={3} className="mt-12 text-center "style={{ fontWeight: 'bold' }}>
        Courses
      </Title>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

    </div>
  );
};

export default CourseList;