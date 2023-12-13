export const baseurl = 'https://script.google.com/macros/s/AKfycbyhKlGtECNX_SJP8uMGnAZWWEX-QcAuSCaDdKd3b_Cp5gCJQgVNyobTRdjalE5qb6eP/exec'

export const sheetName = {
    User: 'User',
    Projects: 'Projects',
    QuanLyDuAn: 'QuanLyDuAn',
    ThamGiaDuAn: 'ThamGiaDuAn',
    ThongTinUser: 'ThongTinUser',
    ThongTinTask: 'ThongTinTask',
    QuaTrinhProject: 'QuaTrinhProject',
  }
export const User = [
    {
        "id": 0,
        "username": "admin",
        "password": "admin",
        "isAdmin": 1
    },
    {
        "id": 1,
        "username": "user1leader",
        "password": "123456",
        "isAdmin": 0
    },
    {
        "id": 2,
        "username": "user2",
        "password": "123456",
        "isAdmin": 0
    },
    {
        "id": 3,
        "username": "user3leader",
        "password": "123456",
        "isAdmin": 0
    },
    {
        "id": 4,
        "username": "user4",
        "password": "123456",
        "isAdmin": 0
    },
    {
        "id": 5,
        "username": "userDone5",
        "password": "123456",
        "isAdmin": 0
    },
    {
        "id": 6,
        "username": "haiz",
        "password": "123456",
        "isAdmin": 0
    }
]
export const Projects = [
    {
        "id": 1,
        "tenDuAn": "Làm sạch sông",
        "khoa": "Tự Nhiên",
        "capQuanLy": "Trường",
        "loaiHinhNghienCuu": "Khoa Học"
    },
    {
        "id": 2,
        "tenDuAn": "Xe đạp điện",
        "khoa": "Cơ Khí",
        "capQuanLy": "Tỉnh",
        "loaiHinhNghienCuu": "Khoa Học"
    },
    {
        "id": 3,
        "tenDuAn": "Khởi nghiệp Bán Tráng Trộn",
        "khoa": "Công nghệ thực phẩm",
        "capQuanLy": "Trường ",
        "loaiHinhNghienCuu": "Thực Phẩm"
    }
]
export const QuanLyDuAn = [
    {
        "idLeader": 1,
        "idDuAn": 1,
        "duocDuyet": 1,
        "chuThich": "OK"
    },
    {
        "idLeader": 3,
        "idDuAn": 2,
        "duocDuyet": 0,
        "chuThich": "cần chú ý điều x,y..."
    },
    {
        "idLeader": 5,
        "idDuAn": 3,
        "duocDuyet": 1,
        "chuThich": "OK"
    }
]
export const ThamGiaDuAn = [
    {
        "idUser": 1,
        "idDuAn": 1
    },
    {
        "idUser": 2,
        "idDuAn": 1
    },
    {
        "idUser": 4,
        "idDuAn": 1
    },
    {
        "idUser": 5,
        "idDuAn": 3
    }
]
export const ThongTinUser = [
    {
        "id": 1,
        "hovaten": "Lê Văn A 1",
        "trinhDo": "Thạc Sĩ",
        "sodienthoai": 1111,
        "email": "helo@gmail.com"
    },
    {
        "id": 2,
        "hovaten": "Lê Văn A 2",
        "trinhDo": "đại học",
        "sodienthoai": 1111,
        "email": "helo@gmail.com"
    },
    {
        "id": 3,
        "hovaten": "Lê Văn A 3",
        "trinhDo": "Tiến sĩ",
        "sodienthoai": 1111,
        "email": "helo@gmail.com"
    },
    {
        "id": 4,
        "hovaten": "Lê Văn A 4",
        "trinhDo": "đại học",
        "sodienthoai": 1111,
        "email": "helo@gmail.com"
    },
    {
        "id": 5,
        "hovaten": "Lê Văn A 5",
        "trinhDo": "Phó GS",
        "sodienthoai": 1111,
        "email": "helo@gmail.com"
    }
]
export const ThongTinTask = [
    {
        "idTask": 1,
        "idDuAn": 1,
        "TenTask": "Tạo Kế hoạch",
        "idNguoiThucHien": 1,
        "trangthai": 0
    },
    {
        "idTask": 2,
        "idDuAn": 1,
        "TenTask": "Họp triển Khai",
        "idNguoiThucHien": 2,
        "trangthai": 0
    },
    {
        "idTask": 3,
        "idDuAn": 3,
        "TenTask": "Hoàn Thành và Nộp",
        "idNguoiThucHien": 5,
        "trangthai": 1
    },
    {
        "idTask": 4,
        "idDuAn": 1,
        "TenTask": "zxyzxdxcz",
        "idNguoiThucHien": 4,
        "trangthai": 1
    }
]
export const QuaTrinhProject = [
    {
        "id": 1,
        "ngayBatDau": "2023-09-11T17:00:00.000Z",
        "ngayKetThuc": "",
        "chamDiem": 0,
        "xeploaiGiai": ""
    },
    {
        "id": 3,
        "ngayBatDau": "2022-12-31T17:00:00.000Z",
        "ngayKetThuc": "2023-01-31T17:00:00.000Z",
        "chamDiem": 99,
        "xeploaiGiai": "Nhất"
    }
]