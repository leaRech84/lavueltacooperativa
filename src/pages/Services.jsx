import ServiceItem from "../components/ServiceItem";

const data = [
    {
        servicio: "Espacios verdes. Diseño de jardines y mantenimiento",
        descripcion: "Diseño y mantenimiento de espacios verdes. Público y privado.",
        detalles: ""
    },
    {
        servicio: "Mobiliario urbano",
        descripcion: "Complementos de paisaje como bancos, luminarias, pasillos, fuentes, senderos. Remodelación y creación.",
        detalles: ""
    },
    {
        servicio: "Higiene en edificios públicos y privados",
        descripcion: "Limpieza y acondicionamiento total de instalaciones, edilicios públicos y privados, antiguos y modernos.",
        detalles: ""
    },
    {
        servicio: "Electricidad",
        descripcion: "Instalaciones y reparaciones en edificaciones externas e internas.",
        detalles: ""
    },
    {
        servicio: "Construcciones. Albañilería. Pintura",
        descripcion: "Construcción. Remodelaciones en edificaciones externas e internas.",
        detalles:""
    },
    {
        servicio: "Capacitaciones",
        descripcion: "En todas las áreas que incluye el estatuto de la cooperativa.",
        detalles: ""
    },
    {
        servicio: "Vinculaciones profesionales ante eventos y avatares ambientales. Resolución de Problemas.",
        descripcion: "",
        detalles: ""
    }
];
const Services = () => {
    return (
        <div id="servicios" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-primary mt-16 mb-10">
                Servicios
            </h1>
            {data.map((item, idx) => (
                <ServiceItem
                    key={idx}
                    servicio={item.servicio}
                    descripcion={item.descripcion}
                    detalles={item.detalles}
                />
            ))}
        </div>
    );
};

export default Services;