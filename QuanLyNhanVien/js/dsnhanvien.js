function DanhSachNhanVien (){
    this.arr = [];
    // this.addNV = function (){};
    this.addNV = function (nv){
        console.log("llll",nv);
        this.arr.push(nv);
    };
    this.timViTriNhanVien = function(userName){
        var index = -1 ;
        for (var i = 0 ; i < this.arr.length; i++){
            var nhanVien = this.arr[i];
            if(nhanVien.userName == userName){
                index = i ;
                break
            }
        }
        return index;
    };

    this._xoaNV = function(userName){
        
        var index = this.timViTriNhanVien(userName);
        if(index !== -1){
            this.arr.splice(index, 1);
        }
    };
    this.changeNV = function (userName){
        var index = this.timViTriNhanVien(userName);
        if (index !== -1) {
            var nhanVien = this.arr[index];
            return nhanVien ;
        }
        return null ;
    };

    this.updateNV = function (nhanVien){
        var index = this.timViTriNhanVien(nhanVien.userName)
        if(index !== -1){
            this.arr[index] = nhanVien ;
        }
    }

    this.searchNV = function (keywords){
        var mangTimKiem =[] ;
        for (var i = 0; i < this.arr.length; i++){
            var nhanVien = this.arr[i];
            if(nhanVien.tenSv.toLowerCase().indexOf(keywords.toLowerCase()) !== -1 ){
                mangTimKiem.push(nhanVien);
            }
        }
        return mangTimKiem;
    };
    // this.updateStaff = function(staff) {
    //     for (var i = 0; i < this.arr.length; i++){
    //         if(this.arr[i].userName == staff.userName){
    //             this.arr[i] = staff;
    //         }
    //     }
    // }
}