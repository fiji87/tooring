---
layout: default
title: La macchina
---

<script
  src="{{ site.baseurl }}/assets/js/machine.js">
</script>


<script>
    $(document).ready(function(){
        $(".menu .item").tab();
    });
</script>

# La Macchina di Turing

Molti testi di informatica contengono una descrizione delle macchine di Turing, inserita di solito nel contesto della teoria della calcolabilità, della complessità o della teoria degli automi. Da un punto di vista didattico, le macchine di Turing non vengono di solito utilizzate come primo formalismo per introdurre la scienza dei calcolatori.
Infatti se da un lato le macchine di Turing possono essere utilizzate per codificare tecniche sofisticate di programmazione (come ad esempio la definizione di un interprete), dall'altro lato risolvere problemi non banali con le macchine di Turing può essere difficile.
Inoltre le teorie associate con le macchine di Turing introducono concetti non banali, come ad esempio le nozioni di decidibilità o semi-decidibilità nella teoria della calcolabilità.


Nonostante tutto questo, il comportamento delle macchine di Turing può essere spiegato in modo semplice a chi non possiede conoscenze di informatica.
Abbiamo per questo deciso di preparare un'introduzione alla macchine di Turing che fosse breve ed al tempo stesso auto-contenuta.


## Che cosa è una macchina di Turing? 
Nel 1936 il matematico inglese Alan Turing propose l'idea di una macchina immaginaria che fosse capace di eseguire ogni tipo di calcolo su numeri e simboli.


Una macchina di Turing (MdT) è definita da un insieme di regole che definiscono il comportamento della macchina su un nastro di input-output (lettura e scrittura).
Il nastro può essere immaginato come un nastro di carta di lunghezza infinita, diviso in quadratini dette celle.
Ogni cella contiene un simbolo oppure è vuota.
Una MdT ha una testina che si sposta lungo il nastro leggendo, scrivendo oppure cancellando simboli nelle celle del nastro.
La macchina analizza il nastro, una cella alla volta, iniziando dalla cella che contiene il simbolo più a sinistra nel nastro.


Ad ogni passo, la macchina legge un simbolo sul nastro e in accordo al suo stato interno corrente:
- decide il suo prossimo stato interno, e 
- scrive un simbolo sul nastro e decide se spostare o meno la testina a sinistra o a destra di una posizione.


Come per uno stato della mente di un essere umano, lo stato interno di una MdT definisce l'ambiente in cui una decisione viene presa.
Una MdT può avere solo un numero finito di stati.


Il comportamento di una MdT può essere programmato definendo un insieme di regole, o quintuple, del tipo: 

<div class="language-plaintext tuple" markdown="1">

```
(stato-interno-corrente,  simbolo-letto,  prossimo-stato-interno,  simbolo-scritto,  direzione).
```

</div>


Per esempio la quintupla `(0, A, 1, B, -)` indica che se la macchina si trova nello stato interno `0` e legge sul nastro il simbolo `A`, allora passa nello stato interno `1`, scrive `B` sul nastro e non sposta la testina di lettura.


La quintupla `(1, B, 0, A, >)` indica invece che se la macchina si trova nello stato interno `1` e legge sul nastro il simbolo `B`, allora passa nello stato interno `0`, scrive A sul nastro e si sposta di una posizione a destra.
Se ci si vuole spostare senza modificare il contenuto del nastro si può scrivere il simbolo appena letto utilizzando una quintupla analoga alla seguente: `(1, B, 0, B, >)`.

Si noti che la scrittura del simbolo speciale `-` corrisponde a cancellare il contenuto di una cella.
Ad esempio la quintupla `(1, A, 2, -, -)` indica che se la macchina si trova nello stato `1` e legge il simbolo `A`, allora passa nello stato `2` e cancella il simbolo `A` dal nastro non spostando la testina di lettura.
<div class="ui segment" markdown="1">

Il simbolo `-` viene quindi utilizzato sia per rappresentare la cella vuota che per denotare il mancato movimento della testina.

<!-- <div class="ui left very close rail warning">
  <div class="ui segment">
    Nota con warning!
  </div>
</div> -->

</div>


<div class="ui segment" markdown="1">

