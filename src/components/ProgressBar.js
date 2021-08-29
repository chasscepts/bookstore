import PropTypes from 'prop-types';

const bar = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  background: '#e8e8e8',
  borderRadius: '100%',
  clip: 'rect(0px, 4.25rem, 4.25rem, 2.125rem)',
};

const progress = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  borderRadius: '100%',
  clip: 'rect(0px, 2.125rem, 4.25rem, 0px)',
  background: '#307bbe',
};

const styles = {
  circular: {
    height: '4.25rem',
    width: '4.25rem',
    position: 'relative',
  },
  inner: {
    position: 'absolute',
    zIndex: 6,
    top: '50%',
    left: '50%',
    height: '3.4rem',
    width: '3.4rem',
    margin: '-1.7rem 0 0 -1.7rem',
    background: '#fff',
    borderRadius: '100%',
  },
  leftBar: {
    ...bar,
  },
  rightBar: {
    ...bar,
    transform: 'rotate(180deg)',
    zIndex: 3,
  },
  leftProgress: (angle) => ({
    ...progress,
    zIndex: 1,
    transform: `rotate(${angle}deg)`,
  }),
  rightProgress: (angle) => ({
    ...progress,
    transform: `rotate(${angle}deg)`,
  }),
};

export default function CircularProgressBar({ percent }) {
  const angle = (percent) => (180 * percent) / 50;

  let rotateLeft = 0;
  let rotateRight = 0;

  if (percent < 50) {
    rotateLeft = angle(percent);
  } else {
    rotateLeft = 180;
    rotateRight = 180 - angle(100 - percent);
  }

  return (
    <div style={styles.circular}>
      <div style={styles.inner} />
      <div style={styles.circle}>
        <div style={styles.leftBar}>
          <div style={styles.leftProgress(rotateLeft)} />
        </div>
        <div style={styles.rightBar}>
          <div style={styles.rightProgress(rotateRight)} />
        </div>
      </div>
    </div>
  );
}

CircularProgressBar.propTypes = {
  percent: PropTypes.number,
};

CircularProgressBar.defaultProps = {
  percent: 100,
};
