import { useRef } from "react";
import emailjs from "@emailjs/browser";


export const Contact = () => {

    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_15f3ws7",
                "template_rek6711",
                form.current,
                "IH_SB2ZW8MeXrBd7y"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
           
    };

    return (
        <div
            id="contact"
            name="contact"
            className="w-full h-screen bg-primary flex justify-center items-center p-4"
        >
            <form
                className="flex flex-col max-w-[600px] w-full mt-10"
                ref={form}
                onSubmit={sendEmail}
            >
                <div className="pb-8 mb-5">
                    <p className="text-4xl font-bold inline border-b-4 border-secondary text-gray-300">
                        Contacto
                    </p>
                    <p className="text-gray-300 py-4 font-semibold">
                        Dejanos tu mensaje y nos pondremos en contacto.
                    </p>
                </div>
                <input
                    className="bg-[#ccd6f6] p-2"
                    type="text"
                    placeholder="Nombre completo"
                    name="user_name"
                />
                <input
                    className="my-4 p-2 bg-[#ccd6f6]"
                    type="email"
                    placeholder="Email"
                    name="user_email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-3"
                    name="message"
                    rows="4"
                    placeholder="Mensaje"
                />
                <button
                    className="text-white border-2 hover: bg-secondary hover:border-secondary px-4 py-4 mx-auto flex items-center m-8"
                    type="submit"
                    value="Send"
                >
                    Enviar
                </button>

            </form>
        </div>
    );
};


export default Contact;
