from django.shortcuts import render

# Create your views here.
def blog_view(request):
    contex = {'comman':'no vai'}
    return render(request , 'blog-home.html',contex)

def blog_single(request):
    return render(request , 'blog-single.html')
