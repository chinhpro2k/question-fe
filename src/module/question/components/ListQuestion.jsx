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
            setListQuestionBackup(res.question)
        }else helper.toast("danger","error")

    }
    const [listQuestion,setListQuestion]=useState([]);
    const [listQuestionBackup,setListQuestionBackup]=useState([]);
    const [questionSearch,setQuestionSearch]=useState("");
    const handleSearch=async (e)=>{
        if (e.currentTarget.value!==""){
            setQuestionSearch(e.currentTarget.value);
            let arr =[...listQuestion];
            let arr2=arr.filter((item)=>{
                return item.title.toLowerCase().indexOf(questionSearch.toLowerCase())!==-1
            })
            setListQuestion(arr2);
        }else {
            setListQuestion(listQuestionBackup);
        }

    }
    return (
        <div id="list-question">
            <div className="header-list">
                <div className="title d-flex justify-content-center">
                    <h1>All question</h1>
                </div>
                <div className="search d-flex justify-content-center">
                    <input placeholder="search....." onChange={(e)=>handleSearch(e)}/>
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
                                return (
                                    <p>{value1}</p>
                                )

                                })}</td>
                                <td>
                                    <div className="d-flex">
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
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