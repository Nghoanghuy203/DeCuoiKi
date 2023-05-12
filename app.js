var data=[]

function add() {
    
    var item_maBenhNhan = document.querySelector("#maBN").value
    var item_matKhau = document.querySelector("#password").value
    var item_ngayKham = document.querySelector("#date").value
    var cb1 = document.querySelector("#chkbox1")
    var cb2 = document.querySelector("#chkbox2")
    var cb3 = document.querySelector("#chkbox3")
    var item_phuThu = getPhuThu(cb1,cb2,cb3)
    var item_chuyenKhoa = document.querySelector("#khoa").value
    if (checkEmpty(item_maBenhNhan)) {
        alert("Thông tin các trường có dấu * là bắt buộc nhập!")
        return;
    }   
    if (checkEmpty(item_matKhau)) {
        alert("Thông tin các trường có dấu * là bắt buộc nhập!")
        return;
    }  
    if (checkEmpty(item_ngayKham)) {
        alert("Thông tin các trường có dấu * là bắt buộc nhập!")
        return;
    }   
    if (!chechMaBenhNhan(item_maBenhNhan)) {
        alert("Mã bệnh nhân có định dạng BN-YYYYY, trong có BN cố định, YYYYY là 5 chữ số ")
        return;
    }
    if (!checkMatKhau(item_matKhau)) {
        alert("Mật khẩu chứa từ 6 ký tự bất kỳ trở lên")
        return;
    }
    if (!checkNgayKham(item_ngayKham)) {
        alert("Ngày khám phải sau ngày hiện tại")
        return;
    }
    var item = {
        maBenhNhan : item_maBenhNhan,
        matKhau : item_matKhau,
        ngayKham : item_ngayKham,
        phuThu : item_phuThu,
        chuyenKhoa : item_chuyenKhoa
    }

    data.push(item)
    render()

    document.querySelector("#maBN").value=""
    document.querySelector("#password").value=""
    document.querySelector("#date").value=""
}

function render() {
    table = ``
    for (let i = 0; i < data.length; i++) {
        table += `
        <tr>
        <td>${i+1}</td>
        <td>${data[i].maBenhNhan}</td>
        <td>${data[i].matKhau}</td>
        <td>${data[i].ngayKham}</td>
        <td>${data[i].phuThu}</td>
        <td>${data[i].chuyenKhoa}</td>
    </tr>`
    }
    document.getElementById("render").innerHTML=table
}

let getPhuThu = (cb1, cb2, cb3)=> {
    var value=0;
    if (cb1.checked) value+=500000
    if (cb2.checked) value+=500000
    if (cb3.checked) value+=500000
    return value
}

function checkEmpty(input) {
    if (input==="") return true;
    return false;
}

function chechMaBenhNhan(input) {
    let re = /BN\-\d{6}/g
    return re.test(input)
}

function checkMatKhau(input) {
    let re = /\w{6,}/g
    return re.test(input)
}
function checkNgayKham(input) {
    var today = new Date()
    return today<=new Date(input)
}
