import React, {useState} from "react";
import Diamic from "./diamic";
import request from "../../../service/request";
import helper from "../../../service/helper";

function AddQuestion() {
    const [form, setForm] = useState([]);
    const [question,setQuestion]=useState("")
    const handleRemoveField = (e, index) => {
        e.preventDefault();

        setForm((prev) => prev.filter((item) => item !== prev[index]));
    };
    const onChange = (index, event) => {
        event.preventDefault();
        event.persist();
        setForm((prev) => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return item;
                }

                return {
                    ...item,
                    [event.target.name]: event.target.value,
                };
            });
        });
    };
    const handleAddLink = (e) => {
        e.preventDefault();
        const inputState = {
            question: "",
            correct:0
        };
            setForm((prev) => [...prev, inputState]);
    };
    const handleChangeRadio=(e,index)=>{
        console.log(index+1)
        setForm((prev) => {
            return prev.map((item, i) => {
                if (i !== index) {
                    return {
                        ...item,
                        correct: 0,
                    }
                }

                return {
                    ...item,
                    correct: index+1,
                };
            });
        });
    }
    const handleSave=async ()=>{
        let questionForm={
            text:"",
            answer:[

            ],
            correctAnswer:0
        }
        questionForm.text=question;
        form.map((value,i)=>{
            questionForm.answer.push(value.question)
            if (value.correct!==0){
                questionForm.correctAnswer=value.correct;
            }
        })
        const res=await request.post('/question/add',{
            title:questionForm.text,
            correctAnswer:questionForm.correctAnswer,
            answer: questionForm.answer
        })
        if (res){
            helper.toast('success',res.message)
        }
    }
    return (
        <div id="add-question">
            <div className="header-list">
                <div className="title d-flex justify-content-center">
                    <h1>New question</h1>
                </div>
            </div>
            <div>
                <div className="input-text">
                    <p>Text</p>
                    <input placeholder="What does HTML stand for? " onChange={(e)=>setQuestion(e.currentTarget.value)}/>
                </div>
                <div className="input-answer">
                    <p>Answers</p>
                    {form.map((value,i)=>{
                        return(
                            <div className="d-flex align-items-center" key={i}>
                                <input type="text" name="question"  onChange={(e) => onChange(i, e)} value={value.question}/>
                               <div>
                                   <input type="radio" name="answer" onChange={(e)=>handleChangeRadio(e,i)}/>
                                   <span>correct</span>
                               </div>
                                <button onClick={(e)=>handleRemoveField(e,i)}>Remove</button>
                            </div>
                        )
                    })}
                    <div>
                        <button className="btn btn-primary mt-2" onClick={handleAddLink}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <button onClick={()=>handleSave()}>Save</button>
                </div>
            </div>
            {/*<Diamic/>*/}
        </div>
    )
}

export default AddQuestion;