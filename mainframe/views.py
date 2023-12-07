from django.shortcuts import render

# Create your views here.
def main_def(request):
    input = {'input' : 'None'}
    return render(request , 'main.html' ,  input)