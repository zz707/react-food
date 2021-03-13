import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleChangeInput = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={handleChangeInput}
                    value={value}
                />

                <button className="btn search-btn" onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
