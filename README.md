# Opakovanie
routing

# Materialy
* https://vuejs.org/guide/quick-start.html
* https://router.vuejs.org/guide/
* https://router.vuejs.org/guide/essentials/history-mode.html
* https://vuejs.org/guide/reusability/composables.html
* https://router.vuejs.org/guide/essentials/navigation.html


# Vzorovy priklad
0. Tento kod vychádza z predchadzajucej domacej úlohy.
1. Spustite a preklikaj si stranku. 
2. Prezrite si kod s poznamkami a taktiez prilozenymi linkami.

# Samostatna praca
1. Pre globalny stav listOfBooks vytvorte dalsiu modifikacnu funkciu deleteBook, ktora na zaklade prebranej aktualnej hodnoty parametra isbn (argumentu), zmaze knihu s danym isbn z tohto stavu.
2. Pridajte na genericku stanku BookDetailsPage tlacidlo delete
    * Po stlaceny tohto tlacidla sa kniha na ktorej stranke sa aktualne nachadzame
    zmaze z globalneho stavu listOfBooks (vyuzite na to modifikacnu funkciu z kroku 1).
    Ako by sme to implementovali, ak by stav listOfBooks nebol globalny a bol by definovany v ramci komponentu BooksPage? Vyskusajte si to v kopii tohto projektu.
    * Po zmazani knihy chceme docielit, aby nas automaticky redirect-lo na route /books, kedze dana kniha uz nebude existovat. Rozne sposoby ako to docielit najdete na tejto linke: https://router.vuejs.org/guide/essentials/navigation.html
3. Zamyslite sa nad tym, preco musime pre globalny stav definovat modifikacne funkcie a nemozeme tento stav modifikovat priamo? Vyskusajte si zadefinovat nejaky novy globaly stav ale bez modifikacnych funkcii, importujte ho niekde a pokuste sa ho modifikovat priamo. Na co ste prisli?
4. Tento krok sa tyka domacej ulohy este s pred sviatkov, teda tej ktoru som uz skontroloval. Prekopte vasu stranku "obchodu" tak aby islo o multipage stranku (po kliknuti na jednotlive polozky sa mi detaly o nich zobrazia na novej generickej stranke s parametrom id predstavujucim jednoznacny identifikator polozky.) List vsetkych poloziek nech teda je globany stav.