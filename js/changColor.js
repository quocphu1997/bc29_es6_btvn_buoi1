const getEle = (id) => document.getElementById(id);

const colorContainer = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnaber",
];
let content = "";
const takecolor = colorContainer.forEach((value) => {
  content += `
      <button class="clr-btn ${value}"></button>
    `;
  // console.log(content);
});
getEle("colorContainer").innerHTML = content;

// cho button có class [0] có class active
document.getElementsByClassName("clr-btn")[0].classList.add("active");
getEle("house").classList.add(colorContainer[0]);
// gán mảng btn class clr-btn
let btn = document.getElementsByClassName("clr-btn");
// tạo mảng btn
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    //tạo sự kiện click
    // gán class active
    let current = document.getElementsByClassName("active");
    // gán cái class name active vị trí đầu tiên cho nó thành replace rỗng
    current[0].className = current[0].className.replace("active", "");
    // cộng class active vào btn thứ i
    btn[i].className += " active";
    // gán id house
    let crHouse = getEle("house");
    if (e.target.classList.contains("active")) {
      // so sánh nếu class active === true thì thêm class từ mảng của nút vào class của id house
      // công lại cho id house 1 cái class màu tương ứng trong mảng màu
      crHouse.className = "changColor-house " + colorContainer[i];
    }
  });
}

// document.getElementsByClassName("clr-btn")[0].onclick = function (e) {
//   let copyClass = e.target.classList[1];
//   getEle("house").classList.add(copyClass);
// };

// const changeColor = colorChange(
//   "#b888f8",
//   "#80f721",
//   "#909078",
//   "#2840f8",
//   "#f89700",
//   "#c820f8",
//   "#29f829",
//   "#f8f801",
//   "#f87878",
//   "#f84040"
// );
