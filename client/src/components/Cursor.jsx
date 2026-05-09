import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef(null);
  const cur2Ref = useRef(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      curRef.current.style.left = mx + "px";
      curRef.current.style.top = my + "px";
    };

    const animate = () => {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      cur2Ref.current.style.left = cx + "px";
      cur2Ref.current.style.top = cy + "px";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const expand = () => {
      cur2Ref.current.style.width = "52px";
      cur2Ref.current.style.height = "52px";
      cur2Ref.current.style.borderColor = "rgba(200,240,77,0.6)";
    };
    const shrink = () => {
      cur2Ref.current.style.width = "36px";
      cur2Ref.current.style.height = "36px";
      cur2Ref.current.style.borderColor = "rgba(200,240,77,0.35)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur2" ref={cur2Ref} />
    </>
  );
}
