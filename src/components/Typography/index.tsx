import React from "react";
import { editModeStyle } from "../../utils/style";

const H1 = (props: any) => <h1 {...props}>{props.children}</h1>;

const H2 = (props: any) => <h2 {...props}>{props.children}</h2>;

const H3 = (props: any) => <h3 {...props}>{props.children}</h3>;

const H4 = (props: any) => <h4 {...props}>{props.children}</h4>;

const H5 = (props: any) => <h5 {...props}>{props.children}</h5>;

const H6 = (props: any) => <h6 {...props}>{props.children}</h6>;

const P = (props: any) => <p {...props}>{props.children}</p>;

enum TypographyVariants {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
}

const TypographyOptions = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
};

export default function Typography(props: any) {
  if (props.variant) {
    const variant: TypographyVariants = props.variant;
    const Component = TypographyOptions[variant];

    return <Component style={editModeStyle()}>{props.children}</Component>;
  }

  return (
    <p className="text-center" style={editModeStyle()}>
      TYPOGRAPHY
    </p>
  );
}
