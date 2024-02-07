import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

/*선언*/
const DarkModeContext = createContext();

/*우산*/
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  // context가 마운트 되었을 때! 딱! 한번 호출되어야 함으로 useEffect를 사용할 것이다.
  // 사용자가 다크모드 였는지 아니였는지 까지 기억하는 localStorage 기능까지 추가할 것임.
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark"; // 우리 로컬 스토리지에도 저장하기~
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light"; // 우리 로컬 스토리지에도 저장하기~
  }
}

/*원래는 부모에게 우산을 세팅한후, 자식들중 어떤 누군가에게 상태의 뿌리를 내리고자 한다면*/
/*자식 컴포넌트에가서 const {darkMode, toggleDarkMode} = useContext(DarkModeContext)*/
/*라고 터렛을 박고 상태를 가져왔다.*/
/*DarkModeContext 라는 걸 외부로 노출시키지 않고 좀 더 간편하게 하는 방법이 있다.*/
/*useDarkMode 라는 훅을 여기서 임으로 만들면 됨 ㅇㅇ*/
export const useDarkMode = () => useContext(DarkModeContext);

/**
 * 이렇게 하면 사용하려는 자식 사이드에서
 * const {darkMode, toggleDarkMode} = useDarkMode();
 * 요렇게만 하면 되지롱
 */
