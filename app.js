const img = document.querySelector(".div");
const w = window;
w.addEventListener("DOMContentLoaded",() => showImg() )


const showImg = async () => {
try {
  const url =  " https://dog.ceo/api/breeds/image/random";

  const resp = await fetch(url);
  console.log(resp)
  const imgRandom = await resp.json();

  console.log(imgRandom.message)
  img.innerHTML = `<img src="${imgRandom.message}" alt="dogs">`
 } catch (err) {
   console.log(err)
 }

}

