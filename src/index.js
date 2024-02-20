function toggle (){
  let element = document.body;
  element.classList.toggle('dark-mode1');
  }
  
  // This is for dispalying todo items
  const inputBox= document.getElementById('inputbox');
  const listContainer= document.getElementById('list-container');
  
  function addTask(){
    if (inputBox=== ""){
      alert("You need to Input a Value")
    }else {
      let li =document.createElement("li");
      li.innerHTML= inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
    }
    inputBox.value=" ";
    saveDate();
  }

  listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
      e.target.classList.toggle("checked");
      saveDate();
    }else if (e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveDate();
    }
  }, false);

  function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
  };

  function showTask(){
    listContainer.innerHTML= localStorage.getItem('data');
  }
  showTask();