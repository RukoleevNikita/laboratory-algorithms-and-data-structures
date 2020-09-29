 $(document).ready(function(){
     var arrValue = []
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
        var table = $('#table')
        table.append(tableLine)
        $('input').val('')
    })
    $('#sortSport').on('click', function() {
        for(var i = 1; i < arrValue.length; i++){
            for(var j = 0; j < arrValue.length-i; j++){
                if(arrValue[j]['sport'].substring(0, 1) > arrValue[j + 1]['sport'].substring(0, 1)){
                    var temp = arrValue[j]
                    arrValue[j] = arrValue[j + 1]
                    arrValue[j + 1] = temp
                }
            } 
        }  
        // if($('#tableSort tr').html() !== '') {
        //     $('#tableSort tr').html() = ''
        // }
        for(var t = 0; t < arrValue.length; t++) {
            var lineTable = '<tr><td>' + arrValue[t]['surname'] + '</td><td>' + arrValue[t]['name'] + '</td><td>' + arrValue[t]['sport'] + '</td><td>' + arrValue[t]['result'] + '</td></tr>'
            var tab = $('#tableSort')
            tab.append(lineTable)
        }

    })
    
    // отключить событие клика
    // $('#sortSport').mousedown(function() { 
	//     $('#sortSport').css('pointer-events', 'none' ); 
	//   });
    
})

