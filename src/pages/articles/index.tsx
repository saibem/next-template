import React from 'react';
import axios from "axios";

interface ArticleData {
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
type ArticleProps = {
    articles?: ArticleData['data'];
};



const Article = ({ articles }: ArticleProps) => {
    return (
        <div>
            {articles && (
                <>
                    <div>{articles.perex && <p>{articles.perex}</p>}</div>
                    {articles.content && <p>{articles.content}</p>}
                    {articles.image && (
                        <img src={articles.image} alt="Article" />
                    )}
                </>
            )}
        </div>
    );
};

export const getStaticProps = async () => {
    let articles;

    try {
        const response = await axios.get<ArticleData>(
            'https://acecmsmock.z6.web.core.windows.net/api/content/slug/vyrazte-za-kraskou-a-zviretem-nebo-za-loutkami-vikend-bude-kulturni?webId=3'
        );
        articles = response.data.data;
    } catch (error) {
        console.error(error);
    }

    return { props: { articles } };
};


export default Article;