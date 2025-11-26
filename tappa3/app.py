from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/about")
def about():
    mess = "Contenuto del mio messaggio"
    return render_template('index.html', messaggio=mess)

@app.route("/classe/<int:anno>")
def anno_classe(anno):
    return f"Anno: {anno}"

@app.route("/studenti")
def studenti():
    lista = ["Mario", "Luigi", "Anna", "Sofia"]
    return render_template('index.html', studenti=lista)

if __name__ == "__main__":
    app.run(debug=True)