function listOfColours(colours) {
  // Write your code here...

  const conDiv = document.getElementById("content");

  const heading = document.createElement("h3");
  heading.classList = "heading-underline"
  heading.textContent = "Choose a color";
  heading.style.margin = "20px";

  const selection = document.createElement("select");
  selection.style.marginLeft = "20px";
  selection.style.width = "150px";
  selection.style.height = "30px";
  selection.style.fontSize = "20px";

  const para = document.createElement("p");
  para.style.marginLeft = "25px";

  colours.forEach(color=>{
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    selection.appendChild(option);
  })

  selection.addEventListener('change',(event)=>{
    const selectedColor = event.target.value;
    para.textContent = `You selected ${selectedColor}`
    para.style.color = selectedColor;
    para.style.fontSize = "30px";
   
    //converting name of color To rgb format for setting the opacity 😎

    let rgbColor;
  switch (selectedColor) {
    case 'red':
      rgbColor = '255, 0, 0';
      break;
    case 'blue':
      rgbColor = '0, 0, 255';
      break;
    case 'green':
      rgbColor = '0, 255, 0';
      break;
    case 'yellow':
      rgbColor = '255, 255, 0';
      break;
    case 'pink':
      rgbColor = '255, 192, 203';
      break;
    case 'brown':
      rgbColor = '165, 42, 42';
      break;
    default:
      rgbColor = '0, 0, 0';
  }

  document.body.style.backgroundColor = `rgba(${rgbColor}, 0.2)`;
  });

  conDiv.appendChild(heading);
  conDiv.appendChild(selection);
  conDiv.appendChild(para);

};

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
