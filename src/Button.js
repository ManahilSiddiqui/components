import PropTypes from 'prop-types';


export default function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {

    return (
        <div>
            <button> {children} </button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: () => {
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            throw new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    }
};