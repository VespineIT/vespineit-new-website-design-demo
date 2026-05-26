import { HORNET_PATH, HORNET_VIEWBOX } from "@/components/three/hornetPath";

export default function HornetMark({
  className = "",
  title = "Vespine IT",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${HORNET_VIEWBOX.width} ${HORNET_VIEWBOX.height}`}
      className={className}
      role="img"
      aria-label={title}
      fill="currentColor"
    >
      <path fillRule="evenodd" d={HORNET_PATH} />
    </svg>
  );
}
