function previouspage() {
    //var xmlhttp = new XMLHttpRequest();
    
    $.ajax({
        type: "GET",
        data: {},
        url: "",
        cache: false,
        datatype: "json",
        success: function (result) {
            var rows = result.rows;
            var columns = result.columns;
            var table = document.getElementById("newstable");
            var infos = document.getElementById("tbody");
            $('#tbody').empty();
            for (var i = 0;i < rows.length; i++){
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");                            
                var td3 = document.createElement("td");
                td1.innerHTML = rows[i].col_1;
                td2.innerHTML = rows[i].col_2;
                td3.innerHTML = rows[i].col_3;
                //tr.appendChild(td1);
                //tr.appendChild(td2);
                //tr.appendChild(td3);
            }
            $('#tbody').append(infos);
        },
        error: function(){
            alert("loading fail")
        }
    })
}

function nextpage() {
    //var xmlhttp = new XMLHttpRequest();
    
    $.ajax({
        type: "GET",
        data: {},
        url: "",
        cache: false,
        datatype: "json",
        success: function (result){
            var rows = result.rows;
            var columns = result.columns;
            var table = document.getElementById("newstable");
            var infos = document.getElementById("tbody");
            $('#tbody').empty();
            for(var i = 0;i < rows.length; i++){
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");                            
                var td3 = document.createElement("td");
                td1.innerHTML = rows[i].col_1;
                td2.innerHTML = rows[i].col_2;
                td3.innerHTML = rows[i].col_3;
                //tr.appendChild(td1);
                //tr.appendChild(td2);
                //tr.appendChild(td3);
            }
            $('#tbody').append(infos);
        },
        error: function(){
            alert("loading fail")
        }
    })
}
