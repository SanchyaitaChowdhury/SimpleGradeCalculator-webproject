<!DOCTYPE html>
<html>
<head>
    <title>Web Development Project on Student</title>
    <style>
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #006600;
    font-size: 12px;
}

.container {
    flex: 0 1 700px;
    margin: auto;
    padding: 10px;
}

.screen-body-item {
    flex: 1;
    padding: 50px;
}

input {
    margin: 10px 10px 10px;
}

.showdata {
    color: black;
    font-size: 1.2rem;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
</head>
<body>
    <!-- main html  -->
    <div class="container">
        <h1>Student Grade Calculator</h1>
        <div class="screen-body-item">
            <div class="app">
                <div class="form-group">
                    <!-- option for taking the input -->
                    <input type="text" 
                           class="form-control" 
                           placeholder="CHEMISTRY" 
                           id="chemistry" />
                </div>
                <div class="form-group">
                    <input type="text" 
                           class="form-control" 
                           placeholder="HINDI" id="hindi" />
                </div>
                <div class="form-group">
                    <input type="text" 
                           class="form-control" 
                           placeholder="MATHS" id="maths" />
                </div>
                <div class="form-group">
                    <input type="text" 
                           class="form-control" 
                           placeholder="PHYSICS" id="phy" />
                </div>
                <div>
                    <input type="button" 
                           value="show Percentage" 
                           class="form-button" 
                           onclick="calculate()" />
                </div>
            </div>
        </div>
        <!-- for showing the result-->
        <div class="form-group showdata">
            <p id="showdata"></p>
        </div>
    </div>
    <!--adding external javascript file-->
    <script src="script.js"></script>
</body>
</html>