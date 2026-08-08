export function buildLinkedInContent(
  isPdf: boolean,
  mediaIds: string[],
  pdfTitle?: string,
  articleUrl?: string
) {
  if (articleUrl && mediaIds.length === 0) {
    return { content: { article: { source: articleUrl } } };
  }
  if (mediaIds.length === 0) return {};
  if (mediaIds.length === 1) {
    return {
      content: {
        media: {
          ...(isPdf ? { title: pdfTitle || 'slides' } : {}),
          id: mediaIds[0],
        },
      },
    };
  }
  return { content: { multiImage: { images: mediaIds.map((id) => ({ id })) } } };
}
