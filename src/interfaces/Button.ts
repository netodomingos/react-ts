export interface IButton {
  title: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}