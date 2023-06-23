from django.db import models

class Book(models.Model):
    bookname = models.CharField(max_length=255)
    isbn = models.CharField(max_length=13, unique=True)
    author = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.bookname
