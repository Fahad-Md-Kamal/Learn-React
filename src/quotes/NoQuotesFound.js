import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <a href="ppp" className='btn'>
        Add a Quote
      </a>
    </div>
  );
};

export default NoQuotesFound;