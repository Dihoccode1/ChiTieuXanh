export const data = [
  {
    id: "1",
    title: "Ý tưởng thiết kế Logo mới",
    content:
      "Sử dụng tone màu #pastel sáng kết hợp với nét vẽ tự do. Cần tập trung vào sự tối giản và thanh lịch. Nhớ check lại feedback của khách hàng vào thứ 3.\n\n#design #logo #freelance",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    isPinned: true,
  },
  {
    id: "2",
    title: "Danh sách đồ cần mua",
    content:
      "- Sữa hạt\n- Bánh mì nguyên cám\n- Cà phê rang xay\n- Trái cây tươi (Cam, Táo)\n\n#shopping #weekend",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    isPinned: false,
  },
  {
    id: "3",
    title: "Cuộc họp Dự án Xanh",
    content:
      "Thống nhất lại quy trình làm việc với team Dev. \n1. Chốt design system\n2. Bàn giao assets\n3. Review tiến độ hàng tuần.\n\n#meeting #work",
    createdAt: new Date().toISOString(),
    isPinned: true,
  },
];
