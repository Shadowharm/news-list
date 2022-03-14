import Parser from 'rss-parser';
import { NewsType } from '../interfaces/news.interface';

const parser: Parser = new Parser();

const getNews: () => Promise<NewsType[]> = async () => {
    let data = (
        await parser.parseURL('https://lenta.ru/rss/news')
    ).items.concat((await parser.parseURL('https://www.mos.ru/rss')).items);
    data = data.sort((a, b) =>{
        if (new Date(`${a.pubDate}`) > new Date(`${b.pubDate}`)) {
            return -1
        }
        if (new Date(`${a.pubDate}`) < new Date(`${b.pubDate}`)) {
            return 1
        }
        return 0
    })
    const newsList: NewsType[] = data.map((item, i) => {
        const date: Date = new Date(`${item.pubDate}`);
        const obj: NewsType = {
            title: `${item.title}`,
            description: `${item.contentSnippet || ''}`,
            image: `${item.enclosure?.url}`,
            link: `${item.link}`,
            source: /lenta/.test(`${item.link}`) ? 'lenta' : 'mos',
            date: `${
                ('0' + date.getDate()).slice(-2) +
                '.' +
                ('0' + (date.getMonth() + 1)).slice(-2) +
                '.' +
                date.getFullYear()
            }`,
        };

        return obj;
    });
    return newsList;
};

export default getNews;
