/*=========================================
  AI Discovery Lab
  Day 26 - 30 Days 30 AI Websites Challenge
=========================================*/

const fields = document.querySelectorAll(".field");
const discoverBtn = document.getElementById("discoverBtn");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const consoleBox = document.getElementById("console");
const statusText = document.getElementById("status");
const timeline = document.getElementById("timelineList");
const discoveries = document.getElementById("discoveries");
const ideas = document.getElementById("ideas");
const accuracy = document.getElementById("accuracy");
const themeBtn = document.getElementById("themeBtn");

let selectedField = "Artificial Intelligence";
let discoveryCount = 0;
let innovationIndex = 120;

const discoveryDatabase = {

"Artificial Intelligence":[

{
title:"Autonomous AI Collaboration Network",
description:"Multiple AI agents automatically collaborate, distribute tasks, verify outputs, and continuously improve solutions with almost no human intervention."
},

{
title:"Self-Evolving Reasoning Engine",
description:"The AI develops new reasoning strategies by learning from previous discoveries and adapting to increasingly complex research problems."
},

{
title:"Ethical Decision Intelligence",
description:"A simulated framework that evaluates fairness, transparency, and responsible AI behavior before every intelligent decision."
}

],

"Machine Learning":[

{
title:"Adaptive Learning Pipeline",
description:"The model continuously retrains itself using simulated feedback while preventing catastrophic forgetting."
},

{
title:"Few-Shot Learning Accelerator",
description:"An ML system capable of understanding new tasks from only a handful of training examples."
},

{
title:"Explainable Prediction Engine",
description:"Every prediction includes a human-readable explanation showing why the model reached that conclusion."
}

],

"Data Science":[

{
title:"Global Data Insight Generator",
description:"Millions of records are automatically explored to reveal hidden trends, anomalies, and future opportunities."
},

{
title:"Predictive Analytics Studio",
description:"Historical datasets are transformed into accurate forecasts using intelligent statistical modeling."
},

{
title:"Smart Data Cleaning AI",
description:"Missing values, duplicates, and inconsistencies are automatically detected and corrected."
}

],

"Climate AI":[

{
title:"Climate Risk Predictor",
description:"AI simulations estimate future environmental risks using weather, satellite, and ecosystem data."
},

{
title:"Carbon Optimization System",
description:"An intelligent model recommends strategies for reducing emissions across cities and industries."
},

{
title:"Natural Disaster Early Analyzer",
description:"Machine learning identifies patterns that may indicate floods, droughts, or extreme weather events."
}

],

"Healthcare":[

{
title:"AI Disease Detection Assistant",
description:"Medical images and patient symptoms are analyzed to provide early diagnostic recommendations."
},

{
title:"Drug Discovery Simulator",
description:"Potential medicines are virtually tested before laboratory experimentation."
},

{
title:"Personalized Treatment Planner",
description:"AI creates customized healthcare strategies based on simulated patient characteristics."
}

],

"Space Tech":[

{
title:"Autonomous Mars Research Bot",
description:"Robotic AI explores unknown environments while making scientific decisions independently."
},

{
title:"Deep Space Navigation AI",
description:"Intelligent algorithms calculate safe and efficient spacecraft trajectories."
},

{
title:"Asteroid Resource Analyzer",
description:"AI estimates mineral composition and economic value of simulated asteroids."
}

],

"Cyber Security":[

{
title:"Real-Time Threat Hunter",
description:"Network traffic is continuously monitored to identify suspicious cyber attacks instantly."
},

{
title:"Zero-Day Defense AI",
description:"Unknown software vulnerabilities are predicted before attackers can exploit them."
},

{
title:"Behavioral Security Monitor",
description:"AI recognizes unusual user activity and responds before security breaches occur."
}

],

"Quantum AI":[

{
title:"Quantum Optimization Engine",
description:"Quantum-inspired algorithms solve extremely complex optimization challenges faster than traditional systems."
},

{
title:"Quantum Pattern Discovery",
description:"Hidden relationships inside massive datasets become visible using quantum simulation techniques."
},

{
title:"Hybrid Quantum Intelligence",
description:"Classical AI and quantum computing collaborate to improve future scientific research."
}

]

};

/* ------------------------------ */

fields.forEach(button=>{

button.addEventListener("click",()=>{

fields.forEach(item=>item.classList.remove("active"));

button.classList.add("active");

selectedField = button.textContent.trim().replace(/^[^\w]+/,"");

});

});

/* ------------------------------ */

discoverBtn.addEventListener("click",generateDiscovery);

/* ------------------------------ */

function generateDiscovery(){

statusText.textContent="RUNNING";

appendConsole("------------------------------------------------");
appendConsole("Initializing AI Discovery Protocol...");
appendConsole("Selected Field : " + selectedField);
appendConsole("Scanning Research Database...");
appendConsole("Generating Intelligent Simulation...");

const list = discoveryDatabase[selectedField];

const item = list[Math.floor(Math.random()*list.length)];

setTimeout(()=>{

resultTitle.textContent=item.title;

resultDescription.textContent=item.description;

appendConsole("Discovery Complete.");
appendConsole("Result : " + item.title);
appendConsole("Confidence Score : " + random(92,99) + "%");

statusText.textContent="COMPLETED";

discoveryCount++;
innovationIndex+=random(2,8);

discoveries.textContent=discoveryCount;
ideas.textContent=innovationIndex;
accuracy.textContent=random(95,99)+"%";

addTimeline(item.title);

},1200);

}

/* ------------------------------ */

function appendConsole(text){

const p=document.createElement("p");

p.textContent="> "+text;

consoleBox.appendChild(p);

consoleBox.scrollTop=consoleBox.scrollHeight;

}

/* ------------------------------ */

function addTimeline(title){

const div=document.createElement("div");

div.className="timeline-item";

const time=new Date().toLocaleTimeString();

div.textContent=time+" • "+title;

timeline.prepend(div);

}

/* ------------------------------ */

function random(min,max){

return Math.floor(Math.random()*(max-min+1))+min;

}

/* ------------------------------ */

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("light")){

icon.className="fa-solid fa-sun";

}else{

icon.className="fa-solid fa-moon";

}

});

/* ------------------------------ */

appendConsole("AI Core Loaded Successfully.");
appendConsole("8 Research Fields Available.");
appendConsole("Ready for Intelligent Discovery.");