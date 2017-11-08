#
# Copyright Cameron Curry (c) 2017
#

from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = 'nabla_ui/index.html'
