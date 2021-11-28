import {Route} from "react-router-dom";
import ListQuestion from "./ListQuestion";
import AddQuestion from "./AddQuestion";

function QuestionRouter() {
    return (
        <>
            <Route
                exact path='/'
                render={(props) => <ListQuestion {...props} />}/>
            <Route
                exact path='/add'
                render={(props) => <AddQuestion {...props} />}/>
        </>
    )
}

export default QuestionRouter;