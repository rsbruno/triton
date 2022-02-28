import Link, { LinkProps } from "next/link";
import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type ButtonCustomLinkProps = LinkProps & {
  children: ReactNode | ReactNode[];
  NoAdaptativeOpacity?: boolean;
};

export function ButtonCustomLink({ children, NoAdaptativeOpacity, ...rest }: ButtonCustomLinkProps) {
  const [classesStyle, setClassesStyle] = useState<string>("");
  useEffect(() => {
    if (!NoAdaptativeOpacity) setClassesStyle([styles.link, styles.adatptativeOpacity].join(" "));
    else setClassesStyle(styles.link);
  }, [NoAdaptativeOpacity]);
  return (
    <Link {...rest}>
      <div className={classesStyle}>{children}</div>
    </Link>
  );
}
