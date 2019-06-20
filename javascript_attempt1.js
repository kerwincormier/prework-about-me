<head>
    <title>Jiggle Into JavaScript</title>
</head>
<body>

    <p>Press the buttons to move the box!</p>

    <div id="box" style="height:150px; width:150px; background-color:orange; margin:25px"></div>

    <button id="growBtn">Grow</button>
    <button id="blueBtn">Blue</button>
    <button id="fadeBtn">Fade</button>
    <button id="resetBtn">Reset</button>

    <script type="text/javascript">

        document.getElementById("growBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";
        });
        document.getElementById("blueBtn").addEventListener("click", function(){

            document.getElementById("box").style.color = "blue";
        }); 
        document.getElementById("blueBtn").addEventListener("click", function(){
    
            document.getElementById("box").style.opacity ="0.5";
        });     

        document.getElementById("resetBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px" .style.width ="150px" .style.color = "orange";
        });

    </script>
</body>
