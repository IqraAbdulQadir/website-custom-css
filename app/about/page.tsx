import React from "react";  
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <Link
            href='/'><Button>Home</Button></Link>
            

        </div>
    )
}

export default About;