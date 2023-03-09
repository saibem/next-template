import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {Menu} from "@/components/Navbar";

interface PageFetchedData {
    id: number;
    name: string;
    slug: string;
    locale: string;
    publishDate: string;
    web: {
        id: number;
    };
    data: {
        perex: string;
        image: string;
        content: string;
    };
}
//
// // pages/posts/[postId].js
//
//
// function Post({ content }) {
//     const router = useRouter();
//     const { postId } = router.query;
//     const [postContent, setPostContent] = useState(null);
//
//     useEffect(() => {
//         async function fetchPostContent() {
//             const response = await fetch(`https://acecmsmock.z6.web.core.windows.net/api/content/slug/${postId}`);
//             const data = await response.json();
//             setPostContent(data.content);
//         }
//
//         fetchPostContent();
//     }, [postId]);
//
//     return <div>{postContent || content}</div>;
// }
//
// export async function getStaticPaths() {
//     const response = await fetch('/api/posts');
//     const data = await response.json();
//     const paths = data.map(post => ({ params: { postId: post.id } }));
//
//     return {
//         paths,
//         fallback: true, // or 'blocking' if you want to use ISR
//     };
// }
//
// export async function getStaticProps({ params }) {
//     const postId = params.postId;
//     const response = await fetch(`/api/posts/${postId}`);
//     const data = await response.json();
//     return {
//         props: {
//             content: data.content,
//         },
//     };
// }
//
// export default Post;

const SelectedPage = () => {
    const router = useRouter();
    const { postId } = router.query;
    console.log("postID",postId)
    const [pageData, setPageData] = useState(null as PageFetchedData | null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get<PageFetchedData>(`https://acecmsmock.z6.web.core.windows.net/api/content/slug/${postId}`);
                const response = res.data;
                setPageData(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    console.log(pageData)

    return <div>Post ID</div>;
}


export default SelectedPage;