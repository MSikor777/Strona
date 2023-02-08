let liczba1 = document.getElementById("text").value;
let liczba2 = document.getElementById("text2").value;
function trybJ()
{
    document.body.style.backgroundColor = "white";
    document.getElementById("guzik").style.backgroundColor = "#313131";
    document.getElementById("guzik").style.color = "white";
    document.getElementById("guzik2").style.backgroundColor = "#313131";
    document.getElementById("guzik2").style.color = "white";
    document.getElementById("wynik").style.borderColor = "black";
}
function trybC()
{
    document.body.style.backgroundColor = "black";
    document.getElementById("guzik").style.backgroundColor = "white";
    document.getElementById("guzik").style.color = "black";
    document.getElementById("guzik2").style.backgroundColor = "white";
    document.getElementById("guzik2").style.color = "black";
    document.getElementById("wynik").style.borderColor = "white";
}
function dodawanie()
{
    let liczba1 = document.getElementById("text").value; //pobiera wartosc pola 1
    let liczba2 = document.getElementById("text2").value; //pobiera wartosc pola 2
    a = parseInt(liczba1) 
    b = parseInt(liczba2)
    x = a + b
    document.getElementById("wynik").innerHTML = + x //wypisuje w divie o id "wynik" sume a i b 
}
function odejmowanie()
{
    let liczba1 = document.getElementById("text").value;
    let liczba2 = document.getElementById("text2").value; 
    a = parseInt(liczba1)
    b = parseInt(liczba2)
    x = a - b
    document.getElementById("wynik").innerHTML = + x //wypisuje w divie róznice liczby a i b
}
function mnozenie()
{
    let liczba1 = document.getElementById("text").value;
    let liczba2 = document.getElementById("text2").value;
    document.getElementById("wynik").innerHTML = + liczba1 * liczba2
    
}
function dzielenie()
{
    let liczba1 = document.getElementById("text").value;
    let liczba2 = document.getElementById("text2").value;
    document.getElementById("wynik").innerHTML = + liczba1 / liczba2
}


