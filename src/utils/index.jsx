function formatDate(isoString) {
  const date = new Date(isoString);
  // Format: "Month Day, Year"
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatted;
}

export { formatDate };
