export default {
    data: {
        title: "",
        text:"用户名1"
    },
    getInputInfo(e){
        console.info("e: "+e);
        this.text=e.text;
        console.log("user name is "+e.text);
    },
    getSelectInfo(e){
        console.info("SelectInfo is "+e.newValue);
        this.text=e.newValue;
    },
    getGender(e){
        if(e.checked){
            console.info("gender is "+e.value);
            this.text=e.value;
        }
    },
    onInit() {
        this.title = this.$t('strings.world');
    }
}




