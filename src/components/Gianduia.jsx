import { SliderGianduia } from './SliderGianduia';


const Gianduia = () => {
  return (
    <div>
      {/* Promotion
      <div className="texts p-10  space-y-5 text-center  justify-center">
        <div className="text-4xl py-4 font-bold text-primary">
          Mantenimento en empresas locales importantes.
        </div>
        <div className="text-center font-semibold text-3xl ">
          Tareas realizadas para la heladería Gianduia.
        </div>
      </div>
      <div className="max-w-[1040px] m-auto md:pl-20 pb-16">

        <div>
          <SliderGianduia />
        </div>

      </div> */}

      <section
                id="lastjobs"
                className="md:h-full flex items-center text-gray-600"
            >
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h5 className="text-base md:text-lg text-secondary mb-1 font-bold">
                            Novedades
                        </h5>
                        <h1 className="text-4xl md:text-4xl mb-3 text-primary font-bold">
                            Mantenimiento en empresas locales importantes
                        </h1>
                        <h2 className='text-4xl md:text-4xl text-primary font-bold'>Tareas realizadas en heladería Gianduia</h2>
                    </div>
                    <div className="flex flex-wrap -m-4">

                   <SliderGianduia/>
                    </div>
                </div>
            </section>

    
    </div>
  );
};

export default Gianduia;



