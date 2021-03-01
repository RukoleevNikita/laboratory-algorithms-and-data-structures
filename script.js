// теория(описание) код

// задание по вариантам 9 лабараторная
// $(document).ready(function () {
//     var arrValue = []
//     $('#addButton').on('click', function () {

//         let surnname = $('#surname').val()
//         let name = $('#name').val()
//         let sport = $('#sport').val()
//         let result = $('#result').val()

//         let arrTemp = []

//         arrTemp['surname'] = surnname
//         arrTemp['name'] = name
//         arrTemp['sport'] = sport
//         arrTemp['result'] = parseInt(result)

//         arrValue[arrValue.length] = arrTemp

//         let tableLine = '<tr><td>' + surnname + '</td><td>' + name + '</td><td>' + sport + '</td><td>' + result + '</td></tr>'
//         let table = $('#table')
//         table.append(tableLine)
//         $('input').val('')
//     })

//     $('#sortSport').on('click', function () {
//         for (var i = 1; i < arrValue.length; i++) {
//             for (var j = 0; j < arrValue.length - i; j++) {
//                 if (arrValue[j]['sport'].substring(0, 1) > arrValue[j + 1]['sport'].substring(0, 1)) {
//                     var temp = arrValue[j]
//                     arrValue[j] = arrValue[j + 1]
//                     arrValue[j + 1] = temp
//                 }
//             }
//         }

//         if ($('#tableSort').find('tr') !== '') {
//             $('#tableSort').find('>tr').remove()
//         }

//         for (var t = 0; t < arrValue.length; t++) {
//             let lineTable = '<tr><td>' + arrValue[t]['surname'] + '</td><td>' + arrValue[t]['name'] + '</td><td>' + arrValue[t]['sport'] + '</td><td>' + arrValue[t]['result'] + '</td></tr>'
//             let table = $('#tableSort')
//             table.append(lineTable)
//         }
//     })

//     $('#failsResult').on('click', function () {
//         for (var iFail = 1; iFail < arrValue.length; iFail++) {
//             for (var jFail = 0; jFail < arrValue.length - iFail; jFail++) {
//                 if (arrValue[jFail]['result'] < arrValue[jFail + 1]['result']) {
//                     var tempFail = arrValue[jFail]
//                     arrValue[jFail] = arrValue[jFail + 1]
//                     arrValue[jFail + 1] = tempFail
//                 }
//             }
//         }

//         if ($('#failsTable').find('tr') !== '') {
//             $('#failsTable').find('>tr').remove()
//         }

//         for (var x = 0; x < arrValue.length; x++) {
//             let lineTableFails = '<tr><td>' + arrValue[x]['surname'] + '</td><td>' + arrValue[x]['result'] + '</td></tr>'
//             let table = $('#failsTable')
//             table.append(lineTableFails)
//         }
//     })
// })


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


// польская запись
// преоброзавание в массив
// цикл по массиву 
// если встречается знак тогда значения добовляются в стек и применяется операция   
// const operators = {
//     '+': (x, y) => x + y,
//     '-': (x, y) => x - y,
//     '*': (x, y) => x * y,
//     '/': (x, y) => x / y
// };

// let evaluate = (expr) => {
//     let stack = [];
//     expr.split(' ').forEach((token) => {
//         if (token in operators) {
//             let [y, x] = [stack.pop(), stack.pop()];
//             stack.push(operators[token](x, y));

//             console.log(stack);
//         } else {
//             stack.push(parseFloat(token));
//         }
//     });
//     return stack.pop();
// };

// console.log(evaluate('2 3 5 * + 8 9 * + 4 -'));
// 2 15 + 8 9 * + 4 -
// 17 8 9 * + 4 -
// 17 72 + 4 -
// 89 4 -
// 85

// Алгоритм Кнута-Морриса-Пратта
// возвращает индекс начала образца в строке или -1, если не найден
// i-с какого места строки  ищем
// j-с какого места образца ищем
// function foo(sample, string) {
//     for (let i = 0; string[i]; ++i) {
//         for (let j = 0; ; ++j) {
//             if (!sample[j]) return console.log(i);
//             if (string[i + j] != sample[j]) break;
//         }
//     }
//     return console.log(-1);
// };

/*
* сохранение первого элемента массива
* цикл по массиву и добовления элементов в стек
* запуск цикла по стеку
* если элемент из стека больше сохранённого в переменной элемента, перезаписать переменную
*/
// const arrNum = [6, 7, 7, 88, 23, 100, 1];
// let maxItem = arrNum[0];
// let stack = [];
// arrNum.forEach(item => {
//     stack.push(item);
//     stack.forEach(itemStack => {
//         if (maxItem > itemStack) maxItem = itemStack;
//     });
// });
// console.log(maxItem);


