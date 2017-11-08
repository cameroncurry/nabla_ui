#
# Copyright Cameron Curry (c) 2017
#

from django.conf.urls import url

from .views import IndexView


urlpatterns = [
    url(r'^$', IndexView.as_view())
]
