 $(document).ready(function(){
     var arrValue = []
    $('#addButton').on('click', function() {
        // let arrValue = Array.from(document.getElementsByTagName('input'), el => el.value)
        // console.log(arrValue)

        let surnname = $('#surname').val()
        let name     = $('#name').val()
        let sport    = $('#sport').val()
        let result   = $('#result').val()

        let arrTemp = []

        arrTemp['surname'] = surnname
        arrTemp['name'] = name
        arrTemp['sport'] = sport
        arrTemp['result'] = result

        arrValue.push(arrTemp)
        console.log(arrValue)

        let tableLine = '<tr><td>' + surnname + '</td><td>' + name + '</td><td>' + sport + '</td><td>' + result + '</td></tr>'
        // document.getElementsByTagName('input').value = ' ' //!не работает отчистка полей
        let table = $('#table')
        table.append(tableLine)
    })
})
// window.onload = function(){
//     function multi() {
//         // Считываем значения с формы
//         surnname = document.getElementById('surnname').value
//         name = document.getElementById('name').value
//         sport = document.getElementById('sport').value
//         result = document.getElementById('result').value
    
//         // Находим нужную таблицу
//         var tbody = document.getElementById('tab1').getElementsByTagName('TBODY')[0]
    
//         // Создаем строку таблицы и добавляем ее
//         var row = document.createElement("TR")
//         tbody.appendChild(row)
    
//         // Создаем ячейки в вышесозданной строке
//         // и добавляем тх
//         var td1 = document.createElement("TD")
//         var td2 = document.createElement("TD")
//         var td3 = document.createElement("TD")
//         var td4 = document.createElement("TD")
    
//         row.appendChild(td1)
//         row.appendChild(td2)
//         row.appendChild(td3)
//         row.appendChild(td4)
    
//         // Наполняем ячейки
//         td1.innerHTML = surnname
//         td2.innerHTML = name
//         td3.innerHTML = sport
//         td4.innerHTML = result
//     }
   
// }



