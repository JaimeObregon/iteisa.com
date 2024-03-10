document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;

  const lineHeight = 1.25;
  const foo = 24 * lineHeight;

  const left = Math.floor(clientX / 12) * 12;
  const top = Math.floor(clientY / foo) * foo + 15;

  const mark = document.querySelector("mark");

  mark.style.left = `${left}px`;
  mark.style.top = `${top}px`;
});

// document.querySelector(".terminal").addEventListener("scroll", (event) => {
//   console.log(event);
// });

document.querySelector(".terminal").addEventListener("scroll", (event) => {
  const { scrollTop } = event.target;

  const top = Math.floor(scrollTop / 24) * 24;
  console.log(event.target);
  event.target.scroll(0, top);
  //   event.preventDefault();
  //   var perc = (event.target.scrollingElement.scrollTop / (e.target.scrollingElement.scrollHeight - window.innerHeight + 64)) * 100;
  //   pacman.style.top = `calc(2px + ${perc}%)`;
});
