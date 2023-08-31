export const handleQuery = (
  e: any,
  filter: any,
  snap: any,
  validateUrl: any
) => {
  try {
    if (e.key === "Enter") {
      filter[0]
        ? (window.location.href = filter[0].url)
        : snap.input[0] === "!"
        ? (window.location.href = `https://duckduckgo.com/?q=${snap.input}`)
        : validateUrl(snap.input)
        ? (window.location.href = `${snap.input}`)
        : !validateUrl(snap.input) &&
          (window.location.href = `${snap.prefixData.user.search}${snap.input}`);
    }
  } catch (error) {
    console.warn("malformed URI, using search engine.");
    window.location.href = `https://www.google.com/search?&q=${snap.input}`;
  }
};
