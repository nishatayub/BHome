interface DisplayBandProps {
  text: string;
  bg?: "white" | "gray" | "black";
}

export default function DisplayBand({ text, bg = "gray" }: DisplayBandProps) {
  const bgClass = bg === "white" ? "section-white" : bg === "black" ? "section-black" : "section-gray";
  const textColor = bg === "black" ? "text-white" : "text-black";

  return (
    <section className={`${bgClass} py-12 overflow-hidden`} aria-hidden="true">
      <p
        className={`display-type whitespace-nowrap px-10 select-none ${textColor}`}
      >
        {text}
      </p>
    </section>
  );
}
