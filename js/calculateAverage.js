const getEle = (id) => {
  return document.getElementById(id);
};
// Bấm tính 1 để lấy thông tin input 3 input thẻ sau đó gán vào function tính TB
getEle("tinh1").onclick = () => {
  const diemToan = getEle("toan").value * 1;
  const diemLy = getEle("ly").value * 1;
  const diemHoa = getEle("hoa").value * 1;
  // gán vào hàm tính
  const dtb = paramDiemTB(diemToan, diemLy, diemHoa);
  getEle("footer1").innerHTML = dtb;
};
// Bấm tính 2 để lấy thông tin input 3 input thẻ sau đó gán vào function tính TB
getEle("tinh2").onclick = () => {
  const diemVan = getEle("van").value * 1;
  const diemSu = getEle("su").value * 1;
  const diemDia = getEle("dia").value * 1;
  const diemEng = getEle("English").value * 1;
  // gán vào hàm tính
  const dtb = paramDiemTB(diemVan, diemSu, diemDia, diemEng);
  getEle("footer2").innerHTML = dtb;
};

// function tính điêm trung bình
const paramDiemTB = (...number) => {
  let total = 0;
  let AVG = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
  AVG = total / number.length;
  return AVG;
};

