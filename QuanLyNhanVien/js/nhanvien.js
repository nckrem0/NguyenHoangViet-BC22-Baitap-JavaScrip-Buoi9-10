function NhanVien(
    _userName,
    _name,
    _email,
    _password,
    _workDay,
    _basicSalary,
    _office,
    _workTime,
){
    this.userName = _userName ;
    this.name = _name ;
    this.email = _email ;
    this.password = _password ;
    this.workDay = _workDay ;
    this.basicSalary = _basicSalary ;
    this.office = _office ;
    this.workTime = _workTime ;
    this.totalSalary = 0 ;
    this.xepLoai = "Trung Bình";

    this.salarytotal = function (){
        if (this.office === "Sếp"){
            this.totalSalary = this.basicSalary * 3 ;  
        }else if (this.office =="Trưởng phòng"){
            this.totalSalary = this.basicSalary * 2 ;
        }else {
            this.totalSalary = this.basicSalary ;
        }
    };
    this.LoaiNV = function(){ 
        console.log(this.workTime);
        if(192 <= this.workTime){
            this.xepLoai = " Xuất Sắc" ;
        }else if (176 <= this.workTime  && this.workTime < 192){
            this.xepLoai = "Loại Giỏi";
        }else if (160 <= this.workTime  && this.workTime < 176){
            this.xepLoai =  "Loại Khá";
        }
    };

}
    
    
    

