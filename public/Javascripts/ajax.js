var events_curPage = 1, projects_curPage = 1;

/*Events*/
function events_getData(page)
{
    $.ajax({
        type: 'POST',
        url: "/events_ajax",
        data: {'pageNum':page},
        dataType: 'json',
        
        success: function(json){
            $("#events_tbody").empty();
            var row = "";
            var list = json;
            $.each(list,function(index,array){
                row += "<tr><td align='center' valign='center' class='col_1'>" + array['Category'] + "</td><td align='center' valign='center' class='col_2'><a href='/event_content/" + array['EventID'] +"'>"+ array['EventName'] + "</a></td><td align='center' valign='center' class='col_3'>" + array['CreateDate'] + "</td></tr>";
            });
            $("#events_tbody").append(row);
        },
        error: function(jqXHR, textStatus, errorThrown){
            /*jqXHR*/
            alert(jqXHR.responseText);
            //alert(jqXHR.status);
            //alert(jqXHR.readyState);
            alert(jqXHR.statusText);
            
            
            /*其他兩個參數*/
            alert(textStatus);
            alert(errorThrown);
         }
    });
}

function events_previouspage()
{
    if (events_curPage > 1) {
        var i = events_curPage-2;
        events_getData(i);
        events_curPage--;
        document.getElementById("events_curPage").innerHTML = "目前頁數："+events_curPage;
    }
}

function events_nextpage()
{
    events_getData(events_curPage);
    events_curPage++;
    document.getElementById("events_curPage").innerHTML = "目前頁數："+events_curPage;
}

/*Projects*/
function projects_getData(page)
{
    $.ajax({
        type: 'POST',
        url: "/projects_ajax",
        data: {'pageNum':page},
        dataType: 'json',
        
        success: function(json){
            $("#projects_tbody").empty();
            var row = "";
            var list = json;
            $.each(list,function(index,array){
                row += "<tr><td align='center' valign='center' class='col_1'>" + array['ProjectID'] + "</td><td align='center' valign='center' class='col_2'><a href='/project_content/"+ array['ProjectID'] +"'>"+ array['LabName'] + "</a></td><td align='center' valign='center' class='col_3'>" + array['Description'] + "</td></tr>";
            });
            $("#projects_tbody").append(row);
        },
        error: function(jqXHR, textStatus, errorThrown){
            /*jqXHR*/
            alert(jqXHR.responseText);
            //alert(jqXHR.status);
            //alert(jqXHR.readyState);
            alert(jqXHR.statusText);
            
            
            /*其他兩個參數*/
            alert(textStatus);
            alert(errorThrown);
         }
    });
}

function projects_previouspage()
{
    if (projects_curPage > 1) {
        var i = projects_curPage-2;
        projects_getData(i);
        projects_curPage--;
        document.getElementById("projects_curPage").innerHTML = "目前頁數："+projects_curPage;
    }
}

function projects_nextpage()
{
    projects_getData(projects_curPage);
    projects_curPage++;
    document.getElementById("projects_curPage").innerHTML = "目前頁數："+projects_curPage;
}
