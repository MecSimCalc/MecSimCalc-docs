"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome","href":"/","docId":"home"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quick Overview","href":"/getting-started/quick-overview","docId":"getting-started/quick-overview"},{"type":"link","label":"Example 1","href":"/getting-started/example-1","docId":"getting-started/example-1"},{"type":"link","label":"Generating Graphics","href":"/getting-started/graphics","docId":"getting-started/graphics"},{"type":"link","label":"Example 2","href":"/getting-started/example-2","docId":"getting-started/example-2"},{"type":"link","label":"Generating Tables","href":"/getting-started/tables","docId":"getting-started/tables"},{"type":"link","label":"Example 3","href":"/getting-started/example-3","docId":"getting-started/example-3"}]},{"type":"category","label":"Inputs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/inputs/overview","docId":"inputs/overview"},{"type":"link","label":"Input Group","href":"/inputs/input-group","docId":"inputs/input-group"},{"type":"link","label":"Table Group","href":"/inputs/table-group","docId":"inputs/table-group"},{"type":"link","label":"Input Types","href":"/inputs/input-types","docId":"inputs/input-types"}]},{"type":"category","label":"Code","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/code/overview","docId":"code/overview"},{"type":"link","label":"Code Output","href":"/code/code-output","docId":"code/code-output"},{"type":"link","label":"Tools","href":"/code/tools","docId":"code/tools"}]},{"type":"category","label":"Output","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/output/overview","docId":"output/overview"},{"type":"link","label":"Latex","href":"/output/latex","docId":"output/latex"},{"type":"link","label":"Conditionals","href":"/output/conditionals","docId":"output/conditionals"},{"type":"link","label":"Images and Graphs","href":"/output/images-and-graphs","docId":"output/images-and-graphs"},{"type":"link","label":"Tables","href":"/output/tables","docId":"output/tables"}]},{"type":"category","label":"Files","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/files/overview","docId":"files/overview"},{"type":"link","label":"Text Files","href":"/files/text-files","docId":"files/text-files"},{"type":"link","label":"Large Files","href":"/files/large-files","docId":"files/large-files"}]},{"type":"category","label":"Self hosting apps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/self-hosting-apps/overview","docId":"self-hosting-apps/overview"},{"type":"link","label":"Localhost","href":"/self-hosting-apps/localhost","docId":"self-hosting-apps/localhost"}]},{"type":"link","label":"Utility Functions","href":"/utility","docId":"utility"}]},"docs":{"code/code-output":{"id":"code/code-output","title":"Code Output","description":"Overview","sidebar":"tutorialSidebar"},"code/overview":{"id":"code/overview","title":"Overview","description":"The Code step is responsible for running calculations on the user inputs with Python code, and then returning the computed values or visual diagrams to be displayed in the outputs. In this step, the **developer** can write, debug, and compare Python code.","sidebar":"tutorialSidebar"},"code/tools":{"id":"code/tools","title":"Tools","description":"The Code step provides the developer**_ with an in-browser code editor equipped with syntax highlighting, intellisense, **Code Compare**, and **Debugging**. The **Code Compare** functionality allows the developer_ to compare the current (draft) version of the code with the published version (if the app is published). Debugging* allows the _developer*_ to run the code with some test inputs to see the output values and to debug runtime errors.","sidebar":"tutorialSidebar"},"files/large-files":{"id":"files/large-files","title":"Working with large files","description":"If you have a very large data file that is used in your Python code, it is recommended that you host this file on an external website and then fetch it when needed, instead of copying and pasting that data directly into your code.","sidebar":"tutorialSidebar"},"files/overview":{"id":"files/overview","title":"Overview","description":"File Input","sidebar":"tutorialSidebar"},"files/text-files":{"id":"files/text-files","title":"Text Files","description":"This app has two inputs input0 and a file input with variable name","sidebar":"tutorialSidebar"},"getting-started/example-1":{"id":"getting-started/example-1","title":"Example 1: Distance Converter App","description":"This tutorial provides instructions to create this web-based Python app_ that converts distance from meters to feet and inches.","sidebar":"tutorialSidebar"},"getting-started/example-2":{"id":"getting-started/example-2","title":"Example 2: Exploring the COS Function","description":"This tutorial provides instructions to create this web-based Python **app* to plot the cos function for particular parameters provided by the user. The _**user* is required to provide the parameters $A$ and $B$ in the equation $y=Acos(Bx)$ along with the limits $a$ and $b$ of the plot.","sidebar":"tutorialSidebar"},"getting-started/example-3":{"id":"getting-started/example-3","title":"Example 3: Generating a Multiplication Table","description":"This tutorial provides two ways to create an output table by either using a utility function or the Pandas library.","sidebar":"tutorialSidebar"},"getting-started/graphics":{"id":"getting-started/graphics","title":"Generating Graphics","description":"The output step is built on the popular Jinja and Nunjucks templating engines, which allows for the embedding of Python variables and for the use of Python-like expressions (eg. for-loops, if-statements).","sidebar":"tutorialSidebar"},"getting-started/quick-overview":{"id":"getting-started/quick-overview","title":"Quick Overview","description":"MecSimCalc is a platform that simplifies the building and sharing of Python apps on the web. In a matter of minutes, you can transform any snippet of Python code to a computational **app** available instantly to the entire world wide web.","sidebar":"tutorialSidebar"},"getting-started/tables":{"id":"getting-started/tables","title":"Generating Tables","description":"MecSimCalc provides a flexible platform allowing the _developer_ to generate tables in a variety of ways:","sidebar":"tutorialSidebar"},"home":{"id":"home","title":"Welcome","description":"Documentation for MecSimCalc","sidebar":"tutorialSidebar"},"inputs/input-group":{"id":"inputs/input-group","title":"Input Group","description":"In order to visually organize the inputs, MecSimCalc platform allows the **developer** to visually group inputs into either an Input Group or a Table Group. An Input Group can be created in the Inputs step by clicking on Add Input Group.","sidebar":"tutorialSidebar"},"inputs/input-types":{"id":"inputs/input-types","title":"Input Types","description":"The following provides a detailed description of each input type and its associated options.","sidebar":"tutorialSidebar"},"inputs/overview":{"id":"inputs/overview","title":"Overview","description":"The Inputs step enables the developer**_ to use a variety of different types of user_ inputs that you would commonly find on a webpage. The values of these user inputs will become available as Python variables in the main function when writing the Code** step.","sidebar":"tutorialSidebar"},"inputs/table-group":{"id":"inputs/table-group","title":"Table Group","description":"Similar to an Input Group, a Table Group allows the **developer** to visually group inputs. A Table Group can be created in the Inputs step by clicking on Add Table Group.","sidebar":"tutorialSidebar"},"output/conditionals":{"id":"output/conditionals","title":"Conditionals","description":"The Outputs editor is built upon Jinja, a templating engine for Python. Jinja operations can easily be identified with having {{ }} or {% %}. To learn more about templating visit the Jinja docs here or the Nunjucks docs here.","sidebar":"tutorialSidebar"},"output/images-and-graphs":{"id":"output/images-and-graphs","title":"Images and Graphs","description":"Importing and Exporting Images","sidebar":"tutorialSidebar"},"output/latex":{"id":"output/latex","title":"Latex","description":"MecSimCalc uses KateX for displaying latex equations within the Rich Text and Output in-browser editors.","sidebar":"tutorialSidebar"},"output/overview":{"id":"output/overview","title":"Overview","description":"The Output step has an in-browser editor that allows the **developer** to easily design a smart output page, which can incorporate HTML elements, images, videos, hyperlinks, formatted text, latex, code blocks and much more. Therefore, the outputs page can be designed just like a word document using the toolbar at the top.","sidebar":"tutorialSidebar"},"output/tables":{"id":"output/tables","title":"Tables","description":"Exporting Tables","sidebar":"tutorialSidebar"},"self-hosting-apps/localhost":{"id":"self-hosting-apps/localhost","title":"Self hosting on localhost","description":"This tutorial will guide you on how to download your apps and run it locally on your own computer at this url//localhost:3000.","sidebar":"tutorialSidebar"},"self-hosting-apps/overview":{"id":"self-hosting-apps/overview","title":"Overview","description":"Self-hosting is the practice of running and maintaining a website or service using a private web server, instead of using a service outside of someone\'s own control. - Wikipedia","sidebar":"tutorialSidebar"},"utility":{"id":"utility","title":"Python Utility Functions","description":"The following provides a list of Python utility functions that appeared throughout these documentations and that the **developer** may find useful for the Code step.","sidebar":"tutorialSidebar"}}}')}}]);