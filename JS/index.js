$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
    function kiemtrahoten(){
        let maukt = /^[A-Z]{1}([a-z]+)(\s{1}[A-Z]{1}([a-z]+)){1,}$/;
        if($("#name").val()==""){
            tbName.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#name").val())==true)
            {
                tbName.innerText = "OK";
                return true;
            }
            else{
                tbName.innerText = "Sai định dạng";
                return false;
            }
        }
    }
    $("#name").blur(kiemtrahoten);
    function kiemtraAo(){
        let maukt = /([0-9]+)$/;
        var ao = $("#ao").val();
        if($("#ao").val()==""){
            tbAo.innerText = "Không được để trống";
            return false;
        }
        console.log(ao)
        console.log(typeof(parseInt(ao)))
        if(maukt.test(ao)==true){
            
            if(parseInt(ao) <=20 && parseInt(ao) >= 1)
            {
                tbAo.innerText = "OK";
                return true;
            }
            else{
                tbAo.innerText = "từ 1 đến 20";
                return false;
            }
        }
        else{
            tbAo.innerText='Không đúng định dạng';
        }
    }
    $("#ao").blur(kiemtraAo);
    function kiemtrdiachi(){
        let maukt=/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#DC").val()==""){
            tbDC.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#DC").val())==true)
            {
                tbDC.innerText = "OK";
                return true;
            }
            else{
                tbDC.innerText = "mỗi ký tự đầu viết hoa ";
                return false;
            }
        }
    }
    $("#DC").blur(kiemtrdiachi);
    function kiemtraNTT(){
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate()+30);

        if($("#NTT").val()==""){
            tbNTT.innerText = "Không được để trống";
            return false;
        }
        else{
            if(today < ntt)
            {
                tbNTT.innerText = "OK";
                return true;
            }
            else{
                tbNTT.innerText = "phải lớn hơn 30 ngày";
                return false;
            }
        }
    }
    $("#NTT").blur(kiemtraNTT);
    function kiemtraSDT(){
        let maukt = /^0[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
        if($("#SDT").val()==""){
            tbSDT.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#SDT").val())==true)
            {
                tbSDT.innerText = "OK";
                return true;
            }
            else{
                tbSDT.innerText = "Sai định dạng";
                return false;
            }
        }
    }
    $("#SDT").blur(kiemtraSDT);
    $("#Save").click(function(){
        console.log("success")
        if(kiemtrahoten()==true && kiemtraAo()==true && kiemtraNTT()==true && kiemtraSDT()==true && kiemtrdiachi()==true){
            var row = '<tr><th>'+(i++)+'</th><th>' +$("#name").val()+'</th><th>'+$('#ao').val()+'</th><th>'+$("#DC").val()+'</th><th>'+$("#NTT").val()+'</th><th>'+$("#SDT").val()+'</th></tr>';
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})