# ml_apps/views.py
from django.views import View
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
import pandas as pd
import pickle
import os

from sklearn.linear_model import LinearRegression


@method_decorator(csrf_exempt, name='dispatch')
class MLModelPredictView(View):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            model = pickle.load(open(os.path.join('modelfiles', 'linear_regression_model.pkl'), 'rb'))
            input_data = pd.DataFrame([data])
            prediction = model.predict(input_data)
            return JsonResponse({'prediction': float(prediction[0])}, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)



@method_decorator(csrf_exempt, name='dispatch')
class ModelRetrainView(View):
    def post(self, request, *args, **kwargs):
        # Check if file exists in request
        if 'file' not in request.FILES:
            return JsonResponse({'error': 'No file uploaded'}, status=400)

        # Get the uploaded file
        uploaded_file = request.FILES['file']

        try:
            # Read the uploaded CSV or Excel file
            if uploaded_file.name.endswith('.csv'):
                df = pd.read_csv(uploaded_file)
            elif uploaded_file.name.endswith('.xlsx'):
                df = pd.read_excel(uploaded_file)
            else:
                return JsonResponse({'error': 'Unsupported file format'}, status=400)

            # Preprocess the data (same preprocessing steps as in the notebook)
            df.drop('Car_Name', axis=1, inplace=True)
            df = pd.get_dummies(df, columns=['Fuel_Type', 'Seller_Type', 'Transmission'], drop_first=True)

            X = df.drop('Selling_Price', axis=1)
            y = df['Selling_Price']

            # Initialize and train the Linear Regression model
            linear_reg = LinearRegression()
            linear_reg.fit(X, y)

            # Specify the file path to save the model
            model_file_path = 'modelfiles/linear_regression_model.pkl'

            # Save the trained model to a file
            with open(model_file_path, 'wb') as file:
                pickle.dump(linear_reg, file)

            return JsonResponse({'success': 'Model retrained successfully'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
