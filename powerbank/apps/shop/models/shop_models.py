from django.db import models
from django.conf import settings



User = settings.AUTH_USER_MODEL

class Shop(models.Model):
    name = models.CharField(max_length=512)
    type = models.CharField(max_length=256)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shop_owner')
    created_at = models.DateTimeField('Дата_создания', auto_now_add=True)
    updated_at = models.DateTimeField('Дата_последнего_обновления', auto_now=True)


class ProductService(models.Model):
    TYPES = (
        ('PR', 'Product'),
        ('SR', 'Service'),
    )
    name = models.CharField(max_length=256)
    description = models.TextField()
    price = models.DecimalField(max_digits=19,decimal_places=10)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name='product_shop')
    type = models.CharField(max_length=300, choices=TYPES, default="PR")


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cart_owner')
    product = models.ForeignKey(ProductService, on_delete=models.CASCADE)
    quanity = models.PositiveIntegerField()
    added_date = models.DateTimeField('Дата_добавления', auto_now_add=True)


class Order(models.Model):
    STATUSES = (
        ('CM', 'Completed'),
        ('PN', 'Pending'),
        ('RJ', 'Rejected'),
    )
    order_date = models.DateTimeField('Дата_создания', auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='order_owner')
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name='order_shop')
    status = models.CharField(max_length=300, choices=STATUSES, default='RJ')
