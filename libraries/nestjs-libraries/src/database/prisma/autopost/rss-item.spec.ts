import { extractLatestRssItem } from './rss-item';

describe('extractLatestRssItem', () => {
  it('preserves the article URL, full description, title and RSS image', () => {
    const result = extractLatestRssItem([
      {
        title: 'Older',
        link: 'https://example.com/older',
        pubDate: '2026-08-06T00:00:00.000Z',
      },
      {
        title: 'Agentes Que Apagam Testes',
        link: 'https://example.com/article',
        pubDate: '2026-08-07T00:00:00.000Z',
        description: '<p>Descrição editorial completa.</p>',
        enclosure: { url: 'https://example.com/cover.webp' },
      },
    ]);

    expect(result).toEqual({
      date: '2026-08-07T00:00:00.000Z',
      url: 'https://example.com/article',
      title: 'Agentes Que Apagam Testes',
      description: 'Descrição editorial completa.',
      image: 'https://example.com/cover.webp',
    });
  });

  it('falls back to media:content when enclosure is absent', () => {
    expect(
      extractLatestRssItem([
        {
          title: 'Article',
          link: 'https://example.com/article',
          pubDate: '2026-08-07T00:00:00.000Z',
          'media:content': { $: { url: 'https://example.com/media.jpg' } },
        },
      ]).image
    ).toBe('https://example.com/media.jpg');
  });
});
