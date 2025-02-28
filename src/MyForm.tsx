import { FunctionComponent } from "react";

const MyForm: FunctionComponent = (props: any) => {
    return(
        <form>
            <label>
                {props.label}
                <input type="text"/>
            </label>
        </form>
    );
};

export default MyForm;