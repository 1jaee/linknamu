export const THEME_STORAGE_KEY = "theme";

export const THEME_COLORS = {
  light: "#ff6b1a",
  dark: "#160a04",
} as const;

// 첫 화면을 그리기 전에 실행되어 저장된 테마(없으면 OS 설정)를 <html>에 적용한다
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?${JSON.stringify(
  THEME_COLORS.dark,
)}:${JSON.stringify(THEME_COLORS.light)})}catch(e){}})()`;
