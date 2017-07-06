/* CONFIGURE THE FOLLOWING */
var project =
{
	//project title
	title: "The Yseop injector",
	//set to true for a WebService application or false for a dialog application
	modeDirect: true,
	//variable usecase
	usecase: "Prj:_usecase",
	//set to true to hide available XSL transformations
	hideXSLTransformationChoice:true,
	//available XSL transformations
	transformations: [ "html" ], 
	//default XSL transformation
   	defaultTransformation: "html",
	//3 available values , self, tab or area. When resultTarget is set to "area", the result is displayed in the same page as the parameters
	resultTarget: "area"
}

var caseGroups =
[
	{
		//a situation
		title:"Situation 1",
		folded: false,
		//cases linked to this situation
		cases:
		[
			{
				//file containing the case to be loaded
				file: "case1.html",
				//label of the case
				label: "Jean-Michel Michu",
				//if defaultValue is set to true, this case is selected by default
				defaultValue: true
			},
			{
				file: "case2.html",
				label: "case2"
			}
		]
	},
	{
		title:"Situation 2",
		cases:
		[
			{
				file: "case3.html",
				label: "case3"
			},
			{
				file: "case4.html",
				label: "case4"
			}
		]
	}
	
]

var languages = ["en","fr","es","de"];

var properties =
[
	{
		//radio button with 2 values
		"type": "radio",
		"legend": "Radio buttons",
		//identifier of the field,the id is used in the pattern $id of your cases
		"id": "test",
		"typeData": "enum",
		"choices":
		[
			{
					value: "TYPE_AVION_A_300",
					label: "A 300",
					defaultValue: true
					
			},
			{
					value: "radio2",
					label: "radio 2",
			}
		],
		"required":true
	},
	{
		//checkbox for boolean field
		type: "checkbox",
		legend: "Checkbox",
		label: "Show statistics",	
		//identifier of the field,the id is used in the pattern $id of your cases		
		id: "checkbox1",
		defaultValue: true
	},

	{
		//slider for numeric value
		type: "slider",
		legend: "Sliders",
		label: "Slider 1: ",
		//identifier of the field,the id is used in the pattern $id of your cases
		id: "slider1",
		//min value of the slider
		minValue: 0,
		//max value
		maxValue: 100,
		//step
		step:1,
	},

	{
		//select box 
		type: "select",
		//identifier of the field,the id is used in the pattern $id of your cases
		id: "ranking",
		label: "Ranking",
		legend: "Select fields",
		
		choices:
		//choices for numeric values
		[10,20,30],
		
		/* //choices for non numeric values
		{prem:"first",
		sec:"second"},*/
		"required":true
	},
	{
		//spinner for numeric values
		type: "spinner",
		legend: "Spinners",
		label: "Spinner 1: ",
		//identifier of the field,the id is used in the pattern $id of your cases
		id: "spinner1"
	},
	{
		//checkboxes, useful for multivalued fields
		type: "checkbox",
		legend: "Multivalued checkbox",
		//identifier of the field,the id is used in the pattern $id of your cases
		id: "test2",
		typeData: "enum",
		choices:
		[
			{

					label: "checkbox 1",
					value: "chk1",
					defaultValue: true
					
			},
			{
					label: "checkbox 2",
					value: "chk2",
			}
		],
	},
]
