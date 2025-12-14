export function resolveAppleImageUrl(url: string, width: number, height: number) {
  return url
    .replace("{w}", width.toString())
    .replace("{h}", height.toString());
}