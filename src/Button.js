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

Button.protoType = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const count = 
        Number(!! primary) +
        Number(!! secondary) +
        Number(!! warning) +
        Number(!! success) +
        Number(!! danger) +

    if (count > 1) {
        return new Error(
            'Only one of primary, secondary, sucess, warning, danger can be true'
        );
    }
    },
};