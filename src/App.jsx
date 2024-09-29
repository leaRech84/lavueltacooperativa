import {useEffect} from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Filter from "./pages/Filter";
import Contact from "./pages/Contact";
import LastJobs from "./pages/LastJobs";



const App = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "auto"})
    }, [pathname])
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="lastjobs" element={<LastJobs />} />
                <Route path="aboutus/*" element={<AboutUs />} />
                <Route path="services" element={<Services />} />
                <Route path="wrapper" element={<Filter />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default App;
