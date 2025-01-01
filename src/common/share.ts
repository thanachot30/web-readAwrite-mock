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
export interface RandomData {
  id: number;
  title: string;
  category: string;
  author: string;
  img: string;
}

export interface FixedData {
  title: string;
  category: string;
  author: string;
  img: string;
}

export interface _MockData {
  id: number;
  type: ContentReviewMessage;
  data_random: RandomData[];
  data_fixed: FixedData[];
}

export enum ContentReviewMessage {
  SystemCheckedAndCategorized = "ระบบได้ทำการตรวจสอบและจัดหมวดหมู่เนื้อหาของคุณใหม่เรียบร้อยแล้ว",
  TeamCheckedAndCategorized = "ทีมงานได้ทำการตรวจสอบและจัดหมวดหมู่เนื้อหาของคุณใหม่เรียบร้อยแล้ว",
  SystemAndTeamCheckedAndCategorized = "ระบบและทีมงานผู้ดูแลได้ทำการตรวจสอบและจัดหมวดหมู่เนื้อหาของคุณใหม่เรียบร้อยแล้ว",
  SystemCheckedAndApproved = "ระบบได้ทำการตรวจสอบและอนุมัติเนื้อหาของคุณเรียบร้อยแล้ว",
  TeamCheckedAndApproved = "ทีมงานได้ทำการตรวจสอบและอนุมัติเนื้อหาของคุณเรียบร้อยแล้ว",
  SystemAndTeamCheckedAndApproved = "ระบบและทีมงานผู้ดูแลได้ทำการตรวจสอบและอนุมัติเนื้อหาของคุณเรียบร้อยแล้ว",
  //Long
  LongRobotChangeGroup = `⚠️ เนื้อหาของคุณได้รับการจัดหมวดหมู่ใหม่
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
  LongPersonChangeGroup = `⚠️ เนื้อหาของคุณได้รับการจัดหมวดหมู่ใหม่
  ทีมงานได้ทำการตรวจสอบเนื้อหาของคุณและย้ายไปหมวดหมู่ใหม่ [XXX Category]
  📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ
  เนื้อหาเรื่อง XXX ของคุณได้ถูกจัดหมวดหมู่ใหม่จาก 'Boy Love' เป็น 'Girl Love' เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์มเรา เนื่องจากเนื้อหาของคุณเหมาะสมกับหมวดหมู่ Girl Love (GL) มากกว่าหมวดหมู่ Boy Love
  📖 เคล็ดลับการจัดหมวดนิยาย
  เพื่อให้นิยายของคุณเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน
  ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy
  ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+
  📜 แนวทางการตรวจสอบเนื้อหา
  การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน
  🔍 การตรวจสอบเนื้อหาของเรา
  กระบวนการตรวจสอบของเราประกอบด้วยทีมผู้ดูแลที่ได้รับการฝึกอบรม ซึ่งทำหน้าที่ตรวจสอบและจัดหมวดหมู่เนื้อหาอย่างละเอียด
  🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?
  เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น
  🗨️ แสดงความคิดเห็นของคุณ
  เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา
  ➡️ [แสดงความคิดเห็น →]
  ➡️ [ตรวจสอบอีกครั้ง →]`,
  LongRobPerChangeGroup = `⚠️ เนื้อหาของคุณได้รับการจัดหมวดหมู่ใหม่
  ระบบและทีมงานผู้ดูแลได้ทำการตรวจสอบเนื้อหาของคุณและย้ายไปหมวดหมู่ใหม่ [XXX Category]
  📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ
  เนื้อหาเรื่อง XXX ของคุณได้ถูกจัดหมวดหมู่ใหม่จาก 'Boy Love' เป็น 'Girl Love' เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์มเรา เนื่องจากเนื้อหาของคุณเหมาะสมกับหมวดหมู่ Girl Love (GL) มากกว่าหมวดหมู่ Boy Love
  📖 เคล็ดลับการจัดหมวดนิยาย
  เพื่อให้นิยายของคุณเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน
  ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy
  ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+
  📜 แนวทางการตรวจสอบเนื้อหา
  การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน
  🔍 การตรวจสอบเนื้อหาของเรา
  กระบวนการตรวจสอบของเราใช้การทำงานร่วมกันระหว่างระบบ AI และทีมผู้ดูแล เพื่อให้มั่นใจว่าผลลัพธ์มีความถูกต้องและยุติธรรม โดยระบบ AI จะทำการตรวจสอบและจัดหมวดหมู่เบื้องต้น ส่วนทีมผู้ดูแลจะตรวจสอบอย่างละเอียดและตัดสินใจขั้นสุดท้าย
  🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?
  เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น
  🗨️ แสดงความคิดเห็นของคุณ
  เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา
  ➡️ [แสดงความคิดเห็น →]
  ➡️ [ตรวจสอบอีกครั้ง →]`,
  LongRobotApproved = `✅ เนื้อหาของคุณได้รับการอนุมัติ
  ยินดีด้วย! ระบบได้ตรวจสอบและอนุมัตินิยายของคุณ '[ชื่อเรื่อง]' เรียบร้อยแล้ว
  📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ
  การตัดสินใจนี้เกิดขึ้นเพื่อให้สอดคล้องกับแนวทางของแพลตฟอร์มเรา และผ่านเกณฑ์คุณภาพและการจัดหมวดหมู่ที่เหมาะสม
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
  ➡️ [ตรวจสอบอีกครั้ง →]`,
  LongPersonApproved = `✅ เนื้อหาของคุณได้รับการอนุมัติ
  ยินดีด้วย! ทีมงานได้ตรวจสอบและอนุมัตินิยายของคุณ '[ชื่อเรื่อง]' เรียบร้อยแล้ว
  📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ
  การตัดสินใจนี้เกิดขึ้นเพื่อให้สอดคล้องกับแนวทางของแพลตฟอร์มเรา และผ่านเกณฑ์คุณภาพและการจัดหมวดหมู่ที่เหมาะสม
  📖 เคล็ดลับการจัดหมวดนิยาย
  เพื่อให้นิยายของคุณเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน
  ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy
  ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+
  📜 แนวทางการตรวจสอบเนื้อหา
  การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน
  🔍 การตรวจสอบเนื้อหาของเรา
  กระบวนการตรวจสอบของเราประกอบด้วยทีมผู้ดูแลที่ได้รับการฝึกอบรม ซึ่งทำหน้าที่ตรวจสอบและจัดหมวดหมู่เนื้อหาอย่างละเอียด
  🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?
  เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น
  🗨️ แสดงความคิดเห็นของคุณ
  เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา
  ➡️ [แสดงความคิดเห็น →]
  ➡️ [ตรวจสอบอีกครั้ง →]
  `,
  LongRobPerApproved = `✅ เนื้อหาของคุณได้รับการอนุมัติ
  ยินดีด้วย! ระบบและทีมงานผู้ดูแลได้ทำการตรวจสอบและอนุมัตินิยายของคุณ '[ชื่อเรื่อง]' เรียบร้อยแล้ว
  📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ
  การตัดสินใจนี้เกิดขึ้นเพื่อให้สอดคล้องกับแนวทางของแพลตฟอร์มเรา และผ่านเกณฑ์คุณภาพและการจัดหมวดหมู่ที่เหมาะสม
  📖 เคล็ดลับการจัดหมวดนิยาย
  เพื่อให้นิยายของคุณเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน
  ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy
  ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+
  📜 แนวทางการตรวจสอบเนื้อหา
  การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน
  🔍 การตรวจสอบเนื้อหาของเรา
  กระบวนการตรวจสอบของเราใช้การทำงานร่วมกันระหว่างระบบ AI และทีมผู้ดูแล เพื่อให้มั่นใจว่าผลลัพธ์มีความถูกต้องและยุติธรรม โดยระบบ AI จะทำการตรวจสอบและจัดหมวดหมู่เบื้องต้น ส่วนทีมผู้ดูแลจะตรวจสอบอย่างละเอียดและตัดสินใจขั้นสุดท้าย
  🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?
  เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น
  🗨️ แสดงความคิดเห็นของคุณ
  เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา
  ➡️ [แสดงความคิดเห็น →]
  ➡️ [ตรวจสอบอีกครั้ง →]`,
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
    type: ContentReviewMessage.LongRobotApproved,
  },
  {
    id: 8,
    type: ContentReviewMessage.LongRobotChangeGroup,
  },
  {
    id: 9,
    type: ContentReviewMessage.LongPersonApproved,
  },
  {
    id: 10,
    type: ContentReviewMessage.LongPersonChangeGroup,
  },
  {
    id: 11,
    type: ContentReviewMessage.LongRobPerApproved,
  },
  {
    id: 12,
    type: ContentReviewMessage.LongRobPerChangeGroup,
  },
];
export const mockData_12: _MockData[] = [
  {
    id: 1,
    type: ContentReviewMessage.SystemCheckedAndApproved,
    data_random: [
      {
        id: 1.1,
        title: "ระบบตัวร้ายผู้ยั่วยวน",
        category: "Boy Love – Lovely Room",
        author: "LanSuzhen",
        img: "https://storage.googleapis.com/readawritedemo/1/1.1.png",
      },
      {
        id: 1.2,
        title: "วิวาห์ลวงเจ้าสาวกล้ามโต",
        category: "Boy Love – Lovely Room",
        author: "เจ้ากนก",
        img: "https://storage.googleapis.com/readawritedemo/1/1.2.png",
      },
      {
        id: 1.3,
        title:
          "จอมมารย้อนเวลากลับมาเพื่อให้ผู้กล้าปราบ แต่ผู้กล้าไม่เล่นตามบท!",
        category: "Boy Love – Party Room",
        author: "กระต่ายปากเเดง",
        img: "https://storage.googleapis.com/readawritedemo/1/1.3.png",
      },
      {
        id: 1.4,
        title: "ใครฆ่าองค์ชายใหญ่ (สำนักพิมพ์ Lavender)",
        category: "Boy Love – Party Room",
        author: "deffadi",
        img: "https://storage.googleapis.com/readawritedemo/1/1.4.png",
      },
    ],
    data_fixed: [
      {
        title: "The Best Lover #คุณศิลป์สั่งได้ [Yaoi]",
        category: "Boy Love – Secret Room",
        author: "saisioo",
        img: "https://storage.googleapis.com/readawritedemo/1/2.png",
      },
      {
        title: "Alicenozia 13th (ว่าที) ราชันจำเป็น! (สำนักพิมพ์ อาเธน่า)",
        category: "ผจญภัย แอคชั่น กำลังภายใน",
        author: "Echo9",
        img: "https://storage.googleapis.com/readawritedemo/1/3.png",
      },
    ],
  },
  {
    id: 2,
    type: ContentReviewMessage.SystemCheckedAndCategorized,
    data_random: [
      {
        id: 2.1,
        title: "หอมกลิ่นแก้วเจ้าจอม (Libery Publishing)",
        category: "Girl Love – Party Room",
        author: "malware1",
        img: "https://storage.googleapis.com/readawritedemo/2/2.1.png",
      },
      {
        id: 2.2,
        title: "Glowing Star ในยามที่ดาวเปล่งแสง",
        category: "นิยายรักวัยรุ่น",
        author: "Jolly'M",
        img: "https://storage.googleapis.com/readawritedemo/2/2.2.png",
      },
      {
        id: 2.3,
        title: "ดุจรักดั่งห้วงดาราพร่างพราย",
        category: "นิยายรักจีนโบราณ",
        author: "Jamsai Official",
        img: "https://storage.googleapis.com/readawritedemo/2/2.3.png",
      },
      {
        id: 2.4,
        title: "รักแรกที่หวนคืน",
        category: "Boy Love – Lovely Room",
        author: "ixnk_",
        img: "https://storage.googleapis.com/readawritedemo/2/2.4.png",
      },
    ],
    data_fixed: [
      {
        title: "เกิดใหม่เป็นเมียลับซุป'ตาร์ | Mpreg",
        category: "Boy Love – Party Room",
        author: "วันเวฬา",
        img: "https://storage.googleapis.com/readawritedemo/2/3.png",
      },
      {
        title: "ได้โปรดกัญจิราอย่าหมดรัก",
        category: "Girl Love – Party Room",
        author: "จ้าวปลาทู",
        img: "https://storage.googleapis.com/readawritedemo/2/4.png",
      },
    ],
  },
  {
    id: 3,
    type: ContentReviewMessage.TeamCheckedAndApproved,
    data_random: [
      {
        id: 3.1,
        title: "Krampus",
        category: "สืบสวน",
        author: "รตินธร์",
        img: "https://storage.googleapis.com/readawritedemo/3/3.1.png",
      },
      {
        id: 3.2,
        title: "ในป่าสน [สนพ. Hermit books]",
        category: "Boy Love – Secret Room",
        author: "Chomin",
        img: "https://storage.googleapis.com/readawritedemo/3/3.2.png",
      },
      {
        id: 3.3,
        title: "วิศวะทวงคืนรักแฟนเก่าคนโปรด",
        category: "นิยายรักวัยว้าวุ่น",
        author: "ฮายอนนี่",
        img: "https://storage.googleapis.com/readawritedemo/3/3.3.png",
      },
      {
        id: 3.4,
        title: "คุณหมอขอจีบหนุ่มเนิร์ด",
        category: "นิยายรักวัยรุ่น",
        author: "SunSweetHeart",
        img: "https://storage.googleapis.com/readawritedemo/3/3.4.png",
      },
    ],
    data_fixed: [
      {
        title: "หนึ่งคันร่มกางไม่ทั่วท้องฟ้า",
        category: "Boy Love – Secret Room",
        author: "llwuda",
        img: "https://storage.googleapis.com/readawritedemo/3/4.png",
      },
    ],
  },
  {
    id: 4,
    type: ContentReviewMessage.TeamCheckedAndCategorized,
    data_random: [
      {
        id: 4.1,
        title: "ศิษย์ได้ดีเพราะมีสามีสั่งสอน",
        category: "นิยายรักจีนโบราณ",
        author: "ประตูฟ้ายั่งยืน",
        img: "https://storage.googleapis.com/readawritedemo/4/4.1.png",
      },
      {
        id: 4.2,
        title: "คมเคียวแห่งจันทรา",
        category: "นิยายรักจีนโบราณ",
        author: "ชื่อซู่ซินฮวา",
        img: "https://storage.googleapis.com/readawritedemo/4/4.2.png",
      },
      {
        id: 4.3,
        title: "ฝนเมษา ดอกไม้พฤษภา",
        category: "นิยายรัก",
        author: "หอมดึก",
        img: "https://storage.googleapis.com/readawritedemo/4/4.3.png",
      },
      {
        id: 4.4,
        title: "ตำรับรักจอมนาง (สนพ.ดีต่อใจ)",
        category: "นิยายรักจีนโบราณ",
        author: "กุลิสรา",
        img: "https://storage.googleapis.com/readawritedemo/4/4.4.png",
      },
    ],
    data_fixed: [
      {
        title: "Time หมุนเวลาตาย",
        category: "สยองขวัญ",
        author: "ภาคินัย",
        img: "https://storage.googleapis.com/readawritedemo/4/5.png",
      },
    ],
  },
  {
    id: 5,
    type: ContentReviewMessage.SystemAndTeamCheckedAndApproved,
    data_random: [
      {
        id: 5.1,
        title: "ไป๋เฟิงมี่",
        category: "นิยายรักจีนโบราณ",
        author: "ชะนีน้อย",
        img: "https://storage.googleapis.com/readawritedemo/5/5.1.png",
      },
      {
        id: 5.2,
        title: "หวนคืนรักท่านประมุขพรรค",
        category: "นิยายรักจีนโบราณ",
        author: "นางนก",
        img: "https://storage.googleapis.com/readawritedemo/5/5.2.png",
      },
      {
        id: 5.3,
        title: "ข้าได้สามีใหม่หลังทิ้งใบหย่า",
        category: "นิยายรักจีนโบราณ",
        author: "คลุมพิรุณ",
        img: "https://storage.googleapis.com/readawritedemo/5/5.3.png",
      },
      {
        id: 5.4,
        title: "ตัวร้ายเจ้าขา ปล่อยนางรองอย่างข้าไปเถิดนะ",
        category: "นิยายรักจีนโบราณ",
        author: "RUNGRADA",
        img: "https://storage.googleapis.com/readawritedemo/5/5.4.png",
      },
    ],
    data_fixed: [
      {
        title: "วาฬ",
        category: "Boy Love – Lovely Room",
        author: "แต่งไปเรื่อยๆจนกว่าจะแมส",
        img: "https://storage.googleapis.com/readawritedemo/5/6.png",
      },
    ],
  },
  {
    id: 6,
    type: ContentReviewMessage.SystemAndTeamCheckedAndCategorized,
    data_random: [
      {
        id: 6.1,
        title: "นายท่านได้โปรดเมตตาผมด้วย",
        category: "Boy Love – Lovely Room",
        author: "นางสาวอักษร",
        img: "https://storage.googleapis.com/readawritedemo/6/6.1.png",
      },
      {
        id: 6.2,
        title: "เป็นเพียงสนมน่าชังของฮ่องเต้ตัวร้าย",
        category: "นิยายรักจีนโบราณ",
        author: "Jiratha",
        img: "https://storage.googleapis.com/readawritedemo/6/6.2.png",
      },
      {
        id: 6.3,
        title: "ยามนี้ข้าต้องมีเจ้าเพียงผู้เดียว",
        category: "Boy Love – Lovely Room",
        author: "หลุย์❤️",
        img: "https://storage.googleapis.com/readawritedemo/6/6.3.png",
      },
      {
        id: 6.4,
        title: "โลกไม่ได้สวยงามขนาดนั้นหรอกนะ",
        category: "นิยายรัก",
        author: "sookzon",
        img: "https://storage.googleapis.com/readawritedemo/6/6.4.png",
      },
    ],
    data_fixed: [
      {
        title: "ตัวร้ายผู้เคยชังชาตินี้ยังไม่ปล่อยข้า",
        category: "นิยายรักจีนโบราณ",
        author: "อวิ๋นกูกู",
        img: "https://storage.googleapis.com/readawritedemo/6/7.png",
      },
    ],
  },
  {
    id: 7,
    type: ContentReviewMessage.LongRobotApproved,
    data_random: [
      {
        id: 7.1,
        title: "ใต้ร่มเงานายหญิง",
        category: "Girl Love – Party Room",
        author: "โอเซ่น",
        img: "https://storage.googleapis.com/readawritedemo/7/7.1.png",
      },
      {
        id: 7.2,
        title: "เก็บรักที่ปลายทาง",
        category: "นิยายรักวัยรุ่น",
        author: "GENELA",
        img: "https://storage.googleapis.com/readawritedemo/7/7.2.png",
      },
      {
        id: 7.3,
        title: "คุณหนูตระกูลหยาง",
        category: "นิยายรักจีนโบราณ",
        author: "Cora ZóN",
        img: "https://storage.googleapis.com/readawritedemo/7/7.3.png",
      },
      {
        id: 7.4,
        title: "ดอกไม้ของมังกร",
        category: "นิยายรักวัยว้าวุ่น",
        author: "sunshine-day",
        img: "https://storage.googleapis.com/readawritedemo/7/7.4.png",
      },
    ],
    data_fixed: [
      {
        title: "หลงรัก|วิศวะอันธพาล",
        category: "นิยายรักวัยรุ่น",
        author: "แมวหมอก",
        img: "https://storage.googleapis.com/readawritedemo/7/8.png",
      },
      {
        title: "ดั่งคำมั่นสัญญา",
        category: "Boy Love – Lovely Room",
        author: "CHAYE",
        img: "https://storage.googleapis.com/readawritedemo/7/9.png",
      },
    ],
  },
  {
    id: 8,
    type: ContentReviewMessage.LongRobotChangeGroup,
    data_random: [
      {
        id: 8.1,
        title: "กระต่ายของมาเฟีย",
        category: "Boy Love – Lovely Room",
        author: "yungicoji",
        img: "https://storage.googleapis.com/readawritedemo/8/8.1.png",
      },
      {
        id: 8.2,
        title: "Archmorris Christmas Eve สุขสันต์วันซาตาน [omegaverse]",
        category: "Boy Love – Party Room",
        author: "chrona",
        img: "https://storage.googleapis.com/readawritedemo/8/8.2.png",
      },
      {
        id: 8.3,
        title: "เกิดใหม่อีกครั้งจะไม่ให้ครอบครัวยากจนอีกต่อไป",
        category: "Boy Love – Lovely Room",
        author: "ปาแปง",
        img: "https://storage.googleapis.com/readawritedemo/8/8.3.png",
      },
      {
        id: 8.4,
        title: "คู่หูนักปราบมาร",
        category: "Boy Love – Lovely Room",
        author: "Khiw",
        img: "https://storage.googleapis.com/readawritedemo/8/8.4.png",
      },
    ],
    data_fixed: [
      {
        title: "favourite ex- #แจซเป็นแฟนเก่าคนโปรด",
        category: "Boy Love – Party Room",
        author: "anotherblueee.",
        img: "https://storage.googleapis.com/readawritedemo/8/9.png",
      },
    ],
  },
  {
    id: 9,
    type: ContentReviewMessage.LongPersonApproved,
    data_random: [
      {
        id: 9.1,
        title: "เจ้าหกกลับมาแล้ว",
        category: "Boy Love – Lovely Room",
        author: "เป้ยเอ๋อร์ - 贝尓",
        img: "https://storage.googleapis.com/readawritedemo/9/9.1.png",
      },
      {
        id: 9.2,
        title: "ตัวประกอบอยากเล่นนอกบท (แนวระบบ) [มีEbook]",
        category: "Boy Love – Lovely Room",
        author: "จูนิเบลล์96",
        img: "https://storage.googleapis.com/readawritedemo/9/9.2.png",
      },
      {
        id: 9.3,
        title: "ผมเป็นเจ้าของโรงพยาบาลจิตเวช",
        category: "แฟนตาซี เกมออนไลน์ ต่างโลก",
        author: "Enjoybook",
        img: "https://storage.googleapis.com/readawritedemo/9/9.3.png",
      },
      {
        id: 9.4,
        title: "#เขตหวงห้ามอันตราย BL",
        category: "สืบสวน",
        author: "บังชา.",
        img: "https://storage.googleapis.com/readawritedemo/9/9.4.png",
      },
    ],
    data_fixed: [
      {
        title: "เถ้าแก่ขั้นเทพ ไอเทมสุดโกง ลูกค้าสุดกาว",
        category: "แฟนตาซี เกมออนไลน์ ต่างโลก",
        author: "Enjoybook",
        img: "https://storage.googleapis.com/readawritedemo/9/10.png",
      },
    ],
  },
  {
    id: 10,
    type: ContentReviewMessage.LongPersonChangeGroup,
    data_random: [
      {
        id: 10.1,
        title: "แสงฟ้าโอบรักต้นหน",
        category: "นิยายรักวัยรุ่น",
        author: "linda_me",
        img: "https://storage.googleapis.com/readawritedemo/10/10.1.png",
      },
      {
        id: 10.2,
        title: "คืนเคานต์ดาวน์",
        category: "นิยายรักผู้ใหญ่",
        author: "ฝนรักษ์",
        img: "https://storage.googleapis.com/readawritedemo/10/10.2.png",
      },
      {
        id: 10.3,
        title: "ส้มหวาน",
        category: "นิยายรัก",
        author: "ธาดา",
        img: "https://storage.googleapis.com/readawritedemo/10/10.3.png",
      },
      {
        id: 10.4,
        title: "ยอดเซียนคนสุดท้ายคือแม่หนูน้อยอายุสามขวบ!",
        category: "นิยายรักจีนโบราณ",
        author: "Chawin",
        img: "https://storage.googleapis.com/readawritedemo/10/10.4.png",
      },
    ],
    data_fixed: [
      {
        title: "วาสนาหญิงโฉด",
        category: "นิยายรักจีนโบราณ",
        author: "เลี่ยงจิน",
        img: "https://storage.googleapis.com/readawritedemo/10/11.png",
      },
    ],
  },
  {
    id: 11,
    type: ContentReviewMessage.LongRobPerApproved,
    data_random: [
      {
        id: 11.1,
        title: "ฉันเป็นหมอของคุณหมอ(เถื่อน)สุดหล่อ",
        category: "Girl Love – Party Room",
        author: "เจ้าก้อนแป้งกลม",
        img: "https://storage.googleapis.com/readawritedemo/11/11.1.png",
      },
      {
        id: 11.2,
        title: "ดุจดั่งดวงใจจักรพรรดิ",
        category: "นิยายรักจีนโบราณ",
        author: "หยางเพ่ยหรง",
        img: "https://storage.googleapis.com/readawritedemo/11/11.2.png",
      },
      {
        id: 11.3,
        title: "หลีกหนีความตายของมู่ฟางเหอ [สนพ.everY]",
        category: "Boy Love – Lovely Room",
        author: "PLogytic",
        img: "https://storage.googleapis.com/readawritedemo/11/11.3.png",
      },
      {
        id: 11.4,
        title: "ทำนายทายทัพ",
        category: "Boy Love – Lovely Room",
        author: "ดวินทร์",
        img: "https://storage.googleapis.com/readawritedemo/11/11.4.png",
      },
    ],
    data_fixed: [
      {
        title: "ชมจันทร์",
        category: "Girl Love – Lovely Room",
        author: "Bunmankong",
        img: "https://storage.googleapis.com/readawritedemo/11/12.png",
      },
    ],
  },
  {
    id: 12,
    type: ContentReviewMessage.LongRobPerChangeGroup,
    data_random: [
      {
        id: 12.1,
        title: "High School Crush! หวานไม่น้อย 900%",
        category: "นิยายรักวัยรุ่น",
        author: "เพชฌฆาตเล็บเจล",
        img: "https://storage.googleapis.com/readawritedemo/12/12.1.png",
      },
      {
        id: 12.2,
        title: "พร้อมรัก",
        category: "นิยายรักวัยรุ่น",
        author: "Dandelion :)",
        img: "https://storage.googleapis.com/readawritedemo/12/12.2.png",
      },
      {
        id: 12.3,
        title: "คุณบอสขาอย่ามาอ่อย",
        category: "นิยายโรมานซ์",
        author: "พธิตา",
        img: "https://storage.googleapis.com/readawritedemo/12/12.3.png",
      },
      {
        id: 12.4,
        title: "ยอดชายาแห่งใต้หล้า",
        category: "นิยายรักจีนโบราณ",
        author: "สนพ เหลียนฮวา",
        img: "https://storage.googleapis.com/readawritedemo/12/12.4.png",
      },
    ],
    data_fixed: [],
  },
];

export enum select_item {
  valid_select = "เผยแพร่",
  invalid_select = "ไม่เผยแพร่",
}

export const mockData_Reading = [
  {
    image: "https://via.placeholder.com/150",
    title: "ย้อนเวลามาเซ็นใบหย่า",
    author: "LEOI",
    status: { keep: "9", views: "84K", love: "785" },
    tags: ["ย้อนเวลา", "ทักษิณ", "หย่า"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "คู่หมั้นที่เขาไม่รัก",
    author: "คนหลังเขา",
    status: { keep: "13", views: "112K", love: "769" },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "ย้อนเวลามาเซ็นใบหย่า",
    author: "LEOI",
    status: { keep: "9", views: "84K", love: "785" },
    tags: ["ย้อนเวลา", "ทักษิณ", "หย่า"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "คู่หมั้นที่เขาไม่รัก",
    author: "คนหลังเขา",
    status: { keep: "13", views: "112K", love: "769" },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "ย้อนเวลามาเซ็นใบหย่า",
    author: "LEOI",
    status: { keep: "9", views: "84K", love: "785" },
    tags: ["ย้อนเวลา", "ทักษิณ", "หย่า"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "คู่หมั้นที่เขาไม่รัก",
    author: "คนหลังเขา",
    status: { keep: "13", views: "112K", love: "769" },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "ย้อนเวลามาเซ็นใบหย่า",
    author: "LEOI",
    status: { keep: "9", views: "84K", love: "785" },
    tags: ["ย้อนเวลา", "ทักษิณ", "หย่า"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "คู่หมั้นที่เขาไม่รัก",
    author: "คนหลังเขา",
    status: { keep: "13", views: "112K", love: "769" },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "ย้อนเวลามาเซ็นใบหย่า",
    author: "LEOI",
    status: { keep: "9", views: "84K", love: "785" },
    tags: ["ย้อนเวลา", "ทักษิณ", "หย่า"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "คู่หมั้นที่เขาไม่รัก",
    author: "คนหลังเขา",
    status: { keep: "13", views: "112K", love: "769" },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "ย้อนเวลามาเซ็นใบหย่า",
    author: "LEOI",
    status: { keep: "9", views: "84K", love: "785" },
    tags: ["ย้อนเวลา", "ทักษิณ", "หย่า"],
  },
  {
    image: "https://via.placeholder.com/150",
    title: "คู่หมั้นที่เขาไม่รัก",
    author: "คนหลังเขา",
    status: { keep: "13", views: "112K", love: "769" },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"],
  },
  // Add more items as needed
];
