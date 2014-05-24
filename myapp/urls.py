from django.conf.urls import patterns, include, url
from workapp.views import *
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from myapp.settings import STATIC_ROOT_DEVELOPMENT, DEBUG
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.template import Context
from django.contrib import admin
admin.autodiscover()





urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'myapp.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
   # url(r'^$', include('workapp.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', logout_page),
    url(r'^accounts/login/$', 'django.contrib.auth.views.login'), # If user is not login it will redirect to login page
    url(r'^register/$', register),
    url(r'^register/success/$', register_success),
    url(r'^free', free),
    url(r'^loop', test1),
    url(r'^test', test),
    url(r'^tl.php', index),
    url(r'^wr.php', wr),
    url(r'^pool', index),
    url(r'^home/$', specialistler),

    




)
if DEBUG:
    urlpatterns += staticfiles_urlpatterns()
