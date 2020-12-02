<template>
    <div class="home">
        <Header />
        <Covid19Info :covid19Info="covid19Info"/>
        <CaseNum :caseInfo="caseInfo"/>
        <Map />
    </div>
</template>

<script>
import api from "../api";
import Header from "../components/Head";
import Covid19Info from "../components/Covid19Info";
import CaseNum from "../components/CaseNum"
import Map from "../components/Map"

export default {
    name: "Home",
    data() {
        return {
            // 病毒信息
            covid19Info: {
                note1: "",
                note2: "",
                note3: "",
                remark1: "",
                remark2: "",
                remark3: "",
            },
            // 病例信息
            caseInfo:{
              modifyTime:"",  // 时间
              currentConfirmedCount:"", // 现存确诊
              currentConfirmedIncr:"", // 现存确诊较昨日
              seriousCount:"",// 现存无症状人数
              seriousIncr:"", // 现存无症状人数较昨日
              suspectedCount:"",// 累计境外输入人数
              suspectedIncr:"", // 新增境外输入人数
              confirmedCount:"", // 累计确诊人数
              confirmedIncr:"", // 累计确诊人数较昨日
              deadCount:"", // 累计死亡
              deadIncr:"", // 累计死亡较昨日
              curedCount:"", // 累计治愈
              curedIncr:"" // 累计治愈较昨日
            }
        };
    },
    components: {
        Header,
        Covid19Info,
        CaseNum,
        Map
    },
    mounted() {
        api.ncov().then((res) => {
            console.log(res.data);
            // 病毒信息
            this.covid19Info.note1 = res.data.newslist[0].desc.note1;
            this.covid19Info.note2 = res.data.newslist[0].desc.note2;
            this.covid19Info.note3 = res.data.newslist[0].desc.note3;
            this.covid19Info.remark1 = res.data.newslist[0].desc.remark1;
            this.covid19Info.remark2 = res.data.newslist[0].desc.remark2;
            this.covid19Info.remark3 = res.data.newslist[0].desc.remark3; 
            // 病例信息
            this.caseInfo.modifyTime = res.data.newslist[0].desc.modifyTime; 
            this.caseInfo.currentConfirmedCount = res.data.newslist[0].desc.currentConfirmedCount; 
            this.caseInfo.currentConfirmedIncr = res.data.newslist[0].desc.currentConfirmedIncr; 
            this.caseInfo.seriousCount = res.data.newslist[0].desc.seriousCount; 
            this.caseInfo.seriousIncr = res.data.newslist[0].desc.seriousIncr; 
            this.caseInfo.suspectedCount = res.data.newslist[0].desc.suspectedCount; 
            this.caseInfo.suspectedIncr = res.data.newslist[0].desc.suspectedIncr; 
            this.caseInfo.confirmedCount = res.data.newslist[0].desc.confirmedCount; 
            this.caseInfo.confirmedIncr = res.data.newslist[0].desc.confirmedIncr; 
            this.caseInfo.deadCount = res.data.newslist[0].desc.deadCount; 
            this.caseInfo.deadIncr = res.data.newslist[0].desc.deadIncr; 
            this.caseInfo.curedCount = res.data.newslist[0].desc.curedCount; 
            this.caseInfo.curedIncr = res.data.newslist[0].desc.curedIncr; 
        });
    },
};
</script>
