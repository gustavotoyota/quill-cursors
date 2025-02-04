export default interface IQuillCursorsOptions {
  pageId?: string,
  template?: string;
  containerClass?: string;
  selectionChangeSource?: string;
  hideDelayMs?: number;
  hideSpeedMs?: number;
  transformOnTextChange?: boolean;
  boundsContainer?: HTMLElement;
  positionFlag?: (flag: HTMLElement, caretRectangle: ClientRect, container: ClientRect) => void;
}
