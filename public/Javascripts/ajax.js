var curPage = 1;
var totalData, pageSize, totalPage;
var OL_Action_Root = "http://127.0.0.1:9805";

function getData(page)
{
    $.ajax({
        type: 'POST',
        url: "/req_ajax",
        data: {'pageNum':page},
        dataType: 'json',
        
        success: function(json){
            $("#news_tbody").empty();
            var row = "";
            var list = json;
            $.each(list,function(index,array){
                row += "<tr><td align='center' valign='center' class='col_1'>" + array['Category'] + "</td><td align='center' valign='center' class='col_2'><a>" + array['EventName'] + "</a></td><td align='center' valign='center' class='col_3'>" + array['CreateDate'] + "</td></tr>";
            });
            $("#news_tbody").append(row);
        },
        error: function(jqXHR, textStatus, errorThrown){
            //alert("loading error");
            
            /*jqXHR*/
            //alert(jqXHR.responseText);
            //alert(jqXHR.status);
            //alert(jqXHR.readyState);
           // alert(jqXHR.statusText);
            
            
            /*其他兩個參數*/
            alert(textStatus);
            alert(errorThrown);
        }
    });
}

function previouspage(i)
{
    if (i > 0) {
        i--;
        getData(i);
    }
}

function nextpage(i)
{
    i++;
    getData(i);
}


///////////////////////////////////////////////////////////////////////////////////

/*
function showNewContent(i)
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                document.getElementById("news_tbody").innerHTML=xmlhttp.responseText;
            }
    }
    xmlhttp.open("GET","/static/PHP/getdata_mysql.php?q="+String(i),true);
    xmlhttp.send();
}
*/
/*
function showNewContent(i)
{
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'0000',
        database:'CouncilWeb'
    });
    connection.connect();
    
    connection.query({
        if (error) throw error;
        
    })
}
*/