import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";


const Home = () => {

    return (
        <main>
            <h1>Home</h1>
            <p>Welcome to my portfolio!</p>

            <About />
            <Services />
            <Portfolio />
            <Contact />
            
        </main>
    );
};

export default Home;