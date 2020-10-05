import random
from listas import sujetos
from listas import verbos
from listas import cc

veces = 100
total = []

print("Este frograma funciona substituyendo el sujeto, núcleo predicativo o complemento circunstancial.")
print("El resto de los elementos serán elegidos al azar de una lista")
print("Selucciona que elemento queres proporcionar.")
print("1. Sujeto")
print("2. Núcleo predicativo")
print("3. Complemento circunstancial")
print("(escribe 1, 2 o 3 y y pulsa intro)")
elementoNum = input()
print("Escribelo y pulsa intro")
elementoText = input()
print("Frases:")

if elementoNum == "1":
    while veces > 0:
        frase = elementoText + " " + random.choice(verbos) + " " + random.choice(cc)
        if frase not in(total):
            total.append(frase)
            print(frase)
        else:
            continue
        veces = veces - 1
elif elementoNum == "2":
    while veces > 0:
        frase = random.choice(sujetos) + " " + elementoText + " " + random.choice(cc)
        if frase not in(total):
            total.append(frase)
            print(frase)
        else:
            continue
        veces = veces - 1
elif elementoNum == "3":
    while veces > 0:
        frase = random.choice(sujetos) + " " + random.choice(verbos) + " " + elementoText
        if frase not in(total):
            total.append(frase)
            print(frase)
        else:
            continue
        veces = veces - 1
else:
    print("Error: categoría inexistente")
