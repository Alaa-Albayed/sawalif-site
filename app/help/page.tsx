import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'المساعدة — سوالف',
};

const sections = [
  {
    n: '١',
    title: 'كيف أبدأ محادثة؟',
    body: 'من تبويب «سوالف» اضغط بدء البحث. عند إيجاد طرف مناسب يوافق الطرفان خلال ١٠ ثوانٍ لتبدأ المحادثة كتابةً أو صوتًا.',
  },
  {
    n: '٢',
    title: 'الفلاتر: النوع والدولة',
    list: [
      '<strong>فلتر النوع:</strong> يكلّف ١٠ 💎 عند كل تطابق ليطابقك مع الجنس الذي تختاره.',
      '<strong>فلتر الدولة:</strong> ميزة حصرية لمشتركي «الباقة المميزة» (١٠$). بعد التفعيل تختار أي دولة تحب التحدث مع أهلها دون خصم جواهر.',
    ],
  },
  {
    n: '٣',
    title: 'المكالمات الصوتية',
    body: 'بعد التطابق اضغط أيقونة المكالمة. عند الاتصال يظهر عدّاد مدة المكالمة، ويمكنك التبديل بين مكبر الصوت وسماعة الأذن أو كتم الميكروفون. تأكد من منح التطبيق إذن الميكروفون ورفع مستوى الصوت.',
  },
  {
    n: '٤',
    title: 'الصور المؤقتة و«المشاهدة الواحدة»',
    body: 'عند إرسال صورة تختار: عادية، أو مشاهدة واحدة (تختفي بعد أول فتح)، أو مؤقتة تختفي بعد المدة المحددة بالضبط. الوسائط المحروقة لا يمكن فتحها مرة أخرى.',
  },
  {
    n: '٥',
    title: 'الجواهر والباقة المميزة',
    body: 'اشترِ الجواهر أو فعّل الباقة المميزة من المتجر داخل التطبيق عبر Google Play. تُضاف الجواهر ويُفعَّل فلتر الدولة تلقائيًا بعد إتمام الشراء.',
  },
  {
    n: '٦',
    title: 'حذف الحساب',
    body: 'من «حسابي» ← «حذف الحساب». يُحذف حسابك ومحادثاتك نهائيًا، ويمكنك بعدها التسجيل من جديد بنفس البريد.',
  },
  {
    n: '٧',
    title: 'الإبلاغ عن إساءة',
    body: 'استخدم زر البلاغ 🚩 داخل المحادثة أو المكالمة للإبلاغ عن أي تجاوز، وسيراجعه فريق الإشراف.',
  },
];

export default function Help() {
  return (
    <>
      <Nav />
      <div className="doc-hero">
        <h1>
          مركز <span className="grad-text">المساعدة</span>
        </h1>
        <div className="updated">أسئلة شائعة وإرشادات استخدام سوالف</div>
      </div>
      <div className="container">
        <div className="doc">
          <p>
            كل ما تحتاج معرفته لاستخدام «سوالف». إن لم تجد إجابتك، تواصل معنا عبر
            البريد في الأسفل.
          </p>
          {sections.map((section) => (
            <div className="doc-sec" key={section.n}>
              <h2>
                <span className="n">{section.n}</span>
                {section.title}
              </h2>
              {section.body && <p>{section.body}</p>}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li
                      key={item}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="doc-sec">
            <h2>
              <span className="n">٨</span>الدعم
            </h2>
            <p>
              لأي استفسار أو مشكلة:{' '}
              <a href="mailto:alaa.albayed2016@gmail.com">
                alaa.albayed2016@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
