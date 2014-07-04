

import org.jdom.input.SAXBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.URL;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;

/**
 * Servlet implementation class getstock
 */
@WebServlet("/getstock")
public class getstock extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public getstock() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String name = request.getParameter("symbol");
		String text = "";
		URL php = new URL("http://myfirstelasticbeans-env1234.elasticbeanstalk.com//?com="+name);
		InputStream xml=php.openStream();
		try{
		SAXBuilder sax=new SAXBuilder();
		Document doc=sax.build(xml);
		Element result=doc.getRootElement();
		Element temp=null;
		text+="{\"result\":{\"Name\":"+"\""+result.getChildText("Name")+"\","+"\"Symbol\":"+"\""+result.getChildText("Symbol")+"\","+"\"Quote\":{";
		List<Element> quote=result.getChild("Quote").getChildren();
		Iterator<Element> iter=quote.iterator();
		while(iter.hasNext())
		{
			temp=iter.next();
			text+="\""+temp.getName()+"\":"+"\""+temp.getText()+"\",";
		}
		int i = text.lastIndexOf(",");
		text = (String) text.substring(0, i);
		text+="},\"News\":{\"Item\":[";
		quote=result.getChild("News").getChildren();
		iter=quote.iterator();
		while(iter.hasNext())
		{
			temp=iter.next();
			text+="{\"Link\":"+"\""+temp.getChild("Link").getText()+"\",\"Title\":"+"\""+temp.getChild("Title").getText().replace("\"","'")+"\"},";
		}
		text=text.substring(0, text.length()-1);
		text+="]},\""+"StockChartImageURL"+"\":"+"\""+result.getChild("StockChartImageURL").getText()+"\"}}";
		response.getWriter().write(text);
	}catch(JDOMException e2)
	{
		e2.printStackTrace();
		response.setStatus(500);
	}}
    
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request,response);
	}

}
