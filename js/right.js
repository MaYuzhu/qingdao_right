(function (window) {
    //let url = 'http://192.168.20.23:50001'
    let url = 'http://36.110.66.214:50001'
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
                x:'80%',
                y:-6,
                textStyle:{//图例文字的样式
                    color:'#fff',
                    fontSize:12
                },
                data:[{
                    name:'异常',
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
                    rotate:40,
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
                    name: '异常',
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
                x:'80%',
                y:-6,
                textStyle:{//图例文字的样式
                    color:'#fff',
                    fontSize:12
                },
                data:[{
                    name:'异常',
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
                    rotate:40,
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
                    name: '异常',
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

    /*window.addEventListener('resize',function () {
        location.reload()窗口大小改变强制刷新
    })*/
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
        url: url + '/zzcismp/user/login.shtml?username=admin&password=123456',
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
            url: url + '/zzcismp/alarm/getDeviceAlarmGroupProjectCode.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                //console.log(json)
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
            url: url + '/zzcismp/alarm/getDeviceAlarmGroupProjectCodeAndDeviceType.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                if(json[0].alarm_info.filter(a=>a.type=='L')[0].level===1){
                    $('.huan .wind').addClass('green_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='L')[0].level===2){
                    $('.huan .wind').addClass('yellow_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='L')[0].level===3){
                    $('.huan .wind').addClass('red_qiu')
                }else {
                    $('.huan .wind').addClass('gray_qiu')
                }//风力
                if(json[0].alarm_info.filter(a=>a.type=='T')[0].level===1){
                    $('.huan .wen').addClass('green_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='T')[0].level===2){
                    $('.huan .wen').addClass('yellow_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='T')[0].level===3){
                    $('.huan .wen').addClass('red_qiu')
                }else {
                    $('.huan .wen').addClass('gray_qiu')
                }//温度
                if(json[0].alarm_info.filter(a=>a.type=='K')[0]&&json[0].alarm_info.filter(a=>a.type=='K')[0].level===1){
                    $('.huan .shi').addClass('green_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='K')[0]&&json[0].alarm_info.filter(a=>a.type=='K')[0].level===2){
                    $('.huan .shi').addClass('yellow_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='K')[0]&&json[0].alarm_info.filter(a=>a.type=='K')[0].level===3){
                    $('.huan .shi').addClass('red_qiu')
                }else {
                    $('.huan .shi').addClass('gray_qiu')
                }//湿度
                if(json[0].alarm_info.filter(a=>a.type=='F')[0]&&json[0].alarm_info.filter(a=>a.type=='F')[0].level===1){
                    $('.huan .yuliang').addClass('green_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='F')[0]&&json[0].alarm_info.filter(a=>a.type=='F')[0].level===2){
                    $('.huan .yuliang').addClass('yellow_qiu')
                }else if(json[0].alarm_info.filter(a=>a.type=='F')[0]&&json[0].alarm_info.filter(a=>a.type=='F')[0].level===3){
                    $('.huan .yuliang').addClass('red_qiu')
                }else {
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
            url: url + '/zzcismp/alarm/getDeviceAlarmGroupBuildCode.shtml',
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
            url: url + '/zzcismp/alarm/getDeviceAlarmGroupDate.shtml',
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
        //监控有问题的玻璃图片
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            data: {projectCode:37020010},
            url: url + '/zzcismp/alarm/getDeviceAlarmDetail.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                let arrImage = []
                for(let i=0;i<json.length;i++){
                    //http://36.110.66.214:50001/zzcismp/pic/20180803152732.png
                    if(json[i].img_url!==null){
                        arrImage.push(json[i].img_url)
                    }else{
                        arrImage.push('/pic/20180803152732.png')
                    }
                }
                for(let i=0;i<arrImage.length;i++){
                    $('.swiper-slide')[i].innerHTML = `<img style='width:100%;height:128px;'
                                src='http://36.110.66.214:50001/zzcismp${arrImage[i]}'>`
                    //$('.swiper-pagination')[0].innerHTML += '<span class="swiper-pagination-bullet"></span>'
                }
	            var mySwiper = new Swiper ('.swiper-container', {
		            direction: 'horizontal',
		            loop: true,

		            // 如果需要分页器
		            pagination: {
			            el: '.swiper-pagination',
		            },

		            // 如果需要前进后退按钮
		            navigation: {
			            nextEl: '.swiper-button-next',
			            prevEl: '.swiper-button-prev',
		            },

		            // 如果需要滚动条
		            scrollbar: {
			            el: '.swiper-scrollbar',
		            },
	            })
            },
            error: function () {
                // alert('fail');
            }
        })
    })
    //点击事件调用c/s函数
    $('.count li').on('click',function () {
        BtnClick()
    })
    function BtnClick (){
        if (typeof jsEvent == "undefined") {
            //alert("jsEvent参数未初始化")
            return;
        }
        jsEvent.MessageText = "收到js消息";
        jsEvent.ShowAlarmList();
    }

})(window)