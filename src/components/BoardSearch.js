import React, { useState } from "react";

// BS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BoardSearch({ handleSearch }) {
    // search
    const [input, setInput] = useState("");

    // input change
    const onChange = (e) => {
        setInput(e.target.value);
    };

    // click search
    const onClick = () => {
        handleSearch(input);
    };

    // Click Enter
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch(input);
        }
    };
    return (
        <div className="boardSearch">
            <div className="boardSearch__container">
                <Form.Group className="boardSearch__input">
                    <Form.Control
                        type="input"
                        value={input}
                        placeholder="검색"
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                </Form.Group>
                <Button className="boardSearch__button" onClick={onClick}>
                    검색하기
                </Button>
            </div>
        </div>
    );
}

export default BoardSearch;
