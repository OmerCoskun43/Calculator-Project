const div = document.querySelector(".div");
// console.log(div);
let sonuc = document.querySelector(".col-12");
// console.log(sonuc);
let num1 = "";
let num2 = "";
let islem = "";

div.addEventListener("click", (e) => {
  if (
    !(
      e.target.innerText.includes("-") ||
      e.target.innerText.includes("+") ||
      e.target.innerText.includes("*") ||
      e.target.innerText.includes("/") ||
      e.target.innerText.includes("=") ||
      e.target.innerText.includes("C")
    )
  ) {
    sonuc.innerText += e.target.innerText;

    num2 += e.target.innerText;
  } else if (
    e.target.innerText.includes("-") ||
    e.target.innerText.includes("+") ||
    e.target.innerText.includes("*") ||
    e.target.innerText.includes("/")
  ) {
    sonuc.innerText = "";
    islem += e.target.innerText;
    // console.log(islem);
    num1 = num2;
    num2 = "";
  }
  if (e.target.innerText.includes("=")) {
    console.log("num1 :>> ", num1);
    console.log("num2 :>> ", num2);
    console.log("islem :>> ", islem);

    if (islem == "/") {
      sonuc.innerText = `${(Number(num1) / Number(num2)).toPrecision(5)}`;
    } else if (islem == "*") {
      sonuc.innerText = `${Number(num1) * Number(num2)}`;
    } else if (islem == "+") {
      sonuc.innerText = `${Number(num1) + Number(num2)}`;
    } else if (islem == "-") {
      sonuc.innerText = `${Number(num1) - Number(num2)}`;
    }
    console.log("sonuc :>> ", sonuc.innerText);
  }
  if (e.target.innerText.includes("C")) {
    location.reload();
    // sonuc.innerText = "";
    // num1.innerText = "";
    // num2.innerText = "";
    // islem.innerText = "";
  }
});
