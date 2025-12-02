from django.shortcuts import render , redirect
from django.contrib import messages
from .models import ContactLead, VisaLead


def home(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def luxuary(request):
    return render(request, "luxuary.html")

def honeymoon(request):
    return render(request, "honeymoon.html")    

def cultural(request):
    return render(request, "cultural.html")

def relax(request):
    return render(request, "relax.html")
def adventure(request):
    return render(request, "adventure.html")
def services(request):
    return render(request, "services.html")
def clients(request):
    return render(request, "clients.html")  
def loginform(request):
    return render(request, "loginform.html")
def visa(request):
    return render(request, "visa.html")

def europe(request):
    return render(request, "europe.html")

def grandeurope(request):
    return render(request, "grand-europe.html")
def austrlia(request):
    return render(request, "austrlia-luxary.html")
def vietnam(request):
    return render(request, "vietnam.html")
def exclusiveeurope(request):
    return render(request, "exclusive-luxuary.html")
def greece(request):
    return render(request, "iternarygreece.html")
def jaipur(request):
    return render(request, "jaipur.html")
def andaman(request):
    return render(request, "andaman.html")
def balihoneymoon(request):
    return render(request, "balihoneymoon.html")
def getvisaform(request):
    return render(request, "get-visa-form.html")
def evisa(request):
    return render(request, "e-visa.html")
def visafree(request):
    return render(request, "visa-free.html")
def voa(request):
    return render(request, "voa.html")
def countrydetail(request):
    return render(request, "country-detail.html")

def submit_contact(request):
    if request.method == "POST":
        ContactLead.objects.create(
            full_name=request.POST['name'],
            email=request.POST['email'],
            phone=request.POST['phone'],
            destination=request.POST.get('destination', ''),
            travel_date=request.POST.get('travelDate'),
            message=request.POST.get('message', '')
        )
        messages.success(request, "Thank you! We will contact you soon!")
    return redirect('/loginform/')  # Your contact page

def submit_visa_form(request):
    if request.method == "POST":
        VisaLead.objects.create(
            full_name=request.POST['name'],
            phone=request.POST['phone'],
            email=request.POST['email'],
            visa_type=request.POST['visaType'],
            country=request.POST['countrySelect']
        )
        messages.success(request, "Submitted! Our expert will call you in 5 minutes!")
    return redirect('/home/')