import React from "react";
import './Button.css'

interface ButtonProps {
  /** Text for the button */
  label: string;
  /** Color of the button (default: `"primary"`)
    @example```
     <Button kind="primary" />
     <Button kind="destructive" />
   ```
  */
  kind?: "primary" | "destructive";
}

/** A simple button component
 * - Make a button
 * - Push the button
 * - See magic happen
 * 
 * [View in docs](https://fuse-docs.sqprod.co/components/glass/sq-button.html)
 * 
  @example```
    <Button kind="destructive" />
  ```
*/
export default function Button(props: ButtonProps) {
  const kindClass = (() => {
    switch (props.kind) {
      case "primary": return "Button--primary";
      case "destructive": return "Button--destructive";
      default: return "Button--primary";
    }
  })();

  return <button className={`Button ${kindClass}`}>{props.label}</button>;
}
