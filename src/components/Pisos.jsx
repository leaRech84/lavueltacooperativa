import img1 from '../assets/images/pisos.jpg';
const Pisos = () => {
    return (
        <div>
            <div className="texts p-10  space-y-5 text-center  justify-center">
                <div className="text-4xl py-4 font-bold text-primary">
                    Limpieza de pisos a seco. Finales de obra.
                </div>
                <div className="text-center font-semibold text-3xl ">
                    Otro de nuestros servicios realizados
                </div>


            </div>
            <div className="py-22 px-10 grid grid-cols-1 lg:grid-cols-2">

                <div className="image">
                    <img
                        className='row-span-4 object-cover max-w-[600px] h-[700px] w-full m-auto py-16'
                        src={img1}
                        alt='/'
                    />
                </div>
                <div className="max-w-[600px] h-[750px] w-full m-auto py-16">
                    <iframe className="max-w-[600px] h-[580px] w-full m-auto" src="https://www.youtube.com/embed/9bBusV9tSJg" title="Limpieza de pisos a seco. Finales de obra." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>

        </div>
    );
};

export default Pisos;