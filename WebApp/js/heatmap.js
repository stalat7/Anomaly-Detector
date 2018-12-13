function makemap() {
    selectValue = $('#categoryDropdown').val();
    d3.select('#myheatmap').remove();

    //Create some initial variables
    var itemSize = 35,
          cellSize = itemSize - 1,
          margin = {top: 100, right: 20, bottom: 20, left: 400};

    var width = 1000 - margin.right - margin.left,
        height = 675 - margin.top - margin.bottom,
        Grid_Size = Math.floor(width / 20),
        legendWidth = (Grid_Size/2 + 4);


    var data = ["White Bread", "Wheat Bread", "Peanut Butter", "Milk Chocolate", "Fat Free Milk", "Yogurt Greek", "Whole Milk", "Olive Oil", "Peanuts", "Reduced Fat Milk", "Soda", "Soup Chicken", "Sparkling Water", "Yogurt Fatfree", "Yogurt Greek Nonfat", "Yogurt Lowfat"]


    d3.csv("data/OpenFF_Custom_withlevels_Final_25Categories.csv", 
                function(inputdata) {
                //Initialize storage for an array to be populated for the selected Category
                var CategoryArray = [];
                counter = 0;

                if(selectValue == null){
                        selectValue = $('#categoryDropdown').val();
                }

                product_names = [];

                for (var i = 0; i < inputdata.length; i++) {
                     if(inputdata[i]["Custom_Category"] == selectValue){

                        Datahouse=inputdata[i]["Custom_Category"];
                        DataProduct=inputdata[i]["Product_Name"];
                        FatProductcount=inputdata[i]["Fat_100G"];
                        SFatProductcount=inputdata[i]["Saturated_Fat_100G"]
                        CholProductcount=inputdata[i]["Cholesterol_100G"]
                        CarbProductcount=inputdata[i]["Carbohydrates_100G"]
                        SugPProductcount=inputdata[i]["Sugars_100G"]
                        FiberPProductcount=inputdata[i]["Fiber_100G"]
                        ProPProductcount=inputdata[i]["Proteins_100G"]
                        SodPProductcount=inputdata[i]["Sodium_100G"]
                        VitAPProductcount=inputdata[i]["Vitamin_A_100G"]
                        VitCPProductcount=inputdata[i]["Vitamin_C_100G"]
                        CalPProductcount=inputdata[i]["Calcium_100G"]
                        IronPProductcount=inputdata[i]["Iron_100G"]
                        DataBrand=inputdata[i]["Brands"]


                        /*checks if product with the same name already exists in the Category array*/
                        if(product_names.indexOf(DataProduct)==-1){
                            CategoryArray.push({Product: DataProduct, Nutrient: "Fat", count: +FatProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Saturated_Fat", count: +SFatProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Cholesterol",  count: +CholProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Carbohydrates",  count: +CarbProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Sugars",  count: +SugPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Fiber",  count: +FiberPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Proteins",  count: +ProPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Sodium",  count: +SodPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Vitamin_A",  count: +VitAPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Vitamin_C",  count: +VitCPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Calcium",  count: +CalPProductcount,Brand: DataBrand})
                            CategoryArray.push({Product: DataProduct, Nutrient: "Iron",  count: +IronPProductcount,Brand: DataBrand})

                            product_names.push(DataProduct)
                       

                            counter+=1;
                        }
                    }

                    /*get only first 12 records per category*/
                    if (counter==12){
                            break;
                    }
                };
                    
                    //var cat = d3.set(CategoryArray.map(function(d) { //return d.Datahouse; })).values();
                    //console.log(cat)
                        // create an array of Products for the X axis using map function, then sort the Product alphabetically
                        // create an array of Nutrients for the Y axis
                        x_elements = d3.set(CategoryArray.map(function( item ) { return item.Nutrient; } )).values(); 
                        x_elements = x_elements.sort();
                        y_elements = d3.set(CategoryArray.map(function( item ) { return item.Product; } )).values();
                        y_elements = y_elements.sort();

        
                        // This next section of code is for dynamically scaling the heatmap values, their colors, and the legend
                        // (1) Get the Product counts for the selected Category
                        // (2) Convert from string to numeric
                        // (3) Get the max number of Products across the Nutrients
                        // (4) Determine the size that will correspond with each color
                        // (5) Create the scale_array to be used for heatmap coloring and the dynamic legend axis
                        Productcounts = d3.set(CategoryArray.map(function(item) { return item.count;})).values();
                        Brand =  d3.set(CategoryArray.map(function(item) { return item.Brand;})).values();

                        
                        for(k = 0; k < Productcounts.length; k++) {    
                            Productcounts[k] = +Productcounts[k];
                            }

                       

                        maxProducts = d3.max(Productcounts);


                       /* chunksize = d3.round(maxProducts/8,0);
                        scale_array = [];
                        for (var k = 0; k < 10; k++) {
                            scale_array.push(chunksize+(chunksize*k));
                        }*/

                        var xScale = d3.scale.ordinal()
                            .domain(x_elements)
                            .rangeBands([0, x_elements.length * itemSize]);

                        var xAxis = d3.svg.axis()
                            .scale(xScale)
                            .orient("top");

                        var yScale = d3.scale.ordinal()
                            .domain(y_elements)
                            .rangeBands([0, y_elements.length * itemSize]);

                        var yAxis = d3.svg.axis()
                            .scale(yScale)
                            .tickFormat(function (d) {
                                return d;
                                })
                            .orient("left");
                            
                        
                         var tip = d3.tip()
                          .attr('class', 'd3-tip')
                          .style("visibility","visible")
                          .offset([-20, 0])
                          .html(function(d) {
                            return "Value:  <span style='color:white'>" + (d.count) + ", (" + (d.Brand)+")" ;
                          });
                          
                         

                        // I used this as a reference for coloring using scale.threshold()
                        //https://stackoverflow.com/questions/38793897/setting-color-for-a-particular-value-when-using-d3-scale-threshold
                        // Here I'm using the scale_array variable to do dynamic scaling 
                        /*colors  = ['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#253494','#081d58']*/
                        
                        //
                       /* var colorScale = d3.scale.threshold()
                        .domain(scale_array)
                            .range(colors);*/


                        var bucket = Math.floor(maxProducts/10);
                        var minProducts = d3.min(Productcounts);


                        var colorScale = d3.scale.threshold()
                            .domain([minProducts, bucket, 2*bucket, 3*bucket, 4*bucket, 5*bucket, 6*bucket,  maxProducts])
                            .range(['#fff7fb','#ece7f2','#d0d1e6','#a6bddb','#74a9cf','#3690c0','#0570b0','#045a8d','#023858']);   
                        
                        // var colorScale = d3.scale.quantile()
                        //  //.domain([0, Nutrient_Size - 1, d3.max(data, function (d) { return d.value; })])
                        //  .domain(scale_array)
                        //  .range(colors);
                        
                            
                        
                        var svg = d3.select('.heatmap')
                            .append("svg")
                            /*.attr("width", "100%")
                            .attr("height", "100%")*/
                            .attr("width", width + margin.left + 0.25*margin.right)
                            .attr("height", height /*+ 0.25*margin.bottom*/)
                            .attr("id","myheatmap")
                           /* .attr("viewBox", "0 0 " + (width + margin.left + 0.25*margin.right)+  " " + (height +margin.top + 0.25*margin.bottom) )
                            .attr("preserveAspectRatio", "xMinYMin meet")*/
                            .append("g")
                            .attr("transform", "translate(" + 0.85*margin.left + "," + 0.85*margin.top + ")");

                        svg.call(tip);    
                            
                        var cells = svg.selectAll('rect')
                            .data(CategoryArray)
                            .enter().append('g').append('rect')
                            .attr('class', 'cell')
                            .attr('width', cellSize)
                            .attr('height', cellSize)
                            .attr('y', function(d) { return yScale(d.Product); })
                            .attr('x', function(d) { return xScale(d.Nutrient); })
                            .attr('fill', function(d) { return colorScale(d.count); })
                            .on('mouseover', tip.show)
                            .on('mouseout', tip.hide);
                        
                        svg.append("g")
                            .attr("class", "y axis")
                            .attr("x",-35)
                            .attr("y",-15)
                            .call(yAxis)
                            .style("text-anchor", "end")
                           /* .style("font-size", "12px")
                            .attr('font-weight', 'normal')*/;

    //nutrient names
                        svg.append("g")
                            .attr("class", "x axis")
                            //.attr("transform","translate(5," + (height-45) + ")")
                            .attr("x",-15)
                            .attr("y",0)
                            .call(xAxis)
                            .selectAll('text')
                           /* .attr('font-weight', 'normal')*/
                            .style("text-anchor", "start")
                         /*   .style("font-size", "12px")*/
                            
                            .attr("dx", ".20em")
                            .attr("dy", ".5em")
                            .attr("transform", function (d) {
                                return "rotate(-90)";
                                })

                   /*     svg.append("text")
                        .attr("x", 0)
                        .attr("y", -110)
                        .attr("text-anchor", "left")
                        .style("font-size", "25px")
                        .attr('font-weight', 'bold')
                        .style("fill", "purple")
                        .text("Visualizing Nutrients in Products");*/
                        
                        //.attr("transform", "translate(" + Grid_Size / 2 + ", -6)")

                        svg.append("text")
                            .attr("x", 150)
                            .attr("y", -30)
                            .attr("text-anchor", "left")
                            .style("font-size", "12px")
                            .attr('font-weight', 'bold')
                           // .text("Nutrient");

    //MD added for legend
                        var legend = svg.selectAll(".legend")
                            .data([minProducts, bucket, 2*bucket, 3*bucket, 4*bucket, 5*bucket, 6*bucket, maxProducts])
                            .enter().append("g")
                            .attr("class", "legend"); 
                           
                         legend.append("rect")
                            .attr("x", function(d, i) { return Grid_Size * 11+125; })
                            .attr("y", function(d, i) { return (i * legendWidth + 20); })
                            .attr("width", Grid_Size/2)
                            .attr("height", Grid_Size/2)
                            .style("fill", colorScale)
                            .attr("class", "square");

                        legend.append("text")
                            .attr("class", "mono")
                            .text(function(d) { return "≥ " + Math.floor(d); })
                            .attr("x", function(d, i) { return Grid_Size * 11 + 150; })
                            .attr("y", function(d, i) { return (i * legendWidth + 33); })  
                           
                        var title = svg.append("text")
                        .attr("class", "mono")
                        .attr("x", Grid_Size * 11+125)
                        .attr("y", 10)         
                        .style("font-size", "14px")
                        .text("Nutrients Level");   
                           
                          
                        var x = d3.scale.linear()
                            .domain([0,maxProducts])
                            .range([200, 500]);
                            
            

                         
    });
  

            
}