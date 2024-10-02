from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load trained machine learning model (e.g. RandomForest)
model = joblib.load('credit_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        features = [data['revenue'], data['expenses']]
        prediction = model.predict([features])[0]
        return jsonify({'creditScore': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
