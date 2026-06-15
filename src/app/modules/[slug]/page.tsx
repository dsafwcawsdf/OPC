import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CORE_MODULES } from "@/lib/constants";
import ModuleContent from "./ModuleContent";

export function generateStaticParams() {
  return CORE_MODULES.map((mod) => ({
    slug: mod.href.replace("/modules/", ""),
  }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = CORE_MODULES.find((m) => m.href === `/modules/${slug}`);

  if (!mod) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-bg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-dark font-heading mb-4">
            模块未找到
          </h1>
          <Link href="/" className="text-green-primary hover:underline font-medium">
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Top bar */}
      <div className="border-b border-muted-bg bg-white/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-body hover:text-green-primary transition-colors shrink-0"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">返回首页</span>
            </Link>
            <span className="text-muted-bg mx-1">/</span>
            <span className="text-sm text-text-dark font-medium truncate">
              {mod.title}中心
            </span>
          </div>

          {/* Module tabs */}
          <div className="hidden lg:flex items-center gap-1">
            {CORE_MODULES.map((m) => {
              const isActive = m.href === `/modules/${slug}`;
              return (
                <Link
                  key={m.title}
                  href={m.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-green-primary text-white shadow-sm"
                      : "text-text-body hover:text-green-primary hover:bg-green-light/50"
                  }`}
                >
                  <m.icon size={14} strokeWidth={1.5} />
                  {m.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Module content */}
      <ModuleContent slug={slug} />
    </div>
  );
}
