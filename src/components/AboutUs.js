import React from "react";
import { useOutletContext } from "react-router-dom";

const AboutUs = () => {
    const exampleContext = useOutletContext;
    console.log("Example Context", exampleContext);

    return (
        <div>
            <p>About Us</p>

            {
                exampleContext[0]
            }
            
        </div>
    )
};

export default AboutUs;