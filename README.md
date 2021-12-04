# PawsHelper

### Author (all member contribute equally)
Chen Wang, Chujie Chen, Tongshu Yang, Xinyu Zhang, Xueting Feng, Zhe Zhang

## Directory Structure
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

## Deployed Web App
https://k31ex.csb.app/

## Test Locally
**We highly recommend you to use the url above to have an eye candy.** But if you are interested, you can still test everything locally.

For scripts under `/src/.`, it's likely you don't have enough computational power / space to finish running those `.py` code. We suggest you to upload notebooks under `/examples` to google colab and test on the clound.

For the Nivo UI, if you are familiar with NodeJS and React.js, you can `npm i` under `/src/ui` then follow the `/src/ui/README.md` to test the UI locally.

For the Flask, create a virtual enviorment with python libaries specified in `/src/flask/requirements.txt`, then you can simple run `python app.py` to launch the Flask predictor app.

