"use client";

import { useSyncExternalStore } from "react";
import { THEME_COLORS, THEME_STORAGE_KEY } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next ? THEME_COLORS.dark : THEME_COLORS.light);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // 저장소를 쓸 수 없어도 현재 화면의 전환은 유지한다
    }
  }

  // 손잡이 위치와 아이콘은 dark: 클래스로만 그려서 첫 렌더에서도 깜빡이지 않는다
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="다크 모드"
      onClick={toggle}
      className="group flex h-11 items-center rounded-full px-1 focus-visible:outline-none"
    >
      <span className="relative flex h-8 w-14 items-center rounded-full border border-glass-border bg-glass p-0.5 shadow-(--card-shadow) backdrop-blur-xl transition-colors duration-300 group-hover:bg-glass-hover group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-white motion-reduce:transition-none">
        <span className="flex size-6 items-center justify-center rounded-full bg-white/80 text-[#c2410c] shadow-sm transition-transform duration-300 dark:translate-x-6 dark:bg-[#3a1a08] dark:text-orange-200 motion-reduce:transition-none">
          <svg
            className="size-3.5 dark:hidden"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="3" />
            <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06" />
          </svg>
          <svg
            className="hidden size-3.5 dark:block"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13.5 9.6A5.6 5.6 0 0 1 6.4 2.5a5.6 5.6 0 1 0 7.1 7.1Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
