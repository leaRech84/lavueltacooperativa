import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NewJobs = ({imagen, fecha,titulo, descripcion}) => {
    return (

        

        <div className="p-4 sm:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        className="lg:h-72 md:h-48 w-full object-cover object-center"
                        src={imagen}
                        alt="blog"
                    />
                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h2 className="text-base font-medium text-indigo-300 mb-1">
                            {fecha}
                        </h2>
                        <h1 className="text-2xl font-semibold mb-3">
                        {titulo}
                        </h1>
                        <p className="leading-relaxed mb-3">
                            {descripcion}
                        </p>
                        <div className="flex items-center flex-wrap ">
                            <Link to={"/wrapper"}>
                                <p className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 font-bold cursor-pointer">
                                    Ver más trabajos
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default NewJobs