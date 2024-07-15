import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
    return (
        <div className="Home">
            <NavBar />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
