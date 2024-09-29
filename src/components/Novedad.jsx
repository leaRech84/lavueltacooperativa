import myImg9 from "../assets/images/sede_cartel.jpg";
const Novedad = () => {
    return (
        <section className="md:h-full flex items-center text-gray-600">
           <div className="container px-5 pt-12 mx-auto my-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-base md:text-lg text-secondary mb-1 font-bold">
                            Destacada
                        </h3>
         
        <div className='max-w-[1400px] m-auto pt-16 px-4 grid lg:grid-cols-2 gap-4'>
       
        {/* Left Side */}
        <div className='grid grid-cols-1 grid-rows-4 h-auto'>
          <img
            className='row-span-4 object-cover w-auto h-auto p-2'
            src={myImg9}
            alt='/'
          />
      
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
          <h3 className='text-5xl md:text-6xl font-bold text-primary'>Edificio Sede de Gobierno Provincial</h3>
          <p className='text-2xl py-6 font-semibold'>
            Empresa adjudicatoria: Cooperativa de Trabajo La Vuelta Ltda.
          </p>
          <p className='pb-6 text-2xl font-semibold'>
          Obra: Retiro, Limpieza y Desinfección
          </p>
          <div>
          <p>Plazo: 30 días</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>
    )
}

export default Novedad