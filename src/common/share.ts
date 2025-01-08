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

export interface GridData {
  id: number;
  image: string;
  title: string;
  writer: string;
  status: {
    love: string; // Change to number
    see: string; // Keep as string if '57K' includes non-numeric characters
    keep: string; // Change to number
  };
  tags?: string[];
  story?: string;
  episode?: number;
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
interface ContentItem {
  title: string;
  description: string;
}
export interface ReviewNotification {
  id: number; // Unique identifier for the notification
  type: ContentReviewMessage | string; // Type of message from the enum
  content?: ContentItem[];
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

export const notiReader: ReviewNotification[] = [
  {
    id: 1,
    type: "เนื้อหาเรื่องนี้ได้ผ่านการตรวจสอบและอนุมัติโดยระบบเรียบร้อยแล้ว",
  },
  {
    id: 2,
    type: "เนื้อหาเรื่องนี้ได้ผ่านการตรวจสอบและอนุมัติโดยทีมงานเรียบร้อยแล้ว",
  },
  {
    id: 3,
    type: "เนื้อหาเรื่องนี้ได้ผ่านการตรวจสอบและอนุมัติโดยระบบและทีมงานผู้ดูแลเรียบร้อยแล้ว",
  },
  {
    id: 4,
    type: `✅ เนื้อหาเรื่องนี้ได้ผ่านการตรวจสอบโดยระบบเรียบร้อยแล้ว
    นิยายเรื่องนี้ได้ผ่านการตรวจสอบและจัดหมวดหมู่เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์มเรา เพื่อความสะดวกและประสบการณ์การอ่านที่ดียิ่งขึ้นสำหรับนักอ่านทุกท่าน`,
    content: [
      {
        title: "📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ",
        description:
          "เนื้อหาของนิยายเรื่องนี้ได้ถูกจัดหมวดหมู่ใหม่จาก 'Boy Love' เป็น 'Girl Love' เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์ม เนื่องจากเนื้อหาเหมาะสมกับหมวดหมู่ Girl Love (GL) มากกว่าหมวดหมู่ Boy Love",
      },
      {
        title: "📖 เคล็ดลับการจัดหมวดนิยาย",
        description:
          "เพื่อให้นิยายเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+",
      },
      {
        title: "📜 แนวทางการตรวจสอบเนื้อหา",
        description:
          "การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน",
      },
      {
        title: "🔍 การตรวจสอบเนื้อหาของเรา",
        description:
          "กระบวนการตรวจสอบของเราใช้ระบบ AI ซึ่งเป็นเครื่องมืออัตโนมัติที่ออกแบบมาเพื่อวิเคราะห์และจัดหมวดหมู่เนื้อหาได้อย่างมีประสิทธิภาพ",
      },
      {
        title: "🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?",
        description:
          "เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น",
      },
      {
        title: "🗨️ แสดงความคิดเห็นของคุณ",
        description:
          "เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา",
      },
      {
        title: "➡️ [แสดงความคิดเห็น →]",
        description: "",
      },
      {
        title: "➡️ [ตรวจสอบอีกครั้ง →]",
        description: "",
      },
    ],
  },
  {
    id: 5,
    type: `✅ เนื้อหาเรื่องนี้ได้ผ่านการตรวจสอบและอนุมัติโดยทีมงานเรียบร้อยแล้ว
    นิยายเรื่องนี้ได้ผ่านการตรวจสอบและจัดหมวดหมู่เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์มเรา เพื่อความสะดวกและประสบการณ์การอ่านที่ดียิ่งขึ้นสำหรับนักอ่านทุกท่าน`,
    content: [
      {
        title: "📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ",
        description:
          "เนื้อหาของนิยายเรื่องนี้ได้ถูกจัดหมวดหมู่ใหม่จาก 'Boy Love' เป็น 'Girl Love' เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์ม เนื่องจากเนื้อหาเหมาะสมกับหมวดหมู่ Girl Love (GL) มากกว่าหมวดหมู่ Boy Love",
      },
      {
        title: "📖 เคล็ดลับการจัดหมวดนิยาย",
        description:
          "เพื่อให้นิยายเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+",
      },
      {
        title: "📜 แนวทางการตรวจสอบเนื้อหา",
        description:
          "การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน",
      },
      {
        title: "🔍 การตรวจสอบเนื้อหาของเรา",
        description:
          "กระบวนการตรวจสอบของเราใช้ระบบ AI ซึ่งเป็นเครื่องมืออัตโนมัติที่ออกแบบมาเพื่อวิเคราะห์และจัดหมวดหมู่เนื้อหาได้อย่างมีประสิทธิภาพ",
      },
      {
        title: "🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?",
        description:
          "เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น",
      },
      {
        title: "🗨️ แสดงความคิดเห็นของคุณ",
        description:
          "เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา",
      },
      {
        title: "➡️ [แสดงความคิดเห็น →]",
        description: "",
      },
      {
        title: "➡️ [ตรวจสอบอีกครั้ง →]",
        description: "",
      },
    ],
  },
  {
    id: 6,
    type: `✅ เนื้อหาเรื่องนี้ได้ผ่านการตรวจสอบและอนุมัติโดยระบบและทีมงานผู้ดูแลเรียบร้อยแล้ว
    นิยายเรื่องนี้ได้ผ่านการตรวจสอบและจัดหมวดหมู่เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์มเรา เพื่อความสะดวกและประสบการณ์การอ่านที่ดียิ่งขึ้นสำหรับนักอ่านทุกท่าน`,
    content: [
      {
        title: "📌 เหตุผลที่เนื้อหานี้ถูกตรวจสอบ",
        description:
          "เนื้อหาของนิยายเรื่องนี้ได้ถูกจัดหมวดหมู่ใหม่จาก 'Boy Love' เป็น 'Girl Love' เพื่อให้สอดคล้องกับแนวทางการจัดเนื้อหาของแพลตฟอร์ม เนื่องจากเนื้อหาเหมาะสมกับหมวดหมู่ Girl Love (GL) มากกว่าหมวดหมู่ Boy Love",
      },
      {
        title: "📖 เคล็ดลับการจัดหมวดนิยาย",
        description:
          "เพื่อให้นิยายเข้าถึงนักอ่านได้ง่ายขึ้น ควรเลือกหมวดหมู่ตามนักอ่าน ตัวอย่าง 1: หากเนื้อหาของคุณเป็น GL Fantasy ที่มีโมเมนต์โรแมนติกน่ารักระหว่างตัวละครผู้หญิงในโลกแฟนตาซี หมวดหมู่หลักควรเป็น GL และหมวดหมู่รองสามารถเป็น Fantasy ตัวอย่าง 2: หากเนื้อหาของคุณกล่าวถึงธีม LGBTQ+ แต่เน้นประเด็นดราม่าในสังคมและการเลือกปฏิบัติ หมวดหมู่หลักควรเป็น Social Reflection และหมวดหมู่รองสามารถเป็น LGBTQ+",
      },
      {
        title: "📜 แนวทางการตรวจสอบเนื้อหา",
        description:
          "การตัดสินใจนี้เป็นไปตาม [เงื่อนไขการใช้แพลตฟอร์ม] เพื่อรักษาคุณภาพและความเหมาะสมของเนื้อหาสำหรับผู้อ่าน",
      },
      {
        title: "🔍 การตรวจสอบเนื้อหาของเรา",
        description:
          "กระบวนการตรวจสอบของเราใช้ระบบ AI ซึ่งเป็นเครื่องมืออัตโนมัติที่ออกแบบมาเพื่อวิเคราะห์และจัดหมวดหมู่เนื้อหาได้อย่างมีประสิทธิภาพ",
      },
      {
        title: "🤝 เนื้อหาของคุณจะได้รับผลกระทบอย่างไร?",
        description:
          "เรื่องของคุณจะปรากฏในหมวดหมู่ 'Girl Love' ซึ่งช่วยให้ผู้อ่านสามารถค้นหาเนื้อหาที่ตรงกับความสนใจได้ง่ายขึ้น",
      },
      {
        title: "🗨️ แสดงความคิดเห็นของคุณ",
        description:
          "เราให้ความสำคัญกับความคิดเห็นของคุณ และขอเชิญแสดงความคิดเห็นเพื่อพัฒนาแพลตฟอร์มของเรา",
      },
      {
        title: "➡️ [แสดงความคิดเห็น →]",
        description: "",
      },
      {
        title: "➡️ [ตรวจสอบอีกครั้ง →]",
        description: "",
      },
    ],
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

export const Data_LoveNovel: GridData[] = [
  {
    id: 1, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Love%20Novel/1.gif",
    title: "Evil Miss You คุณคนน่ามอง",
    writer: "Ammara Writes",
    status: {
      love: "15",
      see: "1.49M",
      keep: "31.41k",
    },
    tags: ["รักต่างวัย", "ดราม่า", "คู่หมั้น"], // Mock tags
    episode: 15,
    story:
      'คุณคนน่ามอง ภาค 1\nในอดีต ฉันเคยตัดสินใจคบกับผู้ชายคนหนึ่ง\nภายนอกเขาดูร้ายกาจ แต่ความจริงแล้วเป็นคนดีมาก และใช่ ‘เขารักฉัน’\nมันควรเป็นสิ่งที่ดี เป็นการเริ่มต้นที่ดี เพียงแต่แค่...\nเมื่อถึงจุดหนึ่งฉันกลับค้นพบว่าที่จริงแล้วฉันไม่ได้รักเขา เป็นใจฉันที่มันโง่เง่า\nฉันกลายเป็นผู้ร้ายที่ทำลายหัวใจเขา ส่วนเขาคือเหยื่อผู้โชคร้ายที่หมดเยื่อใยกับฉัน\n\nหลายปีผ่านไป แฟนเก่าคนนั้นได้กลับมายืนอยู่ตรงหน้าฉันอีกครั้ง\n"แต่งงานกับพี่มั้ย?"\n\nเป็นคำขอแต่งงานด้วยสีหน้าเย็นชาไร้ความรู้สึกตั้งแต่แรก\n\nเป็นคำขอที่มีเงื่อนไข ระหว่างเราไม่ใช่เรื่องของหัวใจ\n“ค่ะ” แต่ฉันยอม...\n\nคุณคนน่ามอง ภาค 2\nไม่กี่เดือนก่อน ฉันได้ตัดสินใจทำสัญญาแต่งงานหลอกๆ กับแฟนเก่าของตัวเอง\nเบื้องหน้าคือภรรยาที่เขารักใคร่ เบื้องหลังกลับเป็นได้แค่ลูกน้องคนหนึ่งในสายตาเขาเท่านั้น\nแล้วไม่รู้อะไรดลใจให้ฉันเริ่มสนใจเขาในวันที่สาย\nแต่สามีในนามของฉันน่ะทั้งเย็นชา เมินเฉย และไม่มีหัวใจ\nฉันจึงพยายามบอกตัวเองซ้ำๆ ว่า ‘ต้องหยุดหวั่นไหว ห้ามหวั่นไหวไปมากกว่านี้’\n\nวันเวลาผ่านไป ความพยายามของฉันช่างไร้ความหมาย\n“เหงา ?”\nในที่สุดเรื่องระหว่างเราก็เดินทางมาถึงจุดที่หัวใจถูกปัดทิ้งไป\nมีแค่ร่างกายที่ใกล้ชิดกัน\n“แก้เหงาให้เอามั้ย ?”\n“อะ อื้อ” แต่ฉันก็ยังยอม…\n\nคุณคนน่ามอง ภาค 3\nหนึ่งปีครึ่งที่ผ่านมา ฉันค้นพบว่าสตอรี่ระหว่างเราไม่ได้ขึ้นอยู่กับว่ารักหรือไม่รัก แต่เป็น ‘ไม่อาจรัก’ ต่างหาก\nในที่สุดฉันก็ตาสว่าง รู้ตัวสักทีว่าสถานะที่แท้จริงของเราทั้งคู่คืออะไร\nสามีของฉันคือผู้ล่า คือผู้ทำลาย สัตว์ร้ายในคราบมนุษย์ที่เขาต้องการกำจัดมีมากมาย\nส่วนฉันก็เป็นได้แค่ ‘เหยื่อล่อที่เขาหวงแหนที่สุด’ เท่านั้น\nในเมื่อความจริงมันเกินจะรับไหว ฉันจึงได้ตัดใจหนีจากเขาไป…\n\nแต่ไม่นาน ผู้ชายใจร้ายคนนั้นทำให้ฉันรู้เหยื่อล่อที่ถูกตรีตราไม่มีวันหนีจากผู้ล่าไปได้\n“ที่อยู่ในท้อง ขอสักคนได้มั้ย ?”\n“ไม่ค่ะ” และครั้งนี้ฉันไม่ยอม',
  },
  {
    id: 2, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Love%20Novel/2.gif",
    title: "เพราะเรา... คู่กัน",
    writer: "Tanya Writes",
    status: {
      love: "9",
      see: "11.4M",
      keep: "109k",
    },
    tags: ["โรแมนติก", "คอมเมดี้", "วาย"], // Mock tags
    episode: 25,
    story:
      "ผมชื่อไทน์ (เป็นคนชิคชิค) สอยผู้หญิงมาแล้วทุกประเภท\nทั้งแฟนเด็กเรียน แฟนน่ารักมุ้งมิ้ง หรือแฟนที่เอะอะอะไรก็เหวี่ยงวีน\nกระทั่งชีวิตอันซาบซ่านของผมมีอันต้องสะดุด\nเมื่อเทพเจ้าแอดมิชชั่นทิ้งดิ่งตัวผมไปลงที่มหา’ลัยแห่งหนึ่งในภาคเหนือ ที่ที่ผมเจอกับ...\n“ไทน์ ทีปกร นิติศาสตร์ปีหนึ่ง เราชอบนาย!”\nเปิดเทอมได้ไม่ทันไรก็มีคนมาสารภาพรักซะแล้วเรา\nถ้าถามว่าแปลกใจมั้ย ตื่นเต้นหรือเปล่า บอกเลยว่าไม่ ก็คนมัน cool อ่ะนะ\nแต่ถ้าถามว่าสะพรึงมั้ย ตอบเลยว่า ใช่! เพราะคนบอกรักผมมันเป็นผู้ชาย!!\nหัวใจ...\n\nปฏิบัติการสลัดตุ๊ดยักษ์ออกจากชีวิตคนชิคจึงเริ่มขึ้นด้วยแผนการหาคนแจ่มแมวสักคนมาแสดงตัวเป็นแฟนผม\nซึ่งไม่มีใครเหมาะสมไปกว่าสารวัตร สามีแห่งชาติของคนทั้งมออีกแล้ว\nทว่าเรื่องก็ไม่ง่ายอย่างที่คิด เมื่อไอ้ศาลาวัดมันดันกวนตีน เล่นตัวไม่ให้ความร่วมมือเสียอย่างนั้น\nหึ แต่ผมไม่ยอมแพ้หรอก! ตื๊อเท่านั้นที่ครองโลก จะตามติดชีวิตมันให้เหมือนเหาฉลามเลย คอยดู๊\n\nแต่ว่า... ตื๊อไปตื๊อมา ทำไมหัวใจคนชิคชักจะสั่นๆ หวั่นไหวทุกทีที่อยู่กับไอ้มนุษย์หน้านิ่งคนนี้วะ...",
  },
  {
    id: 3, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Love%20Novel/3.gif",
    title: "แม้นชีพดับสูญ",
    writer: "Anonymous",
    status: {
      love: "201",
      see: "1M",
      keep: "9693",
    },
    tags: ["ดราม่า", "พีเรียด", "ชีวิตจริง"], // Mock tags
  },
  {
    id: 4, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Love%20Novel/4.gif",
    title: "คุณพ่อมือใหม่กับลูกน้อยตัวป่วน",
    writer: "Chalita Tales",
    status: {
      love: "4668",
      see: "204k",
      keep: "0",
    },
    tags: ["ครอบครัว", "อบอุ่น", "ชีวิตประจำวัน"], // Mock tags
  },
  {
    id: 5, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Love%20Novel/5.gif",
    title: "เสน่ห์จันทน์",
    writer: "Somchai Writes",
    status: {
      love: "984",
      see: "309k",
      keep: "0",
    },
    tags: ["แฟนตาซี", "โรแมนติก", "ย้อนยุค"], // Mock tags
  },
  {
    id: 6, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Love%20Novel/6.gif",
    title: "ในวันที่ฝนพร่างพราย",
    writer: "Kamol Fiction",
    status: {
      love: "1185",
      see: "63k",
      keep: "16",
    },
    tags: ["ดราม่า", "โรแมนติก", "รักต้องห้าม"], // Mock tags
  },
];

export const Data_BoyLoveNovel: GridData[] = [
  {
    id: 1, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Boy%20Love/1.gif",
    title: "ใกล้แค่พันลี้",
    writer: "Kamol Fiction",
    status: {
      love: "53.12k",
      see: "2M",
      keep: "0",
    },
    tags: ["วาย", "โรแมนติก", "ดราม่า"], // Mock tags
    episode: 59,
    story:
      "การเดินทางจากโลกไปสู่ดวงจันทร์ ใกล้ค้นพบแล้วว่าเส้นทางยาวไกลสามารถร่นขยับได้ หากคนนำทางมีผลต่อหัวใจ แม้ระยะทางจะไกลเป็นพันลี้ แต่สุดท้ายเขาคนนั้นจะทำให้มัน...ใกล้แค่พันลี้\n\tคนตัวเล็กสวมชุดสูทสีกรมที่เป็นเอกลักษณ์ของนักศึกษาสาขาธุรกิจการบิน เดินเข้ามาภายในห้องจัดนิทรรศการภายถ่ายที่จัดร่วมกันระหว่างคณะนิเทศศาสตร์และคณะดิจิทัลมีเดีย ใกล้เลือกมาที่นี่ในตอนเย็นเพราะคิดว่าไม่ค่อยมีคน อย่างตอนนี้ที่มีเขาเพียงคนเดียวในห้องกว้างที่เต็มไปด้วยภาพถ่าย\n\tดวงตาเรียวรีมองไปยังป้ายขนาดใหญ้ที่ติดอยู่บนผนังคำว่า ‘เงา’ ที่อยู่บนแผ่นป้ายทำให้ใกล้รู้คอนเซ็ปต์ของงานครั้งนี้ ภาพที่ทุกภาพจึงสื่อถึงเงาทั้งหมด ทว่ามีเพียงภาพเดียวที่ใกล้ชอบมากที่สุด\n\tเขาหยุดยืนตรงภาพหนึ่ง…ใกล้มองพระจันทร์เต็มดวงที่ลอยเด่นบนท้องฟ้าสีหม่น แสงสีเหลืองนวลที่สาดกระทบบนผืนทะเลกลายเป็นภาพสะท้อน คล้ายว่ามีดวงจันทร์อีกดวงอยู่ในท้องทะเล แต่แท้จริงแล้วมันเป็นเพียงแค่เงาของพระจันทร์เท่านั้น\n\tดวงจันทร์…ยังมีดวงเดียวเสมอ\n\tใกล้ยิ้มบางก่อนจะเลื่อนสายตามองป้ายข้อมูลสีขาวเล็กๆ ที่ติดอยู่ข้างรูปภาพ คนถ่ายภาพนี้เป็นนักศึกษาคณะดิจิทัลมีเดีย สาขากราฟิก และภาพนี้มีชื่อว่า…\n\t‘หลงเงาจันทร์’\n\tเขาคิดว่าคนถ่ายภาพนี้มีความคิดสร้างสรรค์พอสมควร ทั้งยังมีฝีมือมากถึงได้ถ่ายภาพออกมาสวยขนาดนี้ ใกล้ไม่รู้ว่าคนถ่ายภาพนี้เรียนเก่งแค่ไหน แต่เพราะเหตุการณ์ในวันนั้นทำให้เขาพอจะรู้ว่า…\n\tคนที่ถ่ายภาพนี้…เป็นคนใจดี\n\tและเพราะความใจดีของเจ้าของภาพ ‘หลงเงาจันทร์’\n\tจึงทำให้เขาหวนนึกถึงวันนั้นอีกครั้ง",
  },
  {
    id: 2, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Boy%20Love/2.gif",
    title: "CHAIN รักผูกใจ",
    writer: "Somchai Writes",
    status: {
      love: "25k",
      see: "1M",
      keep: "0",
    },
    tags: ["วาย", "แอคชั่น", "มิตรภาพ"], // Mock tags
    episode: 20,
    story:
      "ชีวิตเธอยุ่งจะตาย ไม่มีเวลาสนใจเรื่องความรักหรอก ทำไมคนรอบข้างต้องคิดว่าเขาคนนั้นชอบเธอด้วยนะ คนเย็นชาแบบนั้นจะชอบเธอจริงๆเหรอ ดูหน้าเขาเวลาเจอกันแล้วเหมือนอีกฝ่ายจะไม่ชอบหน้ากันเสียมากกว่า\n\nเรื่องราวความรักของคุณหมอสาวสวยผู้แสนเย็นชา กับ ผู้หญิงคนหนึ่งที่เข้ามาตามจีบ\n\nอคิราภ์ นักธุรกิจสาวที่ตกหลุมรักคุณหมอคนสวยตั้งแต่แรกพบ กระทั่งนำไปสู่การตามจีบด้วยชาเขียวของโปรดของคุณหมอ แต่ดูเหมือนแพทย์หญิงพาณิภัค จะใจแข็งกว่าที่คิด ความรักในครั้งนี้ของอคิราภ์จะสมหวังหรือไม่\nและชาเขียวจะช่วยจีบคุณหมอผู้แสนจะเย็นชาได้จริงไหม\nเอาใจช่วยคุณอคิราภัคได้ใน รักผูกใจ",
  },
  {
    id: 3, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Boy%20Love/3.gif",
    title: "วิศวะกรรมประสาท",
    writer: "Chalita Tales",
    status: {
      love: "18.4k",
      see: "1M",
      keep: "0",
    },
    tags: ["วาย", "ดราม่า", "ชีวิตมหาวิทยาลัย"], // Mock tags
  },
  {
    id: 4, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Boy%20Love/4.gif",
    title: "สวรรค์ประทานพร",
    writer: "Tanya Writes",
    status: {
      love: "9743",
      see: "617.4k",
      keep: "0",
    },
    tags: ["แฟนตาซี", "วาย", "เทพเจ้า"], // Mock tags
  },
  {
    id: 5, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Boy%20Love/5.gif",
    title: "เส้นทางรักโลกมายา",
    writer: "Tofusan Writes",
    status: {
      love: "26.52k",
      see: "1M",
      keep: "0",
    },
    tags: ["โรแมนติก", "วาย", "วงการบันเทิง"], // Mock tags
  },
  {
    id: 6, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Boy%20Love/6.png",
    title: "ปีศาจจิ้งจอกตนนี้แค่ตะกละนิดหน่อย",
    writer: "Ammara Writes",
    status: {
      love: "34.91k",
      see: "1M",
      keep: "0",
    },
    tags: ["วาย", "แฟนตาซี", "ปีศาจ"], // Mock tags
  },
];

export const Data_GirlLoveNovel: GridData[] = [
  {
    id: 1, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Girl%20Love/1.gif",
    title: "The Secret of Us ใจซ่อนรัก",
    writer: "Waraporn Words",
    status: {
      love: "46.23k",
      see: "1.9M",
      keep: "0",
    },
    tags: ["รักต้องห้าม", "โรแมนติก", "ชีวิตจริง"], // Mock tags
    episode: 23,
    story:
      "แพทย์หญิงฟ้าลดาทายาทของโรงพยาบาลเอกชนชื่อดัง หลังจากเรียนจบเฉพาะทางด้านผิวหนังกลับมาในสภาพบอบช้ำที่ถูกคนรักทิ้งไป ก็มุ่งมั่นทำงานโดยไม่คิดจะมีความรักอีก\n          แต่ด้วยความสวยและฐานะหน้าที่การงานของลดา ทำให้มีคนมากมายอาสามาดามใจให้ ไม่ว่าจะเป็น รตี ดาราสาวสวยระดับซุปตาร์ หรือแม้แต่ นายแพทย์วิษณุซึ่ง คุณหญิงรัศมี แม่ของลดา เป็นคนจับคู่ให้เพื่อผลประโยชน์ทางธุรกิจ แต่ลดายังคงนึกถึงคนใจร้ายคนนั้น และไม่คิดจะเปิดใจให้ใคร\nจนกระทั่งลดาได้พบกับศนิธาดา อดีตคนรักที่เคยทำลายชีวิตเธอ เอินมาเป็นพรีเซ็นเตอร์ของโรงพยาบาล และพยายามขอโอกาสกลับมาคืนดีกับฟ้าลดาอีกครั้ง เพราะตลอดเวลาที่เลิกรากันไปไม่เคยมีสักวันที่เอินไม่คิดถึงลดา แต่ลดาไม่เชื่อและไม่ไว้ใจเอินอีกแล้ว ยิ่งเอินมีข่าวกับ อิงฟ้า ดาราสาวระดับซุปตาร์อีกคน ที่กลายเป็นคู่จิ้นของเอิน ก็ยิ่งตอกย้ำให้ลดาผลักไสเอินไปจากชีวิตของเธอมากขึ้นไปอีก\nแต่เอินกลับไม่ยอมแพ้ พยายามเดินหน้าง้อลดาด้วยวิธีต่าง ๆ โดยมี ซูซี่ ผู้จัดการของเอิน คอยช่วย แม้จะมี หมอแทน และ หมอโบว์ เพื่อนสนิทของลดา คอยขัดขวางด้วยความเป็นห่วงกลัวเพื่อนเสียใจ อีกทั้งยังมีรตีคอยหวงก้างตลอด แถมช่วงนั้นวิษณุก็รุกหนัก โดยมีคุณหญิงรัศมีคอยให้ท้าย แต่เอินก็ยังพยายามที่จะง้อลดาอย่างสุดกำลังเพื่อจะได้กลับมารักกันอีกครั้ง",
  },
  {
    id: 2, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Girl%20Love/2.gif",
    title: "Vice Versa รักสลับโลก",
    writer: "Prasert Plots",
    status: {
      love: "3261",
      see: "466k",
      keep: "0",
    },
    tags: ["วายหญิง", "แฟนตาซี", "โลกคู่ขนาน"], // Mock tags
    episode: 20,
    story:
      "เกือบจะได้ทำงานเป็นผู้ช่วย Colorist ในค่ายหนังที่วาดฝันไว้อยู่แล้วแท้ๆ\nแต่จู่ๆ ทะเลกลับประสบอุบัติเหตุจมน้ำและตื่นขึ้นมาอีกทีในร่างของเทสส์\nชายหนุ่มรุ่นราวคราวเดียวกันที่ชีวิตดูไม่ค่อยจะเอาไหนสักเท่าไหร่\nทั้งยังพบว่าโลกที่ตัวเองอยู่ในตอนนี้คือ ‘โลกคู่ขนาน’\nแบบนี้ใครมันจะไปรับได้ ทางเดียวที่ต้องทำคือหาทางกลับโลกเดิมเท่านั้นแหละ!\n\nแล้ววันหนึ่งก็มีแสงสว่างจ้าสาดทะลุเข้ามาท่ามกลางบรรยากาศสีเทาทึมๆ ในใจ\nเมื่อเขาได้พบกับภูวดล บุรุษพยาบาลที่มาจากโลกเดียวกัน\nแถมพี่ชายใจดีคนนี้ยังบอกอีกว่า ถ้าจะกลับไปเขาต้องตามหาใครบางคน\nใครที่ว่านั้นต้องมาจากโลกใบเดียวกันกับเขา เจอชะตากรรมเดียวกันกับเขา\nเมื่อเจอแล้วจะมีสัญญาณบอกเองว่าคนคนนั้นคือ ‘กุญแจนำทาง’\nแต่ไม่ว่าจะตามหาจากคนรอบตัวยังไง ก็ไม่มีใครดูเข้าเค้าเลยสักคน\nจนกระทั่งเขาได้พบหนังสือรุ่นสมัยประถมที่ถูกเก็บเอาไว้\nในนั้นมีภาพของเทสส์ที่กำลังยืนกอดคอกับใครอีกคนดูสนิทสนม...\nปกรณ์ เอื้ออังกูร คนคนนี้จะใช่กุญแจนำทางของเขาหรือเปล่านะ",
  },
  {
    id: 3, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Girl%20Love/3.gif",
    title: "Last Christmas ระยะลองรัก",
    writer: "Suwanna Scribbles",
    status: {
      love: "355",
      see: "29k",
      keep: "0",
    },
    tags: ["โรแมนติก", "ดราม่า", "เทศกาล"], // Mock tags
  },
  {
    id: 4, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Girl%20Love/4.jpg",
    title: "PLUTO : นิทาน ดวงดาว ความรัก",
    writer: "Natcha Novels",
    status: {
      love: "2101",
      see: "180k",
      keep: "0",
    },
    tags: ["แฟนตาซี", "รักลึกลับ", "นิทาน"], // Mock tags
  },
  {
    id: 5, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Girl%20Love/5.jpg",
    title: "US รักของเรา",
    writer: "Ammara Writes",
    status: {
      love: "16.73k",
      see: "576.23k",
      keep: "0",
    },
    tags: ["วายหญิง", "โรแมนติก", "ดราม่า"], // Mock tags
  },
  {
    id: 6, // Added unique ID
    image: "https://storage.googleapis.com/readawritedemo/Girl%20Love/6.gif",
    title: "คุณวาฬร้านชำ The Whale Store ร้านนี้ไม่มีรักขาย",
    writer: "Ammara Writes",
    status: {
      love: "1624",
      see: "277k",
      keep: "0",
    },
    tags: ["อบอุ่น", "ชีวิตประจำวัน", "ร้านค้า"], // Mock tags
  },
];
