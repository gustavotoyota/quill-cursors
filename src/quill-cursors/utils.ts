export function fixDOMRect(rect: DOMRect): DOMRect {
  const bounds = fixBounds(rect)

  return new DOMRect(bounds.left, bounds.top, bounds.width, bounds.height)
}

export function fixDOMRects(rects: DOMRect[]): DOMRect[] {
  const results = []

  for (const rect of rects)
    results.push(fixDOMRect(rect))

  return results
}

export function fixBounds(bounds: { left: number, top: number, width: number, height: number }): any {
  return {
    // @ts-ignore
    left: bounds.left / $nuxt.$app.page.camera.zoom,
    // @ts-ignore
    top: bounds.top / $nuxt.$app.page.camera.zoom,
    // @ts-ignore
    width: bounds.width / $nuxt.$app.page.camera.zoom,
    // @ts-ignore
    height: bounds.height / $nuxt.$app.page.camera.zoom,
  }
}