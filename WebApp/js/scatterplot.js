//Citation: http://bl.ocks.org/peterssonjonas/4a0e7cb8d23231243e0e

// Read the data
d3.csv("data/OpenFF_Custom_withlevels_Final_25Categories.csv", function(error, data) {

    // Throw error if file not found/can't read
    if (error) throw error;

    // Convert all the numeric values
    data.forEach(function(d) {
      d.Key = +d.Key;
      d.Code = +d.Code;
      d.Product_Name = d.Product_Name;
      d.Custom_Category = d.Custom_Category;
      d.C_Level1 = d.C_Level1;
      d.C_Level2 = d.C_Level2;
      d.C_Level3 = d.C_Level3;
      d.C_Level4 = d.C_Level4;
      d.C_Level5 = d.C_Level5;
      d.Brands = d.Brands;
      d.Grade_Fr = d.Grade_Fr;
      d.Fat_100G = +d.Fat_100G;
      d.Saturated_Fat_100G = +d.Saturated_Fat_100G;
      d.Cholesterol_100G = +d.Cholesterol_100G;
      d.Carbohydrates_100G = +d.Carbohydrates_100G;
      d.Sugars_100G = +d.Sugars_100G;
      d.Fiber_100G = +d.Fiber_100G;
      d.Proteins_100G = +d.Proteins_100G;
      d.Sodium_100G = +d.Sodium_100G;
      d.Vitamin_A_100G = +d.Vitamin_A_100G;
      d.Vitamin_C_100G = +d.Vitamin_C_100G;
      d.Calcium_100G = +d.Calcium_100G;
      d.Iron_100G = +d.Iron_100G;
      d.Energy_100G = +d.Energy_100G;
      d.Fat_100G_0dot3_3 = +d.Fat_100G_0dot3_3;
      d.Fat_100G_0dot3_5 = +d.Fat_100G_0dot3_5;
      d.Fat_100G_0dot5_3 = +d.Fat_100G_0dot5_3;
      d.Fat_100G_0dot5_5 = +d.Fat_100G_0dot5_5;
      d.Fat_100G_0dot7_3 = +d.Fat_100G_0dot7_3;
      d.Fat_100G_0dot7_5 = +d.Fat_100G_0dot7_5;
      d.Saturated_Fat_100G_0dot3_3 = +d.Saturated_Fat_100G_0dot3_3;
      d.Saturated_Fat_100G_0dot3_5 = +d.Saturated_Fat_100G_0dot3_5;
      d.Saturated_Fat_100G_0dot5_3 = +d.Saturated_Fat_100G_0dot5_3;
      d.Saturated_Fat_100G_0dot5_5 = +d.Saturated_Fat_100G_0dot5_5;
      d.Saturated_Fat_100G_0dot7_3 = +d.Saturated_Fat_100G_0dot7_3;
      d.Saturated_Fat_100G_0dot7_5 = +d.Saturated_Fat_100G_0dot7_5;
      d.Cholesterol_100G_0dot3_3 = +d.Cholesterol_100G_0dot3_3;
      d.Cholesterol_100G_0dot3_5 = +d.Cholesterol_100G_0dot3_5;
      d.Cholesterol_100G_0dot5_3 = +d.Cholesterol_100G_0dot5_3;
      d.Cholesterol_100G_0dot5_5 = +d.Cholesterol_100G_0dot5_5;
      d.Cholesterol_100G_0dot7_3 = +d.Cholesterol_100G_0dot7_3;
      d.Cholesterol_100G_0dot7_5 = +d.Cholesterol_100G_0dot7_5;
      d.Carbohydrates_100G_0dot3_3 = +d.Carbohydrates_100G_0dot3_3;
      d.Carbohydrates_100G_0dot3_5 = +d.Carbohydrates_100G_0dot3_5;
      d.Carbohydrates_100G_0dot5_3 = +d.Carbohydrates_100G_0dot5_3;
      d.Carbohydrates_100G_0dot5_5 = +d.Carbohydrates_100G_0dot5_5;
      d.Carbohydrates_100G_0dot7_3 = +d.Carbohydrates_100G_0dot7_3;
      d.Carbohydrates_100G_0dot7_5 = +d.Carbohydrates_100G_0dot7_5;
      d.Sugars_100G_0dot3_3 = +d.Sugars_100G_0dot3_3;
      d.Sugars_100G_0dot3_5 = +d.Sugars_100G_0dot3_5;
      d.Sugars_100G_0dot5_3 = +d.Sugars_100G_0dot5_3;
      d.Sugars_100G_0dot5_5 = +d.Sugars_100G_0dot5_5;
      d.Sugars_100G_0dot7_3 = +d.Sugars_100G_0dot7_3;
      d.Sugars_100G_0dot7_5 = +d.Sugars_100G_0dot7_5;
      d.Fiber_100G_0dot3_3 = +d.Fiber_100G_0dot3_3;
      d.Fiber_100G_0dot3_5 = +d.Fiber_100G_0dot3_5;
      d.Fiber_100G_0dot5_3 = +d.Fiber_100G_0dot5_3;
      d.Fiber_100G_0dot5_5 = +d.Fiber_100G_0dot5_5;
      d.Fiber_100G_0dot7_3 = +d.Fiber_100G_0dot7_3;
      d.Fiber_100G_0dot7_5 = +d.Fiber_100G_0dot7_5;
      d.Proteins_100G_0dot3_3 = +d.Proteins_100G_0dot3_3;
      d.Proteins_100G_0dot3_5 = +d.Proteins_100G_0dot3_5;
      d.Proteins_100G_0dot5_3 = +d.Proteins_100G_0dot5_3;
      d.Proteins_100G_0dot5_5 = +d.Proteins_100G_0dot5_5;
      d.Proteins_100G_0dot7_3 = +d.Proteins_100G_0dot7_3;
      d.Proteins_100G_0dot7_5 = +d.Proteins_100G_0dot7_5;
      d.Sodium_100G_0dot3_3 = +d.Sodium_100G_0dot3_3;
      d.Sodium_100G_0dot3_5 = +d.Sodium_100G_0dot3_5;
      d.Sodium_100G_0dot5_3 = +d.Sodium_100G_0dot5_3;
      d.Sodium_100G_0dot5_5 = +d.Sodium_100G_0dot5_5;
      d.Sodium_100G_0dot7_3 = +d.Sodium_100G_0dot7_3;
      d.Sodium_100G_0dot7_5 = +d.Sodium_100G_0dot7_5;
      d.Vitamin_A_100G_0dot3_3 = +d.Vitamin_A_100G_0dot3_3;
      d.Vitamin_A_100G_0dot3_5 = +d.Vitamin_A_100G_0dot3_5;
      d.Vitamin_A_100G_0dot5_3 = +d.Vitamin_A_100G_0dot5_3;
      d.Vitamin_A_100G_0dot5_5 = +d.Vitamin_A_100G_0dot5_5;
      d.Vitamin_A_100G_0dot7_3 = +d.Vitamin_A_100G_0dot7_3;
      d.Vitamin_A_100G_0dot7_5 = +d.Vitamin_A_100G_0dot7_5;
      d.Vitamin_C_100G_0dot3_3 = +d.Vitamin_C_100G_0dot3_3;
      d.Vitamin_C_100G_0dot3_5 = +d.Vitamin_C_100G_0dot3_5;
      d.Vitamin_C_100G_0dot5_3 = +d.Vitamin_C_100G_0dot5_3;
      d.Vitamin_C_100G_0dot5_5 = +d.Vitamin_C_100G_0dot5_5;
      d.Vitamin_C_100G_0dot7_3 = +d.Vitamin_C_100G_0dot7_3;
      d.Vitamin_C_100G_0dot7_5 = +d.Vitamin_C_100G_0dot7_5;
      d.Calcium_100G_0dot3_3 = +d.Calcium_100G_0dot3_3;
      d.Calcium_100G_0dot3_5 = +d.Calcium_100G_0dot3_5;
      d.Calcium_100G_0dot5_3 = +d.Calcium_100G_0dot5_3;
      d.Calcium_100G_0dot5_5 = +d.Calcium_100G_0dot5_5;
      d.Calcium_100G_0dot7_3 = +d.Calcium_100G_0dot7_3;
      d.Calcium_100G_0dot7_5 = +d.Calcium_100G_0dot7_5;
      d.Iron_100G_0dot3_3 = +d.Iron_100G_0dot3_3;
      d.Iron_100G_0dot3_5 = +d.Iron_100G_0dot3_5;
      d.Iron_100G_0dot5_3 = +d.Iron_100G_0dot5_3;
      d.Iron_100G_0dot5_5 = +d.Iron_100G_0dot5_5;
      d.Iron_100G_0dot7_3 = +d.Iron_100G_0dot7_3;
      d.Iron_100G_0dot7_5 = +d.Iron_100G_0dot7_5;
      d.Energy_100G_0dot3_3 = +d.Energy_100G_0dot3_3;
      d.Energy_100G_0dot3_5 = +d.Energy_100G_0dot3_5;
      d.Energy_100G_0dot5_3 = +d.Energy_100G_0dot5_3;
      d.Energy_100G_0dot5_5 = +d.Energy_100G_0dot5_5;
      d.Energy_100G_0dot7_3 = +d.Energy_100G_0dot7_3;
      d.Energy_100G_0dot7_5 = +d.Energy_100G_0dot7_5;
    });

    // Get the unique product categories in the dataset
    var Categories = d3.set(data.map(function(d) { return d.Custom_Category; })).values();

    // Create category dropdown menu and load categories
    var categoryMenu = d3.select("#categoryDropdownDiv");

   /* categoryMenu.append("select")
      .attr("id", "categoryMenu")
      .selectAll("option")
    .data(Categories)
      .enter()
      .append("option")
      .attr("value", function(d, i) { return d; })
      .text(function(d) { return d; });*/

    // Assign the size of the visualization
    var margin = { top: 50, right: 500, bottom: 50, left: 50 },
        outerWidth = 1300,
        outerHeight = 500,
        width = outerWidth - margin.left - margin.right,
        height = outerHeight - margin.top - margin.bottom;

    // Create the SVG canvas
    var svg = d3.select("#scatter")
      .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", "0 0 " + outerWidth +  " " + outerHeight )
        .attr("preserveAspectRatio", "xMinYMin meet")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create the x axis
    var x = d3.scale.linear()
        .range([0, width]).nice();

    // Create the y axis
    var y = d3.scale.linear()
        .range([height, 0]).nice();

    // Create the scale for Cluster colors
    var color = d3.scale.linear();
    var gradeColor = d3.scale.ordinal();

    // Assign the colors
    var colors = ["#e31a1c","#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928",'#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'];
    // var colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#000000'];
    var gColors = ["#1a9641", "#a6d96a", "#fed976", "#fdae61", "#d7191c", "#bababa"];
    var grades = ["A", "B", "C", "D", "E", "U"];
    gradeColor.domain(grades).range(gColors);

    // Assign the default values
    var selectedCategory = $('#categoryDropdown').val();
    var selectedNutrient = "Fat_100G";
    var selectedEpsilon = 0.3;
    var selectedSamples = 3;

    // Set the X and Y axis labels
    var yCat = selectedNutrient,
        xCat = "# Products";

    // Main function which filters the data based on the user selection and draws the visual
    function filterData() {

      // Assigned the selected Nutrient as yLabel
      yCat = selectedNutrient;

      // Find the Anomoly output column to read based on user selection
      clusterOutputCol = yCat + "_" + String(selectedEpsilon).replace(".", "dot") + "_" + String(selectedSamples);
      // console.log('Filter', selectedCategory, selectedNutrient, yCat, clusterOutputCol);

      // Filter the dataset based on user's selection
      displayData = data.filter(function(d) {return (d.Custom_Category == selectedCategory && d[clusterOutputCol] !== -99)});
      // rowNum = displayData.map(function(d, i) { return i});
      // console.log(displayData[0]);

      // Find the number of clusters and assign the colors for them make sure Anomalies gets RED always
      clusterRange = d3.extent(displayData, function(d, i) { return d[clusterOutputCol]; });
      clusters = d3.range(-1, clusterRange[1]+1);
      color.domain(clusters).range(colors);

      // Find the min, max values for X and Y axis for the selected values
      xMax = d3.max(displayData, function(d, i) { return i; }) * 1.05,
      xMin = d3.min(displayData, function(d, i) { return i; }),
      xMin = xMin > 0 ? 0 : xMin,
      yMax = d3.max(displayData, function(d, i) { return d[yCat]; }) * 1.05,
      yMin = d3.min(displayData, function(d, i) { return d[yCat]; }),
      yMin = yMin > 0 ? 0 : yMin;

      // Set the axis domain
      x.domain([xMin, xMax]);
      y.domain([yMin, yMax]);

      // Scatterplot Data Join
      var dots = objects.selectAll(".dot")
          .data(displayData)

      // ENTER
      dots.enter().append("circle")
          .classed("dot", true)
          .on("click", updateNutriLabel)
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide);

      // UPDATE
      dots.attr("r", function(d) { return d[clusterOutputCol] == -1 ? 7 : 4; })
          .style("fill", function(d) { return color(d[clusterOutputCol]); });

      // Smooth transition from one view to another
      dots.transition().duration(1000).attr("transform", transform);

      // EXIT
      dots.exit().remove();

      // Remove the legends
      svg.selectAll(".legend").remove();

      // Draw the legends based on number of clusters
      var legend = svg.selectAll(".legend")
          .data(color.domain())
        .enter().append("g")
          .classed("legend", true);

      legend.append("rect")
          .attr("x", width + 10)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

      legend.append("text")
          .attr("x", width + 35)
          .attr("y", 9)
          .attr("dy", ".35em")
          .text(function(d) { return d; })
          .style("text-anchor", "start")
          .text(function(d) { return d == -1 ? "Outliers" : "Cluster: " + d;} );

      legend.transition().duration(1000)
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

        zoomBeh.x(x.domain([xMin, xMax])).y(y.domain([yMin, yMax]));

    }

    // XAxis
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickSize(-height);

    // YAxis
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickSize(-width);

    // Tooltip text product and nutrient info
    tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-10, 0])
        .html(function(d, i) {
          return "Category: " + d.Custom_Category + "<br>" + "Product: " + d.Product_Name + "<br>" + yCat + ": " + d[yCat];
        });

    // Zoom functionality
    zoomBeh = d3.behavior.zoom()
        .x(x)
        .y(y)
        .scaleExtent([0, 500])
        .on("zoom", zoom);

    // draw gridlines
    svg.append("rect")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .append("text")
        .classed("label", true)
        .attr("x", width)
        .attr("y", margin.bottom - 25)
        .style("text-anchor", "end")
        .text(xCat);

    svg.append("g")
        .classed("y axis", true)
        .call(yAxis)
        .append("text")
        .classed("label", true)
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 5)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yCat);

    objects = svg.append("svg")
        .classed("objects", true)
        .attr("width", width)
        .attr("height", height);

    objects.append("svg:line")
        .classed("axisLine hAxisLine", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", 0)
        .attr("transform", "translate(0," + height + ")");

    objects.append("svg:line")
        .classed("axisLine vAxisLine", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", height);

    // Call filterData for the first time with Default values
    filterData();

    // Call axis, zoom and tootltip functions
    svg.select(".x.axis").call(xAxis);
    svg.select(".y.axis").call(yAxis);
    svg.call(zoomBeh);
    svg.call(tip);

    // Draw the nutrition Facts label
    // Outer Border
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 125)
        .attr("y", -10)
        .attr("width", 310)
        .attr("height", 430)
        .style("fill", "transparent")
        .style("stroke-opacity", 0.5)
        .style("stroke", "black")
        .style("stroke-width", 8);

    // Nutrition Facts Header
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 155)
        .attr("y", 32)
        .style("text-anchor", "start")
        .style("font-size", "38px")
        .style("stroke", "black")
        .style("fill", "grey")
        .style("stroke-width", 2)
        .text("Nutrition Facts");

    // Border under Header
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 132)
        .attr("y", 45)
        .attr("width", 295)
        .attr("height", 8)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Box to hold the Grade
    svg.append("rect")
        .attr("class", "nutriGradeBox nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 60)
        .attr("width", 290)
        .attr("height", 45)
        .style("fill", gradeColor("U"))
        .style("stroke", "black")
        .style("stroke-width", 2);

    // Grade Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 210)
        .attr("y", 95)
        .style("text-anchor", "start")
        .style("font-size", "36px")
        .style("stroke", "white")
        .style("fill", "white")
        .text("Grade ");

    // Grade Value
    svg.append("text")
        .classed("nutriGradeValue nutriLabelElement", true)
        .attr("x", width + 330)
        .attr("y", 95)
        .style("text-anchor", "start")
        .style("font-size", "36px")
        .style("stroke", "white")
        .style("fill", "white")
        .text("U");

    // Calories Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 130)
        .style("text-anchor", "start")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("Calories / Energy ");

    // Calories Value
    svg.append("text")
        .classed("nutriCalValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 132)
        .style("text-anchor", "end")
        .style("font-size", "26px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("000");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 138)
        .attr("width", 290)
        .attr("height", 5)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Total Fat Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 163)
        .style("text-anchor", "start")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("Total Fat ");

    // Total Fat Value
    svg.append("text")
        .classed("nutriFatValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 163)
        .style("text-anchor", "end")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0g");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 170)
        .attr("width", 290)
        .attr("height", 3)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Saturated Fat Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 192)
        .style("text-anchor", "start")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Saturated Fat ");

    // Total Saturated Fat Value
    svg.append("text")
        .classed("nutriSatFatValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 192)
        .style("text-anchor", "end")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0g");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 200)
        .attr("width", 290)
        .attr("height", 1)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Cholesterol Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 222)
        .style("text-anchor", "start")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Cholesterol ");

    // Total Cholesterol Value
    svg.append("text")
        .classed("nutriCholesterolValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 222)
        .style("text-anchor", "end")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0mg");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 230)
        .attr("width", 290)
        .attr("height", 1)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Sodium Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 252)
        .style("text-anchor", "start")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Sodium ");

    // Total Sodium Value
    svg.append("text")
        .classed("nutriSodiumValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 252)
        .style("text-anchor", "end")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0mg");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 260)
        .attr("width", 290)
        .attr("height", 1)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Total Carbohydrates Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 282)
        .style("text-anchor", "start")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("Total Carbohydrates ");

    // Total Carbohydrates Value
    svg.append("text")
        .classed("nutriCarbohydratesValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 282)
        .style("text-anchor", "end")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0g");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 290)
        .attr("width", 290)
        .attr("height", 3)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Sugar Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 150)
        .attr("y", 310)
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Sugar ");

    // Sugar Value
    svg.append("text")
        .classed("nutriSugarValue nutriLabelElement", true)
        .attr("x", width + 275)
        .attr("y", 310)
        .style("text-anchor", "end")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0g");

    // Fiber Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 290)
        .attr("y", 310)
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Fiber ");

    // Fiber Value
    svg.append("text")
        .classed("nutriFiberValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 310)
        .style("text-anchor", "end")
        .style("font-size", "16px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0g");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 320)
        .attr("width", 290)
        .attr("height", 1)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Proteins Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 140)
        .attr("y", 343)
        .style("text-anchor", "start")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("Proteins ");

    // Proteins Value
    svg.append("text")
        .classed("nutriProteinsValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 343)
        .style("text-anchor", "end")
        .style("font-size", "18px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0g");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 350)
        .attr("width", 290)
        .attr("height", 3)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Vitamin A Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 150)
        .attr("y", 375)
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Vita. A ");

    // VitA Value
    svg.append("text")
        .classed("nutriVitAValue nutriLabelElement", true)
        .attr("x", width + 275)
        .attr("y", 375)
        .style("text-anchor", "end")
        .style("font-size", "14px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0.0000 mcg");

    // Vitamin C Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 290)
        .attr("y", 375)
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Vita. C ");

    // VitC Value
    svg.append("text")
        .classed("nutriVitCValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 375)
        .style("text-anchor", "end")
        .style("font-size", "14px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0.0000 mcg");

    // Border under Nutritions
    svg.append("rect")
        .attr("class", "nutriLabelElement")
        .attr("x", width + 135)
        .attr("y", 385)
        .attr("width", 290)
        .attr("height", 1)
        .style("fill-opacity", 0.5)
        .style("fill", "black");

    // Calcium Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 150)
        .attr("y", 408)
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Calcium ");

    // Calcium Value
    svg.append("text")
        .classed("nutriCalciumValue nutriLabelElement", true)
        .attr("x", width + 275)
        .attr("y", 408)
        .style("text-anchor", "end")
        .style("font-size", "14px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0mg");

    // Iron Text
    svg.append("text")
        .classed("nutriLabelElement", true)
        .attr("x", width + 290)
        .attr("y", 408)
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("fill", "black")
        .style("stroke", "black")
        // .style("stroke-width", 2)
        .text("Iron ");

    // Iron Value
    svg.append("text")
        .classed("nutriIronValue nutriLabelElement", true)
        .attr("x", width + 420)
        .attr("y", 408)
        .style("text-anchor", "end")
        .style("font-size", "14px")
        .style("fill", "black")
        .style("stroke", "black")
        .style("stroke-opacity", 0.5)
        .style("stroke-width", 2)
        .text("0mg");

    // Hide the nutrition label
    d3.selectAll(".nutriLabelElement").style("opacity", 0);

    // Nutrient buttons
    d3.select("#button1").on("click", changeNutrient);
    d3.select("#button2").on("click", changeNutrient);
    d3.select("#button3").on("click", changeNutrient);
    d3.select("#button4").on("click", changeNutrient);
    d3.select("#button5").on("click", changeNutrient);
    d3.select("#button6").on("click", changeNutrient);
    d3.select("#button7").on("click", changeNutrient);
    d3.select("#button8").on("click", changeNutrient);
    d3.select("#button9").on("click", changeNutrient);
    d3.select("#button10").on("click", changeNutrient);
    d3.select("#button11").on("click", changeNutrient);
    d3.select("#button12").on("click", changeNutrient);
    d3.select("#button13").on("click", changeNutrient);

    d3.select("#eps_button1").on("click", changeNutrient);
    d3.select("#eps_button2").on("click", changeNutrient);
    d3.select("#eps_button3").on("click", changeNutrient);
    d3.select("#size_button1").on("click", changeNutrient);
    d3.select("#size_button2").on("click", changeNutrient);

    // this function triggered everytime when user changes the Nutrient
    function updateNutriLabel(d) {

      var f2 = d3.format(".2f");
      var f3 = d3.format(".3f");
      var f4 = d3.format(".4f");

      d3.selectAll(".nutriLabelElement").transition().duration(1000).style("opacity", 1);
      svg.select(".nutriGradeValue").text(d.Grade_Fr);
      svg.select(".nutriGradeBox").style("fill", gradeColor(d.Grade_Fr));

      if (selectedNutrient == "Energy_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriCalValue").text(d.Energy_100G).style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriCalValue").text(d.Energy_100G).style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Fat_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriFatValue").text(f2(d.Fat_100G) + " g").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriFatValue").text(f2(d.Fat_100G) + " g").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Saturated_Fat_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriSatFatValue").text(f2(d.Saturated_Fat_100G) + " g").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriSatFatValue").text(f2(d.Saturated_Fat_100G) + " g").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Cholesterol_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriCholesterolValue").text(f3(d.Cholesterol_100G) + " mg").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriCholesterolValue").text(f3(d.Cholesterol_100G) + " mg").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Sodium_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriSodiumValue").text(f2(d.Sodium_100G) + " mg").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriSodiumValue").text(f2(d.Sodium_100G) + " mg").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Carbohydrates_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriCarbohydratesValue").text(f2(d.Carbohydrates_100G) + " g").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriCarbohydratesValue").text(f2(d.Carbohydrates_100G) + " g").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Sugars_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriSugarValue").text(f2(d.Sugars_100G) + " g").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriSugarValue").text(f2(d.Sugars_100G) + " g").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Fiber_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriFiberValue").text(f2(d.Fiber_100G) + " g").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriFiberValue").text(f2(d.Fiber_100G) + " g").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Proteins_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriProteinsValue").text(f2(d.Proteins_100G) + " g").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriProteinsValue").text(f2(d.Proteins_100G) + " g").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Vitamin_A_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriVitAValue").text(f4(d.Vitamin_A_100G) + " mcg").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriVitAValue").text(f4(d.Vitamin_A_100G) + " mcg").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Vitamin_C_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriVitCValue").text(f4(d.Vitamin_C_100G) + " mcg").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriVitCValue").text(f4(d.Vitamin_C_100G) + " mcg").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Calcium_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriCalciumValue").text(f3(d.Calcium_100G) + " mg").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriCalciumValue").text(f3(d.Calcium_100G) + " mg").style("stroke", "black").style("fill", "black");
      };

      if (selectedNutrient == "Iron_100G" && d[clusterOutputCol] == -1) {
        svg.select(".nutriIronValue").text(f3(d.Iron_100G) + " mg").style("stroke", "red").style("fill", "red");
      } else {
        svg.select(".nutriIronValue").text(f3(d.Iron_100G) + " mg").style("stroke", "black").style("fill", "black");
      };

    }

    // this function triggered everytime when user changes the Nutrient
    function changeNutrient() {

      // List of Nutrients
      var Nutrients = ['Fat_100G', 'Saturated_Fat_100G', 'Cholesterol_100G', 'Carbohydrates_100G', 'Sugars_100G', 'Fiber_100G', 'Proteins_100G', 'Sodium_100G', 'Vitamin_A_100G', 'Vitamin_C_100G', 'Calcium_100G', 'Iron_100G', 'Energy_100'];

      // Check if the event triggered by Nutrient buttons or category change
      // Update the selected Nutrient only click event of Nutrients
     
     if (typeof this.value != 'undefined' && this.className =='btn btn-primary eps'){
          selectedEpsilon = this.value;
      }
      else if (typeof this.value != 'undefined' && this.className =='btn btn-primary size'){
          selectedSamples = this.value;
      }
       else if (typeof this.value != 'undefined'){
        selectedNutrient = this.value;
      };




      // Call the filterData function to filter and redraw the visual
      filterData();

      // console.log('Change', selectedCategory, selectedNutrient, yCat, clusterOutputCol);

      // Rezoom based on the new data points
      zoomBeh.x(x.domain([xMin, xMax])).y(y.domain([yMin, yMax]));

      // Select the svg
      var svg = d3.select("#scatter").transition();

      // Call the updated axis
      svg.select(".x.axis").duration(750).call(xAxis).select(".label").text(xCat);
      svg.select(".y.axis").duration(750).call(yAxis).select(".label").text(yCat);

      // Transform the datapoints according to new axis
      objects.selectAll(".dot").transition().duration(1000)
        .attr("r", function(d) { return d[clusterOutputCol] == -1 ? 7 : 4; })
        .attr("transform", transform)
        .style("fill", function(d) { return color(d[clusterOutputCol]); })

    }

    // Zoom functionality
    function zoom() {
      svg.select(".x.axis").call(xAxis);
      svg.select(".y.axis").call(yAxis);

      svg.selectAll(".dot")
          .attr("transform", transform);
    }

    // Generic transform function
    function transform(d, i) {
      return "translate(" + x(i) + "," + y(d[yCat]) + ")";
    }

    // Call changeNutrient function when dropdown selection changes
    categoryMenu.on("change", function() {
        selectedCategory = d3.select(this)
          .select("select")
          .property("value");

        changeNutrient();
    });

});
