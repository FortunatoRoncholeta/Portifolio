from flask import Flask, render_template,redirect,request,flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'DKRoncholeta'


@app.route('/')
def index():
    return render_template('index.html')

#modo debug
if __name__ == '__main__':
    app.run(debug=True)

