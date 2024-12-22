import React from "react";  
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact = () => {
    return(
        <div>
            <h1>Contact Page</h1>
            <Link
            href='/'><Button>Home</Button></Link>
            

        </div>
    )
}

export default Contact;