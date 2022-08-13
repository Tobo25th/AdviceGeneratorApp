var num = document.getElementById("adviceIdNum");
var adviceText = document.getElementById("AdviceText");
const onRandomFetch = async () => {
  const resp = await fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((json) => {
      num.innerText = json.slip.id;
      adviceText.innerText = json.slip.advice;
    })
    .catch((err) => console.log(err));
};
