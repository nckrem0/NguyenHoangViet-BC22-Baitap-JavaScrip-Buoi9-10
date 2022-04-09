function Validation(){
    this.kiemTraRong = function(value,errorID,msg){
        if (value === ""){
            getEle(errorID).innerHTML = msg ;
            getEle(errorID).style.display="block";
            return false
        }
        getEle(errorID).innerHTML = "" ;
        getEle(errorID).style.display="none";
        return true
    }

    this.kiemTraDoDaiKyTu = function(value,errorID,msg,min,max){
        if(value.trim().length >= min && value.trim().length <= max){
            // hợp lệ
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        // không hợp lệ
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }
    this.kiemTraChuoiKyTu = function(value,errorID,msg){
        var letter ="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$" ;
        if(value.match(letter)){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }
    this.kiemTraEmail = function(value,errorID,msg){
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (value.match(letter)){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }
    this.kiemTraPassWord = function(value,errorID,msg){
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/ ;
        if (value.match(letter)){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }
    this.kiemTraDate =function(value,errorID,msg){
        var letter = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/ ;
        if (value.match(letter)){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }
    
    this.numberonly = function(value,errorID,msg){
        var letter = /^[0-9]+$/;
        if(value.match(letter)){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }

    this.selectOption = function(value,errorID,msg){
        if (value === "Chọn chức vụ"){
            getEle(errorID).innerHTML = msg ;
            getEle(errorID).style.display="block";
            return false
        }
        getEle(errorID).innerHTML = "" ;
        getEle(errorID).style.display="none";
        return true
    }
    this.kiemTraGioLam = function(value,errorID,msg){
        if (80 <= value && value <= 200){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }

}