// function boyer(S, P) {
//     var ret = [];

//     var k = P.length - 1, o = {}, l = S.length, i = 0, j, c;
//     for (; i < k; i++)
//         o[P.charAt(i)] = k - i;
//     i = 0;
//     while (i < l) {
//         for (j = k; j >= 0; j--)
//             if (P.charAt(j) != S.charAt(i + j)) {
//                 break;
//             }
//         if (j < 0) {
//             i++;
//             ret.push(i);
//         }
//         else {
//             c = o[S.charAt(i + j)];
//             if (!c)
//                 c = k + 1;
//             c += j - k;
//             if (c <= 0)
//                 c = 1;
//             i += c;
//         }
//     }
//     return ret;
// }

// console.log(boyer('привет', ''))
// console.log(ret);


// Алгоритм Бойер-Мура
// var fso = new ActiveXObject("Scripting.FileSystemObject");
// var r = fso.OpenTextFile("in.txt", 1, true);
// var st = r.ReadLine();                                                      // Считывает первую строку
// var st2 = r.ReadAll();                                                      // Считывает весь оставшийся текст
// r.Close();

// var m = st.length;                                                          // Вычисляет длину строки
// var badChar = new Array();                                                  // Создаёт массива, где каждой букве шаблона соответствует индекс её последнего вхождения
// var answer = new Array();                                                   // Создаёт массива ответов. Тут лежат индексы вхождений слова "война" в текст
// var index = 0;                                                              // Позиция, на которой находится цикл на данной итерации
// var iterCount = st2.length - st.length;                                     // Вычисляет кол-во итераций, чтобы не выйти за пределы строки

// for (j = 0; j < m; j++)                                                      // Заполняет массив badChar (индексы с единицы, а не с нуля)
//     badChar[st.charAt(j)] = j + 1;


// while (index <= iterCount) {                                                 // Сам поиск: Выполняется пока index <= длине текста минус длине строки
//     var pos = st.length - 1;                                                // Вычисляет позицию последней буквы шаблона
//     var ppi = pos + index;                                                  // Вычисляет позицию буквы текста, с которой нужно начинать сравнения
//     var flag = false;

//     while (st.charAt(pos) == st2.charAt(ppi) && !flag) {                     // Пока символ строки равен символу текста, и правда, то
//         if (pos == 0) {                                                      // Если длина строки = 0,то добавляем элемент индекса в массив answer
//             answer.push(index);
//             flag = true;
//         }
//         pos--;
//         ppi--;
//     }

//     if (badChar[st2.charAt(pos + index)] == undefined)                       // Проверка на то, определён ли символ, с которого начиналось сравнение, в словаре badChar
//         index += (m - pos);                                                 // Если нет, то увеличиваем index на длину шаблона
//     else
//         index += Math.max(m - badChar[st2.charAt(pos + index)] - pos, 1);   // Иначе index увеличиваем на наибольшее значение из (единицы) и (разности длины шаблона и эвристики несовпавшего символа)

// }

// if (answer.length == 0)
//     WSH.echo("Not found");
// else {
//     WSH.echo("Mathces: " + answer.length);
//     WSH.echo(answer.join("\n"));
// }


//! Найти все натуральные числа принадлежащие отрезку [106732567; 152673836] и имеющие ровно три нетривиальных делителя. 
// Для каждого найденного числа записать в ответе само число и его наибольший нетривиальный делитель.
// Найденные числа расположить в порядке возростания
// Оценить сложность алгоритма и время выполнения работы.
// найти время выполнения функции 

// нечетное количество делителй может быть в том случае если есть квадрат делителей к примеру число 16 у него делители 
// 1*16=16 2*8=16 4*4=16 4 в квадрате
// если есть квадрат делителей значит количество делителй нечётное 
// если делителей четное количество то число не рассматриваем



function naturalNumbers(start, end) {
    var temp
    // определяем диапазон среди аргументов
    for(var i = start; i <= end; i++) {
        var count = 0
        // проверка на квадрат делитля
        let cell = Math.trunc(Math.sqrt(i))
        // проверка на квадрат делитля
        if (cell * cell == i ) {
            // цикл по каждому число из диапазона
            for(var j = 2; j < cell; j++) { 
                // находим делитель каждого числа из диапазона
                if (i % j == 0) {
                    count++
                    temp = j
                }
            }
            // если квадрат делителя равен числу 
            if (count == 1) {
                console.log('число: ' + i, 'делитель: ' + i / temp);
            }
        }   
    }  
}

naturalNumbers(106732567, 152673836) 



// ? Рассматриваются целые числа, принадлежащих числовому отрезку [318216; 369453], которые представляют собой произведение трёх различных простых делителей, оканчивающихся на одну и ту же цифру. В ответе запишите количество таких чисел и минимальное из них.
//! 274 318449


