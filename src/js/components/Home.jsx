import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import imageCard from "../../img/500 x 325.jpg"; 

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <Jumbotron />
                <div className="row">
                    <Card
                        image={imageCard}
                        title="Card Title 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        buttonLabel="Find Out More!"
                    />
                    <Card
                        image={imageCard}
                        title="Card Title 2"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        buttonLabel="Find Out More!"
                    />
                    <Card
                        image={imageCard}
                        title="Card Title 3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        buttonLabel="Find Out More!"
                    />
                    <Card
                        image={imageCard}
                        title="Card Title 4"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        buttonLabel="Find Out More!"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;