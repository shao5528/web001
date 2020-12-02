import echarts from "echarts"

// 自己挂在echarts
const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    // 加载地图
                    chinaMap: function (id,data) {
                        this.chart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                // 是否可点击
                                triggerOn:"click",
                                //点击可以跳转
                                enterable:true,
                                formatter(data) {   
                                    console.log(data);
                                    return `<a style='color:#fff' href='/#/city/${data.name}'><div><p>${data.seriesName}:${data.name}</p><p>现存确证:${data.value}例</p></div></a>`
                                }
                            },
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china',
                                // 是否可以缩放
                                roam: false,
                                // 缩放的比例
                                zoom: 1.2, 
                                aspectScale: 0.75,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize:8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                // data:[
                                //     {name:"北京",value:191,itemStyle:{ normal:{ areaColor:"#0000ff" } }},
                                //     {name:"内蒙古",value:100,itemStyle:{ normal:{ areaColor:"#0000ff" } }},
                                //     {name:"新疆",value:100,itemStyle:{ normal:{ areaColor:"#0000ff" } }},
                                // ]
                                data:data
                            }]
                        };
                        this.chart.setOption(option);
                    },
                    //加载省的地图
                    provinceMap:function(id,cityName){
                        this.chart = echarts.init(document.getElementById(id));
                        var option ={
                            series: [{
                                type: "map",
                                map: cityName,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        }
                        this.chart.setOption(option);
                    } 
                }
            }
        }
    })
}

export default install