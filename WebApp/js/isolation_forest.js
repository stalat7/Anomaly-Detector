
d3.select("#cl_button1").on("click", drawChart);
d3.select("#cl_button2").on("click", drawChart);
d3.select("#cl_button3").on("click", drawChart);
d3.select("#cl_button4").on("click", drawChart);

d3.select("#c2_button1").on("click", drawChart);
d3.select("#c2_button2").on("click", drawChart);

colors = {
	'A' : 'rgba(26,152,80, 200)',
	'B' : 'rgba(145,207,96, 200)',
	'C' : 'rgba(217,239,139, 200)',
	'D' : 'rgba(254,224,139, 200)',
	'E' : 'rgba(252,141,89, 200)',
	'F' : 'rgba(215,48,39, 200)',
	'U' : 'rgba(0,0, 255, 200)',
}

//['rgb(215,48,39)','rgb(252,141,89)','rgb(254,224,139)','rgb(217,239,139)','rgb(145,207,96)','rgb(26,152,80)']

function getColor(grade, isOutlier, clusterBy) {
	if (clusterBy === "Outlier") {
		if (isOutlier) {
			return grade.map(x => 'rgb(255, 0, 0)');  
		}
		else {
			return grade.map(x => 'rgb(0, 0, 255)'); //
		}
	}
	else {
		return grade.map(x=> colors[x]);
	}
}

function getHoverText(isOutlier, productName, grade) {
	return productName.map(x=> isOutlier + '<br>' + x);
}

function drawChart() {
		//contamination = 1;
		//clusterBy = "Outlier";
     if (typeof this.value != 'undefined' && this.className =='btn btn-primary eps'){
		 contamination = this.value;
	}
	else if (typeof this.value != 'undefined' && this.className =='btn btn-primary clust'){
		clusterBy = this.value;
	}
	if (typeof clusterBy === 'undefined') {
		clusterBy = 'Grade';
	}
	if (typeof contamination === 'undefined') {
		contamination = 1;
	}

    category = $('#categoryDropdown').val();
    /*contamination = $('#contaminationDD').val();*/
    document.getElementById('title').innerHTML = category;
    document.getElementById('tester').innerHTML = "";

    Plotly.d3.csv('data/OpenFF_Custom_withlevels_Final_25Categories.csv', function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) { return row[key]; });
		}

		outlier_col = 'iforest_outlier_' + contamination;

        glo_inliers = rows.filter(function(x) { return x.Custom_Category === category && x[outlier_col] === "1" });
        glo_outliers = rows.filter(function(x) { return x.Custom_Category === category && x[outlier_col] === "-1" });


        var inlier = {
            x: unpack(glo_inliers, 'pca_x1'), y: unpack(glo_inliers, 'pca_y1'), z: unpack(glo_inliers, 'pca_z1'), cat: unpack(glo_inliers, 'Custom_Category'),
            iforest_outlier_1: unpack(glo_inliers, 'iforest_outlier_1'), iforest_outlier_3: unpack(glo_inliers, 'iforest_outlier_3'), iforest_outlier_5: unpack(glo_inliers, 'iforest_outlier_5'),
            iforest_outlier_10: unpack(glo_inliers, 'iforest_outlier_10'), decision_function: unpack(glo_inliers, 'decision_function'), pname: unpack(glo_inliers, 'Product_Name'),
            Key: unpack(glo_inliers, 'Key'), grade: unpack(glo_inliers, 'Grade_Fr'),
			mode: 'markers',
			hoverinfo: 'text',
			name: 'Inliers',
			text: getHoverText('inlier', unpack(glo_inliers, 'Product_Name'), unpack(glo_inliers, 'Grade_Fr')),
            marker: {
				size: 4,
				color: getColor(unpack(glo_inliers, 'Grade_Fr'), false, clusterBy),
                line: {
                    width: 0.5
                },
                opacity: 0.5
            },
            type: 'scatter3d'
        };

        var outlier = {
            x: unpack(glo_outliers, 'pca_x1'), y: unpack(glo_outliers, 'pca_y1'), z: unpack(glo_outliers, 'pca_z1'), cat: unpack(glo_outliers, 'Custom_Category'),
            iforest_outlier_1: unpack(glo_outliers, 'iforest_outlier_1'), iforest_outlier_3: unpack(glo_outliers, 'iforest_outlier_3'), iforest_outlier_5: unpack(glo_outliers, 'iforest_outlier_5'),
            iforest_outlier_10: unpack(glo_outliers, 'iforest_outlier_10'), decision_function: unpack(glo_outliers, 'decision_function'), pname: unpack(glo_outliers, 'Product_Name'),
            Key: unpack(glo_outliers, 'Key'),
            mode: 'markers',
			name: 'Outliers',
			hoverinfo: 'text',
			text: getHoverText('outlier', unpack(glo_outliers, 'Product_Name'), unpack(glo_outliers, 'Grade_Fr')),
            marker: {
                size: 10,
                color: getColor(unpack(glo_outliers, 'Grade_Fr'), true, clusterBy),
                line: {
                    color: 'rgb(255, 0, 0)',
                    width: 1
                },
                opacity: 1
            },
            type: 'scatter3d'
        };

        var data = [inlier, outlier];//, outlier];
        makePlot(data, category);
    });
}

