<template>
  <div class="container">
      <div id="provinceMap"></div>
  </div>
</template>

<script>
import { setColor } from "../utils/uitls"
export default {
    data(){
        return{

        };
    },
    props:{
        cityName:{
            type:String,
        },
    },
    mounted(){
        // 获取数据
        this.$api.ncovcity().then((res) => {
            console.log(res.data);
            var cityData = []
            for (var i = 0; i < res.data.newslist.length; i++) {
                if (res.data.newslist[i].provinceShortName === this.cityName) {
                    for ( var j = 0;j < res.data.newslist[i].cities.length;j++){
                        if(res.data.newslist[i].provinceShortName === '北京'){
                            var temp = {
                                name:res.data.newslist[i].cities[j].cityName,
                                value:res.data.newslist[i].cities[j].currentConfirmedCount,
                                itemStyle:{
                                    normal:{
                                        areaColor:setColor(res.data.newslist[i].cities[j].currentConfirmedCount)
                                    } 
                                }
                            }
                        }else{
                            var temp = {
                                name:res.data.newslist[i].cities[j].cityName + "市",
                                value:res.data.newslist[i].cities[j].currentConfirmedCount,
                                itemStyle:{
                                    normal:{
                                        areaColor:setColor(res.data.newslist[i].cities[j].currentConfirmedCount)
                                    } 
                                }
                            }
                        }
                        cityData.push(temp)
                    } 
                }
            }
            this.$charts.provinceMap("provinceMap", this.cityName, cityData);
        });
    }

}
</script>

<style>
#provinceMap{
    width:100%;
    height: 500px;
}
</style>