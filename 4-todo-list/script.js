// Write your code here...

function todoList(todos) {
  
  const conDiv = document.getElementById("content");
  const ul = document.createElement("ul");
  ul.style.cursor = "pointer";
  ul.style.marginTop = "20px";
  ul.style.fontWeight = "500";
  ul.style.fontSize = "22px";
  ul.textContent = "Today's Tasks";
  


  const line = document.createElement("hr");
  line.style.width = "0";
  line.style.marginLeft = "100px";
  line.style.transition = "transform 0.5s ease-in-out";
  ul.appendChild(line);



  todos.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item.todo;
    li.style.listStyle = "none";
    li.style.fontSize = "16px";
    li.style.lineHeight = "26px";
    
    li.addEventListener("click", function() {
      if(li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    ul.appendChild(li);
  });
  conDiv.appendChild(ul);

  ul.addEventListener("mouseenter", ()=>{
    line.style.transform= "scaleX(200)";
  });

  ul.addEventListener("mouseleave",()=>{
    line.style.transform = "scaleX(0)";
  })
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);