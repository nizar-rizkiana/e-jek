window.onscroll = function() {scFunction()};
var searchTop = document.getElementById('search-top');
var header = document.getElementById('header');

function scFunction(){
    if(searchTop){
        if(document.documentElement.scrollTop > 70){
            searchTop.classList.add("show");
            searchTop.style.zIndex = "1"
            searchTop.innerHTML = '<input type="text" class="form-control border-0" placeholder="Search ...">'
            header.classList.add("show-shadow")
        }else{
            searchTop.classList.remove("show");
            searchTop.style.zIndex = "0"
            searchTop.innerHTML = ""
            header.classList.remove("show-shadow")
        }
    }
    if(document.documentElement.scrollTop > 70){
        header.classList.add("show-shadow")
    }else{
        header.classList.remove("show-shadow")
    }
}



function goBack(){
    window.history.back();
}
