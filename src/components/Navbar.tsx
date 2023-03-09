import Link from 'next/link'
import axios from 'axios';
import {useEffect, useState} from "react";
import {fetchMenu} from "@/store1/sagas";

export interface Menu {
    id: number;
    name: string;
    slug: string;
    locale: string;
    publishDate: string;
    web: {
        id: number;
    };
    data: {
        items: MenuItem[];
    };
}

export interface MenuItem {
    name: string;
    uri: string;
}

interface Props {
    menuItems: MenuItem[];
    fetchMenu: () => void;
}

export const Navbar: React.FC<Props> = ({ menuItems, fetchMenu }) => {

    // const [links, setLinks] = useState<MenuItem[]>();
    // console.log(links)


    useEffect(() => {
        fetchMenu();
    }, []);



    return (
        <nav>
            <div style={{display: "flex", alignItems: 'center', justifyContent:'center',flexDirection: 'row', gap: '1rem', fontSize:'1.5rem'}}>
            {menuItems?.map((link) => (
                    <li key={link.name}>
                        <Link href={`${(link.uri)}`}>
                            {link.name}
                        </Link>
                    </li>
                ))}
                <div>
                    <Link href={"/articles"}>Articles</Link>
                </div>
            </div>

        </nav>
    )
}

