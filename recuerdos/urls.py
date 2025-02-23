from django.urls import path
from . import views

urlpatterns = [
    path('', views.carta, name='carta'),
    path('recuerdos/', views.recuerdos, name='recuerdos'),
    path('fotos/', views.fotos, name='fotos'),
    path('crear_recuerdo/', views.crear_recuerdo, name='crear_recuerdo'),
]