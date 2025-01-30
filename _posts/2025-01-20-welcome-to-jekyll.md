---
layout: post
title: La gara nazionale della Macchina di Turing
author: Alessio Conte
excerpt_image: assets/images/banners/turing_city.jpeg
tags:
  - info
top: 1
sidebar: []
---


La gara delle Macchine di Turing promossa dal Dipartimento di Informatica dell’Università di Pisa, nasce nel 1997 come iniziativa per la settimana della cultura promossa dal Ministero dell’Università e della Ricerca e organizzata dal Prof. Brogi. L’iniziativa fu concepita sia come strumento per diffondere la cultura informatica che come un modo per orientare i ragazzi delle scuole medie superiori verso l’informatica come disciplina e non semplicemente studio dell’uso del computer e di alcuni suoi programmi.

Al crescere della complessità dei sistemi di calcolo è sempre più difficile catturare in modo essenziale la natura dell’informatica ed è facile confondere la disciplina e le sue fondamenta con i tecnicismi legati a particolari sistemi e architetture. Al momento in cui la gara è stata immaginata si parlava della ECDL, la patente europea del computer che seguiva un approccio molto sintattico all’uso del computer, in cui la conoscenza delle funzionalità di strumenti particolari aveva la precedenza sulla comprensione dei modelli che sottostanno ai sistemi informatici.

Uno dei principali obiettivi dell’iniziativa era quella di orientare tutti gli studenti delle scuole superiori cercando di non creare distinzioni tra quelli che frequentavano scuole in cui l’informatica venisse insegnata e quelle, come ad esempio il liceo classico, in cui era assente. Poiché l’algoritmica è uno degli aspetti essenziali dell’informatica, così come la manipolazione simbolica, si scelse di far gareggiare gli studenti utilizzando un formalismo di calcolo molto semplice usato in informatica teorica e molto lontano dai moderni linguaggi di programmazione: la macchina di Turing. Il formalismo della macchina di Turing, proposto dal grande matematico Alan Turing, ha svolto un ruolo cruciale nella definizione delle funzioni calcolabili dall’uomo ed è stato uno strumento per realizzare dimostrazioni cruciali per l’informatica teorica. Questo formalismo è però di facile comprensione poiché fu disegnato dal grande matematico con l’obiettivo di catturare gli elementi di base del calcolo umano, si presta quindi ad essere raccontata in una lezione di un’ora, e la sua programmazione tende a mettere a nudo l’essenza della programmazione come manipolazione di simboli mediante algoritmi che trasformano stringhe (sequenze di caratteri in informatica) in altre stringhe. Ecco quindi che l’addizione non è un’operazione primitiva della macchina, ma va “programmata” definendo le regole del calcolo simbolico che si imparano alle scuole elementari.

Una macchina di Turing, se dovesse essere costruita, si potrebbe immaginare come uno di quei registratori a due bobine degli anni settanta, in cui però il nastro è magicamente infinito. Il nastro è suddiviso in celle, e in ciascuna cella può stare un carattere preso dall’alfabeto della macchina (ad esempio le lettere ed i numeri). Come i registratori a nastro la macchina dispone di una testina di lettura/scrittura con cui legge o scrive il contenuto della cella corrente. La macchina ha infine uno stato interno, una specie di memoria molto semplice, in cui si può ricordare in che stato è, proprio come un termostato si ricorda lo stato di accensione di una caldaia. Il comportamento di una particolare macchina è definito da un insieme di regole che spiegano, a seconda del simbolo letto dalla testina e dello stato interno della macchina, quale simbolo scrivere al suo posto, e contestualmente in che stato andare e come spostare il nastro, ovverosia se lasciarlo fermo oppure spostarlo di una cella a sinistra o a destra.

Le operazioni effettuate dalla macchina sono veramente elementari, eppure con queste semplici operazioni è possibile esprimere tutte le funzioni calcolabili dall’uomo, ed un moderno processore non è più espressivo di questa semplice macchina (affermazione da prendere con la dovuta cautela, poiché la macchina di Turing effettua i suoi calcoli in modo isolato mentre un processore moderno può essere interrotto durante l’esecuzione di un programma). Le semplici operazioni consentite dalla macchina sono inoltre ideali per esaltare l’aspetto algoritmico offrendo spunti per innumerevoli puzzle in cui il programmatore si deve ingegnare con le pochissime risorse a disposizione come codificare le regole perché ma macchina effettui un calcolo desiderato.

Si decise quindi di lanciare l’iniziativa di una gara per studenti di scuole medie superiori per la programmazione di Macchine di Turing, così lontana dalla programmazione reale da mettere tutti i partecipanti sullo stesso piano (e infatti studenti del liceo classico si aggiudicarono il primo premio competendo con studenti di varie scuole). La correzione degli esercizi offriva inoltre un altro spunto per la formazione dei ragazzi: poiché si dimostra che non è possibile decidere se un programma calcola effettivamente una certa funzione o meno (e quindi è corretto) dato il suo sorgente, allora la valutazione fu basata sull’esecuzione della soluzione su un insieme di nastri di prova elaborati dalla giuria. Una soluzione corretta era quindi quella che riusciva, dato un certo input per la macchina, a generare l’output atteso sul nastro.

La prima edizione della gara si rivelò un successo, e ci fu subito interesse nelle scuole della toscana per la partecipazione, sicuramente per i premi in palio, ma soprattutto per la natura particolare della gara: era infatti la prima competizione che consentiva ai docenti delle scuole superiori di introdurre fondamenti dell’informatica e non solo applicazioni tecniche legate a sistemi o particolari linguaggi di programmazione. Nelle edizioni successive della gara vi fu una partecipazione sempre più ampia fino a quando la gara non ha assunto carattere nazionale. Numerose scuole hanno addirittura introdotto nei curricula lo studio delle macchine di Turing, elemento sicuramente innovativo nella tradizione dell’insegnamento informatico nelle scuole superiori.

La fama della gara è cresciuta nel tempo al punto tale che il Ministero della Pubblica Istruzione ha deciso di inserirla tra le gare che sono considerate per stabilire l’eccellenza degli studenti delle scuole superiori sul territorio nazionale (http://www.pubblica.istruzione.it/normativa/2008/allegati/all_cm57.pdf) che nell’area scientifica tecnologica si limita a 19 iniziative.

 

Il Direttore della Gara delle Macchine di Turing

Dott. Antonio Cisternino

 
## Ringraziamenti

È lunga la lista delle persone che in questi tredici anni hanno sostenuto la gara col loro impegno, le giurie che hanno preparato i testi, il Prof. Roberto Grossi che ha diretto la gara per lunghi anni, Laura Redini elemento prezioso per l’organizzazione, e il Dott. Vincenzo Gervasi che ha condiviso con me tante ore per la correzione e la preparazione dei tesi.