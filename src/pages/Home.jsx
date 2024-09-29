import back_1 from "../assets/images/background_1.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaWhatsapp, FaEnvelopeSquare } from "react-icons/fa";
import Services from "./Services";
import LastJobs from "./LastJobs";
import AboutUs from './AboutUs'
import Contact from './Contact'
import Novedad from '../components/Novedad'
import Super from '../components/Super'
import Castenetto from '../components/Castenetto'
import Pisos from '../components/Pisos'
import Gianduia from '../components/Gianduia';
// import { VideoPlayer } from '../components/VideoPlayer';
// import video from '../assets/images/video.mp4'



const Home = () => {
    return (
        <>
            <div id="home">
                <img
                    className="w-full h-screen object-cover object-left scale-x-[-1]"
                    src={back_1}
                    alt="imagen"
                />
                <div className="w-full absolute h-screen top-0 left-0 bg-white/50">
                    <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                        <h1 className="sm:text-5xl text-4xl font-bold text-gray-900">
                            la <span className="text-sky-600">V</span>uelta
                        </h1>
                        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-900 font-bold">
                            <TypeAnimation
                                sequence={[
                                    "ESPACIOS VERDES", // Types 'One'
                                    2000,
                                    "CONSTRUCCIONES",
                                    2000, // Waits 2s
                                    "MOBILIARIO URBANO", // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    "DISEÑO DE JARDINES Y MANTENIMIENTO",
                                    2000,
                                    "CAPACITACIONES",
                                    2000 ,
                                   
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: "1em", paddingLeft: "5px" }}
                            />
                        </h2>
                        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-900 font-bold">
                            <TypeAnimation
                                sequence={[
                                    "ELECTRICIDAD",
                                    2000,
                                     "ALBAÑILERIA Y PINTURA", // Types 'One'
                                    2000, // Waits 2s
                                    "NIVELACION DE TERRENOS", // Deletes 'One' and types 'Two'
                                    2000, // Waits 2s
                                    "HIGIENE EN EDIFICIOS PUBLICOS Y PRIVADOS",
                                    2000,
                                    "VINCULACIONES PROFESIONALES ANTE EVENTOS Y AVATARES AMBIENTALES",
                                    2000,
                                    "RESOLUCION DE PROBLEMAS",
                                    2000
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: "1em", paddingLeft: "5px" }}
                            />
                        </h2>
                        <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <div>
                            <a href="https://instagram.com/cooperativalavuelta/">
                            <FaInstagram className="cursor-pointer" size={30}/>
                            </a>
                        </div>
                        <div>
                        <a href="https://wa.me/+543415075396?text=Me%20interesa%20el%20servicio">
                            <FaWhatsapp className="cursor-pointer" size={30}/>
                            </a>
                        </div>
                            <a href="/contact">
                            <FaEnvelopeSquare
                                className="cursor-pointer"
                                size={30}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Gianduia />
            <Castenetto/>
            <Super/>
            <Pisos/>
            {/* <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<VideoPlayer src={video} />
		</div> */}
            <AboutUs/>
            <Services />
            <LastJobs />
            <Novedad/>
            <Contact/>
        </>
    );
};

export default Home;
