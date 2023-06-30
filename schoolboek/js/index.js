[...document.querySelectorAll(".subjectButt")].forEach(elt=>{
	elt.addEventListener("click", selectSub);
})

function selectSub(e){
	console.log(e.target.dataset.subjectNld);
	const elt = document.getElementById(e.target.dataset.subjectNld);

	if(elt.classList.contains("selected")) {
		[... document.querySelectorAll(".subject.selected")].forEach(elt=>elt.classList.remove("selected"));
	}else {
		[... document.querySelectorAll(".subject.selected")].forEach(elt=>elt.classList.remove("selected"));
		elt.classList.add("selected");
	}

}


[...document.querySelectorAll(".publicationButt")].forEach(elt=>{
	elt.addEventListener("click", selectPub);
})

function selectPub(e){
	console.log(e.target.dataset.pub);
	const elt = document.getElementById(e.target.dataset.pub);

	if(elt.classList.contains("selected")) {
		[... document.querySelectorAll(".publication.selected")].forEach(elt=>elt.classList.remove("selected"));
	}else {
		[... document.querySelectorAll(".publication.selected")].forEach(elt=>elt.classList.remove("selected"));
		elt.classList.add("selected");
	}

}


[...document.querySelectorAll(".edButt")].forEach(elt=>{
	elt.addEventListener("click", selectEd);
})

function selectEd(e){
	console.log(e.target.dataset.ed);
	const elt = e.target.parentElement.querySelector(`[data-edition="${e.target.dataset.ed}"]`);

	if(elt.classList.contains("selected")) {
		[... document.querySelectorAll(".edition.selected")].forEach(elt=>elt.classList.remove("selected"));
	}else {
		[... document.querySelectorAll(".edition.selected")].forEach(elt=>elt.classList.remove("selected"));
		elt.classList.add("selected");
	}

}

[...document.querySelectorAll(".book")].forEach(elt=>{
	elt.addEventListener("click", selectBook);
})

function selectBook(e){
	document.getElementById("overlay").style.display="block";
	const elt = document.getElementById("popup");
	//[...elt.querySelectorAll("a")].forEach(elt.removeChild);
	[...elt.querySelectorAll("a")].forEach(e=>{elt.removeChild(e)})
	document.getElementById("title").innerHTML = e.target.innerText.replaceAll(" ", "&nbsp;");
	const dataset=e.target.dataset;
	if(dataset.full){
		const button = document.createElement("a");
		button.href=`go.html?url=${dataset.full}`;
		button.innerHTML="Volledige&nbsp;versie";
		button.classList.add("full");
		elt.appendChild(button);
	}

	if(dataset.altver){
		const button = document.createElement("a");
		button.href=`go.html?url=${dataset.altver}`;
		button.innerHTML="Volledige&nbsp;versie&nbsp;(2)";
		button.classList.add("altver");
		elt.appendChild(button);
	}
	if(dataset.borked){
		const button = document.createElement("a");
		button.href=`go.html?url=${dataset.borked}`;
		button.innerHTML="Uitgerokken&nbsp;versie";
		button.classList.add("borked");
		elt.appendChild(button);
	}
	if(dataset.preview){
		const button = document.createElement("a");
		button.href=dataset.preview;
		button.innerHTML="Preview";
		button.classList.add("preview");
		elt.appendChild(button);
	}
	if(dataset.previewAlt){
		const button = document.createElement("a");
		button.href=dataset.previewAlt;
		button.innerHTML="Preview&nbsp;(2)";
		button.classList.add("preview");
		elt.appendChild(button);
	}
	if(dataset.borkedPreview){
		const button = document.createElement("a");
		button.href=dataset.borkedPreview;
		button.innerHTML="Uitgerokken&nbsp;preview";
		button.classList.add("preview");
		button.classList.add("borked");
		elt.appendChild(button);
	}
	if(dataset.borkedPreviewAlt){
		const button = document.createElement("a");
		button.href=dataset.borkedPreviewAlt;
		button.innerHTML="Uitgerokken&nbsp;preview&nbsp;(2)";
		button.classList.add("preview");
		button.classList.add("borked");
		elt.appendChild(button);
	}
}
document.getElementById("close").addEventListener("click", e=>{
	document.getElementById("overlay").style.display="none";
});
