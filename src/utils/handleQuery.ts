export const handleQuery = (e, filter, snap, validateUrl) => {
    try {
      if (e.key === "Enter") {
        filter[0]
          ? (window.location.href = filter[0].url)
          : snap.input[0] === "!"
          ? window.location.href = `https://duckduckgo.com/?q=${snap.input}`
          : validateUrl(snap.input)
          ? (window.location.href = `https://${snap.input}`)
          : !validateUrl(snap.input) &&
            (window.location.href = `${snap.prefixData.user.search}${snap.input}`)
      }
    } catch (error) {
      console.warn("malformed URI, using search engine.");
      window.location.href = `https://www.google.com/search?&q=${snap.input}`;
    }
}
