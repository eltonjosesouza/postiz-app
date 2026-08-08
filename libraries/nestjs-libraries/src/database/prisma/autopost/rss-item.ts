import striptags from 'striptags';

export type ParsedRssItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  content?: string;
  'content:encoded'?: string;
  enclosure?: { url?: string };
  'media:content'?: { url?: string; $?: { url?: string } };
};

export function extractLatestRssItem(items: ParsedRssItem[]) {
  const latest = items.reduce<ParsedRssItem>((all, current) => {
    return new Date(current.pubDate || 0).getTime() >
      new Date(all.pubDate || 0).getTime()
      ? current
      : all;
  }, {});

  const media = latest['media:content'];
  const description = striptags(
    latest['content:encoded'] || latest.content || latest.description || ''
  )
    .replace(/\n/g, ' ')
    .trim();

  return {
    date: latest.pubDate || '',
    url: latest.link || '',
    title: latest.title || '',
    description,
    image: latest.enclosure?.url || media?.url || media?.$?.url || '',
  };
}
