
from rest_framework.decorators import api_view
from .serializers import BookSerializer
from rest_framework.response import Response
from .models import Book

@api_view(['GET'])
def BookList(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

