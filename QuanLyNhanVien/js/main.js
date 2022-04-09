//Tạo đối tượng dsnv từ lớp đối tượng DanhSachNhanVien
var dsnv = new DanhSachNhanVien();

// Tạo đối tượng validation từ lớp đối tượng
var validation = new Validation();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNhanVien() {
    // DOM để lấy giá trị người dùng nhập vào
    var username = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var workDay = getEle("datepicker").value;
    var basicSalary = getEle("luongCB").value;
    var office = getEle("chucvu").value;
    var workTime = getEle("gioLam").value;

    // tạo flag (cờ)
    var isValid = true;

    //Validation username
    isValid &=
        validation.kiemTraRong(username, "divErrorUserName", "(*) Tài Khoản Không Được Để Trống") &&
        validation.kiemTraDoDaiKyTu(username, "divErrorUserName", "(*) Độ Dài Ký Tự Từ 4 Đến 6", 4, 6);

    //Validation Name
    isValid &=
        validation.kiemTraRong(name, "divErrorName", "(*) Họ và Tên Không Được Để Trống") &&
        validation.kiemTraChuoiKyTu(name, "divErrorName", "(*) Kiểm Tra Lại Chuỗi Kỹ Tự");

    //Validation Email
    isValid &=
        validation.kiemTraRong(email, "divErrorEmail", "(*) Email Không Được Để Trống") &&
        validation.kiemTraEmail(email, "divErrorEmail", "(*) Email Không Đúng Định Dạng");

    //Validation Password
    isValid &=
        validation.kiemTraRong(password, "divErrorPassWord", "(*) Mật Khẩu Không Được Để Trống") &&
        validation.kiemTraPassWord(
            password,
            "divErrorPassWord",
            "(*) Mật Khẩu chứa ít nhất 1 chữ in hoa,1 chữ thường , 1 số , 1 ký tự đặc biệt"
        ) &&
        validation.kiemTraDoDaiKyTu(password, "divErrorPassWord", "(*) Độ Dài Ký Tự Từ 6 Đến 10", 6, 10);

    //Validation WorkDay
    isValid &=
        validation.kiemTraRong(workDay, "divErrorWorkDay", "(*) Ngày Làm Việc Không Được Để Trống") &&
        validation.kiemTraDate(workDay, "divErrorWorkDay", "(*) Nhập Đúng định dạng mm/dd/yyyy");

    //Validation Lương Căn Bản
    isValid &=
        validation.kiemTraRong(basicSalary, "divErrorBasicSalary", "(*) Lương Căn Bản Không Được Để Trống") &&
        validation.kiemTraDoDaiKyTu(
            basicSalary,
            "divErrorBasicSalary",
            "(*) Lương cơ bản 1 000 000 - 20 000 000",
            7,
            8
        ) &&
        validation.numberonly(basicSalary, "divErrorBasicSalary", "(*) Vui lòng chỉ nhập số");

    //Validation Chức Vụ
    isValid &= validation.selectOption(office, "divErrorOffice", "(*) Chức Vụ Không Được Để Trống");

    //Validation Thời gian làm việc
    isValid &=
        validation.kiemTraRong(workTime, "divErrorWorkTime", "(*) Thời Gian Làm Việc Không Được Để Trống") &&
        validation.numberonly(workTime, "divErrorWorkTime", "(*) Vui lòng chỉ nhập số") &&
        validation.kiemTraGioLam(workTime, "divErrorWorkTime", "(*) Vui lòng chỉ nhập số từ 80 -200");

    //check form
    if (!isValid) return null;

    // Tạo lớp đối tượng nhanVien từ lớp đối tượng NhanVien
    var nhanVien = new NhanVien(username, name, email, password, workDay, basicSalary, office, workTime);
    nhanVien.salarytotal(), nhanVien.LoaiNV();
    return nhanVien;
}

// Thêm Nhân Viên

getEle("btnThemNV").addEventListener("click", function () {
    var nhanVien = layThongTinNhanVien();
    if (nhanVien) {
        dsnv.addNV(nhanVien);
        taoBang(dsnv.arr);
        cleardata();
    }
    setLocalStorage();

    // dsnv.addNV(nhanVien);
    // taoBang(dsnv.arr);

    // console.log(nhanVien);
});

getEle("btnThem").addEventListener("click", function () {
    cleardata();
});

function cleardata() {
    getEle("tknv").value = "";
    getEle("tknv").disabled = false;

    getEle("name").value = "";
    getEle("email").value = "";
    getEle("password").value = "";
    // getEle("datepicker").value = new Date();
    getEle("luongCB").value = "";
    getEle("chucvu").value = "";
    getEle("gioLam").value = "";
}

function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var nhanVien = arr[i];
        content += `
        <tr>
            <td>${nhanVien.userName}</td>
            <td>${nhanVien.name}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.workDay}</td>
            <td>${nhanVien.office}</td>
            <td>${nhanVien.totalSalary}</td>
            <td>${nhanVien.xepLoai}</td>
            <td>
                <button class = "btn btn-warning"onclick = "suaNV('${nhanVien.userName}')" data-toggle="modal" data-target="#myModal"> Sửa </button>
                <button class = "btn btn-danger"onclick = "xoaNV('${nhanVien.userName}')"> Xoá </button>
            </td>
        </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(userName) {
    dsnv._xoaNV(userName);
    taoBang(dsnv.arr);
    setLocalStorage();
}

function suaNV(userName) {
    var nhanVien = dsnv.changeNV(userName);
    if (nhanVien) {
        getEle("tknv").value = nhanVien.userName;
        getEle("tknv").disabled = true;

        getEle("name").value = nhanVien.name;
        getEle("email").value = nhanVien.email;
        getEle("password").value = nhanVien.password;
        getEle("datepicker").value = nhanVien.workDay;
        getEle("luongCB").value = nhanVien.basicSalary;
        getEle("chucvu").value = nhanVien.office;
        getEle("gioLam").value = nhanVien.workTime;
    }
}

// Tìm kiếm nhân viên
getEle("searchName").addEventListener("keyup", function () {
    var keywords = getEle("searchName").value;
    var mangTimKiem = dsnv.searchNV(keywords);
    taoBang(mangTimKiem);
    setLocalStorage();
});

getEle("btnCapNhat").addEventListener("click", function () {
    // lấy thông tin sinh viên mới nhất từ các thẻ input khi người dùng sửa
    var nhanVien = layThongTinNhanVien();
    // dsnv.updateStaff(nhanVien);
    console.log(nhanVien);
    if (nhanVien) {
        dsnv.updateNV(nhanVien);
        taoBang(dsnv.arr);
        setLocalStorage();
    }
});

function setLocalStorage() {
    //chuyển data từ JSON => string
    var dataString = JSON.stringify(dsnv.arr);

    // Lưu xuóng localStorage
    localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
    var data = localStorage.getItem("DSNV");
    if (data) {
        // Chuyển từ String => JSON
        var dataJson = JSON.parse(data);
        dsnv.arr = dataJson;
        taoBang(dsnv.arr);
    }
}
