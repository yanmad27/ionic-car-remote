import Button from '../elements/button/Button';
import './Remote.css';

interface Props {}

const Remote = (props: Props) => {
  return (
    <div className={'remote'}>
      <Button icon={1} label={'button 1'} />
      <Button icon={2} label={'button 2'} />
      <Button icon={3} label={'button 3'} />
      <Button icon={5} label={'button 5'} />
      <Button icon={6} label={'button 6'} />
      <Button icon={7} label={'button 7'} />
    </div>
  );
};
export default Remote;
