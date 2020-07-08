from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect


def home(request):
    return render(request, 'core/home.html')


def sign_up(request):
    context = {}
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

        if form.is_valid():
            context['form'] = form
            user = form.save()
            login(request, user)

            return redirect('home')
    else:
        context['form'] = UserCreationForm()

    return render(request, 'core/sign_up.html', context=context)
