import classNames from "classnames";

function Button({ text, variant = "default" }) {
  return (
    <>
      <button
        className={classNames({
          "p-4 h-10 flex items-center rounded mb-4": true,
          "bg-gray-100": variant === "default",
          "bg-green-600 text-white": variant === "success",
          "bg-yellow-400": variant === "info",
          "bg-red-600 text-white": variant === "danger",
        })}
      >
        {text} {variant && variant}
      </button>
    </>
  );
}

export default Button;
