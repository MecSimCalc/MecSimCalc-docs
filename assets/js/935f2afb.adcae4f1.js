"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome","href":"/","docId":"home"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quick Overview","href":"/Getting-Started/Quick-overview","docId":"Getting-Started/Quick-overview"},{"type":"link","label":"Example 1","href":"/Getting-Started/Example1","docId":"Getting-Started/Example1"},{"type":"link","label":"Generating Graphics","href":"/Getting-Started/Graphics","docId":"Getting-Started/Graphics"},{"type":"link","label":"Example 2","href":"/Getting-Started/Example2","docId":"Getting-Started/Example2"},{"type":"link","label":"Generating Tables","href":"/Getting-Started/Tables","docId":"Getting-Started/Tables"},{"type":"link","label":"Example 3","href":"/Getting-Started/Example3","docId":"Getting-Started/Example3"}]},{"type":"category","label":"Inputs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/Inputs/Quick-overview","docId":"Inputs/Quick-overview"},{"type":"link","label":"Input Group","href":"/Inputs/InputGroup","docId":"Inputs/InputGroup"},{"type":"link","label":"Table Group","href":"/Inputs/TableGroup","docId":"Inputs/TableGroup"},{"type":"link","label":"Input Types","href":"/Inputs/Input-Types","docId":"Inputs/Input-Types"}]},{"type":"category","label":"Code","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/Code/Quick-overview","docId":"Code/Quick-overview"},{"type":"link","label":"Code Output","href":"/Code/Code-output","docId":"Code/Code-output"},{"type":"link","label":"Tools","href":"/Code/Tools","docId":"Code/Tools"}]},{"type":"category","label":"Output","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/Output/Overview","docId":"Output/Overview"},{"type":"link","label":"Latex","href":"/Output/Latex","docId":"Output/Latex"},{"type":"link","label":"Conditionals","href":"/Output/Conditionals","docId":"Output/Conditionals"}]},{"type":"category","label":"Working with Objects","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/Objects/Overview","docId":"Objects/Overview"},{"type":"link","label":"Files","href":"/Objects/files","docId":"Objects/files"},{"type":"link","label":"Text Files","href":"/Objects/TextFiles","docId":"Objects/TextFiles"},{"type":"link","label":"Images and Graphs","href":"/Objects/images","docId":"Objects/images"},{"type":"link","label":"CSV and Tables","href":"/Objects/tables","docId":"Objects/tables"},{"type":"link","label":"Utility Functions","href":"/Objects/utility","docId":"Objects/utility"}]},{"type":"category","label":"Self hosting apps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Localhost","href":"/Self-Hosting-Apps/Localhost","docId":"Self-Hosting-Apps/Localhost"}]}]},"docs":{"Code/Code-output":{"id":"Code/Code-output","title":"Code Output","description":"Overview","sidebar":"tutorialSidebar"},"Code/Quick-overview":{"id":"Code/Quick-overview","title":"Code","description":"Quick Overview","sidebar":"tutorialSidebar"},"Code/Tools":{"id":"Code/Tools","title":"Tools","description":"The MecsimCalc platform provides the developer**_ with an in-browser code editor equipped with syntax highlighting, intellisense, **Code Compare**, and **Debugging**. The **Code Compare** functionality allows the developer_ to compare the current (draft) version of the code with the published version. Debugging* allows the _developer*_ to run the code with some test inputs to see the output values and to debug runtime errors.","sidebar":"tutorialSidebar"},"Getting-Started/Example1":{"id":"Getting-Started/Example1","title":"Example 1: Distance Converter App","description":"This tutorial provides instructions to create this web-based python app_ to convert distance from meters to feet and inches. First, click on create a new blank _app_.","sidebar":"tutorialSidebar"},"Getting-Started/Example2":{"id":"Getting-Started/Example2","title":"Example 2: Exploring the COS Function","description":"This tutorial provides instructions to create this web-based python **app* to plot the cos function for particular parameters provided by the user. The _**user* is required to provide the parameters $A$ and $B$ in the equation $y=Acos(Bx)$ along with the limits $a$ and $b$ of the plot. Here are the steps to create the **app**.","sidebar":"tutorialSidebar"},"Getting-Started/Example3":{"id":"Getting-Started/Example3","title":"Example 3: Generating a Multiplication Table","description":"This tutorial provides instructions to create an output table either using a utility function or the Pandas library. The first version appears in this link, while the second appears in this link.","sidebar":"tutorialSidebar"},"Getting-Started/Graphics":{"id":"Getting-Started/Graphics","title":"Graphics","description":"MecSimCalc platform is built over Jinja allowing embedding of many python elements into an HTML file. If a **developer** wishes to display graphics such as those generated using matplotlib, they can use a utility function plt_show provided in the following snippet of code, that exports the matplotlib object into an image embeddable into the output page.","sidebar":"tutorialSidebar"},"Getting-Started/Quick-overview":{"id":"Getting-Started/Quick-overview","title":"Quick Overview","description":"MecSimCalc is a platform that enables building and sharing computational tools or apps**_ using Python on the web. To use **MecSimCalc**, one does not require prior knowledge of HTML, CSS, or Javascript. In a matter of minutes, one can transform any snippet of Python code to a computational app**_ available to the entire world wide web.","sidebar":"tutorialSidebar"},"Getting-Started/Tables":{"id":"Getting-Started/Tables","title":"Tables","description":"MecSimCalc provides a flexible platform allowing the developer_** to generate tables in a variety of ways. First, the output window enables html tags; a _**developer familiar with html tables can use this functionality to design a table in the output page. Alternatively, a developer_ can choose to generate the table using a utility routine in the code step that generates the required html. For example, the following utility function buildhtmltable generates the required html table based on an input array of the table columns and an array of the column headers:","sidebar":"tutorialSidebar"},"home":{"id":"home","title":"Welcome","description":"Documentation for MecSimCalc","sidebar":"tutorialSidebar"},"Inputs/Input-Types":{"id":"Inputs/Input-Types","title":"Input Types","description":"The following provides a detailed description of each input type and its associated options.","sidebar":"tutorialSidebar"},"Inputs/InputGroup":{"id":"Inputs/InputGroup","title":"Input Group","description":"In order to visually organize the inputs, MecsimCalc platform allows the **developer** to visually group inputs into either an Input Group or a Table Group. An Input Group can be created in the Inputs step by clicking on Add Input Group.","sidebar":"tutorialSidebar"},"Inputs/Quick-overview":{"id":"Inputs/Quick-overview","title":"Overview","description":"The Inputs step enables the developer**_ to use a variety of different types of user_ inputs that become available as inputs for the main function in the Code* step. Any combination of inputs can be arranged within either an Input Group or an Table Group which the _developer*_ has to create before adding inputs. An input cell can be resized and moved within an Input Group window which allows the maximum of 10 inputs on the same row. A single input can occupy the whole or part of the width of the Input Group.","sidebar":"tutorialSidebar"},"Inputs/TableGroup":{"id":"Inputs/TableGroup","title":"Table Group","description":"Similar to an Input Group, a Table Group allows the **developer** to visually group inputs. A Table Group can be created in the Inputs step by clicking on Add Table Group.","sidebar":"tutorialSidebar"},"Objects/files":{"id":"Objects/files","title":"Files","description":"File Input","sidebar":"tutorialSidebar"},"Objects/images":{"id":"Objects/images","title":"Images, Graphs, and Image Files","description":"Importing and Exporting Images","sidebar":"tutorialSidebar"},"Objects/Overview":{"id":"Objects/Overview","title":"Overview","description":"MecsimCalc platform enables the **developer** to import and export images and files. This section covers the details of working with different objects. The Files section provides the general methodology while the remaining sections provide examples of importing and exporting text and images, working with CSV files, and exporting tables and HTML objects. The final section provides a list of all the utility functions used throughout the documentation.","sidebar":"tutorialSidebar"},"Objects/tables":{"id":"Objects/tables","title":"CSV Files and Tables","description":"Exporting Tables","sidebar":"tutorialSidebar"},"Objects/TextFiles":{"id":"Objects/TextFiles","title":"Text Files","description":"The text files app_ is used here for demonstration. Two inputs are prepared in the inputs page; a text field with variable name input1. The Accept option of the FileInput is set to .txt to limit the uploaded files to those with .txt extension. The inputs page is shown in the figure below:","sidebar":"tutorialSidebar"},"Objects/utility":{"id":"Objects/utility","title":"Utility Functions","description":"The following provide a list of utility functions that appeared throughout these documentations. These functions can be used by the **developer** to work with different objects.","sidebar":"tutorialSidebar"},"Output/Conditionals":{"id":"Output/Conditionals","title":"Conditionals","description":"MecsimCalc platform is built upon Jinja; a full-featured template engine for python. Jinja operations, including if and for statements, can be performed within curly brackets {}. Output variables and their operations are inserted using two sets of curly brackets {{}} while conditionals should be typed within {% %}. Conditionals can be typed in the editor or inserted using the icons.","sidebar":"tutorialSidebar"},"Output/Latex":{"id":"Output/Latex","title":"Latex","description":"MecsimCalc uses KateX for displaying equations in latex format within the Rich Text and Output in-browser editors. A latex formula can be inserted using the following form:","sidebar":"tutorialSidebar"},"Output/Overview":{"id":"Output/Overview","title":"Output","description":"Quick Overview","sidebar":"tutorialSidebar"},"Self-Hosting-Apps/Localhost":{"id":"Self-Hosting-Apps/Localhost","title":"Self hosting on localhost","description":"MecSimCalc allows you to download your app and run it locally on your own computer or on your own server.","sidebar":"tutorialSidebar"}}}')}}]);