import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#152B18] text-white/60">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-lg font-bold text-white font-heading mb-4">
              <span className="text-2xl">🌾</span>
              乡村创业孵化平台
            </a>
            <p className="text-sm leading-relaxed">{FOOTER.description}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              快速链接
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              服务模块
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.serviceModules.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              联系方式
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>{FOOTER.contact.email}</li>
              <li>{FOOTER.contact.phone}</li>
              <li>{FOOTER.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>{FOOTER.copyright}</span>
          <span>{FOOTER.icp}</span>
        </div>
      </div>
    </footer>
  );
}
