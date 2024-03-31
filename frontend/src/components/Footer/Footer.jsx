import React from "react";
import "./Footer.scss";

const Footer = (props) => {
    const textBoxStyle = {
        width: "100%",
        border: "1px solid #ccc", /* Add border for visual clarity */
        borderRadius: "5px" /* Set border radius for rounded corners */
    };
    return (
        <div className="footer">
            <form onSubmit={props.handleSubmit}>
                <div className="form">
                    <div className="textBox">
                        <input type="text" name="message" value={props.message} id="message" onChange={props.handleChange} style={textBoxStyle} />
                    </div>
                    <div className="submitBtn">
                        <input type="submit" value="send" style={{width: "40%"}} />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Footer;
