from django.urls import path
from . import views

urlpatterns = [
    path('', views.BookList, name="BookList"),
    path('add-book', views.AddBook, name="AddBook"),
    path('book/<int:id>', views.Books, name="Books")
]