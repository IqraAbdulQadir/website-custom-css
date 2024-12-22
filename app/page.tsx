import React from "react";  
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <Link
            href='/services'><Button> Services</Button></Link>
            

        </div>
    )
}

export default HomePage;