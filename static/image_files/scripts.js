    window.onload = function() {

      var time = new Date;
      var time2 = new Date;
      var time3 = new Date;
      var updateInterval = 1000; // Per Second
      var updateInterval2 = 60000; // Per Minute
      var updateInterval3 = 900000; // Per 15 Minutes
      var counter = 0;
      var counter2 = 0;
      var counter3 = 0;

      var A_Accumulated = [];
      var B_Accumulated = [];
      var E_Accumulated = [];
      var F_Accumulated = [];
      var J_Accumulated = [];
      var N_Accumulated = [];

      var A_Accumulated_Hour = [];
      var B_Accumulated_Hour = [];
      var E_Accumulated_Hour = [];
      var F_Accumulated_Hour = [];
      var J_Accumulated_Hour = [];
      var N_Accumulated_Hour = [];

      var A_Accumulated_Day = [];
      var B_Accumulated_Day = [];
      var E_Accumulated_Day = [];
      var F_Accumulated_Day = [];
      var J_Accumulated_Day = [];
      var N_Accumulated_Day = [];

      var A_Power = [];
      var B_Power = [];
      var E_Power = [];
      var F_Power = [];
      var J_Power = [];
      var N_Power = [];

      var A_Current = [];
      var B_Current = [];
      var E_Current = [];
      var F_Current = [];
      var J_Current = [];
      var N_Current = [];



      var chart1 = new CanvasJS.Chart("AccumulatedChart", {
        zoomEnabled: true,
        title: {
          text: "Accumulated Energy Consumption (Minute)"
        },
        axisX: {
          title: "Real Time (Interval - 1 minute; Update - per second)"
        },
        axisY: {
          title: "Accumulated Energy (kWh)",
          titleFontSize: 28
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries1
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Meter A",
            dataPoints: A_Accumulated
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter B",
            dataPoints: B_Accumulated
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter E",
            dataPoints: E_Accumulated
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter F",
            dataPoints: F_Accumulated
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter J",
            dataPoints: J_Accumulated
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter N",
            dataPoints: N_Accumulated
          }

        ]
      });

      var chart2 = new CanvasJS.Chart("ChartA", {
        zoomEnabled: true,
        title: {
          text: "Meter A"
        },
        axisX: {
          title: "Real Time (Interval: 1 minute; Update: per second)",
          titleFontSize: 20,
        },
        axisY: {
          title: "Power (kW)",
          titleFontSize: 20,
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },
        axisY2: {
          title: "Current (A)",
          titleFontSize: 20,
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries2
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kW",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Power",
            dataPoints: A_Power
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00A",
            axisYType: "secondary",
            showInLegend: true,
            name: "Current",
            dataPoints: A_Current
          },
        ]
      });

      var chart3 = new CanvasJS.Chart("ChartB", {
        zoomEnabled: true,
        title: {
          text: "Meter B"
        },
        axisX: {
          title: "Real Time (Interval: 1 minute; Update: per second)",
          titleFontSize: 19,
        },
        axisY: {
          title: "Power (kW)",
          titleFontSize: 20,
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },
        axisY2: {
          title: "Current (A)",
          titleFontSize: 20,
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries3
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kW",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Power",
            dataPoints: B_Power
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00A",
            axisYType: "secondary",
            showInLegend: true,
            name: "Current",
            dataPoints: B_Current
          },
        ]
      });


      var chart4 = new CanvasJS.Chart("ChartE", {
        zoomEnabled: true,
        title: {
          text: "Meter E"
        },
        axisX: {
          title: "Real Time (Interval: minute; Update: per second)",
          titleFontSize: 19,
        },
        axisY: {
          title: "Power (kW)",
          titleFontSize: 20,
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },
        axisY2: {
          title: "Current (A)",
          titleFontSize: 20,
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries4
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kW",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Power",
            dataPoints: E_Power
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00A",
            axisYType: "secondary",
            showInLegend: true,
            name: "Current",
            dataPoints: E_Current
          },
        ]
      });

      var chart5 = new CanvasJS.Chart("ChartF", {
        zoomEnabled: true,
        title: {
          text: "Meter F"
        },
        axisX: {
          title: "Real Time (Interval: 1 minute; Update: per second)",
          titleFontSize: 19,
        },
        axisY: {
          title: "Power (kW)",
          titleFontSize: 20,
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },
        axisY2: {
          title: "Current (A)",
          titleFontSize: 20,
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries5
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kW",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Power",
            dataPoints: F_Power
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00A",
            axisYType: "secondary",
            showInLegend: true,
            name: "Current",
            dataPoints: F_Current
          },
        ]
      });

      var chart6 = new CanvasJS.Chart("ChartJ", {
        zoomEnabled: true,
        title: {
          text: "Meter J"
        },
        axisX: {
          title: "Real Time (Interval: 1 minute; Update: per second)",
          titleFontSize: 20,
        },
        axisY: {
          title: "Power (kW)",
          titleFontSize: 20,
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },
        axisY2: {
          title: "Current (A)",
          titleFontSize: 20,
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries6
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kW",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Power",
            dataPoints: J_Power
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00A",
            axisYType: "secondary",
            showInLegend: true,
            name: "Current",
            dataPoints: J_Current
          },
        ]
      });

      var chart7 = new CanvasJS.Chart("ChartN", {
        zoomEnabled: true,
        title: {
          text: "Meter N"
        },
        axisX: {
          title: "Real Time (Interval: 1 minute; Update: per second)",
          titleFontSize: 20,
        },
        axisY: {
          title: "Power (kW)",
          titleFontSize: 20,
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },
        axisY2: {
          title: "Current (A)",
          titleFontSize: 20,
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries7
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kW",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Power",
            dataPoints: N_Power
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00A",
            axisYType: "secondary",
            showInLegend: true,
            name: "Current",
            dataPoints: N_Current
          },
        ]
      });


      var chart8 = new CanvasJS.Chart("Accumulated_Hour", {
        zoomEnabled: true,
        title: {
          text: "Accumulated Energy Consumption (Hour)"
        },
        axisX: {
          title: "Real Time (Interval - 1 hour; Update - per minute)"
        },
        axisY: {
          title: "Accumulated Energy (kWh)",
          titleFontSize: 28,
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries8
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Meter A",
            dataPoints: A_Accumulated_Hour
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter B",
            dataPoints: B_Accumulated_Hour
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter E",
            dataPoints: E_Accumulated_Hour
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter F",
            dataPoints: F_Accumulated_Hour
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter J",
            dataPoints: J_Accumulated_Hour
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter N",
            dataPoints: N_Accumulated_Hour
          }

        ]
      });


      var chart9 = new CanvasJS.Chart("Accumulated_Day", {
        zoomEnabled: true,
        title: {
          text: "Accumulated Energy Consumption (Day)"
        },
        axisX: {
          title: "Real Time (Interval - 1 day; Update - per 15 minutes)"
        },
        axisY: {
          title: "Accumulated Energy (kWh)",
          titleFontSize: 28,
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          fontSize: 22,
          fontColor: "dimGrey",
          itemclick: toggleDataSeries9
        },
        data: [{
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            xValueFormatString: "hh:mm:ss TT",
            showInLegend: true,
            name: "Meter A",
            dataPoints: A_Accumulated_Day
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter B",
            dataPoints: B_Accumulated_Day
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter E",
            dataPoints: E_Accumulated_Day
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter F",
            dataPoints: F_Accumulated_Day
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter J",
            dataPoints: J_Accumulated_Day
          },
          {
            type: "line",
            xValueType: "dateTime",
            yValueFormatString: "####.00kWh",
            showInLegend: true,
            name: "Meter N",
            dataPoints: N_Accumulated_Day
          }

        ]
      });

      function toggleDataSeries1(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart1.render();
      }

      function toggleDataSeries2(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart2.render();
      }

      function toggleDataSeries3(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart3.render();
      }

      function toggleDataSeries4(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart4.render();
      }

      function toggleDataSeries5(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart5.render();
      }

      function toggleDataSeries6(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart6.render();
      }


      function toggleDataSeries7(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart7.render();
      }

      function toggleDataSeries8(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart8.render();
      }

      function toggleDataSeries9(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart9.render();
      }

      var button = document.getElementById("button");
      button.addEventListener("click", chartTypeChanged);

      function chartTypeChanged() {
        chart8.render();
      }


      var $SCRIPT_ROOT =  'request.script_root | tojson | safe';

      function updateChart() {

        $.ajax({
          type: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          url: $SCRIPT_ROOT,
          success: function(response) {

            var matches = response.match(/\[(.*?)\]/);

            if (matches) {
              var submatch = matches[1];
            }

            // submatch = the string between the square brackets [XXX] -> XXX

            separate_list = submatch.split(', ') // Get the list of string representations of floats

            // console.log(separate_list)

            time.setTime(time.getTime() + updateInterval);


            yValue1 = parseFloat(separate_list[0])
            yValue2 = parseFloat(separate_list[1])
            yValue3 = parseFloat(separate_list[2])
            yValue4 = parseFloat(separate_list[3])
            yValue5 = parseFloat(separate_list[4])
            yValue6 = parseFloat(separate_list[5])

            PowerA = parseFloat(separate_list[6])
            PowerB = parseFloat(separate_list[7])
            PowerE = parseFloat(separate_list[8])
            PowerF = parseFloat(separate_list[9])
            PowerJ = parseFloat(separate_list[10])
            PowerN = parseFloat(separate_list[11])

            CurrentA = parseFloat(separate_list[12])
            CurrentB = parseFloat(separate_list[13])
            CurrentE = parseFloat(separate_list[14])
            CurrentF = parseFloat(separate_list[15])
            CurrentJ = parseFloat(separate_list[16])
            CurrentN = parseFloat(separate_list[17])

            // pushing the new values
            A_Accumulated.push({
              x: time.getTime(),
              y: yValue1
            });
            B_Accumulated.push({
              x: time.getTime(),
              y: yValue2
            });
            E_Accumulated.push({
              x: time.getTime(),
              y: yValue3
            });
            F_Accumulated.push({
              x: time.getTime(),
              y: yValue4
            });
            J_Accumulated.push({
              x: time.getTime(),
              y: yValue5
            });
            N_Accumulated.push({
              x: time.getTime(),
              y: yValue6
            });


            A_Power.push({
              x: time.getTime(),
              y: PowerA
            });
            B_Power.push({
              x: time.getTime(),
              y: PowerB
            });
            E_Power.push({
              x: time.getTime(),
              y: PowerE
            });
            F_Power.push({
              x: time.getTime(),
              y: PowerF
            });
            J_Power.push({
              x: time.getTime(),
              y: PowerJ
            });
            N_Power.push({
              x: time.getTime(),
              y: PowerN
            });


            A_Current.push({
              x: time.getTime(),
              y: CurrentA
            });
            B_Current.push({
              x: time.getTime(),
              y: CurrentB
            });
            E_Current.push({
              x: time.getTime(),
              y: CurrentE
            });
            F_Current.push({
              x: time.getTime(),
              y: CurrentF
            });
            J_Current.push({
              x: time.getTime(),
              y: CurrentJ
            });
            N_Current.push({
              x: time.getTime(),
              y: CurrentN
            });


            // Limit the X-axis

            if (counter >= 60) {

              A_Accumulated.shift();
              B_Accumulated.shift();
              E_Accumulated.shift();
              F_Accumulated.shift();
              J_Accumulated.shift();
              N_Accumulated.shift();


              A_Current.shift();
              B_Current.shift();
              E_Current.shift();
              F_Current.shift();
              J_Current.shift();
              N_Current.shift();

              A_Power.shift();
              B_Power.shift();
              E_Power.shift();
              F_Power.shift();
              J_Power.shift();
              N_Power.shift();

            }

            counter = counter + 1


            // updating legend text with updated with y Value
            chart1.options.data[0].legendText = " Meter A  " + yValue1 + "kWh";
            chart1.options.data[1].legendText = " Meter B  " + yValue2 + "kWh";
            chart1.options.data[2].legendText = " Meter E  " + yValue3 + "kWh";
            chart1.options.data[3].legendText = " Meter F  " + yValue4 + "kWh";
            chart1.options.data[4].legendText = " Meter J  " + yValue5 + "kWh";
            chart1.options.data[5].legendText = " Meter N  " + yValue6 + "kWh";
            chart1.render();

            chart2.options.data[0].legendText = " Power  " + PowerA + "kW";
            chart2.options.data[1].legendText = " Current  " + CurrentA + "A";
            chart2.render();

            chart3.options.data[0].legendText = " Power  " + PowerB + "kW";
            chart3.options.data[1].legendText = " Current  " + CurrentB + "A";
            chart3.render();

            chart4.options.data[0].legendText = " Power  " + PowerE + "kW";
            chart4.options.data[1].legendText = " Current  " + CurrentE + "A";
            chart4.render();

            chart5.options.data[0].legendText = " Power  " + PowerF + "kW";
            chart5.options.data[1].legendText = " Current  " + CurrentF + "A";
            chart5.render();

            chart6.options.data[0].legendText = " Power  " + PowerJ + "kW";
            chart6.options.data[1].legendText = " Current  " + CurrentJ + "A";
            chart6.render();

            chart7.options.data[0].legendText = " Power  " + PowerN + "kW";
            chart7.options.data[1].legendText = " Current  " + CurrentN + "A";
            chart7.render();


          },
        });
      }



      function updateChart2() {

        $.ajax({
          type: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          url: $SCRIPT_ROOT,
          success: function(response) {

            var matches = response.match(/\[(.*?)\]/);

            if (matches) {
              var submatch = matches[1];
            }

            // submatch = the string between the square brackets [XXX] -> XXX

            separate_list = submatch.split(', ') // Get the list of string representations of floats

            time2.setTime(time.getTime() + updateInterval2);

            // console.log(separate_list)

            yValue1 = parseFloat(separate_list[0])
            yValue2 = parseFloat(separate_list[1])
            yValue3 = parseFloat(separate_list[2])
            yValue4 = parseFloat(separate_list[3])
            yValue5 = parseFloat(separate_list[4])
            yValue6 = parseFloat(separate_list[5])


            // pushing the new values

            A_Accumulated_Hour.push({
              x: time.getTime(),
              y: yValue1
            });
            B_Accumulated_Hour.push({
              x: time.getTime(),
              y: yValue2
            });
            E_Accumulated_Hour.push({
              x: time.getTime(),
              y: yValue3
            });
            F_Accumulated_Hour.push({
              x: time.getTime(),
              y: yValue4
            });
            J_Accumulated_Hour.push({
              x: time.getTime(),
              y: yValue5
            });
            N_Accumulated_Hour.push({
              x: time.getTime(),
              y: yValue6
            });

            // Limit the X-axis

            if (counter2 >= 60) {


              A_Accumulated_Hour.shift();
              B_Accumulated_Hour.shift();
              E_Accumulated_Hour.shift();
              F_Accumulated_Hour.shift();
              J_Accumulated_Hour.shift();
              N_Accumulated_Hour.shift();


            }

            counter2 = counter2 + 1


            // updating legend text with updated y Value

            chart8.options.data[0].legendText = " Meter A  " + yValue1 + "kWh";
            chart8.options.data[1].legendText = " Meter B  " + yValue2 + "kWh";
            chart8.options.data[2].legendText = " Meter E  " + yValue3 + "kWh";
            chart8.options.data[3].legendText = " Meter F  " + yValue4 + "kWh";
            chart8.options.data[4].legendText = " Meter J  " + yValue5 + "kWh";
            chart8.options.data[5].legendText = " Meter N  " + yValue6 + "kWh";
            chart8.render();


          },
        });
      }


      function updateChart3() {

        $.ajax({
          type: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          url: $SCRIPT_ROOT,
          success: function(response) {

            var matches = response.match(/\[(.*?)\]/);

            if (matches) {
              var submatch = matches[1];
            }

            // submatch = the string between the square brackets [XXX] -> XXX

            separate_list = submatch.split(', ') // Get the list of string representations of floats

            time3.setTime(time.getTime() + updateInterval3);

            // console.log(separate_list)

            yValue1 = parseFloat(separate_list[0])
            yValue2 = parseFloat(separate_list[1])
            yValue3 = parseFloat(separate_list[2])
            yValue4 = parseFloat(separate_list[3])
            yValue5 = parseFloat(separate_list[4])
            yValue6 = parseFloat(separate_list[5])


            // pushing the new values

            A_Accumulated_Day.push({
              x: time.getTime(),
              y: yValue1
            });
            B_Accumulated_Day.push({
              x: time.getTime(),
              y: yValue2
            });
            E_Accumulated_Day.push({
              x: time.getTime(),
              y: yValue3
            });
            F_Accumulated_Day.push({
              x: time.getTime(),
              y: yValue4
            });
            J_Accumulated_Day.push({
              x: time.getTime(),
              y: yValue5
            });
            N_Accumulated_Day.push({
              x: time.getTime(),
              y: yValue6
            });

            // Limit the X-axis

            if (counter3 >= 96) {


              A_Accumulated_Day.shift();
              B_Accumulated_Day.shift();
              E_Accumulated_Day.shift();
              F_Accumulated_Day.shift();
              J_Accumulated_Day.shift();
              N_Accumulated_Day.shift();


            }

            counter3 = counter3 + 1


            // updating legend text with updated y Value

            chart9.options.data[0].legendText = " Meter A  " + yValue1 + "kWh";
            chart9.options.data[1].legendText = " Meter B  " + yValue2 + "kWh";
            chart9.options.data[2].legendText = " Meter E  " + yValue3 + "kWh";
            chart9.options.data[3].legendText = " Meter F  " + yValue4 + "kWh";
            chart9.options.data[4].legendText = " Meter J  " + yValue5 + "kWh";
            chart9.options.data[5].legendText = " Meter N  " + yValue6 + "kWh";
            chart9.render();


          },
        });
      }

      var pos1 = document.getElementById('output1');
      var pos2 = document.getElementById('output2');
      var pos3 = document.getElementById('output3');
      var pos4 = document.getElementById('output4');

      var pos5 = document.getElementById('output5');

      function getString() {

        $.ajax({
          type: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          url: $SCRIPT_ROOT,
          success: function(response) {

            var matches = response.match(/\[(.*?)\]/);

            if (matches) {
              var submatch = matches[1];
            }

            // submatch = the string between the square brackets [XXX] -> XXX

            separate_list = submatch.split(', ') // Get the list of string representations of floats

            final_string = separate_list[18]
            finger_prediction = separate_list[19]



            final_words = final_string.split(';')

            word4 = final_words[0].substring(1)
            word3 = final_words[1]
            word2 = final_words[2]
            word1 = final_words[3].substring(0, final_words[3].length - 1)

            pos1.innerHTML = word1;
            pos2.innerHTML = word2;
            pos3.innerHTML = word3;
            pos4.innerHTML = word4;



            final_finger = finger_prediction.substring(1, finger_prediction.length - 1)

            pos5.innerHTML = final_finger




          },
        });
      }


      setInterval(function() {
        updateChart()
      }, updateInterval);

      setInterval(function() {
        updateChart2()
      }, updateInterval2);

      setInterval(function() {
        updateChart3()
      }, updateInterval3);

      setInterval(function() {
        getString()
      }, 100);

}