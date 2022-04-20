/* eslint-disable @typescript-eslint/ban-ts-comment */

export function fixDOMRect(pageId: string, rect: DOMRect): DOMRect {
  const bounds = fixBounds(pageId, rect);

  return new DOMRect(bounds.left, bounds.top, bounds.width, bounds.height);
}

export function fixDOMRects(pageId: string, rects: DOMRect[]): DOMRect[] {
  const results = [];

  for (const rect of rects) {
    results.push(fixDOMRect(pageId, rect));
  }

  return results;
}

export function fixBounds(
  pageId: string,
  bounds: { left: number; top: number; width: number; height: number },
): any {
  return {
    // @ts-ignore
    left: bounds.left / __DEEP_NOTES__.pages[pageId].zoom,
    // @ts-ignore
    top: bounds.top / __DEEP_NOTES__.pages[pageId].zoom,
    // @ts-ignore
    width: bounds.width / __DEEP_NOTES__.pages[pageId].zoom,
    // @ts-ignore
    height: bounds.height / __DEEP_NOTES__.pages[pageId].zoom,
  };
}
