function btnsearch(){if(document.getElementById('searchbody').style.display=='none'){document.getElementById('searchbody').style.display='block';}else{document.getElementById('searchbody').style.display='none';}}
function log_reg(val)
{if(val==1)
{document.getElementById('login_form').style.display='';document.getElementById('reg_form').style.display='none';}
else if(val==2)
{document.getElementById('login_form').style.display='none';document.getElementById('reg_form').style.display='';}}
function posts(val)
{
	var last_posts = document.getElementById('last_posts');
	var hit_posts = document.getElementById('hit_posts');
	var rand_posts = document.getElementById('rand_posts');
	if(val==1)
	{
		if(last_posts) last_posts.style.display='block';
		if(hit_posts) hit_posts.style.display='none';
		if(rand_posts) rand_posts.style.display='none';
	}
	else if(val==2)
	{
		if(last_posts) last_posts.style.display='none';
		if(hit_posts) hit_posts.style.display='block';
		if(rand_posts) rand_posts.style.display='none';
	}
	else if(val==3)
	{
		if(last_posts) last_posts.style.display='none';
		if(hit_posts) hit_posts.style.display='none';
		if(rand_posts) rand_posts.style.display='block';
	}
}