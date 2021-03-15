import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onclick }) => (
  <button type="button" onClick={onclick} className={s.btnLoadMore}>
    Load more
  </button>
);

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default Button;
