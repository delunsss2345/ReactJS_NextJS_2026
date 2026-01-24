const tinhTienBao = (giaTriHoaDon) => {
    if(!giaTriHoaDon) {
        console.log('Gia tri phai ton tai hoac lon hon 0') ; return ; 
    }
    let tip = giaTriHoaDon >= 50 && giaTriHoaDon <= 300 ? 0.15 :  0.2 ;   
    return tip * giaTriHoaDon;
}

const tongTienChiTieu = (giaTriHoaDon ) => {
    const tip =  tinhTienBao(giaTriHoaDon) ; 
    const sum = giaTriHoaDon + tip ; 
    return `Hóa đơn là ${giaTriHoaDon}, tiền boa là ${tip}, và tổng cộng là ${sum}`
}
 

//Dữ liệu 1: Kiểm tra với các giá trị hóa đơn 275, 40 và 430
console.log(tongTienChiTieu(275)) ;
console.log(tongTienChiTieu(40)) ; 
console.log(tongTienChiTieu(430)) ; 

