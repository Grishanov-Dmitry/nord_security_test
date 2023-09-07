import { FormEvent, ReactElement, ReactNode } from "react";

interface IForm {
  className?: string;
  children: ReactNode;
}

export const Form = ({ className, children }: IForm): ReactElement => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <form className={className} onClick={handleSubmit}>
      {children}
    </form>
  );
};
