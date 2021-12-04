# PawsHelper

### Author (all member contribute equally)
Chen Wang, Chujie Chen, Tongshu Yang, Xinyu Zhang, Xueting Feng, Zhe Zhang

## DESCRIPTION
This repo contains four main parts: data manipulation, model training, React.js front end, and Flask back end.

## Main Dependencies
- Data
    - Python 3.7
    - Jupyter-notebook
    - Numpy/Scipy
    - Pandas
    - Seaborn
- Model
    - Scikit-learn
    - Matplotlib
- Front end
    - React
    - Nivo
- Back end
    - Node.js
    - Flask
    - Gunicorn

### File Structures
`/data`

It contains all raw datasets and cleaned datasets.

`/examples`

It contains all jupyter notebooks (data join, data cleaning, model training and evaluation).

`/src`

It contains scripts for 

- `/src/.`
    - Data join
    - Data cleaning
    - Model training

- `/src/ui`
    - main interactive data visulazation front end with React.js 

- `/src/flask`
    - predictor with Flask backend and simple front end
`/tests`
It contains testing scripts 

## INSTALLATION
1. git clone this repo
2. cd to `/src/ui` and `npm i` to install all required dependencies
3. create a pythonic virtual enviorment and install all required python libaries


## EXECUTION
https://k31ex.csb.app/

**We highly recommend you to use the url above to have an eye candy.** But if you are interested, you can still test everything locally.

For scripts under `/src/.`, it's likely you don't have enough computational power / space to finish running those `.py` code. We suggest you to upload notebooks under `/examples` to google colab and test on the clound.

For the React-Nivo UI, if you are familiar with NodeJS and React.js, you follow the `/src/ui/README.md` to test the UI locally.

For the Flask, you can simply run `python app.py` to launch the Flask predictor app.

