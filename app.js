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
	abt_button.style.backgroundColor = "#d9d9d9";
 
}
else{
	abt.style.display = "block";
	blg.style.display = "none";
	blog_button.style.backgroundColor = "#d9d9d9";
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
		 text:`AI is a big deal for the future, and in this blog, I'll cover AI, 
		 Machine Learning (ML), Deep Learning (DL), which involve cool things like neural networks 
		 and natural language processing (NLP). I'll share my learning journey as a blog to help you 
		 understand these concepts better. Additionally, I'll provide real-life projects for each 
		 concept on my linked page.`});
}
