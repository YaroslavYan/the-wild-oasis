import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    //Передаємо true яке змушує обробник подій спрацювати на ранній фазі захоплення
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.addEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
