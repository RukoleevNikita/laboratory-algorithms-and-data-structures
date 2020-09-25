table = '<table border="1"><tr><th>Имя</th><th>Фамилия</th><th>Вид спорта</th><th>Результат</th></tr><tr>'
document.getElementById('addButton').onclick = function() {
    let arrValue = Array.from(document.getElementsByTagName('input'), el => el.value)
    // document.getElementsByTagName('input').value = ' ' //!не работает отчистка полей
    console.log(arrValue)
    for(let i = 0; i < arrValue.length; i++) {
        table += '<td>' + arrValue[i] + '</td>' 
    }
    table += '</tr></table>'
    document.getElementById('table').innerHTML = table
}

// var d = document
// function addRow() {
//     // Считываем значения с формы
//     surnname = d.getElementById('surnname').value
//     name = d.getElementById('name').value
//     sport = d.getElementById('sport').value
//     result = d.getElementById('result').value

//     // Находим нужную таблицу
//     var tbody = d.getElementById('tab1').getElementsByTagName('TBODY')[0]

//     // Создаем строку таблицы и добавляем ее
//     var row = d.createElement("TR")
//     tbody.appendChild(row)

//     // Создаем ячейки в вышесозданной строке
//     // и добавляем тх
//     var td1 = d.createElement("TD")
//     var td2 = d.createElement("TD")
//     var td3 = d.createElement("TD")
//     var td4 = d.createElement("TD")

//     row.appendChild(td1)
//     row.appendChild(td2)
//     row.appendChild(td3)
//     row.appendChild(td4)

//     // Наполняем ячейки
//     td1.innerHTML = surnname
//     td2.innerHTML = name
//     td3.innerHTML = sport
//     td4.innerHTML = result
// }


