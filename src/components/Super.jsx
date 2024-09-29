import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Logo from "../assets/images/logonegro.png";
import img1 from "../components/BeforeAfter/images/antes1.jpg";
import img2 from "../components/BeforeAfter/images/despues1.jpg";
import img3 from "../components/BeforeAfter/images/antes2.jpg";
import img4 from "../components/BeforeAfter/images/despues2.jpg";
import img5 from '../components/BeforeAfter/images/antes3.jpg'
import img6 from '../components/BeforeAfter/images/despues3.jpg'
import img7 from '../components/BeforeAfter/images/antes4.jpg'
import img8 from '../components/BeforeAfter/images/despues4.jpg'
import { useState } from "react";

const Super = () => {
    const [active, setActive] = useState(null);
    const langs = [
        {
            name: "Antes",
            logo: "css3",
            skill: "90%",
            image: img1,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Después",
            logo: "css3",
            skill: "90%",
            image: img2,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Antes",
            logo: "css3",
            skill: "90%",
            image: img3,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Después",
            logo: "css3",
            skill: "90%",
            image: img4,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Antes",
            logo: "css3",
            skill: "90%",
            image: img5,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Después",
            logo: "css3",
            skill: "90%",
            image: img6,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Antes",
            logo: "css3",
            skill: "90%",
            image: img7,
            color: "hue-rotate-[240deg]",
        },
        {
            name: "Después",
            logo: "css3",
            skill: "90%",
            image: img8,
            color: "hue-rotate-[240deg]",
        }
    ];
    return (
        <>
        <div>
        <h1 className='mt-16 text-3xl font-semibold text-center text-primary bg-slate-300 py-5'>Trabajo particular : Mirá el antes y el despúes</h1>
        </div>
        <div className="h-screen bg-[#050b35] text-white flex items-center justify-center overflow-hidden">
         
            <div className="max-w-5xl">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={(cur) => setActive(cur.realIndex)}
                    loop={true}
                    centeredSlides={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                    }}
                    modules={[Autoplay]}
                >
                    {langs.map((lang, i) => (
                        <SwiperSlide key={i}>
                            <div className="h-auto flex overflow-hidden">

                                <div
                                    className={`card ${
                                        active === i && "card-active"
                                    } to-green-600/40 border-green-600`}
                                >
                               
                                    <div className="logo">
                                        <img src={Logo} />
                                    </div>
                                    <h2 className="text-3xl mt-2 font-semibold">
                                        {lang.name}
                                    </h2>
                                    <img className="para" src={lang.image} />
                                    <div className="bg-green-600 skill-level">
                                        {lang.skill}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        </>
    );
};

export default Super;