function makePlot(d9, category) {
	

var myPlot = document.getElementById('tester'),
    hoverInfo = document.getElementById('productName'),
    data = d9;
            var layout = {
				width: 600,
				height: 540,
				title: category,
				hovermode: 'closest',
				legend: {
					x: 0.1,
					y: 0.1,
					bgcolor:  '#F5F5F5'
				  },
                margin: {
                    l: 0,
                    r: 0,
                    b: 0,
                    t: 0
				},
				scene: {
					bgcolor: '#F5F5F5',
				}
            };
Plotly.newPlot('tester', d9, layout,  {responsive: true});

Plotly.relayout(myPlot, {
    width: 600
   /* height: 0.9 * window.innerHeight*/
  })


/*this is supposed to make plot responsive*/
window.onresize = function() {
  Plotly.relayout(myPlot, {
    width: 600
/*    height: 0.9 * window.innerHeight*/
  })
}

myPlot.on('plotly_hover', function(d4){
var infotext = d4.points[0].pointNumber;
if (d4.points[0].curveNumber === 0) {
    //console.log(glo_inliers[d4.points[0].pointNumber]);
    infotext = getText(glo_inliers[d4.points[0].pointNumber]);
}
else {
    //console.log(glo_outliers[d4.points[0].pointNumber]);
    infotext = getText(glo_outliers[d4.points[0].pointNumber]);;
}

hoverInfo.innerHTML = infotext;
})
.on('plotly_unhover', function(data){
hoverInfo.innerHTML = '';
});
}

function getText(product) {
	var data = glo_inliers.concat(glo_outliers);
	
	var results = data.filter(function(elem){
		return product.Key !== elem.Key;
	});
	var nutrients = product.Considered_Nutrients.split(',');
	var result = [];

	for(var j = 0; j < nutrients.length; j++) {
		var col = nutrients[j];
		var sum = 0;
		for(var i = 0; i < results.length; i++) {
			record = results[i];
			sum += eval('parseFloat(record["' + col + '"])');
		}
		var res = 0;
		if (sum > 0 && sum < 100000000) {
			res = (sum / results.length).toFixed(4);
		} 
		else { 
			res = 0;
		}
		var toAdd = JSON.parse('{"' + col + '":' + res + '}');
		result.push(toAdd);
	}
	  prod = []

	  nutrients.forEach(function(col) {
		var sum = 0;
		sum = eval('parseFloat(product["' + col + '"])');
		var res = 0;
		if (sum > 0 && sum < 100000000) {
			res = sum.toFixed(4);
		} 
		else { 
			res = 0;
		}
		var toAdd = JSON.parse('{"' + col + '":' + res + '}');
		prod.push(toAdd);
	  });
	  addText(result,  prod, product);

return product.Product_Name;
}

function addText(result,prod, product) {
	var toRet = "";
	var table = document.getElementById("stats");
	$("#stats tbody tr").remove(); 
	v = product[outlier_col];
	for(var i = 0; i < result.length; i++) {
		row = table.getElementsByTagName('tbody')[0].insertRow();
		r = result[i];
		p = prod[i];
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		// Add some text to the new cells:
		cell1.innerHTML = Object.keys(r)[0];
		cell2.innerHTML = r[Object.keys(r)[0]];
		cell3.innerHTML = "";
		cell4.innerHTML = p[Object.keys(p)[0]];

		cell1.className = 'productStats';
		cell2.className = 'productStats';

		if (v === "1") {
			cell4.className = 'inlierStats';
		}
		else {
			cell4.className = 'outlierStats';
		}
		
	}
 }

{/* <tr>
<td>A</td>
<td>1</td>
<td width=1></td>
<td>5</td>
</tr>
<tr>
	<td>B</td>
	<td>3</td>
	<td width=1></td>
	<td>9</td>
</tr> */}