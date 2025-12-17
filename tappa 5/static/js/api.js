console.log("JS CARICATO");
const bottone_aggiungi = document.getElementById('bottone-agggiungi');
bottone_aggiungi.addEventListener('click', aggiungistudenti);


async function aggiungistudenti() {
    const nome = document.getElementById('nome').value;
    const classe = document.getElementById('classe_studente').value;

    if (!nome || !classe) {
        alert("Per favore, inserire nome e classe!");
        return "";
    }
    const nuovoStudente = {
        nome: nome,
        classe: classe
    };

        const response = await fetch('/api/studenti', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuovoStudente)
        });
        const studenteCreato = await response.json();
        console.log(studenteCreato);
        caricaStudenti();
    }

    async function caricaStudenti() {
        const lista_studenti = document.getElementById('lista-studenti');
        const response = await fetch('/api/studenti');
        const studenti = await response.json();
        console.log(studenti);
        studenti.forEach(studente => {
            const item = document.createElement('li');
            item.textContent = `${studente.nome} - Classe ${studente.classe}`;
            lista.appendChild(item);
        })
    }
    document.addEventListener('DOMContentLoaded', function () {
        caricastudenti();
    });