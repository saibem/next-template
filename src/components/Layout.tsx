import React from 'react';
import {Navbar} from "@/components/Navbar";

type propsChildren = {
    children: any
}
export const Layout = ( props: propsChildren) => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}