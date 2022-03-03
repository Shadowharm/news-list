import Parser from 'rss-parser';
import { NewsType } from '../interfaces/news.interface';

const parser: Parser = new Parser();

const getNews: () => Promise<NewsType[]> = async () => {
    const data = await parser.parseURL('https://lenta.ru/rss/news');
    const newsList: NewsType[] = data.items.map((item) => {
        const date: Date = new Date(`${item.pubDate}`)
        const obj: NewsType = {
            title: `${item.title}`,
            description: `${item.contentSnippet}`,
            image: `${item.enclosure?.url}`,
            link: `${item.link}`,
            source: 'www.lenta.ru',
            date: `${('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()}`,
        };

        return obj;
    });

    return newsList;
};

export default getNews;
