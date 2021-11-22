import type {
  PageEnhanceLocaleConfig,
  ReadingTimeLocaleConfig,
  WalineLocaleConfig,
} from '../shared'

/** Muti language config for Page Info */
export const pageInfoI18n: PageEnhanceLocaleConfig = {
  '/zh/': {
    author: '作者🖊',
    date: '写作日期📅',
    origin: '原创💡',
    views: '访问量🔢',
    category: '分类🌈',
    tag: '标签🏷',
    readingTime: '阅读时间⌛',
    words: '字数🔠',
  },
  '/en/': {
    author: 'Author🖊',
    date: 'Writing Date📅',
    origin: 'Original💡',
    views: 'Page views🔢',
    category: 'Category🌈',
    tag: 'Tags🏷',
    readingTime: 'Reading Time⌛',
    words: 'Words🔠',
  },
  '/de/': {
    author: 'Autor🖊',
    date: 'Datum📅',
    origin: 'Original💡',
    views: 'Besucher🔢',
    category: 'Kategorie🌈',
    tag: 'Tags🏷',
    readingTime: 'Lesezeit⌛',
    words: 'Wörter🔠',
  },
  '/vi/': {
    author: 'Người viết🖊',
    date: 'Ngày viết📅',
    origin: 'Nguồn💡',
    views: 'Views của trang🔢',
    category: 'Category🌈',
    tag: 'Tags🏷',
    readingTime: 'Thời gian đọc⌛',
    words: 'Words🔠',
  },
}
export const walineI18n: WalineLocaleConfig = {
  '/zh/': {
    placeholder: '请留言。(填写邮箱可在被回复时收到邮件提醒)',
  },
  '/en/': {
    placeholder:
      'Write a comment here (Fill in the email address to receive an email notification when being replied)',
  },
  '/de/': {
    placeholder:
      'Schreibe ein Kommentar (Geben Sie die E-Mail-Adresse ein, um eine E-Mail-Benachrichtigung zu erhalten, wenn Sie geantwortet werden)',
  },
  '/vi/': {
    placeholder:
      'Để lại bình luận (Điền địa chỉ email để nhận email thông báo khi được trả lời)',
  },
}
/** Muti language config for reading time plugin */
export const i18n: ReadingTimeLocaleConfig = {
  '/zh/': {
    word: '约 $word 字',
    minute: '小于 1 分钟',
    time: '大约 $time 分钟',
  },
  '/en/': {
    word: 'About $word words',
    minute: 'Less than 1 minute',
    time: 'About $time min',
  },
  '/de/': {
    word: 'Um die $word Wörter',
    minute: 'Weniger als eine Minute',
    time: 'Ungefähr $time min',
  },
  '/vi/': {
    word: 'Khoảng $word từ',
    minute: 'Ít hơn 1 phút',
    time: 'Khoảng $time phút',
  },
}
