import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

class CopyCat extends React.Component {
    render() {
        const { copying, toggleTape, value, handleChange, name, images } = this.props;

        return (
            <div style={styles.divStyles}>
                <h1 style={{ marginBottom: 80 }}>Copy Cat {name || 'Tom'}</h1>
                <input type="text" value={value} onChange={handleChange} />
                <img 
                    style={styles.imgStyles}
                    alt='cat'
                    src={copying ? images.copycat : images.quietcat}
                    onClick={toggleTape}
                />
                <p>{copying && value}</p>
            </div>
        );
    }
}

CopyCat.propTypes = {
    copying: PropTypes.bool.isRequired,
    toggleTape: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    images: PropTypes.object.isRequired,
};

export default CopyCat;
