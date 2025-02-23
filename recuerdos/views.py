from django.shortcuts import render

# Create your views here.
def carta(request):
    return render (request,'carta.html')

def recuerdos(request):
    return render (request,'recuerdos.html')

def fotos(request):
    return render (request,'fotos.html')

def crear_recuerdo(request):
    return render (request,'crear_recuerdo.html')