Si noti che una MdT può compiere un'azione anche quando incontra la cella vuota.
Ad esempio la quintupla `(2, -, 2, -, <)` indica che se la macchina si trova nello stato `2` e legge una cella vuota allora lascia invariato il contenuto della cella e si sposta di una posizione a sinistra rimanendo nello stesso stato.

<!-- <div class="ui left very close rail">
  <div class="ui segment">
    Nota a margine: utile!
  </div>
</div> -->

</div>


Si noti infine che un insieme di quintuple associa ad ogni coppia: 

<div class="language-plaintext tuple" markdown="1">
```
stato-interno-corrente, simbolo-letto
```
</div>
<div class="language-plaintext tuple" markdown="1">
al più una tripla: 
```
prossimo-stato-interno, simbolo-scritto, direzione
```
</div>

Vediamo adesso come una MdT effettua i suoi calcoli.
Inizialmente il nastro contiene una sequenza finita di simboli, detta sequenza di ingresso.
La MdT è nel suo stato interno iniziale 0 con la testina posizionata sul simbolo più a sinistra nel nastro.

A partire da questa configurazione iniziale, la MdT effettua una serie di azioni seguendo rigorosamente il suo insieme di regole.

<div class="ui segment" markdown="1">

Se la macchina raggiunge uno stato interno per cui non esiste nessuna quintupla per la coppia: 

<div class="language-plaintext tuple" markdown="1">
```
stato-interno-corrente, simbolo-letto
```
</div>
</div>

allora la MdT si ferma e termina la sua computazione.

## Esempi
<div class="ui top attached tabular menu">
  <a class="active item" data-tab="first">PAri e disBari</a>
  <a class="item" data-tab="second">Sequenza infinitAAAA</a>
  <a class="item" data-tab="third">DimezzAtore</a>
</div>
<div class="ui bottom attached active tab segment" data-tab="first">
  <div markdown="1">
  Consideriamo ad esempio una MdT che modifica una sequenza di `A` rimpiazzando ogni `A` in posizione dispari con una `B` (la prima `A` ha posizione pari uguale a `0`).
  Una tale MdT può essere definita dal seguente insieme di regole:

  </div>

  <div class="language-plaintext tuple" markdown="1">

  ```
  0 A 1 A >
  1 A 0 B >
  0 - FINE - -
  1 - FINE - -
  ```

  </div>
  <div markdown="1">

  La prima quintupla stabilisce l'azione che la macchina deve eseguire quando si trova nello stato interno 0 e il simbolo in lettura è `A`.
  Tale situazione corrisponde ad una `A` in posizione pari Ad esempio consideriamo la situazione iniziale in cui la sequenza di ingresso è `AA`: 

  <div class="language-plaintext tuple" markdown="1">

  ```
  AA
  ```

  </div>

  La macchina si trova nello stato interno iniziale `0` ed il simbolo in lettura è A.
  (Graficamente rappresentiamo questa situazione indicando lo stato interno della macchina sopra la cella in lettura.) 

  La prima quintupla stabilisce che la macchina deve cambiare il proprio stato interno in `1`, scrivere il simbolo `A` sul nastro e spostarsi di una casella verso destra.
  Tale situazione corrisponde ad una `A` in posizione dispari, ottenendo: 

  
  <div class="language-plaintext tuple" markdown="1">

  ```
  AB
  ```

  </div>

  Dopo aver effettuato la prima mossa, la macchina si trova nello stato `1` ed in simbolo in lettura è `B`.
  In questo caso la seconda regola stabilisce che la macchina torna nello stato `0`, scrivendo il simbolo A spostando la testina a destra di una cella, ottenendo così la nuova configurazione: 

  
  <div class="language-plaintext tuple" markdown="1">

  ```
  AB
  ```

  </div>

  Secondo quanto stabilito dalla terza regola, la macchina trova la casella bianca e si muove nello stato etichettato come `FINE`.

  A questo punto la macchina si trova nello stato `FINE` e la cella in lettura è vuota.
  La macchina quindi si ferma, terminando la sua computazione, dato che non ha nessuna quadrupla che associ un'azione alla coppia `(FINE, -)`.

  La macchina di esempio quindi una sequenza di simboli `A` in una sequenza in cui tutte le A in posizione dispari sono sostituite con una `B`.
  </div>

