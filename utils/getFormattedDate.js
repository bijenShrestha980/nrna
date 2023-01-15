function getFormattedDate(date) {
  let formattedDate = new Date(`${date}Z`).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  let safariDate = new Date(Date.parse(`${date}`)).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  let renderedDate;
  if (formattedDate === "Invalid Date") {
    renderedDate = safariDate;
  } else {
    renderedDate = formattedDate;
  }
  return renderedDate;
}

export default getFormattedDate;
