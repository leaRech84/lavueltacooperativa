import myImg from "../assets/images/particular_3.jpg";
import myImg2 from "../assets/images/particular_5.jpg";
import myImg3 from "../assets/images/granja_infancia_5.jpg";
import myImg4 from "../assets/images/jardin-esp-5.jpg";
import myImg5 from "../assets/images/castagnino_5.jpg";
import myImg6 from "../assets/images/limpydesp_1.jpg";
import myImg7 from "../assets/images/pintura_edpublicos_2.jpg";
import myImg8 from "../assets/images/particular_8_poda.jpg";
import myImg9 from "../assets/images/macro_1.jpg"
import myImg10 from "../assets/images/huerta_y_map_2.jpg"
import myImg11 from '../assets/images/porticos_1.jpg';
import myImg12 from '../assets/images/fae.jpg'
import myImg13 from '../assets/images/pisos.jpg'
import myImg14 from '../assets/images/edi5.jpg'
import myImg15 from '../assets/images/g3.jpg'
import NewJobs from "../components/NewJobs";

const data = [
    {
        imagen: myImg15,
        fecha: 'Septiembre 2024',
        titulo:'Gianduia heladería',
        descripcion :'Tareas de mantenimiento.'
    },
    {
        imagen: myImg14,
        fecha: 'Agosto 2023',
        titulo:'Particular',
        descripcion :'Limpieza en altura en seco.'
    },
    {
        imagen: myImg13,
        fecha: 'Agosto 2023',
        titulo:'Particular',
        descripcion :'Limpieza de pisos en seco. Finales de obra.'
    },
    {
        imagen: myImg12,
        fecha: 'Julio 2023',
        titulo:'FAE',
        descripcion :'Trabajo de albañilería en el Fondo de Asistencia Educativa del Municipio de Rosario'
    },
    {
        imagen: myImg11,
        fecha: "Junio 2023",
        titulo: " Museo Municipal de Bellas Artes Juan B.Castagnino",
        descripcion:"Limpieza en altura de pórticos. Área de limpieza.",
    },

    {
        imagen: myImg10,
        fecha: "Junio 2023",
        titulo: "Museo de Arte Contemporáneo Rosario",
        descripcion:
            "Área de limpieza.",
    },
    {
        imagen: myImg9,
        fecha: "Junio 2023",
        titulo: "Huerta y Mariposario",
        descripcion: "Particular",
    },
    {
        imagen: myImg8,
        fecha: "Junio 2023",
        titulo: "Limpieza y despeje otoñal",
        descripcion: "Particular",
    },
    {
        imagen: myImg7,
        fecha: "Mayo 2023",
        titulo: "Pintura en edificios públicos",
        descripcion: "Mantenimiento",
    },
    {
        imagen: myImg6,
        fecha: "Mayo 2023",
        titulo: "Poda en espacios reducidos",
        descripcion: "Particular",
    },
    {
        imagen: myImg5,
        fecha: "Mayo 2023",
        titulo: "Museo Municipal de Bellas Artes Juan B.Castagnino",
        descripcion: "Área de limpieza.",
    },
    {
        imagen: myImg4,
        fecha: "Mayo 2023",
        titulo: "Museo Municipal de Arte Decorativo",
        descripcion: " Jardín símetrico español guardando el estilo de la casa. Alineación de jazmines. Cítricos. Malvón hiedra típico español. Cipreses.",
    },
    {
        imagen: myImg3,
        fecha: "Abril 2023",
        titulo: "Particular",
    },
    {
        imagen: myImg2,
        fecha: "Abril 2023",
        titulo: "Granja de la infancia",
    },
    {
        imagen: myImg,
        fecha: "Abril 2023",
        titulo: "Particular",
    }
];

const LastJobs = () => {
    return (
        <>
            <section
                id="lastjobs"
                className="md:h-full flex items-center text-gray-600"
            >
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h5 className="text-base md:text-lg text-secondary mb-1 font-bold">
                            Novedades
                        </h5>
                        <h1 className="text-4xl md:text-5xl text-primary font-bold">
                            Algunos de nuestros trabajos más recientes
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">

                    {data.map((item, idx) => (
                        <NewJobs
                            key={idx}
                            imagen={item.imagen}
                            fecha={item.fecha}
                            titulo={item.titulo}
                            descripcion={item.descripcion}
                        />
                    ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LastJobs;
