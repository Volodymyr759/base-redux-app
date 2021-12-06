import { Props } from "./types";

export function Alert(props: Props): React.ReactElement {
    return (
        <div className="alert alert-warning" role="alert">
            {props.text}
        </div>
    )
}