function formatDate(isoString) {
  console.log(isoString);
  
  const date = new Date(isoString);
  // Format: "Month Day, Year"
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatted;
}

function isArrayIncluded(array1, array2) {
  return array1.every(item => array2.includes(item));
}


export { formatDate, isArrayIncluded };
