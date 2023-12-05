export default function Button({ children, textColor, bgColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}>
      {children}
    </button>
  );
}
