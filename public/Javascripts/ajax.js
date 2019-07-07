var events_curPage = 1, projects_curPage = 1;

$(document).ready(function(){
    events_getData(events_curPage-1);
    projects_getData(projects_curPage-1);
});

/*Events*/
function events_getData(page)
{
    return $.ajax({
        type: 'POST',
        url: "/events_ajax",
        data: {'pageNum':page},
        dataType: 'json',
        
        success: function(json){
            var row = "";
            var list = json;
            if (list.length == 0) {
                return;
            }
            $("#events_body").empty();
            $.each(list,function(index,array){
                row += "<div class='row justify-content-center p-2'>" +
                    "<div align='center' valign='center' class='col-1 date'>" +
                        array['CreateDate'] + 
                    "</div>" +
                    "<div valign='center' class='col-4'>" +
                        "<a href='/event_content/" + array['EventID'] + "' class='link1'>" +
                            "[" + array['Category'] + "] " +
                            array['EventName'] + 
                        "</a>" +
                    "</div></div>";
            });
            $("#events_body").append(row);
        },
        error: function(jqXHR, textStatus, errorThrown){
            /*jqXHR*/
            // alert(jqXHR.responseText);
            //alert(jqXHR.status);
            //alert(jqXHR.readyState);
            // alert(jqXHR.statusText);
            
            
            /*其他兩個參數*/
            // alert(textStatus);
            // alert(errorThrown);
         }
    });
}

function events_previouspage()
{
    if (events_curPage > 1) {
        var i = events_curPage-2;
        events_getData(i).done(function(res) {
            if (res.length > 0) {
                events_curPage--;
                document.getElementById("events_curPage").innerHTML = "目前頁數："+events_curPage;
            }
        });
    }
}

function events_nextpage()
{
    events_getData(events_curPage).done(function(res) {
        if (res.length > 0) {
            events_curPage++;
            document.getElementById("events_curPage").innerHTML = "目前頁數："+events_curPage;
        }
    });
}

/*Projects*/
function projects_getData(page)
{
    return $.ajax({
        type: 'POST',
        url: "/projects_ajax",
        data: {'pageNum':page},
        dataType: 'json',
        
        success: function(json){
            var row = "";
            var list = json;
            if (list.length == 0) {
                return;
            }
            $("#projects_tbody").empty();
            $.each(list,function(index,array){
                row += "<tr><td align='center' valign='center' class='col_1'>" + array['ProjectID'] + "</td><td align='center' valign='center' class='col_2'><a href='/project_content/"+ array['ProjectID'] +"'>"+ array['LabName'] + "</a></td><td align='center' valign='center' class='col_3'>" + array['Description'] + "</td></tr>";
            });
            $("#projects_tbody").append(row);
        },
        error: function(jqXHR, textStatus, errorThrown){
            /*jqXHR*/
            // alert(jqXHR.responseText);
            //alert(jqXHR.status);
            //alert(jqXHR.readyState);
            // alert(jqXHR.statusText);
            
            
            /*其他兩個參數*/
            // alert(textStatus);
            // alert(errorThrown);
         }
    });
}

function projects_previouspage()
{
    if (projects_curPage > 1) {
        var i = projects_curPage-2;
        projects_getData(i).done(function(res) {
            if (res.length > 0) {
                projects_curPage--;
                document.getElementById("projects_curPage").innerHTML = "目前頁數："+projects_curPage;
            }
        });
    }
}

function projects_nextpage()
{
    projects_getData(projects_curPage).done(function(res) {
        if (res.length > 0) {
            projects_curPage++;
            document.getElementById("projects_curPage").innerHTML = "目前頁數："+projects_curPage;
        }
    });
}
