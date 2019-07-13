var events_curPage = 1, projects_curPage = 1;

$(document).ready(function(){
    events_getData(events_curPage-1);
    // projects_getData(projects_curPage-1);
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
                    "<div align='center' valign='center' class='col-auto date'>" +
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
function projects_getData(id)
{
    console.log(id);
    $.ajax({
        type: 'POST',
        url: "/projects_ajax",
        data: {'ProjectID':id},
        dataType: 'json',
        
        success: function(json){
            var row = "";
            $("#project_body").empty();
            json['Description'] = json['Description'].replace(/\r\n/g, "<br>");
            json['Description'] = json['Description'].replace(/\n/g, "<br>");
            row += "<dl class='row'>" +
                        "<dd class='col-5'>" +
                            json['ProfessorName_ZH']+" "+json['ProfessorName_EN'] +
                        "</dd>" +
                        "<dd class='col-7'>" +
                            json['LabName'] +
                        "</dd>" +
                        "<dd class='col' style='overflow-y: scroll;height: 70vh;'>" +
                            json['Description'] +
                        "</dd>" +
                    "</dl>"
            $("#project_body").append(row);
            console.log(row);
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

