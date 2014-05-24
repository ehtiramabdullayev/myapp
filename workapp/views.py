from django.shortcuts import render
from django.shortcuts import render_to_response

# Create your views here.
from workapp.forms import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from workapp.models import Specialist
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User
from django.template import Context
from django.template import RequestContext, loader
import psycopg2
 
@csrf_protect
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
            username=form.cleaned_data['username'],
            password=form.cleaned_data['password1'],
            email=form.cleaned_data['email']
            )
            return HttpResponseRedirect('/register/success/')
    else:
        form = RegistrationForm()
    variables = RequestContext(request, {
    'form': form
    })
 
    return render_to_response(
    'registration/register.html',
    variables,
    )
 
def register_success(request):
    return render_to_response(
    'registration/success.html',
    )
 
def logout_page(request):
    logout(request)
    return HttpResponseRedirect('/')
 
@login_required
def home(request):
    return render_to_response(
    'home.html',
    { 'user': request.user }
    )
def free(request):
    return render_to_response(
    'free.html',
    )

def test(request):
    return render_to_response(
    'jquery_test.html',
    )
def tl(request):
    return render_to_response(
    'tl.html',
    )

def wr(request):
    return render_to_response(
    'wr.html',
    )

def test1(request):
    a=request.session.session_key
    # return HttpResponse(a)
    session_key = a

    session = Session.objects.get(session_key=session_key)
    uid = session.get_decoded().get('_auth_user_id')
    # user = User.objects.get(pk=uid)
    return HttpResponse(uid)



def custom_proc(request):
    "A context processor that provides 'app', 'user' and 'ip_address'."
    return {
        'app': 'My app',
        'user': request.user,
        'ip_address': request.META['REMOTE_ADDR']
    }


def get_user_from_session(session_key):
  session = Session.objects.get(session_key = session_key)
  uid = session.get_decoded().get('_auth_user_id')
  return User.objects.get(pk = uid)


def decode_session(request):

    if not request.user.is_superuser:
        raise Exception('Reserved for superuser')

    key = request.REQUEST.get('key', '')
    text = u''
    if len(key) <= 0:
        text = u'[key] parameter required: es ".../?key=session_id"'
    else:
        try:
            text = key + '<br />'
            session_key = key
            session = Session.objects.get(session_key=session_key)
            text += str(session.get_decoded().items())
            uid = session.get_decoded().get('_auth_user_id')
            user = User.objects.get(pk=uid)
            text += u'<br />User: %s (mailto:%s)' % (user.username, user.email)
        except Exception, e:
            text = u'ERROR:' + e.message

    return HttpResponse(text)


#Sessiyadaki userin id sine gore filtrleme

def index(request):
    a=request.session.session_key
    session_key = a
    session = Session.objects.get(session_key=session_key)
    uid = session.get_decoded().get('_auth_user_id')
    recent_posts = Specialist.objects.filter(user_id=uid)
    template = loader.get_template('tl.html')
    context = Context({
        'specialist_list': recent_posts
    })
 
    return HttpResponse(template.render(context))


# def wr_index(request,template="wr.html"):
#     session = 
#     my_spec =Specialist.objects.row("SELECT * FROM workapp_specialist")   



def specialistler(request):
    specialist= Specialist.objects.all() 
    return render_to_response('home.html',locals())



