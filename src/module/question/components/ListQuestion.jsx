import '../style/listQuestionStyle.scss'
import {useEffect, useState} from "react";
import request from "../../../service/request";
import helper from "../../../service/helper";

function ListQuestion() {
    useEffect(() => {
        getListQuestion().then();
    }, [])
    const getListQuestion = async () => {
        const res = await request.get('/question');
        if (res){
            setListQuestion(res.question);
        }else helper.toast("danger","error")

    }
    const [listQuestion,setListQuestion]=useState([]);
    return (
        <div id="list-question">
            <div className="header-list">
                <div className="title d-flex justify-content-center">
                    <h1>All question</h1>
                </div>
                <div className="search d-flex justify-content-center">
                    <input placeholder="search....."/>
                </div>
            </div>
            <div className="table-list">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                    </tr>
                    {listQuestion.map((value,i)=>{
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{value.title}</td>
                                <td>{value.answer.map((value1,i)=>{
                                return value1

                                })}</td>
                                <td>
                                    <div className="d-flex">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default ListQuestion;