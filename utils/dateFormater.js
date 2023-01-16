const formatDate = (props) => {
  let preFormattedAte = new Date(props);
  let year = preFormattedAte.getFullYear();
  let month = "";
  let date = "";
  if (parseInt(preFormattedAte.getMonth() + 1) < 10) {
    month = `0${preFormattedAte.getMonth() + 1}`;
  } else {
    month = preFormattedAte.getMonth() + 1;
  }
  if (parseInt(preFormattedAte.getDate()) < 10) {
    date = `0${preFormattedAte.getDate()}`;
  } else {
    date = preFormattedAte.getDate();
  }
  return `${year}-${month}-${date}`;
};

export default formatDate;
