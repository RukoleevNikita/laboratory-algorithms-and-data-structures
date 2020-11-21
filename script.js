$(document).ready(function () {
    var arrValue = []
    $('#addButton').on('click', function () {

        let surnname = $('#surname').val()
        let name = $('#name').val()
        let sport = $('#sport').val()
        let result = $('#result').val()

        let arrTemp = []

        arrTemp['surname'] = surnname
        arrTemp['name'] = name
        arrTemp['sport'] = sport
        arrTemp['result'] = parseInt(result)


        arrValue[arrValue.length] = arrTemp

        let tableLine = '<tr><td>' + surnname + '</td><td>' + name + '</td><td>' + sport + '</td><td>' + result + '</td></tr>'
        let table = $('#table')
        table.append(tableLine)
        $('input').val('')
    })

    $('#sortSport').on('click', function () {
        for (var i = 1; i < arrValue.length; i++) {
            for (var j = 0; j < arrValue.length - i; j++) {
                if (arrValue[j]['sport'].substring(0, 1) > arrValue[j + 1]['sport'].substring(0, 1)) {
                    var temp = arrValue[j]
                    arrValue[j] = arrValue[j + 1]
                    arrValue[j + 1] = temp
                }
            }
        }

        if ($('#tableSort').find('tr') !== '') {
            $('#tableSort').find('>tr').remove()
        }

        for (var t = 0; t < arrValue.length; t++) {
            let lineTable = '<tr><td>' + arrValue[t]['surname'] + '</td><td>' + arrValue[t]['name'] + '</td><td>' + arrValue[t]['sport'] + '</td><td>' + arrValue[t]['result'] + '</td></tr>'
            let table = $('#tableSort')
            table.append(lineTable)
        }
    })

    $('#failsResult').on('click', function () {
        for (var iFail = 1; iFail < arrValue.length; iFail++) {
            for (var jFail = 0; jFail < arrValue.length - iFail; jFail++) {
                if (arrValue[jFail]['result'] < arrValue[jFail + 1]['result']) {
                    var tempFail = arrValue[jFail]
                    arrValue[jFail] = arrValue[jFail + 1]
                    arrValue[jFail + 1] = tempFail
                }
            }
        }

        if ($('#failsTable').find('tr') !== '') {
            $('#failsTable').find('>tr').remove()
        }

        for (var x = 0; x < arrValue.length; x++) {
            let lineTableFails = '<tr><td>' + arrValue[x]['surname'] + '</td><td>' + arrValue[x]['result'] + '</td></tr>'
            let table = $('#failsTable')
            table.append(lineTableFails)
        }
    })
})


// Выбираем первый символ строки
// Если это открывающая скобка - помещаем ее в стек
// Если это закрывающая скобка, извлекаем последнее значение из стека и проверяем скобки на соответствие. Если стек пуст или закрывающая скобка не соответствует открывающей - прерываем выполнение и возвращаем false
// Переходим к следующему символу строки и повторяем действия с п.2
// Если по окончании выполнения алгоритма стек не пуст (это возможно, если открывающих скобок больше, чем закрывающих) - возвращаем false.
// $(document).ready(function () {
//     $('#but').on('click', function () {
//         let stack = []
//         let open = ['(', '[', '{']
//         let close = [')', ']', '}']
//         let openIndex
//         let closeIndex
//         let inputValues = $('#brackets').val()
//         let arrValues = inputValues.split('')
//         $('#brackets').val('')
//         for (var index = 0; index < arrValues.length; index++) {
//             openIndex = open.indexOf(arrValues[index])
//             if (openIndex !== -1) {
//                 stack.push(openIndex)
//                 continue;
//             }
//             closeIndex = close.indexOf(arrValues[index])
//             if (closeIndex !== -1) {
//                 openIndex = stack.pop()
//                 if (openIndex !== closeIndex) {
//                     return $('#result').text(`Последовательность ${inputValues} не верная!`),
//                         setTimeout(() => $('#result').text(''), 3000)
//                 }
//             }
//         }
//         if (stack.length !== 0) {
//             return $('#result').text(`Последовательность ${inputValues} не верная!`),
//                 setTimeout(() => $('#result').text(''), 3000)
//         }
//         return $('#result').text(`Последовательность ${inputValues} верная!`),
//             setTimeout(() => $('#result').text(''), 3000)
//     })
// })

