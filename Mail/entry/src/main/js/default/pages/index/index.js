export default {
    data: {
        title: "",
        textareadata:"",
        continueAbilityData: {
            textareadata:"",
            remoteData1: 'self define continue data for distribute',
            remoteData2: {
                item1: 0,
                item2: true,
                item3: 'inner string'
            },
        }
    },
    textareaChange(e){//e为事件控件
        this.continueAbilityData.textareadata=e.text;
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    tryContinueAbility: async function() {
        // 应用进行迁移
        let result = await FeatureAbility.continueAbility();
        console.info("result:" + JSON.stringify(result));
    },
    onStartContinuation() {
        // 判断当前的状态是不是适合迁移
        console.info("onStartContinuation");
        return true;
    },
    onCompleteContinuation(code) {
        // 迁移操作完成，code返回结果
        console.info("CompleteContinuation: code = " + code);
    },
    onSaveData(saveData) {
        // 数据保存到savedData中进行迁移。
        var data = this.continueAbilityData;
        Object.assign(saveData, data)
    },
    onRestoreData(restoreData) {
        // 收到迁移数据，恢复。
        this.continueAbilityData = restoreData;
        this.textareadata=this.continueAbilityData.textareadata;
    }
}
