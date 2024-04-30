# ml_apps/urls.py

from django.urls import path
from .views import MLModelPredictView, ModelRetrainView

urlpatterns = [
    path('predict/', MLModelPredictView.as_view(), name='predict_model'),
    path('retrain/', ModelRetrainView.as_view(), name='retrain_model'),
]
