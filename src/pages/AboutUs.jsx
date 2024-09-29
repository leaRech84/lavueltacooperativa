//import LastItem from '../components/LastItem';
// image_1 from './assets/images/img_1.jpg';
// image_2 from './assets/images/img_2.jpg';
// image_3 from './assets/images/img_3.jpg';
// import image_4 from '../assets/images/sede_de_gobierno_1.jpg';
// import image_5 from '../assets/images/ingeser_3.jpg';
// import image_6 from '../assets/images/particular_6.jpg';
// import image_7 from '../assets/images/particular_4.jpg';
import { Slider } from '../components/Slider';

const AboutUs = () => {
  return (
    <div id='aboutus' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
     <h1 className='mt-16 text-4xl font-bold text-center text-primary'>Sobre Nosotros</h1>
     <p className='text-center py-8 font-semibold text-2xl'>Somos profesionales del área verde que anexamos otros servicios complementarios. De esta forma le dimos diversidad a la cooperativa y posibilidades a otros rubros importantes.</p><p className='text-xl-2'></p>
     <p className='text-center py-8 font-semibold text-3xl text-primary'>
        Cada vez son más las personas que confían en nuestra calidad y servicios.
     </p>
    
     <Slider/>
    </div>
  )
}

export default AboutUs