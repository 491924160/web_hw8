/**
 * 
 */
var data1;
function haliluya()
{
var text=$("#com").val();
text=text.split(",",1);
if(text==null||text=="")
	alert("Please input company symbol or name!");
else
	{
	$.get("http://cs-server.usc.edu:17721/examples/servlet/getstock?symbol="+text,function(data,status)	
			
	{
		if(status=="success")
			{
			$("h1").remove();
			$("hr").css("visibility","visible");
			
			//$("#bt2").css("visibility","visible");
			var obj=eval("(" + data + ")");
			data1=eval("(" + data + ")");
			
			var result=obj.result;
			$(".head_left p:first").text(obj.result.Name+"("+obj.result.Symbol+")");
			 if(result.Quote.ChangeType=="-")
			 	{
			 	$(".symbol2").html("<img src='down_r.gif' style='height:20px;width:10px' />");
			 	$(".symbol1").text(result.Quote.LastTradePriceOnly+"("+result.Quote.Change+")");
			 	$(".symbol2").css("color","red");
			 	$(".symbol2").append(result.Quote.Change+"("+result.Quote.ChangeinPercent+")");
			 	}else if(result.Quote.ChangeType=="+")
			 		{
			 		$(".symbol2").html("<img src='up_g.gif' style='height:20px;width:10px ' />");
				 	$(".symbol1").text(result.Quote.LastTradePriceOnly+"("+result.Quote.Change+")");
				 	$(".symbol2").css("color","green");
				 	$(".symbol2").append(result.Quote.Change+"("+result.Quote.ChangeinPercent+")");
			 		}
			 	else
			 		{
			 		$("#row2").Text("");
			 		}
			
			$(".head_right").empty()
			.append("<img src="+obj.result.StockChartImageURL+">");	

			
			var jobj=$("button");
			jobj.css("visibility","visible");
			$("button").appendTo(".head_left");
			$("#result").css("visibility","visible");
			$("#hello").css("visibility","visible");
			var array =["PreviousClose",["DaysHigh","DaysLow"],"Open",["YearHigh","YearLow"],"Bid","Volume","Ask","AverageDailyVolume","OneyrTargetPrice","MarketCapitalization"];
			var names=["Prev close","Day's Range","Open","52wk Range","Bid","Volume","Ask","Avg Vol(3m)","1y Target Est","Market Cap"];
		
			var i=0;
			$("#table1").empty();
			$("#table2").empty();
			while(i<array.length)
				{
				if(i==0||i==2)
					{
					$("#table1").append("<tr><td style='margin-left=0px;'>"+names[i]+":</td><td style='margin-right:5px'>"+result.Quote[array[i]]+"</td><td style='margin-left=0px;'>"+names[i+1]+"</td><td 'margin-right:5px'>"+result.Quote[array[i+1][1]]+"-"+result.Quote[array[i+1][0]]+"</td></tr>");
					}
				else
					{
					$("#table1").append("<tr><td style='margin-left=0px;'>"+names[i]+":</td><td style='margin-right:5px'>"+result.Quote[array[i]]+"</td><td style='margin-left=0px;'>"+names[i+1]+"</td><td style='margin-right:5px'>"+result.Quote[array[i+1]]+"</td></tr>");
					}
				i+=2;					
				}
			var news=obj.result.News;
			$.each(news,function(key,value)
					{
				if(value.length>0)
					{var i=0;
					while(i<value.length)
						{
				   var link=value[i].Link;
				   var title=value[i].Title;
					$("#table2").append("<tr><td><a href='"+link+"' >Title:"+title+"</a></td></tr>");
					i++;
						}
		
						}
				else
					{
					$("#table2").append("<h2 align='center'>News information not available</h2>");
					}
					});
			$("#table1 #2").addClass("result2");
			$("#result").css("visibility","visible");
			YUI().use('tabview', function(Y) {
var tabview = new Y.TabView({
srcNode: '#result'
});	

tabview.render();
});						
			}
		else
			{
			alert("error");
			}				
	});
	};				
	}
