import React, { Component } from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault(); // Fixed typo
        this.props.OnItemAdded(this.state.label);
        this.setState({ label: '' }); // Clear the input after submitting
    };

    render() {
        return (
            <form className={"item-add-form d-flex"} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label} // Controlled input value
                />
                <button className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}
