let taskAddButton = document.getElementById('addbutton');
let userinput = document.getElementById('taskname');
let tasklist = document.getElementById('tasklist');
let error = document.getElementById('error');
let refreshBtn = document.getElementsByClassName("fa-refresh")[0];
let listcontent = document.getElementsByClassName("listcontent")[0];
let listreset = document.getElementsByClassName("reset")[0];
let notask = document.getElementsByClassName("number")[0];
let count = 0;

const createNewElement = () =>{
	error.innerHTML = "";
	notask.innerHTML = ++count;
	listcontent.innerHTML = ""
	let button = document.createElement("button");
	let strikebutton =document.createElement("button");
	let removestrikebutton =document.createElement("button");
	button.setAttribute("class","delBtn fa fa-trash");
	button.setAttribute("title","Remove");
	strikebutton.setAttribute("class","fa fa-check");
	strikebutton.setAttribute("title","Complete");
	removestrikebutton.setAttribute("class","fa fa-close");
	removestrikebutton.setAttribute("title","Remove Strike");
	button.addEventListener("click", delElement);
	strikebutton.addEventListener("click", strikeElement);
	removestrikebutton.addEventListener("click", removestrikeElement);
	let li = document.createElement("li");
	//li = li.appendChild(document.createTextNode(taskname.value));
	li.innerHTML = userinput.value;
	tasklist.appendChild(li);
	li.appendChild(button);
	li.appendChild(strikebutton);
	li.appendChild(removestrikebutton)
	userinput.value=""
}  

const addTaskByClick = () =>{
	if(userinput.value.length > 0){
		createNewElement();
	}
	else{
		error.innerHTML= "Please Enter Some Text";
	}
}

const addTaskByEnter = (event) =>{
	if(event.keyCode === 13){
		if(userinput.value.length>0)
			{createNewElement();}
		else{
			error.innerHTML= "Please Enter Some Text";
		}
	}
}

const delElement = (event) =>{
	event.target.parentNode.remove();
	notask.innerHTML = --count;
	if(count=== 0){
		listcontent.innerHTML= "List is Empty";
	}
}
const removestrikeElement =(event)=>{
	event.target.parentNode.setAttribute("class","removestrike")
}
const strikeElement = (event) =>{
	event.target.parentNode.setAttribute("class","strikebtn")
}

const refresh = () => {
	userinput.value="";
	error.innerHTML = "";
}
/*const clearlist = () =>{
	listelement = document.getElementsByTagName("li");
	for(let i=0;i<listelement.length;i++)
	{
		console.log(listelement[i]);
		listelement[i].remove();
	}
}
listreset.addEventListener("click",clearlist);*/
refreshBtn.addEventListener("click",refresh);
taskAddButton.addEventListener("click", addTaskByClick);
userinput.addEventListener("keypress", addTaskByEnter);