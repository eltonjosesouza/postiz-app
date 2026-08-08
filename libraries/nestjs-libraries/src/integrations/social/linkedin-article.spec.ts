import { buildLinkedInContent } from './linkedin-article';

describe('buildLinkedInContent', () => {
  it('creates a native LinkedIn article attachment for an RSS URL', () => {
    expect(buildLinkedInContent(false, [], undefined, 'https://example.com/article')).toEqual({
      content: { article: { source: 'https://example.com/article' } },
    });
  });

  it('keeps uploaded media behavior unchanged', () => {
    expect(buildLinkedInContent(false, ['urn:li:image:123'])).toEqual({
      content: { media: { id: 'urn:li:image:123' } },
    });
  });
});
