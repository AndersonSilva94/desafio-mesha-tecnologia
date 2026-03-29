export function resolveAppleImageUrl(url, width, height) {
  return url
    .replace("{w}", width.toString())
    .replace("{h}", height.toString());
}