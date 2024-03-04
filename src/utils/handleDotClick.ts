export const handleDotClick = (number: number) => {
  const buttons = document.getElementsByClassName("dot");
  for (let i = 0; i < buttons.length; i++)
    buttons[i].classList.remove("active");
  buttons[number].classList.add("active");
};
