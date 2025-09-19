import { Carousel } from "antd";
import { Divider } from "antd";
import { useRef } from "react";


const images = [
    "./rawdata/team1.jpg",
    "./rawdata/team2.jpg",
    "./rawdata/team3.jpg",
    "./rawdata/team4.jpg",
    "./rawdata/team5.jpg",
];

const ImageSlider = () => {
    const carouselEL = useRef(null);
    return (
        <div className="flex justify-center py-10">
            <div className="w-4/5">
                {/* Ant Design Carousel */}
                <Carousel

                    autoplay
                    dots={true}
                    effect="scrollx"
                    ref={carouselEL}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full rounded-lg object-cover"
                                style={{ height: "600px" }} // Set the desired height for images
                            />
                        </div>
                    ))}
                </Carousel>
                <div className="flex justify-center py-10">
                    <div className="w-full bg-gray-100 rounded-lg shadow-lg p-8">

                        <div className="mb-8">
                            <h2 className="text-center text-xl mb-5">
                                Joining the Group
                            </h2>
                            <p className="text-justify text-gray-600 mb-14">
                                We are hiring highly motivated students and postdocs to join our group. Please send emails to the PI if you are interested in working with us on groundbreaking research on computational imaging. For details specific to graduate students, undergraduate students and postdocs, see below. Usually, we will reply within one week if we think you are a potential candidate. If you do not receive any reply after two weeks, please feel free to move forward by contacting other professors.
                            </p>
                        </div>
                        <Divider />

                        <div className="mb-8">
                            <h2 className="text-center text-xl mb-5">
                                Prospective PhD and Master Students
                            </h2>
                            <p className="text-justify text-gray-600 mb-14">
                                Our group has opening positions for Ph.D. and Master in each year. The selection is usually during the summer camp of PKU College of Future Technology and School of Software & Microelectronics in June/July for the next-year fall semester enrollment. Please send your CV + transcript to the PI and use "PhD Application – Your University -Your Name" as subject of your first email. In your email, please describe how your research interests match our group instead of simply asking whether there are quotas available.
                            </p>
                        </div>
                        <Divider />
                        <div className="mb-8">
                            <h2 className="text-center text-xl mb-5">
                                Prospective Undergraduate Students
                            </h2>
                            <p className="text-justify text-gray-600 mb-14">
                                PKU undergraduate students can directly send the PI emails to inquire about research intern position. Please send your CV + transcript and use "Undergraduate Research – Your Department – Your Name" as subject of your first email. In principle, recommendation letters will only be provided to undergraduate students with 6+ months research experience in our lab to ensure we have something concrete to comment.
                            </p>
                        </div>
                        <Divider />

                        <div>
                            <h2 className="text-center text-xl mb-5">
                                Prospective Postdocs
                            </h2>
                            <p className="text-justify text-gray-600">
                                We are hiring highly motivated postdocs to join our group through the Boya Postdoctoral Fellowship at Peking University. Please send your CV + Research Statement and use "Postdoc Application – Your University – Your Name" as subject of your first email.
                            </p>
                        </div>
                    </div></div>
            </div>
        </div>
    );
};

export default ImageSlider;
