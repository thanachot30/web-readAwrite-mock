// Enum for Message Types
export interface mockData {
  id: number;
  image: string;
  title: string;
  description: string;
  stats: {
    list: number;
    views: number;
    loves: number;
  };
}

export enum ContentReviewMessage {
  SystemCheckedAndCategorized = "ระบบได้ทำการตรวจสอบและจัดหมวดหมู่เนื้อหาของคุณใหม่เรียบร้อยแล้ว",
  TeamCheckedAndCategorized = "ทีมงานได้ทำการตรวจสอบและจัดหมวดหมู่เนื้อหาของคุณใหม่เรียบร้อยแล้ว",
  SystemAndTeamCheckedAndCategorized = "ระบบและทีมงานผู้ดูแลได้ทำการตรวจสอบและจัดหมวดหมู่เนื้อหาของคุณใหม่เรียบร้อยแล้ว",
  SystemCheckedAndApproved = "ระบบได้ทำการตรวจสอบและอนุมัติเนื้อหาของคุณเรียบร้อยแล้ว",
  TeamCheckedAndApproved = "ทีมงานได้ทำการตรวจสอบและอนุมัติเนื้อหาของคุณเรียบร้อยแล้ว",
  SystemAndTeamCheckedAndApproved = "ระบบและทีมงานผู้ดูแลได้ทำการตรวจสอบและอนุมัติเนื้อหาของคุณเรียบร้อยแล้ว",
  //Long
  LongRobotGroup = `⚠️ เนื้อหาของคุณได้รับการจัดหมวดหมู่ใหม่
  ระบบได้ทำการตรวจสอบเนื้อหาของคุณและย้ายไปหมวดหมู่ใหม่ [XXX Category]
  📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ
  เนื้อหาเรื่อง XXX ของคุณได้ถูกจัดหมวดหมู่ใหม่จาก 'Boy Love' เป็น 'Girl Love' เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์มเรา เนื่องจากเนื้อหาของคุณเหมาะสมกับหมวดหมู่ Girl Love (GL) มากกว่าหมวดหมู่ Boy Love
  📖 เคล็ดลับการจัดหมวดนิยาย
  เพื่อให้นิยายของคุณเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน
  ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy
  ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+
  📜 แนวทางการตรวจสอบเนื้อหา
  การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน
  🔍 การตรวจสอบเนื้อหาของเรา
  กระบวนการตรวจสอบของเราใช้ระบบ AI ซึ่งเป็นเครื่องมืออัตโนมัติที่ออกแบบมาเพื่อวิเคราะห์และจัดหมวดหมู่เนื้อหาได้อย่างมีประสิทธิภาพ
  🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?
  เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น
  🗨️ แสดงความคิดเห็นของคุณ
  เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา
  ➡️ [แสดงความคิดเห็น →]
  ➡️ [ตรวจสอบอีกครั้ง →]
  `,
}
// Interface for the Message Data
export interface ReviewNotification {
  id: number; // Unique identifier for the notification
  type: ContentReviewMessage; // Type of message from the enum
}
export const notifications: ReviewNotification[] = [
  {
    id: 1,
    type: ContentReviewMessage.SystemCheckedAndCategorized,
  },
  {
    id: 2,
    type: ContentReviewMessage.TeamCheckedAndCategorized,
  },
  {
    id: 3,
    type: ContentReviewMessage.SystemAndTeamCheckedAndCategorized,
  },
  {
    id: 4,
    type: ContentReviewMessage.SystemCheckedAndApproved,
  },
  {
    id: 5,
    type: ContentReviewMessage.TeamCheckedAndApproved,
  },
  {
    id: 6,
    type: ContentReviewMessage.SystemAndTeamCheckedAndApproved,
  },
  {
    id: 7,
    type: ContentReviewMessage.LongRobotGroup,
  },
];
export const mockData: mockData[] = [
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    title: "web story7",
    description: "บรรยาย (ออริจินอล) | author1",
    stats: { list: 3, views: 10, loves: 5 },
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "web story2",
    description: "บรรยาย (ออริจินอล) | author2",
    stats: { list: 5, views: 15, loves: 7 },
  },
];

// export const mockData: mockData[] = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/150",
//     title: "web story1",
//     description: "บรรยาย (ออริจินอล) | author1",
//     stats: { list: 3, views: 10, loves: 5 },
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/150",
//     title: "web story2",
//     description: "บรรยาย (ออริจินอล) | author2",
//     stats: { list: 5, views: 15, loves: 7 },
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/150",
//     title: "web story3",
//     description: "บรรยาย (ออริจินอล) | author3",
//     stats: { list: 8, views: 20, loves: 10 },
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/150",
//     title: "web story4",
//     description: "บรรยาย (ออริจินอล) | author4",
//     stats: { list: 2, views: 12, loves: 4 },
//   },
//   {
//     id: 5,
//     image: "https://via.placeholder.com/150",
//     title: "web story5",
//     description: "บรรยาย (ออริจินอล) | author5",
//     stats: { list: 6, views: 25, loves: 12 },
//   },
//   {
//     id: 6,
//     image: "https://via.placeholder.com/150",
//     title: "web story6",
//     description: "บรรยาย (ออริจินอล) | author6",
//     stats: { list: 4, views: 18, loves: 8 },
//   },
// ];

export enum select_item {
  valid_select = "เผยแพร่",
  invalid_select = "ไม่เผยแพร่",
}
