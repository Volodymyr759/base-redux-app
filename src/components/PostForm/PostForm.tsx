import React from "react";
import { connect } from "react-redux";
import { showAlert } from "../../store/app/actions";
import { createPost } from "../../store/posts/actions";
import { IAppState, IPost } from '../../store/types';
import { Alert } from "../Alert/Alert";
import { Props, State } from './types';

class PostForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.title.length > 10) {
            return this.props.showAlert('Validation error')
        }
        const { title } = this.state
        const newPost: IPost = {
            title,
            id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({ title: '' })
    }

    changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState(prev => (
            {
                ...prev,
                ...{
                    [event.target.name]: event.target.value
                }
            }
        ))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Post Header</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                {this.props.alert ? <Alert text={this.props.alert} /> : null}
                <button
                    className="btn btn-success m-3"
                    type="submit"
                // disabled={this.state.title.length < 3 || this.state.title.length > 10}
                >
                    Create
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = (state: IAppState) => ({
    alert: state.app.alert,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)