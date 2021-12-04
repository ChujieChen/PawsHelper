#import libraries
import numpy as np
from flask import Flask, render_template,request
import pickle#Initialize the flask App
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
intake_type = pickle.load(open('intake_type.pkl', 'rb'))
intake_condition = pickle.load(open('intake_condition.pkl', 'rb'))
animal_type = pickle.load(open('animal_type.pkl', 'rb'))
breed = pickle.load(open('breed.pkl', 'rb'))
intake_type = dict(zip(intake_type.classes_, intake_type.transform(intake_type.classes_)))
animal_type = dict(zip(animal_type.classes_, animal_type.transform(animal_type.classes_)))
intake_condition = dict(zip(intake_condition.classes_, intake_condition.transform(intake_condition.classes_)))
breed = dict(zip(breed.classes_, breed.transform(breed.classes_)))

#default page of our web-app
@app.route('/')
def home():
    return render_template('model.html')

#To use the predict button in our web-app
@app.route('/predict',methods=['POST'])
def predict():
    #For rendering results on HTML GUI
    int_features = [x for x in request.form.values()]
    int_features[0] = intake_type[int_features[0]]
    int_features[1] = intake_condition[int_features[1]]
    int_features[2] = animal_type[int_features[2]]
    if int_features[4] in breed:
      breed_valid = int_features[4] + 'is an existing breed in database'
      int_features[4] = breed[int_features[4]]
      int_features = [int(x) for x in int_features]
      final_features = [np.array(int_features)]
      prediction = model.predict(final_features)
      output = round(prediction[0], 2)
      if output == 0:
        output = 'The animal is predicted to be adopted' 
      else:
        output = 'The animal is predicted to not be adopted'
      predict_prob = model.predict_proba(final_features)[0]
    else:
      breed_valid = int_features[4] + ' is not an existing breed in database, example for valid input: Abyssinian, Affenpinscher, Yorkshire Terrier, Dachshund, Shetland Sheepdog, Spinone Italiano Mix, etc.'
      output = 'Invalid value for prediction'
      predict_prob = [0,0]

    return render_template('model.html', breed_check='{}'.format(breed_valid), prediction_text='{}'.format(output), prediction_prob1='The animal has {} probability to be adopted'.format(round(predict_prob[0], 3)), prediction_prob2='The animal has {} probability to not be adopted'.format(round(predict_prob[1], 3)))

if __name__ == "__main__":
    app.run(debug=True)