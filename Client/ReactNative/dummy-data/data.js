import constant from "../constants";
const { images,logo } = constant;
export const Message = [
  {
    message: "😏Em đẹp lắm",
  },
  {
    message: "👀Em nhà ở đâu the",
  },
  {
    message: "🫀Đừng làm tim anh đauuu",
  },
  {
    message: "🗣She so dep gai",
  },
];
export const getUser = [
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFPx_5UeN24Si_c-S11x4Xq0T10ydstaLig&s",
    _id: "667ec3fcc94a4a07d51ea301",
    email: "user_test01@presspay.com",
    password: "$2a$10$lfBpnYPfXdse71vfmjR9UuQJJpM3.gOa3CK0ALYsKGxTqfhUTshYy",
    role: "user",
    inactive: false,
    createdAt: "2024-06-28T14:09:00.026Z",
    updatedAt: "2024-06-28T14:09:00.026Z",
    __v: 0,
    name: "Lê văn chúi",
    security_code: "123123",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFPx_5UeN24Si_c-S11x4Xq0T10ydstaLig&s",
    _id: "667ec4cd43fb999edadf1691",
    email: "user_test02@presspay.com",
    password: "$2a$10$d/AxFY92b/nPn194xQH5y.vRp7ScsQrmYntkCSW1otleM.GQO4mue",
    role: "user",
    inactive: false,
    name: "Sasuke",

    createdAt: "2024-06-28T14:12:29.843Z",
    updatedAt: "2024-06-28T14:12:29.843Z",
    __v: 0,
  },
];
export const wallet = [
  {
    img: logo.presspay,
    currency: "VNĐ",
    value: "5.000.000đ",
  },
  {
    img: logo.paypal,
    currency: "USD",
    value: "1000 USD",
  },
  {
    img: logo.eth,
    currency: "Ether",
    value: "1 ETH",
  },
];
export const UserData = [
  {
    name: "Bill Gate",
    img: images.bill,
  },
  {
    name: "Harry Maguire",
    img: images.harry,
  },
  {
    name: "Vitalik",
    img: images.vitalik,
  },
  {
    name: "Pep",
    img: images.warrent,
  },
  {
    name: "Nicki Minaj",
    img: images.nicky,
  },
  {
    name: "Taylor Swift",
    img: images.taylor,
  },
  {
    name: "Kanye West",
    img: images.kenye,
  },
  {
    name: "Cardi B",
    img: images.cardiB,
  },
];
