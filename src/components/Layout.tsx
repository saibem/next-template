import React from 'react';
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {Nav} from "@/components/Nav";
import { Provider } from "react-redux";
import store from "@/store";


type propsChildren = {
    children: any
}
export const Layout = ( props: propsChildren) => {
    return (
        <div>
            {/* <Navbar /> */}
            <Provider store={store}>
                <Nav />
            </Provider>
            {props.children}
            <Footer />
        </div>
    )
}

