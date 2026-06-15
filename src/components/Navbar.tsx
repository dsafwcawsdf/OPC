"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingBag, ChevronRight, Package, CreditCard, MapPin, Clock } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type PanelType = "profile" | "orders" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelType>(null);

  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function togglePanel(panel: PanelType) {
    setActivePanel(activePanel === panel ? null : panel);
  }

  function closePanel() {
    setActivePanel(null);
  }

  const navClasses = scrolled || activePanel
    ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-green-light/30"
    : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-bold text-text-dark font-heading shrink-0"
              onClick={closePanel}
            >
              <span className="text-2xl">🌾</span>
              <span className="hidden sm:inline">乡村创业孵化平台</span>
              <span className="sm:hidden">乡村创业</span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closePanel}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-green-primary bg-green-light"
                        : "text-text-body hover:text-text-dark hover:bg-muted-bg"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right actions: profile, orders, CTA */}
            <div className="hidden md:flex items-center gap-2">
              {/* 个人中心 */}
              <button
                onClick={() => togglePanel("profile")}
                className={`relative p-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activePanel === "profile"
                    ? "bg-green-light text-green-primary"
                    : "text-text-body hover:text-text-dark hover:bg-muted-bg"
                }`}
                title="个人中心"
              >
                <User size={20} strokeWidth={1.5} />
              </button>

              {/* 订单管理 */}
              <button
                onClick={() => togglePanel("orders")}
                className={`relative p-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activePanel === "orders"
                    ? "bg-green-light text-green-primary"
                    : "text-text-body hover:text-text-dark hover:bg-muted-bg"
                }`}
                title="订单管理"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>

              {/* CTA */}
              <a
                href="#core-modules"
                onClick={closePanel}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-primary to-tech-purple hover:shadow-lg hover:shadow-green-primary/25 hover:scale-105 transition-all duration-300"
              >
                立即体验
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-text-dark hover:bg-muted-bg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4 border-t border-muted-bg animate-fade-in-up">
              <div className="flex flex-col gap-1 pt-3">
                {NAV_ITEMS.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeId === id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-green-primary bg-green-light"
                          : "text-text-body hover:text-text-dark hover:bg-muted-bg"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => { setMobileOpen(false); togglePanel("profile"); }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-muted-bg text-text-dark hover:border-green-primary/30 hover:text-green-primary transition-all"
                  >
                    <User size={16} strokeWidth={1.5} />个人中心
                  </button>
                  <button
                    onClick={() => { setMobileOpen(false); togglePanel("orders"); }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-muted-bg text-text-dark hover:border-green-primary/30 hover:text-green-primary transition-all"
                  >
                    <ShoppingBag size={16} strokeWidth={1.5} />订单管理
                  </button>
                </div>
                <a
                  href="#core-modules"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-primary to-tech-purple"
                >
                  立即体验
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Overlay backdrop */}
      {activePanel && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={closePanel}
        />
      )}

      {/* Profile slide-out panel */}
      {activePanel === "profile" && (
        <div className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl animate-fade-in-up overflow-y-auto">
          <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-muted-bg px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-dark font-heading flex items-center gap-2">
              <User size={20} className="text-green-primary" strokeWidth={1.5} />个人中心
            </h2>
            <button onClick={closePanel} className="p-2 rounded-lg hover:bg-muted-bg transition-colors">
              <X size={20} className="text-text-body" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* User info card */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-light to-tech-purple-light/50 border border-green-primary/10">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-green-primary to-tech-purple flex items-center justify-center">
                <User size={30} className="text-white" strokeWidth={1.5} />
              </div>
              <p className="text-lg font-bold text-text-dark font-heading">新农人用户</p>
              <p className="text-sm text-text-body mt-1">您还未完善个人信息</p>
              <button className="mt-4 inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-green-primary to-tech-purple hover:shadow-lg hover:shadow-green-primary/20 transition-all">
                完善资料 <ChevronRight size={15} />
              </button>
            </div>

            {/* Menu items */}
            <div className="space-y-1">
              {[
                { icon: User, label: "个人信息", desc: "姓名、手机号、地区" },
                { icon: CreditCard, label: "账户绑定", desc: "银行卡、微信、支付宝" },
                { icon: MapPin, label: "收货地址", desc: "管理您的收货地址" },
                { icon: Clock, label: "操作记录", desc: "查看历史操作日志" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted-bg transition-colors text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center">
                    <item.icon size={17} className="text-green-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-dark">{item.label}</p>
                    <p className="text-xs text-text-body">{item.desc}</p>
                  </div>
                  <ChevronRight size={15} className="text-text-body shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Orders slide-out panel */}
      {activePanel === "orders" && (
        <div className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl animate-fade-in-up overflow-y-auto">
          <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-muted-bg px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-dark font-heading flex items-center gap-2">
              <ShoppingBag size={20} className="text-green-primary" strokeWidth={1.5} />订单管理
            </h2>
            <button onClick={closePanel} className="p-2 rounded-lg hover:bg-muted-bg transition-colors">
              <X size={20} className="text-text-body" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            {/* Order tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-muted-bg">
              {["全部", "待付款", "进行中", "已完成"].map((t, i) => (
                <button
                  key={t}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                    i === 0 ? "bg-white text-text-dark shadow-sm" : "text-text-body hover:text-text-dark"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Empty state */}
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted-bg flex items-center justify-center">
                <Package size={28} className="text-text-body/60" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-text-dark mb-1">暂无订单</p>
              <p className="text-xs text-text-body">您还没有任何订单记录</p>
            </div>

            {/* Quick actions */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-text-body uppercase tracking-wider">快捷操作</p>
              {[
                { icon: ShoppingBag, label: "发起新订单", desc: "创建农产品购销订单" },
                { icon: Clock, label: "历史订单", desc: "查看已完成的历史订单" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted-bg transition-colors text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center">
                    <item.icon size={17} className="text-green-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-dark">{item.label}</p>
                    <p className="text-xs text-text-body">{item.desc}</p>
                  </div>
                  <ChevronRight size={15} className="text-text-body shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
