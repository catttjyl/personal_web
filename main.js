import { education, prof_experience, skills } from "./utils/meta.js";

// 登录页面切换
const v1 = document.getElementById("view1");
const v2 = document.getElementById("view2");
const loginbtn = document.getElementById("enterBtn");
loginbtn.addEventListener("click", () => {
  v1.classList.remove("active");
  v2.classList.add("active");
});
const backbtn = document.getElementById("logoutBtn");
backbtn.addEventListener("click", () => {
  v1.classList.add("active");
  v2.classList.remove("active");
});



const icons = document.querySelectorAll("nav a");
const windows = document.querySelectorAll(".draggable-window");

//双击图标打开窗口
window.onOpenWindow = (event, openWindow) => {
	const clickX = event.clientX;
  const clickY = event.clientY;
	openWindow.style.left = clickX + "px";
  openWindow.style.top = clickY + "px";
	openWindow.style.transformOrigin = `${clickX - openWindow.offsetLeft}px ${clickY - openWindow.offsetTop}px`;
  openWindow.classList.add("open");
}
//拖拽窗口
let topZ = 0;
window.onDragMove = (dragToolbar, dragWindow) => {
	let isDragging = false;
	dragToolbar.addEventListener("mousedown", (e) => {
		isDragging = true;
	});
	dragWindow.addEventListener("mousedown", (e) => {
		topZ += 1;
		dragWindow.style.zIndex = topZ;
	});
	document.addEventListener("mousemove", (e) => {
		if (!isDragging) return;

		let currLeft = parseInt(dragWindow.style.left);
		let currTop = parseInt(dragWindow.style.top);
		dragWindow.style.left = `${currLeft + e.movementX}px`;
		dragWindow.style.top = `${currTop + e.movementY}px`;
	});

	document.addEventListener("mouseup", () => {
		isDragging = false;
	});
}

for (let i = 0; i < icons.length; i++) {
	const icon = icons[i];
	const openWindow = windows[i];
	const toolbar = openWindow.querySelector(".toolbar");
	const closebtn = toolbar.querySelector("button");

	//双击打开窗口
	icon.addEventListener("dblclick", (e) => {
		if (openWindow.classList.contains("open")) return;
		onOpenWindow(e, openWindow);
	});
	
	//关闭窗口
	closebtn.addEventListener("click", () => {
		openWindow.classList.remove("open");
	});

	//拖拽窗口
	onDragMove(toolbar, openWindow);
}

//文本输入
const eduContainer = document.getElementById("education").querySelector(".container");
education.forEach(edu => {
	const div = document.createElement("div");
	div.innerHTML = `
		<div><span class="title">${edu.institution}</span> ${edu.date}</div>
		<div><em class="subtitle">${edu.major}</em></div>
		${edu.detail ? `<div class="content">${edu.detail}</div>` : ""}
		${edu.courses ? `<div class="content"><u>主修课程</u>: ${edu.courses}</div>` : ""}
	`;
	eduContainer.appendChild(div);
});

const expContainer = document.getElementById("prof-experience").querySelector(".container");
prof_experience.forEach(exp => {
	const div = document.createElement("div");
	div.innerHTML = `
		<div><span class="title">${exp.company}</span> ${exp.location}</div>
		<div><em class="subtitle">${exp.title}</em> ${exp.period}</div>
		<div class="content">${exp.accomplish}</div>
	`;
	expContainer.appendChild(div);
});

const skillsContainer = document.getElementById("skills").querySelector(".container");
skills.forEach(skill => {
	const li = document.createElement("li");
	li.innerHTML = `<span><span class="title">${skill.type}</span>: <div class="content">${skill.content}</div></span>`;
	skillsContainer.appendChild(li);
});

//逐词高亮
// const textContent = document.getElementById("about-me").querySelectorAll("li");
// textContent.forEach(line => {
// 	const words = line.innerText.split(/(\s+)/);
// 	line.innerHTML = words.map(w => `<span>${w}</span>`).join("");
// })