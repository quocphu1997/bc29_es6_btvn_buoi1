let takeText = document.getElementsByClassName("heading")[0].innerHTML;
takeText.toString();
let chartText = [...takeText];
// console.log(chartText);
let Text = "";
chartText.forEach((value) => {
  Text += `
    <span>${value}</span>
  `;
});
document.getElementsByClassName("heading")[0].innerHTML = Text;

let obj = document.getElementsByTagName(span);

obj = document.addEventListener("mouseover", () => {
  obj.classLiss.add("span-hover");
});