</div>
<div class="ui bottom attached tab segment" data-tab="second">
  <div markdown="1">
  Si noti che una MdT può non terminare la sua computazione su certe sequenze di ingresso.
  Ad esempio la MdT definita dalle quintuple: 

  <div class="language-plaintext tuple" markdown="1">
  ```
  0 A 1 A >
  1 A 0 A <
  ```
  </div>

  non si fermerà mai per qualunque sequenza di ingresso che inizi per `AA`, perché continuerà a spostare la testina tra il primo e il secondo carattere dell'input.

  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="third">
  <div markdown="1">

  Dato un numero intero positivo $n$, `n div 2` è il quoziente della divisione di $n$ per f2$.
  Ad esempio, `6 div 2 = 3`, mentre `9 div 2 = 4`.


  Consideriamo il problema di programmare una macchina di Turing che, dato un nastro iniziale contenente una sequenza composta da $n$ `A` consecutive (con $n > 1$), termina la sua esecuzione lasciando sul nastro la sequenza composta da `n div 2 A` consecutive.

  Ad esempio: 

  | Nastro iniziale | Nastro finale |
  | - | - |
  | `AAAA` | `AA` |
  | `AAAAA` | `AA` |
  | `AAA` | `A` |
  | `AA` | `A` |


  Una MdT che risolva il problema in esame può ad esempio adottare la seguente strategia: 

  1. scorre la sequenza di ingresso, partendo dalla `A` più a sinistra;
  2.  se la sequenza di ingresso contiene una sola `A`, la cancella e si ferma;
  3.  se invece la sequenza di ingresso contiene almeno due `A`, le cancella entrambe e va 
  ad aggiungere una `A` alla sequenza "di uscita", nella parte del nastro che si trova a destra della sequenza di ingresso.
  Quindi torna sulla cella più a sinistra di ciò che rimane della sequenza di ingresso e riparte da `(1)`.

  Una MdT che si comporti nel modo appena descritto può essere definita dal seguente insieme di quintuple: 

  <div class="language-plaintext tuple" markdown="1">

  ```
  0 A 1 - >
  1 A 2 - >
  2 A 2 A >
  2 - 3 - >
  3 - 4 A <
  3 A 3 A >
  4 A 4 A <
  4 - 5 - <
  5 A 5 A <
  5 - 0 - >
  0 - F - -
  ```

  </div>

  Lo stato `0` è utilizzato dalla macchina per cancellare la prima `A` dalla sequenza di ingresso, mentre lo stato `1` permette di cancellare la seconda `A` della sequenza, se esiste.
  Si noti che se la sequenza contiene soltanto una `A` allora la macchina si ferma nello stato `1` sulla cella vuota.
  Lo stato `2` permette di scorrere la parte rimanente della sequenza di ingresso, ovvero fino a quando non si incontra la cella vuota.
  A questo punto la macchina utilizza lo stato `3` per andare a scrivere una `A` a destra della sequenza "di uscita".
  Lo stato `4` serve quindi per ripercorre verso sinistra la sequenza di uscita, e lo stato `5` permette di controllare se la sequenza di ingresso contiene ancora qualche `A`.
  Se così è allora la macchina riporta la testina sul simbolo più a sinistra della sequenza di ingresso (stato `8`) e riparte dallo stato `0`, altrimenti la macchina si ferma nello stato `F`.


  Ad esempio per la sequenza di ingresso `AAAA` la MdT appena descritta esegue la seguente computazione: 

  <div class="list examples">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t0.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t1.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t2.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t3.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t4.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t5.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t6.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t7.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t8.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t9.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t10.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t11.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t12.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t13.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t14.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t15.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t16.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t17.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t18.svg">
    <img class="ui centered large image" src="assets/images/machine/ahalver/t19.svg">
  </div>

  La macchina si ferma quindi nello stato `F`.
  </div>
</div>

### Funzioni avanzate

Il Simulatore usato negli anni precedenti includeva già una forma di *abbreviazione sintattica*, consistente nel specificare una sequenza di caratteri anziché un carattere singolo nei campi della quintupla che indicano il carattere letto da nastro e quello scritto su nastro. Tale abbreviazione veniva poi espansa in un numero di regole pari alla lunghezza della sequenza di caratteri, come nell'esempio seguente:

**Regola con abbreviazione.** `( stato1, ABCD, stato2, EFGH, > )`

