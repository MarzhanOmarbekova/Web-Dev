from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category.id,
    }
    return JsonResponse(data)

def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        "name": category.name,
    }
    return JsonResponse(data)

def products_by_category(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse(products, safe=False)
