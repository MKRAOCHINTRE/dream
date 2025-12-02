
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home, name='home'),
    path('about/', views.about, name='about'),
    path('luxuary/', views.luxuary, name='luxuary'),    
    path('honeymoon/', views.honeymoon, name='honeymoon'),
    path('cultural/', views.cultural, name='cultural'), 
    path('relax/', views.relax, name='relax'),
    path('adventure/', views.adventure, name='adventure'),
    path('services/', views.services, name='services'),
    path('clients/', views.clients, name='clients'),    
    path('loginform/', views.loginform, name='loginform'),
    path('visa/', views.visa, name='visa'),
    path('europe/', views.europe, name='europe'),
    path('grand-europe/', views.grandeurope, name='grandeurope'),
    path('austrlia-luxary/', views.austrlia, name='austrlia'),
    path('vietnam/', views.vietnam, name='vietnam'),
    path('exclusive-luxuary/', views.exclusiveeurope, name='exclusiveeurope'),
    path('iternarygreece/', views.greece, name='greece'),
    path('jaipur/', views.jaipur, name='jaipur'),
    path('andaman/', views.andaman, name='andaman'),
    path('balihoneymoon/', views.balihoneymoon, name='balihoneymoon'),
    path('get-visa-form/', views.getvisaform, name='getvisaform'),
    path('e-visa/', views.evisa, name='evisa'),
    path('visa-free/', views.visafree, name='visafree'),
    path('voa/', views.voa, name='voa'),
    path('admin-secret-dream2025/', admin.site.urls, name='secret_admin'),
    path('loginform/', views.loginform, name='loginform'),
    path('get-visa-form/', views.getvisaform, name='getvisaform'),
    path('submit-contact/', views.submit_contact, name='submit_contact'),
    path('submit-visa/', views.submit_visa_form, name='submit_visa_form'),
    path('country-detail/', views.countrydetail, name='countrydetail'),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])