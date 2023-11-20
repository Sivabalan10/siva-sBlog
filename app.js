let val = 0 ;
function swap_blog(el){
	val = 1;
	console.log(el);
	var abt = document.getElementById('about_me');
	var blg = document.getElementById('my_blogs');
	var abt_button = document.getElementById('about');
	var blog_button = document.getElementById('myblogs');

if(el == 2){
	abt.style.display = "none";
	blg.style.display = "block";
	blog_button.style.backgroundColor = "#57A7C0";
	abt_button.style.backgroundColor = "#bfbfbf";
 
}
else{
	abt.style.display = "block";
	blg.style.display = "none";
	blog_button.style.backgroundColor = "#bfbfbf";
	abt_button.style.backgroundColor = "#57A7C0";
	observe();
}
}

if(val == 0){
	observe();
}
function observe(){
	const elements = document.querySelectorAll('#abtcont');
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
	    if (entry.isIntersecting) {
	      entry.target.classList.add('animate'); 
	      observer.unobserve(entry.target);
	    }
	  });
	});
	elements.forEach(element => {
	  observer.observe(element);
});}

function ai(){
	swal({title:"Artificial Intelligence",
		 text:"This is ....."});
}