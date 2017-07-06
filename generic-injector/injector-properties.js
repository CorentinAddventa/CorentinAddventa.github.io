/* CONFIGURE THE FOLLOWING */

var paramValues = [
    
         {
                    //significantThreshold:[10,10,10,10,10,5,5,10],
                    //significantThreshold:[0,0,0,0,10,5,5,10],
                    relativePerformance:[-0.59,0.64,3.02,1.29,0.4,0.81,-0.2,0.64],
                    allocationContribution:[0.54,0.13,0.26,0.8,0.08,0.48,-0.1,0.22],
                    selectionContribution:[-0.22,1.22,3.38,0.47,0.59,0.37,-0.12,0.49]
        },
        {
                    //significantThreshold:[10,10,10,10,10,5,5,10],
                    relativePerformance:[1.42,0.99,-2.26,0.88,0.83,1.97,0.02,-0.29],
                    allocationContribution:[1.25,-0.25,-0.21,-0.06,-0.58,0.39,0.03,-0.32],
                    selectionContribution:[0.02,1.06,-3.06,0.92,0.89,1.5,0.07,-0.05]
        }
       
];

function updateValues(position,month)
{
    $("input#relativePerformance").val(paramValues[month].relativePerformance[position]);
    $("#sliderrelativePerformance").slider('value',paramValues[month].relativePerformance[position]);
    $("input#selectionContribution").val(paramValues[month].selectionContribution[position]);
    $("#sliderselectionContribution").slider('value',paramValues[month].selectionContribution[position]);
    $("input#allocationContribution").val(paramValues[month].allocationContribution[position]);
    $("#sliderallocationContribution").slider('value',paramValues[month].allocationContribution[position]);
   /* $("input#significantThreshold").val(paramValues[month].significantThreshold[position]);
    $("#slidersignificantThreshold").slider('value',paramValues[month].significantThreshold[position]);*/
}
var project =
{
	//project title
	title: "Allianz GI Fund reporting",
	//set to true for a WebService application or false for a dialog application
	modeDirect: true,
	//set to true to hide available XSL transformations
	hideXSLTransformationChoice:true,
	//available XSL transformations
	transformations: [ "html" ], 
	//default XSL transformation
   	defaultTransformation: "html",
	//3 available values , self, tab or area. When resultTarget is set to "area", the result is displayed in the same page as the parameters
	resultTarget: "area",
	casesLabel: "",
	loadXMLButtonLabel: "Show data"

}

var caseGroups =
[
	{
	   title: "November 2015",
		folded: false,
		cases:
		[
			{
				file: "fundD0000001_november.xml",
				label: "Fund D0000001",
				title:"Concentra",
				defaultValue: true
			},
			{
				file: "fundD0003834_november.xml",
				label: "Fund D0003834",
				title:"Global Sustainability",

			},
			{
				file: "fundD0004007_november.xml",
				label: "Fund D0004007",
				title:"Eastern Europe Equity",

			},
			{
				file: "fundD0007389_november.xml",
				label: "Fund D0007389",
				title:"Europe Equity Growth",

			},
			{
				file: "fundD0007506_november.xml",
				label: "Fund D0007506",
				title:"European Equity Dividend",

			},
			{
				file: "fundD0007536_november.xml",
				label: "Fund D0007536",
				title:"Europe Small Cap Equity",

			}
			/*{
				file: "fundD0007691_november.xml",
				label: "Fund  D0007691",
				title:"Best Styles Global Equity",

			},
			{
				file: "fundD0007796_november.xml",
				label: "Fund D0007796",
				title:"Global Small Cap Equity",

			}*/
		]
	},
	
	{
	   title: "December 2015",
		folded: true,
		cases:
		[
			{
				file: "fundD0000001.xml",
				label: "Fund D0000001",
				title:"Concentra",
			},
			{
				file: "fundD0003834.xml",
				label: "Fund D0003834",
				title:"Global Sustainability",

			},
			{
				file: "fundD0004007.xml",
				label: "Fund D0004007",
				title:"Eastern Europe Equity",

			},
			{
				file: "fundD0007389.xml",
				label: "Fund D0007389",
				title:"Europe Equity Growth",

			},
			{
				file: "fundD0007506.xml",
				label: "Fund D0007506",
				title:"European Equity Dividend",

			},
			{
				file: "fundD0007536.xml",
				label: "Fund D0007536",
				title:"Europe Small Cap Equity",

			}
			/*{
				file: "fundD0007691.xml",
				label: "Fund  D0007691",
				title:"Best Styles Global Equity",

			},
			{
				file: "fundD0007796.xml",
				label: "Fund D0007796",
				title:"Global Small Cap Equity",

			}*/
		]
	}
	
	
]

var languages = ["en","de"];

var properties = 
[
    /*{
        //Slider for numeric value
        type: "slider",
        label: "Significant threshold in bp",
        //Identifier of the field, the id is used in the pattern $id of your cases
        id: "significantThreshold",
        //min value of the slider
        minValue: 0,
        //max value
        maxValue: 30,
        //step
        step:1,
        value:10
    }, */
    
    {
        //Slider for numeric value
        type: "slider",
        label: "Relative performance of the fund in %",
        //Identifier of the field, the id is used in the pattern $id of your cases
        id: "relativePerformance",
        //min value of the slider
        minValue: -4,
        //max value
        maxValue: 4,
        //step
        step:0.01,
        value:-0.59
    },  
    
    {
        //Slider for numeric value
        type: "slider",
        label: "Sector stock selection contribution in %",
        //Identifier of the field, the id is used in the pattern $id of your cases
        id: "selectionContribution",
        xmlTag:"contribution",
        //min value of the slider
        minValue: -4,
        //max value
        maxValue: 4,
        //step
        step:0.01,
        value:-0.22
    }, 
    
    {
        //Slider for numeric value
        type: "slider",
        label: "Sector allocation contribution in %",
        //Identifier of the field, the id is used in the pattern $id of your cases
        id: "allocationContribution",
        xmlTag:"contribution",
        //min value of the slider
        minValue: -4,
        //max value
        maxValue:4,
        //step
        step:0.01,
        value:0.54
    },  

]
$(document).ready(function(){
    
    addCss("../css/main.css");
    
   $(".casesContainer li").click(function(){
      updateValues($(this).index(),$(this).closest(".situation").index()-1);
   });
   $("#buildXML").removeAttr("onclick");
   
   $("#buildXML").click(function(){
        console.log($("input:checked").attr("id"));
         var name=$("input:checked").attr("id").slice(1,-1);
        if($("input:checked").closest(".situation").attr("id") == "November2015") 
        {
            window.open("../cases/f"+name+"_dataNovember.html")
        }
        else
        {
            window.open("../cases/f"+name+"_data.html")
        }
       
        
   });
   
  // $("#slidersignificantThreshold").slider("disable");
   $("#sliderrelativePerformance").slider({change: function(){$("#buildAndLaunch").click();}});
   $("#sliderselectionContribution").slider("disable");
   $("#sliderallocationContribution").slider("disable");
   
   $('a').click(function(e)
{
    // Special stuff to do when this link is clicked...

    // Cancel the default action
    e.preventDefault();
});

})