function caonima(haha)
{
	var text=haha.result.text;
	text=text.split(",",1);
	$("hr").css("visibility","visible");
	$.get("http://cs-server.usc.edu:17721/examples/servlet/getstock?symbol="+text,function(data,status)	
			
	{
		if(status=="success")
			{
			$("h1").remove();
			
			
			var obj=eval("(" + data + ")");
			data1=eval("(" + data + ")");
			
			var result=obj.result;
			$(".head_left p:first").text(obj.result.Name+"("+obj.result.Symbol+")");
			 if(result.Quote.ChangeType="-")
			 	{
			 	$(".symbol2").html("<img src='down_r.gif' style='height:20px;width:10px' />");
			 	$(".symbol1").text(result.Quote.LastTradePriceOnly+"("+result.Quote.Change+")");
			 	$(".symbol2").css("color","red");
			 	$(".symbol2").append(result.Quote.Change+"("+result.Quote.ChangeinPercent+")");
			 	}else if(result.Quote.ChangeType="+")
			 		{
			 		$(".symbol2").html("<img src='up_g.gif' style='height:20px;width:10px ' />");
				 	$(".symbol1").text(result.Quote.LastTradePriceOnly+"("+result.Quote.Change+")");
				 	$(".symbol2").css("color","green");
				 	$(".symbol2").append(result.Quote.Change+"("+result.Quote.ChangeinPercent+")");
			 		}
			 	else
			 		{
			 		$("#row2").Text("");
			 		}
			
			$(".head_right").empty()
			.append("<img src="+obj.result.StockChartImageURL+">");	

			
			var jobj=$("button");
			jobj.css("visibility","visible");
			$("button").appendTo(".head_left");
			$("#result").css("visibility","visible");
			$("#hello").css("visibility","visible");
			var array =["PreviousClose",["DaysHigh","DaysLow"],"Open",["YearHigh","YearLow"],"Bid","Volume","Ask","AverageDailyVolume","OneyrTargetPrice","MarketCapitalization"];
			var names=["Prev close","Day's Range","Open","52wk Range","Bid","Volume","Ask","Avg Vol(3m)","1y Target Est","Market Cap"];
		
			var i=0;
			$("#table1").empty();
			$("#table2").empty();
			while(i<array.length)
				{
				if(i==0||i==2)
					{
					$("#table1").append("<tr><td style='margin-left=0px;'>"+names[i]+":</td><td style='margin-right:5px'>"+result.Quote[array[i]]+"</td><td style='margin-left=0px;'>"+names[i+1]+"</td><td 'margin-right:5px'>"+result.Quote[array[i+1][1]]+"-"+result.Quote[array[i+1][0]]+"</td></tr>");
					}
				else
					{
					$("#table1").append("<tr><td style='margin-left=0px;'>"+names[i]+":</td><td style='margin-right:5px'>"+result.Quote[array[i]]+"</td><td style='margin-left=0px;'>"+names[i+1]+"</td><td style='margin-right:5px'>"+result.Quote[array[i+1]]+"</td></tr>");
					}
				i+=2;					
				}
			var news=obj.result.News;
			$.each(news,function(key,value)
					{
					var i=0;
					while(i<value.length)
						{
				   var link=value[i].Link;
				   var title=value[i].Title;
					$("#table2").append("<tr><td><a href='"+link+"' >Title:"+title+"</a></td></tr>");
					i++;
						}
					});
			$("#table1 #2").addClass("result2");
			$("#result").css("visibility","visible");
			YUI().use('tabview', function(Y) {
var tabview = new Y.TabView({
srcNode: '#result'
});	

tabview.render();
});						
			}
		else
			{
			alert("error");
			}				
	});
	};				
	


