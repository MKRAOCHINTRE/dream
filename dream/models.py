# dream/models.py
from django.db import models

# Table 1: Contact Us / Login Form
class ContactLead(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    destination = models.CharField(max_length=100, blank=True)
    travel_date = models.DateField(null=True, blank=True)
    message = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} ({self.phone})"

    class Meta:
        app_label = 'dream'
        verbose_name_plural = "1. Contact Form Leads"


# Table 2: Get Visa Form
class VisaLead(models.Model):
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    visa_type = models.CharField(max_length=20, choices=[
        ('visa-free', 'Visa-Free'),
        ('evisa', 'e-Visa'),
        ('voa', 'Visa on Arrival'),
    ])
    country = models.CharField(max_length=100)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} → {self.country}"

    class Meta:
        app_label = 'dream'
        verbose_name_plural = "2. Visa Form Leads"