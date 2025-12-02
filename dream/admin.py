# dream/admin.py
from django.contrib import admin
from .models import ContactLead, VisaLead

@admin.register(ContactLead)
class ContactLeadAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone', 'email', 'destination', 'submitted_at')
    search_fields = ('full_name', 'email', 'phone')
    list_filter = ('submitted_at',)
    readonly_fields = ('submitted_at',)

@admin.register(VisaLead)
class VisaLeadAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'country', 'visa_type', 'phone', 'submitted_at')
    list_filter = ('visa_type', 'country', 'submitted_at')
    search_fields = ('full_name', 'country', 'phone')
    readonly_fields = ('submitted_at',)