import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span className="copy">© 2026 سوالف — جميع الحقوق محفوظة</span>
        <div className="links">
          <Link href="/privacy/">سياسة الخصوصية</Link>
          <Link href="/terms/">الشروط والأحكام</Link>
          <Link href="/help/">المساعدة</Link>
          <Link href="/delete-account/">حذف الحساب</Link>
          <Link href="/child-safety/">سلامة الأطفال</Link>
          <a href="mailto:alaa.albayed2016@gmail.com">تواصل معنا</a>
        </div>
      </div>
    </footer>
  );
}
