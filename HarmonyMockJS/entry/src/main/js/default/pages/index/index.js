var currentQuestion=1;
export default {
    data:{
        continueAbilityData:{
            remotecurrenttime:0
        },
        videoshow:"",
        question:"",
        question1:"HarmonyOS是一款面向全场景的分布式操作系统",
        question2:"HarmonyOS应用工程是否支持多Module结构？",
        question3:"DevEco Studio只能使用JS语言开发应用？",
        answer:[true,true,false],
        checkState:[null,null,null],
        correctSum:0,
        wrongSum:0,
        trueRadioState:false,
        falseRadioState:false,
    },
    onInit(){
        //初始化当前问题
        this.question=this.question1;
    },
    onActive(){},
    switchPreviousQuestion(){
        if(currentQuestion==2){
            this.question=this.question1;
            currentQuestion--;
        }
        else if(currentQuestion==3){
            this.question=this.question2;
            currentQuestion--;
        }
        if (this.checkState[currentQuestion-1]==true) {
            this.trueRadioState=true;
            this.falseRadioState=false;
        }else if (this.checkState[currentQuestion-1]==false) {
            this.trueRadioState=false;
            this.falseRadioState=true;
        }else if (this.checkState[currentQuestion-1]==null) {
            this.trueRadioState=false;
            this.falseRadioState=false;
        }
    },
    switchNextQuestion(){
        if(currentQuestion==1){
            this.question=this.question2;
            currentQuestion++;
        } else if(currentQuestion==2){
            this.question=this.question3;
            currentQuestion++;
        }
        if (this.checkState[currentQuestion-1]==true) {
            this.trueRadioState=true;
            this.falseRadioState=false;
        }else if (this.checkState[currentQuestion-1]==false) {
            this.trueRadioState=false;
            this.falseRadioState=true;
        }else if (this.checkState[currentQuestion-1]==null) {
            this.trueRadioState=false;
            this.falseRadioState=false;
        }
    },
    radioChange(inputValue){
        this.checkState[currentQuestion-1]=inputValue;
        if (inputValue==true) {
            this.trueRadioState=true;
            this.falseRadioState=false;
        }else if (inputValue==false) {
            this.trueRadioState=false;
            this.falseRadioState=true;
        }
    },
    showDialog(){
        for (var i = 0; i < 3; i++) {
            if (this.checkState[i]==this.answer[i]) {
                this.correctSum++;
            }else if (this.checkState[i]!=null) {
                this.wrongSum++;
            }
        }
        this.$element("dialogId").show();
    },
    closeDialog(){
        this.correctSum=0;
        this.wrongSum=0;
        this.$element("dialogId").close();
    },
    cancelDialog(){
        this.correctSum=0;
        this.wrongSum=0;
    },
    reAnswer(){
        for (var i = 0; i < 3; i++) {
            this.checkState[i]=null;
        }
        this.question=this.question1;
        currentQuestion=1;
        this.trueRadioState=false;
        this.falseRadioState=false;
        this.correctSum=0;
        this.wrongSum=0;
        this.$element("dialogId").close();
    },
    timeupdateCallback:function(e){
        //“:function”
        this.continueAbilityData.remotecurrenttime=e.currenttime;
    },
    startRemoteFA:async function(){
        let result=await FeatureAbility.continueAbility();
        //“let”:
        console.info("result:"+JSON.stringify(result));
    },
    onStartContinuation(){
        return true;
    },
    onCompleteContinuation(code){
        this.videoshow="none";
        console.info("nCompleteContinuation:code=="+code);
    },
    onSaveData(saveData){
        var data=this.continueAbilityData;
        Object.assign(saveData,data);
    },
    onRestoreData(restoredata){
        this.continueAbilityData=restoredata;
        this.$element("videoId").requestFullscreen({screenOrientation:"default"});
    },
    startCallback:function(){
        this.$element("videoId").setCurrentTime({currenttime:this.continueAbilityData.remotecurrenttime});
    }
}
