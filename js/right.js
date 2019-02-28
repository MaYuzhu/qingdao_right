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
                name:'单位(个)',
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
                minInterval:1
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
                name:'单位(个)',
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
                minInterval:1
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

    window.addEventListener('resize',function () {
        location.reload()  //窗口大小改变强制刷新
    })

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
    function getData() {
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

                //风力 温度 值 max
                var feng2 = json[0].alarm_info.filter(a=>a.type=='L')[0].max_value
                $('.tianqi_feng').text(feng2+'级')

                var wen = json[0].alarm_info.filter(a=>a.type=='T')[0].max_value
                $('.tianqi_wen').text(wen+'℃')

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
        /*$.ajax({
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
        })*/

        //监控有问题的玻璃图片
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            data: {projectCode:37020010,deviceType:'M'},
            url: url + '/zzcismp/alarm/getDeviceAlarmDetail.shtml',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (json) {
                //console.log(json.data)
                var newArr = json.data.filter(item => item.sub_type)
                //console.log(newArr)
                let arrImage = []
                for(let i=0;i<newArr.length;i++){
                    //http://36.110.66.214:50001/zzcismp/pic/20180803152732.png
                    arrImage.push(newArr[i].img_url)
                }
                $('.swiper-wrapper').empty()
                for(let i=0;i<arrImage.length;i++){
                    /*$('.swiper-slide')[i].innerHTML = `<img style='width:100%;height:128px;'
                                src='http://36.110.66.214:50001/zzcismp${arrImage[i]}'>`*/

                    $('.swiper-wrapper').append(`<div class="swiper-slide">
                                <img style='width:100%;height:128px;' src='${url}/zzcismp${arrImage[i]}'>
                                </div>`)
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

        //异常统计下 消息展示
        messageUpdate()
        function messageUpdate() {
            $.ajax({
                type: 'get',
                async: true,
                cache: true,
                //data: {projectCode:37020010},
                url: url + '/zzcismp/alarm/getProjDevAlarmData.shtml?offset=0&limit=10&buildcode=0&handle_status=-1',
                dataType: 'jsonp',
                jsonp: "callback",
                success: function (json) {
                    //console.log(json.rows)
                    var message_length = json.rows.length
                    $('#message ul').empty()
                    for(var i=0;i<message_length;i++){
                        $('#message>ul').append(`<li class="tooltip"
                        title=${json.rows[i].alarm_reason}${json.rows[i].alarm_time.substring(0,10)}/${json.rows[i].alarm_time.substring(11)}>
                            <span>${json.rows[i].alarm_reason}</span>
                            <span>${json.rows[i].alarm_time}</span>
                        </li>`)
                    }
                    for(var i=0;i<message_length;i++){
                        $('#message>ul').append(`<li class="tooltip"
                        title=${json.rows[i].alarm_reason}${json.rows[i].alarm_time}>
                            <span>${json.rows[i].alarm_reason}</span>
                            <span>${json.rows[i].alarm_time}</span>
                        </li>`)
                    }
                    /*for(var i=0;i<10;i++){
                        $('#message>ul').append(`<li>
                            <span>第${i+1}行</span>
                            <span>2019.2.27</span>
                        </li>`)
                    }
                    for(var i=0;i<10;i++){
                        $('#message>ul').append(`<li>
                            <span>第${i+1}行</span>
                            <span>2019.2.27</span>
                        </li>`)
                    }*/
                    //$('.tooltip').toolTip();

                    //消息移入
                    var liC = $("#message>ul>li").length
                    //消息滚动
                    //textMove()
                    var index = 0
                    var timeTextMove
                    var minSetTime
                    function textMove() {
                        clearTimeout(minSetTime)
                        if(index >= liC/2){
                            index = 0
                            $('#message ul').css({
                                "transition": 'none',
                                "transform": 'translate3d(0,0,0)'
                            })
                        }
                        minSetTime = setTimeout(function () {
                            index += 1
                            $('#message ul').css({
                                "transition": `.5s`,
                                "transform": `translate3d(0,-${index*25}px,0)`
                            })
                        },20)

                        timeTextMove = setTimeout(textMove,500)

                    }

                    /*textMove()
                    var index = 0
                    var timeTextMove
                    function textMove() {
                        timeTextMove = setInterval(function () {
                            if(index >= 10){
                                index = 0
                                $('#message ul').css({
                                    "transition": 'none',
                                    "transform": `translate(0,-${index*25}px)`
                                })
                            }
                            setTimeout(function () {
                                index++
                                $('#message ul').css({
                                    "transition": `.5s`,
                                    "transform": `translate(0,-${index*25}px)`
                                })
                            },20)
                        },500)
                    }*/

                    $('#message').hover(function(){
                        //console.log('移入');
                        //clearTimeout(timeTextMove)
                        $('.mask').hide()
                    },function(){
                        //console.log('移出');
                        //textMove()
                        $('.mask').show()
                    });
                },
                error: function () {
                    // alert('fail');
                }
            })
        }

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
    $.when(ajax1).done(getData())
    //点击事件调用c/s函数
    for(let i=1;i<=3;i++){
        $(`.count>ul>:nth-child(${i})`).on('click',function () {
            BtnClick(i)
        })
    }

    function BtnClick (x){
        if (typeof jsEvent == "undefined") {
            //alert(`jsEvent参数未初始化${x}`)
            return;
        }
        jsEvent.MessageText = "收到js消息";
        jsEvent.ShowAlarmList(x);
    }

    //天气预报  免费接口
    tianqi()
    function tianqi(){
        $.ajax({
            type: 'get',
            async: true,
            cache: true,
            //url:'http://www.weather.com.cn/data/sk/101110101.html',
            url: 'http://t.weather.sojson.com/api/weather/city/101120201',
            dataType: 'json',
            success: function (json) {
                //console.log(json)
                var shi = json.data.shidu
                $('.tianqi_shi').text(shi)

                var tian = json.data.forecast[0].type
                $('.tianqi_tian').text(tian)
            },
        })
        setTimeout(tianqi,1000*60*60*24)

    }

    //消息接口
    //http://36.110.66.214:50001/zzcismp/alarm/getProjDevAlarmData.shtml?offset=0&limit=10&buildcode=0&handle_status=-1


})(window)