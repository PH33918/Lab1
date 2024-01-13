let classRoom = [
    "Nguyễn Tiến Duần",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hưng",
    "Nguyễn Đức Thuận",
    "Đoàn Minh Tùng",
    "Hồ Sỹ Hưng",
    "Lê Trung Hiếu",
    "Đoàn Vua Đẹp Trai Vua Học Giỏi Hữu Quý"
  ];
  
  // Câu 1: Tách tên và họ riêng
  let separatedNames = classRoom.map(function(fullName) {
    let parts = fullName.split(' ');
    return {
      ho: parts.slice(0, parts.length - 1).join(' '),
      ten: parts[parts.length - 1]
    };
  });
  
  console.log("Câu 1:", separatedNames);
  
  // Câu 2: Thêm một sinh viên vào vị trí bất kỳ trong mảng
  let newStudent = "Nguyễn Văn AA";
  let positionToAdd = 3;
  classRoom.splice(positionToAdd, 0, newStudent);
  
  console.log("Câu 2:", classRoom);
  
  // Câu 3: Xoá một sinh viên khỏi mảng
  let studentToRemove = "Hồ Sỹ Hưng";
  classRoom = classRoom.filter(function(student) {
    return student !== studentToRemove;
  });
  
  console.log("Câu 3:", classRoom);
  
  // Câu 4: Tìm kiếm theo tên, không chứa dấu
  let searchName = "Nguyen Tien Duan";
  let foundStudent = classRoom.find(function(student) {
    return student.toLowerCase().replace(/ /g, '') === searchName.toLowerCase().replace(/ /g, '');
  });
  
  console.log("Câu 4:", foundStudent);
  