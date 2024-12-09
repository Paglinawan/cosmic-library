import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  /** カラーを選択 */
  color?: "primary" | "secondary";
  /** サイズを選択 */
  size?: "md";
  /** タイプを選択 */
  type?: "filled" | "outlined";
  /** 無効化の有無を選択 */
  disabled?: boolean;
  /** ボタンテキストを入力 */
  label: string;
  /** クリックした後のアクション */
  onClick?: () => void;
}

export const Button = ({
  color = "primary",
  size = "md",
  type = "filled",
  disabled = false,
  onClick,
  label,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "inline-block py-2 px-4 rounded focus:tracking-wider transition-all",
        disabled
          ? "bg-button-disabled text-disabled"
          : {
              "bg-button-primary text-white hover:bg-button-primary-hover":
                type === "filled" && color === "primary",
              "bg-button-secondary text-white hover:bg-button-secondary-hover":
                type === "filled" && color === "secondary",
              "border border-current text-primary hover:text-primary-hover":
                type === "outlined" && color === "primary",
              "border border-current text-secondary hover:text-secondary-hover":
                type === "outlined" && color === "secondary",
            }
      )}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
};
