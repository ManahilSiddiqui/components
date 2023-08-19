import className from 'classnames';


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
    const classess = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,


    });

    return (
        <div>
            <button className={classess}> {children} </button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, warning,success,danger}) => {
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