function post(){			  
		FB.getLoginStatus(function(response) {
			  if (response.status === 'connected') {
			    // the user is logged in and has authenticated your
			    // app, and response.authResponse supplies
			    // the user's ID, a valid access token, a signed
			    // request, and the time the access token 
			    // and signed request each expire
				  var url=data1.result.StockChartImageURL;
			    FB.ui(
			    	{
			    		method: 'feed',
    name: data1.result.Name,
    link:"http://finance.yahoo.com/q;_ylt=AjYxKpIh6L.aoN385saI6wup_8MF;_ylc=X1MDMjE0MjQ3ODk0OARfcgMyBGZyA3VoM19maW5hbmNlX3dlYl9ncwRmcjIDc2EtZ3AEZ3ByaWQDBG5fZ3BzAzEwBG9yaWdpbgNmaW5hbmNlLnlhaG9vLmNvbQRwb3MDMQRwcXN0cgMEcXVlcnkDQUEsBHNhYwMxBHNhbwMx?p=http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3DAA%26ql%3D0&type=2button&fr=uh3_finance_web_gs&uhb=uhb2&s="+data1.result.Symbol,
    picture: url,
    caption: "Stock Information of "+data1.result.Name+"("+data1.result.Symbol+")",
    description: "Last Trade Price:"+data1.result.Quote.LastTradePriceOnly+", Change:"+data1.result.Quote.ChangeType+data1.result.Quote.Change+"("+data1.result.Quote.ChangeinPercent+")"
			    	},function(response){
			    		if(response&&response.post_id)
			    		alert("post success!");
			    		else
			    			alert("post failure");
			    	}	);
			  } else if (response.status === 'not_authorized') {
			    // the user is logged in to Facebook, 
			    // but has not authenticated your app
				  FB.login(function(response){
					  if(response.status=="connected")
						  {
						  var url= data1.result.StockChartImageURL;
						FB.ui(
			    	{
			    		method: 'feed',
    name: data1.result.Name,
    link:"http://finance.yahoo.com/q;_ylt=AjYxKpIh6L.aoN385saI6wup_8MF;_ylc=X1MDMjE0MjQ3ODk0OARfcgMyBGZyA3VoM19maW5hbmNlX3dlYl9ncwRmcjIDc2EtZ3AEZ3ByaWQDBG5fZ3BzAzEwBG9yaWdpbgNmaW5hbmNlLnlhaG9vLmNvbQRwb3MDMQRwcXN0cgMEcXVlcnkDQUEsBHNhYwMxBHNhbwMx?p=http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3DAA%26ql%3D0&type=2button&fr=uh3_finance_web_gs&uhb=uhb2&s="+data1.result.Symbol,
    picture: url,
    caption: "Stock Information of "+data1.result.Name+"("+data1.result.Symbol+")",
    description: "Last Trade Price:"+data1.result.Quote.LastTradePriceOnly+", Change:"+data1.result.Quote.ChangeType+data1.result.Quote.Change+"("+data1.result.Quote.ChangeinPercent+")"
			    	},function(response){
			    		if(response&&response.post_id)
			    		alert("post success!");
			    		else
			    			alert("post failure");
			    	}	);
						  }
					  else
						  {
						  alert("authentication fails");
						  }
					  
				  });
				 
			  } else {
			    // the user isn't logged in to Facebook.
				  FB.login(function(response){
					  if(response.authResponse)
						  {
						  var url= data1.result.StockChartImageURL;
						  FB.ui(
			    	{
			    		method: 'feed',
    name: data1.result.Name,
    link:"http://finance.yahoo.com/q;_ylt=AjYxKpIh6L.aoN385saI6wup_8MF;_ylc=X1MDMjE0MjQ3ODk0OARfcgMyBGZyA3VoM19maW5hbmNlX3dlYl9ncwRmcjIDc2EtZ3AEZ3ByaWQDBG5fZ3BzAzEwBG9yaWdpbgNmaW5hbmNlLnlhaG9vLmNvbQRwb3MDMQRwcXN0cgMEcXVlcnkDQUEsBHNhYwMxBHNhbwMx?p=http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3DAA%26ql%3D0&type=2button&fr=uh3_finance_web_gs&uhb=uhb2&s="+data1.result.Symbol,
    picture: url,
    caption: "Stock Information of "+data1.result.Name+"("+data1.result.Symbol+")",
    description: "Last Trade Price:"+data1.result.Quote.LastTradePriceOnly+", Change:"+data1.result.Quote.ChangeType+data1.result.Quote.Change+"("+data1.result.Quote.ChangeinPercent+")"
			    	},function(response){
			    		if(response&&response.post_id)
			    		alert("post success!");
			    		else
			    			alert("post failure");
			    	}	);
						  }
					  else
						  {
						  alert("login fails");
						  }
					  
				  });
			  }
			 });
	}
 var YAHOO = {
		        Finance: {
		            SymbolSuggest: {}
		        }
		    };
$(document).ready(function(){
	$(document).ajaxError(function()	
	{	
			$("h1:first").remove();
			$("form").after("<h1 align='center'>Stock Information Not Available</h1>");	
			$("#hello").css("visibility","hidden");
			$("#result").css("visibility","hidden");
			$("button").css("visibility","hidden");
			$("hr").css("visibility","hidden");
		
	});	

	

	$("#com").keyup(function(){
		var company=$("#com").val();
		$.ajax({
			type:'GET',
			url:'http://autoc.finance.yahoo.com/autoc',
			data:{
				query:company
			},
			jsonp:'callback',
			dataType:'jsonp',
			//crossDomain:true,
			jsonpCallback:'YAHOO.Finance.SymbolSuggest.ssCallback'
		});
		YAHOO.Finance.SymbolSuggest.ssCallback=function (data)
		{
			YUI().use('autocomplete', 'autocomplete-highlighters', function (Y) {
				var inputnode=Y.one('#com');
				var result=data.ResultSet.Result;
				var array=[];
				//alert(result);
				$.each(result,function(i,obj)
						{
					var str=obj.symbol+", "+obj.name+" ("+obj.exch+")";
						array.push(str);
						});
							
				inputnode.plug(Y.Plugin.AutoComplete,
				{
					allowBrowserAutocomplete:false,
					activateFirstItem:true,
					 on : {
        select : function(itemNode )
        {
		
        	$("#com").val(itemNode.result.text);
			haliluya();
        }
					 }}			
				);
				inputnode.ac.set('source',array);
				
						
			});
		};
	});
	
	$("#bt1").click(haliluya);		
});
