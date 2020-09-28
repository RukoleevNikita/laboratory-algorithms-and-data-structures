 $(document).ready(function(){
     var arrValue = []
     var arrSortSport = []
    $('#addButton').on('click', function() {

        let surnname = $('#surname').val()
        let name     = $('#name').val()
        let sport    = $('#sport').val()
        let result   = $('#result').val()

        let arrTemp = []

        arrTemp['surname'] = surnname
        arrTemp['name'] = name
        arrTemp['sport'] = sport
        arrTemp['result'] = result

        arrValue[arrValue.length] = arrTemp

        let tableLine = '<tr><td>' + surnname + '</td><td>' + name + '</td><td>' + sport + '</td><td>' + result + '</td></tr>'
        // document.getElementsByTagName('input').value = ' ' //!не работает отчистка полей
        var table = $('#table')
        table.append(tableLine)
    })
    $('#sortSport').on('click', function() {
        // document.querySelector('#resultSortTab').innerHTML = `<table class="tablSortSport"><thead><tr><th>Фамилия</th><th>Имя</th><th>Вид спорта</th><th>Результат</th></tr></thead></table>`
        for(var i = 1; i < arrValue.length; i++){
            for(var j = 0; j < arrValue.length-i; j++){
                if(arrValue[j]['sport'].substring(0, 1) > arrValue[j + 1]['sport'].substring(0, 1)){
                    var temp = arrValue[j]
                    arrValue[j] = arrValue[j + 1]
                    arrValue[j + 1] = temp
                    arrSortSport = arrValue
                }
            }  
        } 
        for(var k = 0; k < arrSortSport.length; k++) {
            for(var t = 0; t < arrSortSport[k].length; t++) {
                var lineTable = '<tr><td>' + arrSortSport[k]['surname'] + '</td><td>' + arrSortSport[k]['name'] + '</td><td>' + arrSortSport[k]['sport'] + '</td><td>' + arrSortSport[k]['result'] + '</td></tr>'
                var tab = $('#tableSort')
                tab.append(lineTable)
            }console.log(arrSortSport[k])
            
        }
    }) 
    
})

