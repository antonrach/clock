import React, { useEffect, useState } from 'react';

let flagDis = false;

const ResetButton = (props) => {

    const [classDisabled, setCD] = useState('disabled');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if(flagDis) {
            setDisabled(false);
            setCD('');
        } else {
            flagDis = true;
        }
    }, [props.disableButton])

    return (
        <div className="buttoncont">
            <button
                type="button"
                className={"reset-button " + classDisabled}
                onClick={() => {
                    props.resetLocation();
                    setCD('disabled');
                    setDisabled(true);
                }}
                //{...disabled}
                disabled={disabled}
            >
                Reset location
            </button>
        </div>
    )
}

export default ResetButton;
