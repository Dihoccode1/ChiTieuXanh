export const extractTags = (text) => {
  if (!text) return [];
  const regex = /#[\w\u00C0-\u1EF9]+/g;
  const tags = text.match(regex);
  return tags ? [...new Set(tags)] : [];
};
