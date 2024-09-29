import { Slider2 } from "./Slider2";
const Promotion = () => {
    return (
        <div>
            <div className="texts p-10  space-y-5 text-center  justify-center">
                    <div className="text-5xl py-4 font-bold text-primary">
                        <span className="text-secondary">
                            {" "}
                            Espacio Cultural{" "}
                        </span>
                        Mario Castenetto
                    </div>
                    <div className="text-center py-2 font-semibold text-2xl ">
                        Programa permanente de aprendizajes colectivos en
                        Cultura, Arte, Industrias Culturales y Cuidado
                        Socioambiental.
                    </div>

                    <div className="text-center py-2 font-semibold text-3xl text-primary">
                        La Vuelta se lució en la participación del jardín.
                    </div>
                </div>
            <div className="py-22 px-10 grid grid-cols-1 lg:grid-cols-2">
         
                <div className="image">
                    <Slider2 />
                </div>
                <div className="max-w-[600px] h-[700px] w-full m-auto py-16">
                    <iframe className="max-w-[600px] h-[570px] w-full rounded-2xl" src="https://www.youtube.com/embed/wHyBG0blGx8" title="Jardín Espacio Cultural Mario Castenetto." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
               
            </div>

            {/* Promotion */}
        </div>
    );
};

export default Promotion;
