const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const imgEl = document.querySelector("img");
const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape4",
  },
];

const img = {
  src: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  alt: "cat",
};


function clickHandler(e) {
  btn.textContent = "You click me)";
}

function clickHandler2(e) {
  btn2.style.backgroundColor = "black";
}
function imageHandler(e) {
  imgEl.src = img.src;
  imgEl.alt = img.alt;
}
function imageHandler2(e) {
  imgEl.src =
    "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000";
  imgEl.alt = "dog";
}

btn.addEventListener("click", clickHandler);
btn2.addEventListener("click", clickHandler2);
imgEl.addEventListener("mouseover", imageHandler);
imgEl.addEventListener("mouseout", imageHandler2);
