import { GiScrollQuill } from 'react-icons/gi';
import axios from '../../config/axios';

export const adminGetClient = async () => {
  return await axios.get('/admin/client');
};

// test create subcat

const sc1 = [
  'หูฟัง',
  'อุปกรณ์เสริมหูฟัง',
  'ลำโพง',
  'Dac & Amplifier',
  'เครื่องเล่นเพลง (DAP)',
  'AV Receiver',
  'อุปกรณ์เสริมเครื่องเสียง (Audio Accessories)',
];

const scarr = [
  [
    'หูฟัง',
    'อุปกรณ์เสริมหูฟัง',
    'ลำโพง',
    'Dac & Amplifier',
    'เครื่องเล่นเพลง (DAP)',
    'AV Receiver',
    'อุปกรณ์เสริมเครื่องเสียง (Audio Accessories)',
  ],
  [
    'หูฟังเกมมิ่ง',
    'คีย์บอร์ดเกมมิ่ง',
    'เมาส์เกมมิ่ง',
    'เก้าอี้เกมมิ่ง',
    'โต๊ะเกมมิ่ง',
    'เกมมิ่งเกียร์',
    'จอคอมเกมมิ่ง',
    'Custom Keyboard',
    'อุปกรณ์เกมมือถือ',
    'เกมคอนโซล',
    'จอยเกมส์',
  ],
  [
    'เก้าอี้',
    'อุปกรณ์เสริมเก้าอี้',
    'โต๊ะ',
    'อุปกรณ์เสริมโต๊ะ',
    'ที่วางและชั้นวาง',
    'ขาตั้ง',
    'ชั้นวางของ',
    'อุปกรณ์จัดเก็บสายไฟ',
    'ไฟตกแต่ง',
  ],
  [
    'คอมพิวเตอร์เช็ต',
    'ประกอบคอม DIY',
    'โน๊ตบุ๊ค',
    'Tablet',
    'จอคอมพิวเตอร์',
    'อุปกรณ์ตกแต่งเคสคอม',
    'อุปกรณ์ประกอบชุดน้ำ',
    'All in one / Mini PC',
    'อุปกรณ์เสริมโน๊ตบุ๊ค',
  ],
  [
    'กล้อง Webcam',
    'ไมค์คอนเดนเซอร์',
    'การ์ดแคปเจอร์',
    'ขาไมค์หนีบโต๊ะ',
    'ไฟไลฟ์สด',
    'กรีนสกรีน',
    'Stream Deck',
    'อุปกรณ์เสริม Live Streaming',
  ],
  [
    'ไมค์คอมพิวเตอร์',
    'เมาส์',
    'คีย์บอร์ด',
    'ลำโพงคอมพิวเตอร์',
    'อุปกรณ์จัดเก็บข้อมูล',
    'อุปกรณ์จ่ายไฟ',
    'เครื่องปริ้นเตอร์และหมึกพิมพ์',
    'อุปกรณ์เน็ตเวิร์ค',
    'โปรเจคเตอร์และอุปกรณ์',
  ],
];
export const CareateSubcat = async () => {
  sc1.map((el) => {
    console.log(el);
    funncreatesubcat(el, 1);
  });
  const funncreatesubcat = async (s_catname, catid) => {
    return await axios.post('/admin/sub-category', {
      subCategoryName: s_catname,
      categoryId: catid,
    });
  };
};
// CareateSubcat();