| Regole espanse |
| - |
| `( stato1, A, stato2, E, > )` |
| `( stato1, B, stato2, F, > )` |
| `( stato1, C, stato2, G, > )` |
| `( stato1, D, stato2, H, > )` |

La versione 2006 del Simulatore generalizza questo meccanismo, introducendo i concetti di classe di *simboli* e di *espansione* parallela.

#### Classi di simboli

Una classe di simboli è una abbreviazione sintattica che denota una sequenza di simboli compresi nell'alfabeto della macchina (con lo spazio primo elemento dell'alfabeto):

```
!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^-{|}
```

La denotazione è costituita da una coppia di parentesi quadre `[]` o graffe `{}`, contenenti uno o più simboli appartenenti alla sequenza, o il simbolo di intervallo (due volte punto) `s1..s2`, che indica tutti i simboli compresi fra `s1` e `s2` nell'alfabeto della macchina. Inoltre, se il primo carattere all'interno delle parentesi è un accento circonflesso `^` (in Inglese caret), si intende che la sequenza denotata è data dall'insieme complementare di quello indicato, ovvero comprende tutti i simboli non elencati all'interno delle parentesi. In questo caso, l'ordine della sequenza è quello naturale dell'alfabeto usato. Infine, il simbolo di barra inversa `\` (in Inglese backslash) indica che il successivo carattere deve essere inteso letteralmente: per esempio, `\]` denota il simbolo `]`, non l'eventuale parentesi di chiusura di una sequenza; `\-` denota il simbolo `-` e non lo spazio, ecc. Allo stesso modo, `\\` denota il simbolo `\`, che altrimenti non sarebbe esprimibile.

NOTA: se si specificano pida quelle con parentesi. Questo fatto è importante per quanto riguarda l'espansione parallela discussa in seguito. La classe di caratteri senza parentesi è stata mantenuta per compatibilità con l'estensione precedente della macchina, ed è limitata solo alle componenti della regola differenti da uno stato.

Gli esempi seguenti chiariscono la notazione usata per le classi di simboli:


<!-- todo: add table -->

| Abbreviazione | Sequenza di simboli corrispondente |
| - | - |
| `[abc]`         | `{a, b, c}` |
| `[0..9]`        | `{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }` |
| `[^aeiou]`      | qualunque simbolo tranne le vocali, nell'ordine naturale |
| `[\[\]()]`      | `{ [, ], (, ) }` |
| `[^+\-*/0..9]`  | qualunque simbolo tranne le cifre e i simboli delle quattro operazioni: `+, -, *, /`, nell'ordine naturale |
| `[^+\-*/0..9]`  | `{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f, +, - }` (cifre esadecimali con segno) |


Le classi di simboli possono essere usate nei seguenti contesti:

- per indicare uno stato iniziale o finale, nel qual caso può essere usato un prefisso e/o un postfisso che, unito a ciascuno dei simboli indicati dalla classe, genera il nome effettivo dello stato. Per esempio, lo stato indicato in maniera abbreviata con `letto[0..9]r` viene espanso nella sequenza di stati `{ letto0r, letto1r, letto2r, letto3r, letto4r, letto5r, letto6r, letto7r, letto8r, letto9r }`.
- per indicare un simbolo letto o da scrivere, nel qual caso la classe fornisce direttamente la sequenza dei simboli indicati. Per esempio, `[0..9]` viene espanso nella lista di simboli `{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }` (analogamente a quanto possibile con la precedente notazione `0123456789`, che comunque rimane disponibile).
- per indicare una direzione di movimento, nel qual caso la classe deve denotare una sequenza composta esclusivamente di simboli `>` e `<`. Per esempio, `[>>><]` viene espanso nella lista di direzioni `{ >, >, >, < }`.

#### Espansione parallela

Abbiamo visto sopra che le classi di simboli possono essere delimitate da parentesi quadre `[]` o da parentesi graffe `{}`. In aggiunta, è possibile usare classi senza delimitatori, come per le vecchie sequenze del tipo `0123456789` (ora esprimibili anche con la sintassi abbreviata `0..9`). Al momento dell'espansione di una regola abbreviata in un insieme di regole base, i tre diversi gruppi di classi di simboli vengono espansi parallelamente: tutte le classi delimitate con lo stesso tipo di parentesi vengono espanse, per ogni regola, nei simboli che occupano la stessa posizione nella sequenza; classi delimitate da parentesi diverse vengono invece espanse indipendentemente (e in combinazione fra loro).

Ciò consente di esprimere sinteticamente un grande numero di regole basate su prodotti cartesiani delle corrispondenti sequenze, come illustrato nei seguenti esempi:


<table width="100%" cellpadding="4" cellspacing="3">
<colgroup><col>
<col>
<col>
</colgroup><thead>
<tr valign="TOP">
<th width="33%">
<p><font size="2">Regola abbreviata</font></p>
</th>
<th width="30%">
<p><font size="2">Espansione delle classi</font></p>
</th>
<th width="37%">
<p><font size="2">Regole generate dall'espansione</font></p>
</th>
</tr>
</thead>
<tbody>
<tr valign="TOP">
<td width="33%">
<p><font face="Courier, monospace"><font size="2"><code class="language-plaintext highlighter-rouge">( s, [0..3], q,
[a..d], &gt; )<code class="language-plaintext highlighter-rouge"></font></font></p>
<br>
<p>In questo caso, le due classi racchiuse fra parentesi quadre vengono espanse in parallelo; quando il simbolo letto è 0 (primo elemento di [0..3]), il simbolo scritto sarà a (primo elemento di [a..d]), e così via.</p>
</td>
<td width="30%">
<p><font face="Courier, monospace"><font size="2">[0..3] = 0, 1, 2,
3</font></font></p>
<br>
<p><font face="Courier, monospace"><font size="2">[a..d] = a, b, c,
d</font></font></p>
</td>
<td width="37%">
<p><font face="Courier, monospace"><font size="2">(s, 0, q, a, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 1, q, b, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 2, q, c, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 3, q, d, &gt;)</font></font></p><br>
<p><br>
</p>
</td>
</tr>
<tr valign="TOP">
<td width="33%">
<p><font face="Courier, monospace"><font size="2">( s, [0..9],
riporto[000000001], [1..90], &gt; )</font></font></p>
<p>Questa regola mostra
come sia possibile legare il simbolo letto, quello scritto, e il
nome dello stato finale tramite un'unica espansione. In questo
caso, se viene letto un simbolo fra 0 e 8 viene scritto lo stesso
simbolo aumentato di 1 (quindi, fra 1 e 9) e si va nello stato
riporto0; se invece viene letto un 9, si scrive uno 0 e si passa
allo stato riporto1.</p>
</td>
<td width="30%">
<p><font face="Courier, monospace"><font size="2">[0..9] = 0, 1, 2,
3, 4, 5, 6, 7, 8, 9</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">riporto[000000001]
= riporto0, riporto0, riporto0, riporto0, riporto0, riporto0,
riporto0, riporto0, riporto1</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">[1..90] = 1, 2,
3, 4, 5, 6, 7, 8, 9, 0</font></font></p><br>
</td>
<td width="37%">
<p><font face="Courier, monospace"><font size="2">(s, 0, riporto0,
1, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 1, riporto0,
2, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 2, riporto0,
3, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 3, riporto0,
4, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 4, riporto0,
5, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 5, riporto0,
6, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 6, riporto0,
7, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 7, riporto0,
8, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 8, riporto0,
9, &gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(s, 9, riporto1,
0, &gt;)</font></font></p><br>
</td>
</tr>
<tr valign="TOP">
<td width="33%">
<p><font face="Courier, monospace"><font size="2">( s[0..4], a..d,
r[0..4], [a..d], &lt;&gt;&lt;&gt;)</font></font></p>
<p>In questa regola si
fa uso di due gruppi di classi, uno senza parentesi e uno fra
parentesi quadre. Ciascun gruppo si espande in sequenze di
lunghezza 4, quindi verranno prodotte complessivamente 16 regole.
Anche in questo caso, le classi corrispondenti vengono espanse in
parallelo (il primo simbolo di ogni sequenza con il primo simbolo
di tutte le altre sequenze che usano lo stesso delimitatore),
mentre classi con delimitatori diversi vengono espanse
indipendentemente.
</p>
<p>Nel nostro caso,
tutte le volte che s[0..4] espande in s0, r[0..4] espanderà
in r0 e [a..d] in a (primo simbolo di ciascuna sequenza); quando
s[0..4] espande in s1, r[0..4] espanderà in r1 e [a..d] in
b, ecc.
</p>
<p>In ciascuno di
questi casi, a..d e &lt;&gt;&lt;&gt; espanderanno,
rispettivamente, nel primo, secondo, terzo e quarto elemento
della sequenza, rispettivamente. Il risultato finale sono le 16
regole visibili accanto.</p>
</td>
<td width="30%">
<p>Classi senza
parentesi:</p>
<p><font face="Courier, monospace"><font size="2">a..d = a, b, c, d</font></font></p>
<p><font face="Courier, monospace"><font size="2">&lt;&gt;&lt;&gt;
= &lt;, &gt;, &lt;, &gt;</font></font></p>
<hr>
<p>Classi con parentesi
quadre:</p>
<p><font face="Courier, monospace"><font size="2">s[0..4] = s0, s1,
s2, s3, s4</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">r[0..4] = r0, r1,
r2, r3, r4</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">[a..d] = a, b, c,
d</font></font></p><br>
</td>
<td width="37%">
<p><font face="Courier, monospace"><font size="2">( s0, a, r0, a,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s0, b, r0, a,
&gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s0, c, r0, a,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s0, d, r0, a,
&gt;)</font></font></p><br>
<p><br><br>
</p>
<p><font face="Courier, monospace"><font size="2">( s1, a, r1, b,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s1, b, r1, b,
&gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s1, c, r1, b,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s1, d, r1, b,
&gt;)</font></font></p><br>
<p><br><br>
</p>
<p><font face="Courier, monospace"><font size="2">( s2, a, r2, c,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s2, b, r2, c,
&gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s2, c, r2, c,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s2, d, r2, c,
&gt;)</font></font></p><br>
<p><br><br>
</p>
<p><font face="Courier, monospace"><font size="2">( s3, a, r3, d,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s3, b, r3, d,
&gt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s3, c, r3, d,
&lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">( s3, d, r3, d,
&gt;)</font></font></p><br>
</td>
</tr>
<tr valign="TOP">
<td width="33%">
<p><font face="Courier, monospace"><font size="2">(rd_[ab], {012},
wr_[ab], {abc}, &lt;)</font></font></p>
<p>Anche in questo caso
vengono usati due gruppi di classi, quelle delimitate da [] e
quelle delimitate da {}. Come visto in precedenza, i due gruppi
vengono espansi in parallelo; verranno quindi generate in totale
6 regole.</p>
</td>
<td width="30%">
<p><font size="2">Classi con parentesi quadre:</font></p>
<p><font face="Courier, monospace"><font size="2">rd_[ab] = rd_a,
rd_b</font></font></p>
<p><font face="Courier, monospace"><font size="2">wr_[ab] = wr_a,
wr_b</font></font></p>
<hr>
<p><font size="2">Classi con parentesi graffe:</font></p>
<p><font face="Courier, monospace"><font size="2">{012} = 0, 1, 2</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">{abc} = a, b, c</font></font></p><br>
</td>
<td width="37%">
<p><font face="Courier, monospace"><font size="2">(rd_a, 0, wr_a,
a, &lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(rd_a, 1, wr_a,
b, &lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(rd_a, 2, wr_a,
c, &lt;)</font></font></p><br>
<p><br><br>
</p>
<p><font face="Courier, monospace"><font size="2">(rd_b, 0, wr_b,
a, &lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(rd_b, 1, wr_b,
b, &lt;)</font></font></p><br>
<p><font face="Courier, monospace"><font size="2">(rd_b, 2, wr_b,
c, &lt;)</font></font></p><br>
</td>
</tr>
</tbody>
</table>


##### Alcuni esempi
Mostriamo ora alcuni esempi di utilizzo dei nuovi costrutti. Per ciascun esempio, sono indicate il testo del problema che viene risolto, una versione della soluzione usando la sintassi tradizionale, una versione con la nuova sintassi, e l'espansione delle regole con la nuova sintassi.

**Odometro.** Scrivere un programma per macchina di Turing che, ricevuto sul nastro una stringa di cifre decimali, lasci sul nastro al termine dell'esecuzione la stringa di cifre corrispondente al numero iniziale, incrementato di uno. Se il risultato supera il numero di cifre inizialmente presenti, il programma deve lasciare sul nastro una stringa di soli 0 (comportamento simile a quello dei normali contachilometri).


<table width="100%" cellpadding="4" cellspacing="3">
<colgroup><col>
<col>
<col>
</colgroup><thead>
<tr valign="TOP">
<th width="33%">
<p><font size="2">Strategia di soluzione</font></p>
</th>
<th width="33%">
<p><font size="2">Versione abbreviata</font></p>
</th>
<th width="33%">
<p><font size="2">Versione espansa</font></p>
</th>
</tr>
</thead>
<tbody>
<tr valign="TOP">
<td width="33%">
<p><font size="2">Dapprima (stato 0) ci si posiziona sull'ultima
cifra a destra del numero; quindi (stato 1) si incrementa la
cifra corrente. Se la cifra era compresa fra 0 e 8, viene fatto
l'incremento e l'esecuzione termina. Se invece la cifra corrente
era 9, viene scritto al suo posto uno 0 e si passa a
incrementare la cifra precedente (riporto).</font></p>
</td>
<td width="33%">
<p><font face="Courier, monospace"><font size="2">(0,[0..9],0,[0..9],&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,-,1,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,[0..8],FINE,[1..9],&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,9,1,0,&lt;)</font></font></p>
</td>
<td width="33%">
<p><font face="Courier, monospace"><font size="2">(0,0,0,0,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,1,0,1,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,2,0,2,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,3,0,3,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,4,0,4,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,5,0,5,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,6,0,6,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,7,0,7,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,8,0,8,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,9,0,9,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,-,1,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,0,FINE,1,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,1,FINE,2,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,2,FINE,3,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,3,FINE,4,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,4,FINE,5,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,5,FINE,6,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,6,FINE,7,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,7,FINE,8,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,8,FINE,9,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(1,9,1,0,&lt;)</font></font></p>
</td>
</tr>
</tbody>
</table>


**Palindrome.** Scrivere un programma per macchina di Turing che, ricevuta sul nastro una stringa sull'alfabeto a-z, lasci il nastro vuoto alla fine della computazione se e solo se la stringa originale era palindroma (si dicono palindrome le stringhe che si leggono identicamente da sinistra a destra o da destra verso sinistra, per esempio "ailatiditalia" o "satorrotas").

<table width="100%" cellpadding="4" cellspacing="3">
<colgroup><col>
<col>
<col>
</colgroup><thead>
<tr valign="TOP">
<th width="33%">
<p><font size="2">Strategia di soluzione</font></p>
</th>
<th width="33%">
<p><font size="2">Versione abbreviata</font></p>
</th>
<th width="33%">
<p><font size="2">Versione espansa</font></p>
</th>
</tr>
</thead>
<tbody>
<tr valign="TOP">
<td width="33%">
<p><font size="2">Posizionati sul primo carattere a sinistra della
stringa, lo cancelliamo, memorizziamo nel nome dello stato il
carattere letto, passando nello stato <font face="Courier, monospace">lettoa</font>
(se abbiamo letto una <font face="Courier, monospace">a</font>)
fino a <font face="Courier, monospace">lettoz</font> (se abbiamo
letto una <font face="Courier, monospace">z</font>). Quindi
scorriamo tutta la stringa, mantenendo memoria nello stato di
quale carattere avevamo letto, e riscrivendo sempre il carattere
letto. Arrivati in fondo alla stringa, ci spostiamo di una cella
a destra (sempre mantenendo il carattere letto originalmente
nello stato), e verifichiamo di trovare all'estremità
sinistra della stringa lo stesso carattere che avevamo letto a
destra. In caso positivo, si cancella il carattere e si ritorna
in cima alla stringa, ripetendo poi l'algoritmo (fino a
consumare tutta la stringa); in caso negativo si interrompe il
calcolo, lasciando sul nastro la parte di stringa non
palindroma.</font></p>
</td>
<td width="33%">
<p><font face="Courier, monospace"><font size="2">(0,[a..z],letto[a..z],-,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(letto[a..z],{a..z},letto[a..z],{a..z},&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(letto[a..z],-,destra[a..z],-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(destra[a..z],[a..z],ritorno,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(ritorno,[a..z],ritorno,[a..z],&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(ritorno,-,0,-,&gt;)</font></font></p>
</td>
<td width="33%">
<p><font face="Courier, monospace"><font size="2">(0,a,lettoa,-,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(0,z,lettoz,-,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoa,a,lettoa,a,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoa,b,lettoa,b,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoa,z,lettoa,z,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettob,a,lettob,a,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettob,z,lettob,z,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoz,a,lettoz,a,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoz,z,lettoz,z,&gt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoa,-,destraa,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(lettoz,-,destraz,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(destraa,a,ritorno,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(destraz,z,ritorno,-,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(ritorno,a,ritorno,a,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">...</font></font></p>
<p><font face="Courier, monospace"><font size="2">(ritorno,z,ritorno,z,&lt;)</font></font></p>
<p><font face="Courier, monospace"><font size="2">(ritorno,-,0,-,&gt;)</font></font></p>
</td>
</tr>
</tbody>
</table>

## Simulatore di macchine di Turing

Disponibile su [turingsimulator.net](https://www.turingsimulator.net/).

<iframe
  id="emulator"
  src="https://www.turingsimulator.net/"
>

Esistono molti programmi "simulatori" di macchine di Turing, ovvero programmi capaci di simulare il comportamento di una macchina di Turing mostrandone il comportamento sullo schermo di un calcolatore. 


I partecipanti alla gara di informatica per studenti delle scuole superiori utilizzano un simulatore di macchine di Turing di facile utilizzo anche per chi non ha dimestichezza con l'uso dei calcolatori. 

Il simulatore è stato scritto in Java e realizzato all'interno del Dipartimento di Informatica dell'Università di Pisa.

Molto brevemente, questo simulatore mostra sullo schermo una macchina di Turing (raffigurata come una specie di macchina a vapore) che corre su un nastro.
Per esigenze di visualizzazione, lo spostamento della testina in una direzione è mostrato tramite lo spostamento del nastro nella direzione opposta, così da avere la testina sempre al centro dello schermo. Il simulatore inoltre mostra:


- due ?finestre? in cui possono essere inserite direttamente le regole della macchina di Turing in corso di realizzazione (finestra verticale a destra) e il contenuto iniziale del nastro (finestra orizzontale in basso);
- un pulsante CARICA per caricare le regole di una MdT da una lista di macchine date, ed un pulsante SALVA per memorizzare le modifiche apportate alle regole che definiscono la MdT;
- i pulsanti ESEGUI e STOP per mettere al lavoro la macchina; il cursore sulla sinistra di ESEGUI permette inoltre di variare la velocità di esecuzione; la quintupla correntemente eseguita viene evidenziata di volta in volta nella finestra verticale a destra.

Una novità per rendere i programmi meno lunghi, consiste nel poter usare la seguente abbreviazione sintattica

<div class="language-plaintext tuple" markdown="1">
```
( stato1, ABCD, stato2, EFGH, > )
```
</div>

per poter rappresentare concisamente la sequenza di tuple

<div class="language-plaintext tuple" markdown="1">
```
( stato1, A, stato2, E, > )
( stato1, B, stato2, F, > )
( stato1, C, stato2, G, > )
( stato1, D, stato2, H, > )
```
</div>

In generale, è possibile mettere n simboli dopo stato1 e dopo stato2, dove l?i-esimo simbolo dopo stato1 corrisponde all?i-esimo simbolo dopo stato2. Si noti che il numero di simboli dopo stato1 e stato2 deve corrispondere! Per esempio, è possibile descrivere le quintuple per scandire a destra una sequenza di A, B, C e D fino alla fine con due sole quintuple:

<div class="language-plaintext tuple" markdown="1">
```
( 0, ABCD, 0, ABCD, > )
( 0, -, 1, -, < )
```
</div>

Un altro esempio consiste nel trasformare le A in B e le B in A in una sequenza contenente questi due soli simboli:

<div class="language-plaintext tuple" markdown="1">
```
(0, AB, 0, BA, >)
```
</div>

Infine, per cancellare dal nastro una sequenza di simboli (per es., A, B, C, D), sostituendoli con uno spazio:

<div class="language-plaintext tuple" markdown="1">
```
(0, ABCD, 0, - - - -, >)
```
</div>

Il simulatore sarà utilizzato durante la gara di informatica. Una versione semplificata di questo simulatore è accessibile all'indirizzo http://www.di.unipi.it/SettimanaCultura. 