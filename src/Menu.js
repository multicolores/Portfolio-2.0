import React, {useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import gsap from "gsap";

//images 
import restaurant_home from "./photos/restaurant_home.jpg";
import resto_gatsby_home from "./photos/gatsby_resto_home.jpg";
import architecture_home from "./photos/architecture_home.jpg";
import sushi_darkmode_home from "./photos/sushi_darkmode_home.jpg";
import SpaceStar from "./photos/SpaceStar.JPG";
import Capsule from "./photos/capsule_header.jpg";
// import Design from "./photos/crypto_design.JPG";
import Portfolio from "./photos/portfolio_home.jpg";



const everyProjects = [
    {name: "Restaurant", image: restaurant_home, path:"/restaurant"},
    {name: "Restaurant 2.0", image: resto_gatsby_home, path:"/restaurant_gatsby"},
    {name: "architecture", image: architecture_home, path:"/architecture"},
    {name: "sushi", image: sushi_darkmode_home, path:"/sushi"},
    {name: "Space Star", image: SpaceStar, path:"/SpaceStar"},
    {name: "Capsule", image: Capsule, path:"/Capsule"},
    {name: "Portfolio", image: Portfolio, path:"/Portfolio"},
];


const Menu = () => {
    
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let ImageBackground = useRef(null);
    let Text = useRef(null);

    const [state, setState] = useState({
        initial: false,
        clicked: false,
        menuName: "Menu"
    });

    const [disabled, setDisabled] = useState(false);

    const handleMenu = () => {
        disableMenu();
        if(state.initial === false){
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked == true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: 'Close'
            });

        }
    };

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1000);
    };

    useEffect(() => {
        if(state.clicked === false) {
            //close the menu
            // menu.style.display = "none";
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            });
        }else if (state.clicked = true || (state.clicked = true && state.initial === null)){
            // open the menu
            // menu.style.display = "block";
            gsap.to(menu, {
                duration: 0,
                css: {display: "block"}
            });
            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                // opacity: 1,
                height: "100%"
            });
            staggerReveal(revealMenuBackground, revealMenu); 
        }
    }, [state]);

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,

            ease: "power3.inOut",
            stagger: {
                amount: 0.07
            }
        });
    };



    //images 

    const handleImages = image => {
        gsap.to(ImageBackground, {
            duration: 0,
            background: `url(${image}) center center`
        });
        gsap.to(ImageBackground, {
            duration: 0.4,
            opacity: 0.1,
            ease: "power3.inOut"
        });
        gsap.from(ImageBackground, {
            duration: 0.4,
            skeyY: 2,
            transformOrigin: "right top"
        });

    };

    const handleImagesReturn = () => {
        gsap.to(ImageBackground, {
            duration: 0.4,
            opacity:0
        });
    };



    return (
        <>
        <button disabled={disabled} onClick={handleMenu} className="button_menu">{state.menuName}</button>

        <div ref={el => (menu = el)} className="menu">
            <div ref={el => (revealMenuBackground = el)}className="menu_background"></div>
            <div ref={el => (revealMenu = el)}  className="menu_container">

                <div ref={el => (ImageBackground = el)} className="ImageBackground"> </div>

                <div className="links_container">
                    {everyProjects.map(el => (
                        <Link to={el.path} key={el.name}>
                            <span key={el.name} onMouseEnter={() => handleImages(el.image)} onMouseOut={handleImagesReturn} >{el.name}</span>
                        </Link>
                    ))}
                </div>



                {/* <Link to="/restaurant">
                    <span ref={el => (Text = el)}>Restaurant</span>
                </Link>
                <Link to="/restaurant_gatsby">
                    <span ref={el => (Text = el)} >Restaurant 2.0</span>
                </Link>
                <Link to="/architecture">
                    <span ref={el => (Text = el)} >Architecture</span>
                </Link>
                <Link to="/sushi">
                    <span ref={el => (Text = el)} >sushi</span>
                </Link>
                <Link to="/SpaceStar">
                    <span ref={el => (Text = el)} >Space Star</span>
                </Link>
                <Link to="/Capsule">
                    <span ref={el => (Text = el)} >Capsule</span>
                </Link>
                <Link to="/Portfolio">
                    <span ref={el => (Text = el)} >Portfolio</span>
                </Link> */}

            </div>
        </div>
        </>
    )
}


export default Menu
