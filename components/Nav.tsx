import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">💬</span>
          سوالف
        </Link>
        <div className="nav-links">
          <Link href="/#features">المميزات</Link>
          <Link href="/#how">كيف يشتغل؟</Link>
          <Link href="/help/">المساعدة</Link>
          <Link href="/privacy/">الخصوصية</Link>
          <Link className="nav-cta" href="/#download">
            حمّل التطبيق
          </Link>
        </div>
      </div>
    </nav>
  );
}
