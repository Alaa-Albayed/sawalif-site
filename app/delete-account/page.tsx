import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'حذف الحساب — سوالف',
};

const steps = [
  'افتح تطبيق «سوالف» وسجّل الدخول.',
  'اذهب إلى تبويب «حسابي».',
  'مرّر للأسفل إلى قسم «مساعدة».',
  'اضغط على «حذف الحساب» (الزر الأحمر).',
  'أكّد الحذف. سيُحذف حسابك مباشرةً ويتم فصل حساب Google المرتبط به.',
];

const deleted = [
  'حساب Google المرتبط (الاسم، البريد الإلكتروني، الصورة).',
  'بيانات الملف الشخصي: الاسم الظاهر، العمر، الجنس، والدولة.',
  'محتوى المحادثات: الرسائل النصية والصوتية والصور والفيديوهات.',
  'رصيد الجواهر وحالة الاشتراك المميّز.',
];

export default function DeleteAccount() {
  return (
    <>
      <Nav />
      <div className="doc-hero">
        <h1>
          حذف <span className="grad-text">الحساب</span>
        </h1>
        <div className="updated">تطبيق «سوالف» — المطوّر: Alaa Albayed</div>
      </div>
      <div className="container">
        <div className="doc">
          <p>
            يمكنك طلب حذف حسابك في تطبيق «سوالف» وجميع البيانات المرتبطة به في أي
            وقت. توضّح هذه الصفحة الخطوات المطلوبة وأنواع البيانات التي يتم حذفها
            أو الاحتفاظ بها.
          </p>

          <div className="doc-sec">
            <h2>
              <span className="n">١</span>الحذف من داخل التطبيق
            </h2>
            <ul>
              {steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="doc-sec">
            <h2>
              <span className="n">٢</span>الحذف عبر البريد الإلكتروني
            </h2>
            <p>
              إن لم تتمكن من الوصول إلى التطبيق، أرسل طلبًا من بريدك الإلكتروني
              المسجَّل إلى{' '}
              <a href="mailto:alaa.albayed2016@gmail.com">
                alaa.albayed2016@gmail.com
              </a>{' '}
              وعنوانه «طلب حذف حساب»، وسنعالج طلبك خلال ٣٠ يومًا كحد أقصى.
            </p>
          </div>

          <div className="doc-sec">
            <h2>
              <span className="n">٣</span>البيانات التي يتم حذفها
            </h2>
            <ul>
              {deleted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="doc-sec">
            <h2>
              <span className="n">٤</span>البيانات التي يتم الاحتفاظ بها ومدّتها
            </h2>
            <p>
              يتم حذف بيانات حسابك مباشرةً عند تأكيد الحذف. قد نحتفظ بسجلات محدودة
              مطلوبة قانونيًا (مثل سجلات المعاملات المالية والبلاغات المتعلقة
              بإساءة الاستخدام) لمدة أقصاها <strong>٩٠ يومًا</strong> لأغراض
              الأمان والامتثال القانوني، ثم تُحذف نهائيًا. لا تُستخدم هذه السجلات
              لأي غرض آخر.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
