(function (window) {

    function line(json) {
        let lineDom = document.getElementById('diqu')
        let myChartContainer = function () {
	        lineDom.style.width = lineDom.innerWidth+'px'
	        lineDom.style.height = lineDom.innerHeight+'px'
        }
	      myChartContainer()
        let myChart = echarts.init(lineDom)
        let xData = []
        let yData = []
        for(let i=0;i<json.length;i++){
            xData.push(json[i].buildname)
            yData.push(json[i].num)
        }
        let option = {
            //提示框
            tooltip: {
                trigger: "axis",
                formatter:'{b0}: {c0}'
            },
            color:['#06beff'],
            legend: {
                itemWidth:12,
                itemHeight:12,
                x:240,
                y:-6,
                textStyle:{//图例文字的样式
                    color:'#fff',
                    fontSize:12
                },
                data:[{
                    name:'变形',
                    icon:'rect',
                    color:'red',
                }],
            },
            grid: {
                top:'20%',
                left: '5%',
                right: '7%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: {
                type : 'category',
                show:true,
                data:xData,
                boundaryGap : true,
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#fff'
                    },
                },
                axisLabel:{
                    interval:0,
                    show:true,
                    color:'#fff',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                splitLine:{
                    show:false,//网格线
                },
            },
            yAxis: {
                name:'单位',
                nameTextStyle:{
                    fontSize:10
                },
                type : 'value',
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#fff'
                    },
                },
                axisLabel:{
                    color:'#fff',
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false,
                },
            },
            series: [
                {
                    name: '变形',
                    type: 'line',
                    stack:'健康情况',
                    barWidth: 12,
                    data: yData,
                    itemStyle: {
                        normal: {
                            color: '#06beff',
                            lineStyle: {
                                color: '#06beff',
                            },
                            areaStyle:
                                {type: 'default',
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(6,190,255,.9)'},
                                            {offset: 0.5, color: 'rgba(6,190,255,.4)'},
                                            {offset: 1, color: 'rgba(6,190,255,.1)'}
                                        ]
                                    )
                                }
                        },

                    },
                },
            ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        //浏览器大小改变时重置大小
	      window.addEventListener('resize',function () {
		        myChartContainer();
		        myChart.resize();
	      })
    }
    function bar(json) {
	      let barDom = document.getElementById('riqi')
	      let myChartContainer = function () {
		      barDom.style.width = barDom.innerWidth+'px'
		      barDom.style.height = barDom.innerHeight+'px'
	      }
	      myChartContainer()
        let myChart = echarts.init(document.getElementById('riqi'))
        let xData = []
        let yData = []
        for(let i=0;i<json.length;i++){
            xData.push(json[i].alarm_time.substring(5,10))
            yData.push(json[i].num)
        }
        let option = {
            //提示框
            tooltip: {
                trigger: "axis",
            },
            color:['#06beff'],
            legend: {
                itemWidth:12,
                itemHeight:12,
                x:240,
                y:-6,
                textStyle:{//图例文字的样式
                    color:'#fff',
                    fontSize:12
                },
                data:[{
                    name:'变形',
                    icon:'rect',
                    color:'red',
                }],
            },
            grid: {
                top:'20%',
                left: '5%',
                right: '7%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: {
                type : 'category',
                show:true,
                data:xData,
                boundaryGap : true,//距离y轴是否有空隙
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#fff'
                    },
                },
                axisLabel:{
                    interval:0,
                    show:true,
                    color:'#fff',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                splitLine:{
                    show:false,//网格线
                },
            },
            yAxis: {
                name:'单位',
                nameTextStyle:{
                    fontSize:10
                },
                type : 'value',
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#fff'
                    },
                },
                axisLabel:{
                    color:'#fff',
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    show:false,
                },
            },
            series: [
                {
                    name: '变形',
                    type: 'bar',
                    stack:'健康情况',
                    barWidth: 12,
                    data: yData,
                    itemStyle: {
                        normal: {
	                        color: new echarts.graphic.LinearGradient(
		                        1, 0, 0, 1,
		                        [
			                        {offset: 0, color: '#ffaf34'},
			                        {offset: 0.3, color: '#efee31'},
			                        {offset: 1, color: '#ff824b'}
		                        ]
	                        ),

                            /*lineStyle: {
                                color: '#06beff',
                            },*/
                          areaStyle:
                            {type: 'default',
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(250,190,255,.9)'},
                                        {offset: 0.5, color: 'rgba(250,190,255,.4)'},
                                        {offset: 1, color: 'rgba(6,190,255,.1)'}
                                    ]
                                )
                            }
                        },

                    },
                },
            ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
	      window.addEventListener('resize',function () {
		      myChartContainer();
		      myChart.resize();
	      })
    }

    function getNowFormatDate() {
        var date = new Date(new Date()-6*24*3600*1000);
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    let ajax1 = $.ajax({
        type: 'get',
        async: false,
        cache: true,
        url: 'http://192.168.20.23:50001/zzcismp/user/login.shtml?username=admin&password=123456',
        dataType: 'jsonp',
        jsonp: "callback",
        success: function (json) {},

    })
    $.when(ajax1).done(function () {
        //top数据
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            data: {projectCode:37020010},
            url: 'http://192.168.20.23:50001/zzcismp/alarm/getDeviceAlarmGroupProjectCode.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                $('.top_gao').text(json[0].data_warning_num>=0&&json[0].data_warning_num<10
                    ?'0'+json[0].data_warning_num:json[0].data_warning_num)
                $('.top_yu').text(json[0].data_early_warning_num>=0&&json[0].data_early_warning_num<10
                    ?'0'+json[0].data_early_warning_num:json[0].data_early_warning_num)
                $('.top_yi').text(json[0].device_exception_num>=0&&json[0].device_exception_num<10
                    ?'0'+json[0].device_exception_num:json[0].device_exception_num)
            },
            error: function () {
                // alert('fail');
            }
        })
        //风力等数据
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            data: {projectCode:37020010},
            url: 'http://192.168.20.23:50001/zzcismp/alarm/getDeviceAlarmGroupProjectCodeAndDeviceType.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                if(json[0].alarm_info[2]&&json[0].alarm_info[2].level===0){
                    $('.huan .wind').addClass('green_qiu')
                }else if(json[0].alarm_info[2]&&json[0].alarm_info[2].level===1){
                    $('.huan .wind').addClass('yellow_qiu')
                }else if(json[0].alarm_info[2]&&json[0].alarm_info[2].level===2){
                    $('.huan .wind').addClass('red_qiu')
                }else if(json[0].alarm_info[2]==undefined){
                    $('.huan .shi').addClass('gray_qiu')
                }//风力
                if(json[0].alarm_info[3]&&json[0].alarm_info[3].level===0){
                    $('.huan .wen').addClass('green_qiu')
                }else if(json[0].alarm_info[3]&&json[0].alarm_info[3].level===1){
                    $('.huan .wen').addClass('yellow_qiu')
                }else if(json[0].alarm_info[3]&&json[0].alarm_info[3].level===2){
                    $('.huan .wen').addClass('red_qiu')
                }else if(json[0].alarm_info[3]==undefined){
                    $('.huan .shi').addClass('gray_qiu')
                }//温度
                if(json[0].alarm_info[4]&&json[0].alarm_info[4].level===0){
                    $('.huan .shi').addClass('green_qiu')
                }else if(json[0].alarm_info[4]&&json[0].alarm_info[4].level===1){
                    $('.huan .shi').addClass('yellow_qiu')
                }else if(json[0].alarm_info[4]&&json[0].alarm_info[4].level===2){
                    $('.huan .shi').addClass('red_qiu')
                }else if(json[0].alarm_info[4]==undefined){
                    $('.huan .shi').addClass('gray_qiu')
                }//湿度
                if(json[0].alarm_info[5]&&json[0].alarm_info[5].level===0){
                    $('.huan .yuliang').addClass('green_qiu')
                }else if(json[0].alarm_info[5]&&json[0].alarm_info[5].level===1){
                    $('.huan .yuliang').addClass('yellow_qiu')
                }else if(json[0].alarm_info[5]&&json[0].alarm_info[5].level===2){
                    $('.huan .yuliang').addClass('red_qiu')
                }else if(json[0].alarm_info[5]==undefined){
                    $('.huan .yuliang').addClass('gray_qiu')
                }//雨量
            },
            error: function () {
                // alert('fail');
            }
        })
        //异常统计上
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            data: {projectCode:37020010},
            url: 'http://192.168.20.23:50001/zzcismp/alarm/getDeviceAlarmGroupBuildCode.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                //console.log(json)
                setTimeout(()=>{line(json)},0)
            },
            error: function () {
                // alert('fail');
            }
        })
        //异常统计下
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            data: {projectCode:37020010,startDate:getNowFormatDate()},
            url: 'http://192.168.20.23:50001/zzcismp/alarm/getDeviceAlarmGroupDate.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                //console.log(json)
                setTimeout(()=>{bar(json)},0)
            },
            error: function () {
                // alert('fail');
            }
        })
    })

})(window)