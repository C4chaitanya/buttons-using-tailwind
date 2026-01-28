import classNames from "classnames";

export default function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "rounded  p-3 shadow bg-white w-48 border",
    className,
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
