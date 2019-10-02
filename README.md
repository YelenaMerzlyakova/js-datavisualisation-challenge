
#  Javascript Challenge : "Data Visualisation"

## Objectives
This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**

## Your mission

You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated as an html / css / Javascript file.

He asks you to make him more *rich*, more *interactive*, more... *sexy* (the use of that specific adjective indicates that before that Johnny certainly worked in advertising, the poor guy).

That's exactly what you're going to do, by adding two **interactive data visualisation graphics** using javascript.  These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project.

#### 1. Inline data (data in the document)
In this html file, you will find two data tables. Thanks to javascript, traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

### 2. Remote data, in real-time, via ajax
There are data sitting at this URL :  [https://canvasjs.com/services/data/datapoints.php](https://canvasjs.com/services/data/datapoints.php)

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (`h1`) of the article.

Don't hesitate to adapt the code provided in this tutorial[Live Updating Charts from JSON API & AJAX](https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/), but adapt it to this third-party library: [chart.js](https://www.chartjs.org/), because this tutorial uses another (not-free) library (canvasJS).

Same: if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.


## How to do that ?

1. Uses a javascript library that makes it easier to do this than in "Vanilla Javascript" (= using javascript without libraries).
If you had never coded in javascript before BeCode, use [chart.js](https://www.chartjs.org/).
If you already had a good knowledge of Javascript before you switched to BeCode, you can directly use the [D3.js - Data-Driven Documents](https://d3js.org/) library, which is more complex but offers many possibilities.
2. Get trained in their use
3. Attack the problem by looking for a good logical path. Break it down into small problems, into progressive steps. Commit as you move forward. First the DOM, access the right place, then retrieve the data, then generate the graph. Something like that:-)
4. A method of thinking: *Reverse-engineering* of your objective: start at the end and go up the thread of dependencies to the starting point. It gives something like this:

> To have a graph, you need data. So I have to get them back.  
> Where is this data ?   
> To have a graph I have to find the right place in the DOM, how can I do that?  
> To get a graph I will use *this* library of *data visualization*. How does it work?  
> ...  


### Constraints
- You can't edit the html file.
- You have the choice of the type of graphics. Considers the most relevant based on the data and what story they can "tell".
- The choice of the javascript library is limited to the 2 libraries offered (there are many others, but these are references and are very popular)

## Evaluation
The evaluation method chosen is a **self-evaluation** based on the following indicators:

#### 1. handling of the DOM:

- [X] I was able to find the right selector to do it.
- [X] I was able to inject the graph in the right place on the page via javascript.
- [X] I was able to retrieve the html data in a format adapted to my javascript code.

### 2. Request ajax:
- [X] I was able to receive the answer from the remote server in json.
- [X] Then, I was able to build a callback function to process this data.

### 3. Use of **third party libraries**:
- [X] I was able to integrate the third-party library into my application.
- [X] I used the documentation provided by the library.
- [X] I was able to generate the 2 inline data graphs.
- [X] I was able to generate the "remote data" graph.

### 4. Problem-solving:

- [X] Syntactic rigor: I was able to translate the processes I imagined into javascript syntax.
- [X] Logical thinking: Through iterations and trial and error, I was able to find a logical path that works to address the issues raised by the client's request. Specifically:
  - [X] I was able to generate the 2 inline data graphs.
	- [X]  I was able to generate the "remote data" graph.
  - [X]  I was able to build a callback function to process remote data (received via ajax).
	- [X]  I was able to make the realtime graph refresh in real time.
	- [X]  I was able to display the detailed data when I hover the mouse.

### 5. Debugging:

  - [X]  I use the console to understand what is happening and compare what I am trying to program with what the machine is doing.

### Result 



### Code





