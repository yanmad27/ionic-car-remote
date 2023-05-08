import './Button.css';
interface Props {
  icon: any;
  label?: string;
}

const Button = (props: Props) => {
  return (
    <div className={'button'}>
      <div className={'button__btn'}>{props.icon}</div>
      {props.label && <div className={'button__label'}>{props.label}</div>}
    </div>
  );
};
export default Button;
