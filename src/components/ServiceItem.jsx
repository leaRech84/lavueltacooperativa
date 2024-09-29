// eslint-disable-next-line react/prop-types
const ServiceItem = ({servicio, descripcion, detalles}) => {
    return (
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
          <li className='mb-10 ml-4'>
              <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
              <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                  <span className='text-lg inline-block px-2 py-1 font-semibold text-white bg-primary rounded-md'>{servicio}</span>
                  <span className='text-lg font-semibold text-[#15310d]'>{descripcion}</span>
              </p>
              <p className='my-2 text-base font-normal text-stone-900'>{detalles}</p>
          </li>
      </ol>
    )
  }
  
  export default ServiceItem