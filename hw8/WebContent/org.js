/**
 * 
 */
var req;
window.onload=initall;
var json;
function initall()
{
	document.getElementById("bt1").onclick=checkform;
	}
function checkform()
{
	if(document.getElementById("com").value=="")
		{
		alert("Please input company symbol");
		}
	else
		{
		stock();	
		}
	}
function stock()
{
	if(window.XMLHttpRequest)
		{
		req=new XMLHttpRequest();
		}
	else
		{
		req=new ActiveXObject("Microsoft.XMLHTTP");
		}
	var value="http://localhost:8080/hw8/getstock?symbol="+document.getElementById("com").value;
	//var value="http://localhost:8080/hw8/test";
	req.open("GET",value,true);
	req.onreadystatechange=set;
	req.send(null);
	}
function set()
{
	if(req.readyState==4)
		{
		if(req.status==200)
			{
			json=req.responseText;	
			display();
			}
		}
	}
function display()
{
	var obj = eval("(" + json + ")");
	var result=obj.result;
	$(document).ready(function()
	{
		
	}		
	);
	YUI().use('tabview', function(Y) {
    var tabview = new Y.TabView({srcNode:'#result'});
    tabview.render();
	});
}