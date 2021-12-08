import { Props } from "./types";

export function Alert(props: Props): React.ReactElement {
    return (
        <div className="alert alert-warning" role="alert" style={{ marginTop: '30px' }}>
            {props.text}
        </div>
    )
}